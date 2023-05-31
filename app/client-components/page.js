import ClientComponent from "@/app/client-components/ClientComponent";

export default ()=><>
  <blockquote>
    <p>This text is generated server-side.</p>
    <ClientComponent/>
  </blockquote>
  <p>If you view source on this page, you'll see both of the text blocks above as generated html.</p>
  <p>But wait, how/why did the client component generate static html content delivered in the response?</p>
  <p>Because <b>client-components are pre-rendered on the server</b>. This is <b>SSR</b>. There are ways to control this, but by default client components will pre-render on the server at the time of request.</p>
</>
