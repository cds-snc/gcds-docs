const fs = require('fs');
const path = require('path');

// Regex for the opening article block
const openingArticleRegex = /<article class="bg-full-width bg-primary text-light pt-600 pb-300 my-600">\s*<h2 class="mt-0">Composants connexes<\/h2>/g;

function processUseCaseFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace opening <article> block
  content = content.replace(openingArticleRegex, `<hr/>

## Composants connexes`);

  // Replace closing </article> based on text in following lines
  content = content.replace(/<\/article>/g, (match, offset) => {
    const after = content.slice(offset + match.length);
    const linesAfter = after.split('\n');

    const hasNonEmptyLine = linesAfter.some(line => line.trim().length > 0);

    return hasNonEmptyLine ? '<hr class="mt-600" />' : '';
  });

  // Remove class="link-light"
  content = content.replace(/ class="link-light"/g, '');

  fs.writeFileSync(filePath, content);
  console.log(`Updated: ${filePath}`);
}

function walkDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkDirectory(fullPath);
    } else if (entry.isFile() && entry.name === 'cas-dutilisation.md') {
      processUseCaseFile(fullPath);
    }
  }
}

// Start from current directory
walkDirectory('./');
