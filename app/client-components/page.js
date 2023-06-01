import ClientComponent from "./ClientComponent";

export default ()=><>
  <blockquote>
    <p>This text is generated server-side.</p>
    <ClientComponent/>
  </blockquote>
  <p>If you <b>view source</b> on this page, you'll see both of the text blocks above as generated html.</p>
  <p>But there are several things we need to address on this simple page:</p>
  <ol>
    <li>
      How/why did the client component generate static html content delivered in the response?<br/>
      Because <b>client-components are pre-rendered on the server</b>. This is <b>SSR</b>. There are ways to control this, but by default client components will pre-render on the server at the time of request.
    </li>
    <li>
      Why is the client component datestamp different in the source vs what I see on the screen?<br/>
      Because the component rendered on the server, the output was delivered, and then it was re-rendered in the browser and updated. This process is called <b>hydration</b>.
    </li>
    <li>
      Why did React throw an error in the browser console?<br/>
      <b>Error: Text content does not match server-rendered HTML.</b><br/>
      <b>Error: Hydration failed because the initial UI does not match what was rendered on the server.</b><br/>
      Remember that RSC generates both static content and a virtual DOM describing the DOM it generated. After the page loads, the actual DOM is compared to what RSC thinks it rendered.<br/>
      This error is thrown because the client-side component has already rendered a different datestamp than was the server delivered. This confuses React and the warning is thrown because it doesn't know what happened.
    </li>
    <li>
      Why did everything on the screen flash with red borders?<br/>
      Because of the hydration error, React got confused and needed to reconcile the difference between the static content and its virtual DOM. It throws this error:<br/>
      <b>There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.</b><br/>
      Since the Virtual DOM that was also sent down contains all the static content as well as the client components, React decides to completely re-render the document from the Virtual DOM.<br/>
      This is made obvious by the red outlines highlighting every new element that was inserted.
    </li>
  </ol>

  <a className={"button"} href={"/client-components/no-ssr/"}>Next: Disabling SSR for Client Components</a>
</>
