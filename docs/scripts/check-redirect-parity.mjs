#!/usr/bin/env node
/**
 * check-redirect-parity.mjs
 *
 * Pre-cutover check: every URL the live site serves today should still resolve
 * on the new site. Anything that doesn't needs an Amplify custom_rule before
 * the domains are switched over, or inbound links and search results break.
 *
 * Reads the live site's sitemap (or a file of URLs), requests each path against
 * the new origin, and classifies the result.
 *
 *   node check-redirect-parity.mjs --old https://design-system.canada.ca \
 *                                  --new http://localhost:4322/
 *
 * Run it once per language — the two Eleventy apps have separate sitemaps:
 *
 *   node check-redirect-parity.mjs --old https://systeme-design.canada.ca \
 *                                  --new http://localhost:4322/
 *
 * Options:
 *   --old <origin>      Live site. Its sitemap supplies the URL list.
 *   --new <origin>      Origin to test against.
 *   --sitemap <url>     Override the sitemap URL. Default: <old>/sitemap-index.xml,
 *                       falling back to <old>/sitemap.xml.
 *   --urls <file>       Newline-delimited URLs or paths to add to the list — use
 *                       this to fold in top pages from analytics.
 *   --out <file.csv>    Write every result as CSV. Default: parity-report.csv
 *   --concurrency <n>   Parallel requests. Default 8.
 *   --timeout <ms>      Per-request timeout. Default 15000.
 *   --limit <n>         Only check the first N URLs (smoke run).
 *   --notfound <path>   Path the site's 404 rule lands on. Default /404. Amplify's
 *                       "404" rule REDIRECTS here and this page returns HTTP 200,
 *                       so without this a missing page looks like a healthy
 *                       redirect. Set to '' to disable the check.
 *
 * Exit code is 1 if anything needs attention, so it can gate a pipeline.
 */

const CATEGORIES = {
  OK: 'resolves at the same path',
  REDIRECT: 'redirects to a different path — a rule already covers this',
  SLASH: 'only resolves with the trailing slash flipped',
  MISSING: 'not found — NEEDS A REDIRECT',
  LOOP: 'redirect loop — NEEDS A REDIRECT (and see note below)',
  ERROR: 'request failed — check manually',
};

function parseArgs(argv) {
  const args = {
    concurrency: 8, timeout: 15000, out: 'parity-report.csv', notfound: '/404',
    old: null, new: null, sitemap: null, urls: null, limit: Infinity,
  };
  for (let i = 2; i < argv.length; i++) {
    const key = argv[i].replace(/^--/, '');
    if (!(key in args)) { console.error(`Unknown option: ${argv[i]}`); process.exit(2); }
    const value = argv[++i];
    args[key] = ['concurrency', 'timeout', 'limit'].includes(key) ? Number(value) : value;
  }
  if (!args.old || !args.new) {
    console.error('Both --old and --new are required. See the header of this file.');
    process.exit(2);
  }
  args.old = args.old.replace(/\/$/, '');
  args.new = args.new.replace(/\/$/, '');
  return args;
}

async function get(url, timeout) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(url, { signal: controller.signal, redirect: 'manual' });
  } finally {
    clearTimeout(timer);
  }
}

/** <loc> values out of a sitemap or sitemap index. */
function extractLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

async function collectSitemapUrls(args) {
  const candidates = args.sitemap
    ? [args.sitemap]
    : [`${args.old}/sitemap-index.xml`, `${args.old}/sitemap.xml`];

  for (const candidate of candidates) {
    let res;
    try { res = await get(candidate, args.timeout); } catch { continue; }
    if (!res.ok) continue;

    const xml = await res.text();
    const locs = extractLocs(xml);
    const isIndex = /<sitemapindex/i.test(xml);
    if (!isIndex) {
      console.log(`Sitemap: ${candidate} (${locs.length} URLs)`);
      return locs;
    }

    console.log(`Sitemap index: ${candidate} (${locs.length} child sitemaps)`);
    const all = [];
    for (const child of locs) {
      const childRes = await get(child, args.timeout);
      if (!childRes.ok) { console.warn(`  ! could not read ${child}`); continue; }
      const childUrls = extractLocs(await childRes.text());
      console.log(`  ${child} — ${childUrls.length} URLs`);
      all.push(...childUrls);
    }
    return all;
  }
  throw new Error(`No sitemap found. Tried: ${candidates.join(', ')}`);
}

function toPath(raw) {
  try { return new URL(raw).pathname; } catch { return raw.startsWith('/') ? raw : `/${raw}`; }
}

function flipSlash(path) {
  return path.endsWith('/') ? path.replace(/\/$/, '') : `${path}/`;
}

/** Follow redirects by hand so loops and the final path are both visible. */
async function resolve(origin, path, timeout, maxHops = 10) {
  const seen = new Set();
  let current = path;
  for (let hop = 0; hop < maxHops; hop++) {
    if (seen.has(current)) return { status: 'loop', path: current, hops: hop };
    seen.add(current);

    const res = await get(origin + current, timeout);
    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get('location');
      if (!location) return { status: res.status, path: current, hops: hop };
      current = toPath(new URL(location, origin + current).href);
      continue;
    }
    return { status: res.status, path: current, hops: hop };
  }
  return { status: 'loop', path: current, hops: maxHops };
}

async function check(args, path) {
  try {
    const result = await resolve(args.new, path, args.timeout);

    if (result.status === 'loop') return { path, category: 'LOOP', detail: `loops at ${result.path}` };
    if (result.status === 200) {
      if (result.path === path) return { path, category: 'OK', detail: '' };
      // Amplify's 404 rule is a redirect to a page that answers 200, so landing
      // on the error page is a miss, not a successfully handled redirect.
      if (args.notfound && result.path.replace(/\/$/, '') === args.notfound.replace(/\/$/, '')) {
        return { path, category: 'MISSING', detail: `→ ${result.path} (error page)` };
      }
      return { path, category: 'REDIRECT', detail: `→ ${result.path}` };
    }
    if (result.status === 404 || result.status === 410) {
      const alt = await resolve(args.new, flipSlash(path), args.timeout);
      if (alt.status === 200) return { path, category: 'SLASH', detail: `→ ${alt.path}` };
      return { path, category: 'MISSING', detail: `HTTP ${result.status}` };
    }
    return { path, category: 'ERROR', detail: `HTTP ${result.status}` };
  } catch (err) {
    return { path, category: 'ERROR', detail: err.name === 'AbortError' ? 'timeout' : err.message };
  }
}

async function pool(items, size, worker, onProgress) {
  const results = new Array(items.length);
  let next = 0, done = 0;
  await Promise.all(
    Array.from({ length: Math.min(size, items.length) }, async () => {
      while (true) {
        const i = next++;
        if (i >= items.length) return;
        results[i] = await worker(items[i]);
        onProgress(++done, items.length);
      }
    })
  );
  return results;
}

async function main() {
  const args = parseArgs(process.argv);
  console.log(`old: ${args.old}\nnew: ${args.new}\n`);

  const urls = [];
  try {
    urls.push(...(await collectSitemapUrls(args)));
  } catch (err) {
    console.warn(`Sitemap: ${err.message}`);
    if (!args.urls) process.exit(2);
  }

  if (args.urls) {
    const { readFile } = await import('node:fs/promises');
    const extra = (await readFile(args.urls, 'utf8')).split('\n').map((l) => l.trim()).filter(Boolean);
    console.log(`Extra URLs from ${args.urls}: ${extra.length}`);
    urls.push(...extra);
  }

  const paths = [...new Set(urls.map(toPath))].sort().slice(0, args.limit);
  if (!paths.length) { console.error('No URLs to check.'); process.exit(2); }
  console.log(`\nChecking ${paths.length} unique paths against ${args.new}\n`);

  const results = await pool(paths, args.concurrency, (p) => check(args, p), (done, total) => {
    if (done % 25 === 0 || done === total) process.stdout.write(`  ${done}/${total}\r`);
  });
  process.stdout.write('\n');

  const byCategory = {};
  for (const r of results) (byCategory[r.category] ??= []).push(r);

  console.log('\n=== Summary ===');
  for (const name of Object.keys(CATEGORIES)) {
    const rows = byCategory[name] ?? [];
    console.log(`  ${String(rows.length).padStart(5)}  ${name.padEnd(9)} ${CATEGORIES[name]}`);
  }

  for (const name of ['MISSING', 'LOOP', 'SLASH', 'ERROR']) {
    const rows = byCategory[name] ?? [];
    if (!rows.length) continue;
    console.log(`\n=== ${name} (${rows.length}) ===`);
    for (const r of rows) console.log(`  ${r.path}${r.detail ? `  ${r.detail}` : ''}`);
  }

  const { writeFile } = await import('node:fs/promises');
  const csv = ['path,category,detail', ...results.map((r) => `"${r.path}","${r.category}","${r.detail}"`)];
  await writeFile(args.out, csv.join('\n') + '\n');
  console.log(`\nFull results: ${args.out}`);

  const broken = (byCategory.MISSING?.length ?? 0) + (byCategory.LOOP?.length ?? 0)
    + (byCategory.SLASH?.length ?? 0) + (byCategory.ERROR?.length ?? 0);
  if (broken) {
    console.log(`\n${broken} path(s) need attention. Each MISSING or LOOP path needs a`);
    console.log('custom_rule on the Astro app in amplify.tf before cutover.');
    console.log('\nNote: until the /404 page ships, a missing page shows up as LOOP rather');
    console.log('than MISSING — the 404 rule currently redirects to a target that 404s.');
  }
  process.exit(broken ? 1 : 0);
}

main().catch((err) => { console.error(err); process.exit(2); });
