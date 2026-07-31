import { renderToString } from '@gcds-core/components/hydrate';

export async function onRequest(context, next) {
  const response = await next();
  const html = await response.text();

  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('text/html')) {
    return response;
  }

  const ssrResult = await renderToString(html, {
    prettyHtml: true,
    removeHtmlComments: true,
  });

  return new Response(ssrResult.html, {
    status: response.status,
    headers: response.headers,
  });
}
