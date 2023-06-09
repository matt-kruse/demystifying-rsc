const pretty = require('pretty');
const escape = require('escape-html');

export async function GET(request, {params}) {
  const baseUrl = request.nextUrl.origin;
  const path = '/' + params.path.join('/');
  const res = await fetch(baseUrl + path);
  const highlight = request.nextUrl.searchParams.get('highlight');

  let html = await res.text();
  html = escape(pretty(html));
  if (highlight) {
    html = html.replaceAll(`highlight=${highlight}`,``);
    const highlights = highlight.split('||');
    highlights.forEach(h=>{
      html = html.replaceAll(h,`<span class="h">$&</span>`);
    })
  }
  let responseHtml = `<html>
    <style>html,body{margin:0;padding:0;}.h{background-color:yellow;font-weight:bold;}</style>
    <body>
      <div style="width:100vw;height:100vh;"><pre>${html}</pre></div>
    </body>
  </html>`;

  return new Response(responseHtml, {
    status: 200,
    headers: { 'content-type': 'text/html' }
  });
}