import {ClientComponentNoSSR} from "./ClientComponentSSRWrapper";
import ObserverWindow, {filterClientComponent, filterRawEvents} from "@/components/observer/RSCObserver";
import FileSource from "@/components/FileSource";
import ViewSource from "@/components/ViewSource";

export default ()=><>
  <h2>Disabling Component SSR Server-Side</h2>
  <ClientComponentNoSSR/>
  <p>The above component is a client component that does not trigger the hydration errors - <b>because it never ran on the server!</b> Did you notice how it "popped in"? Reload to see it again - remember, the red outline highlights elements that are dynamically inserted into the DOM. That's because there was no initial html rendered and delivered to the browser. After the page loaded, the Client Component loaded and rendered itself.</p>
  <p>The source doesn't use the state tricks in the previous example to ensure that the SSR output matches the CSR output:</p>
  <FileSource title={"ClientComponent.js"} filepath={"/app/client-components/next-dynamic/ClientComponent.js"}/>

  <h3>import with next/dynamic</h3>
  <p>The difference here is that we are importing the component in a different way in our RSC code. We've created a wrapper component around the Client Component that imports it using next/dynamic:</p>
  <FileSource title="ClientComponentSSRWrapper.js" filepath={"/app/client-components/next-dynamic/ClientComponentSSRWrapper.js"}/>

  <h3>Key Points</h3>
  <ol>
    <li>next/dynamic is just a composite of React.lazy() and &lt;Suspense&gt;</li>
    <li>The second options argument to dynamic() set ssr:false to tell the server to skip this component entirely when rendering html.</li>
  </ol>

  <h3>Generated HTML</h3>
  <p>So if the component doesn't SSR, what is put in its place in the generated static html?</p>
  <p>If you <ViewSource highlight="/<!--\$!-->[\s\S]*?<!--\/\$-->/"/> of this page, you'll see the static html that gets generated in place of where the Client Component will evenually be rendered:</p>

  <pre className={"code wrap"}>&lt;!--$!--&gt;&lt;template data-dgst="DYNAMIC_SERVER_USAGE" data-msg="DYNAMIC_SERVER_USAGE" data-stck="
    at ServerComponentWrapper (C:\workspace\demystifying-rsc\node_modules\next\dist\server\app-render\create-server-components-renderer.js:78:31)
    at InsertedHTML (C:\workspace\demystifying-rsc\node_modules\next\dist\server\app-render\app-render.js:835:33)"&gt;&lt;/template&gt;&lt;!--/$--&gt;</pre>

  <p>When React reconciles the static html above with the Virtual DOM - which contains a reference to the Client Component - it doesn't generate a hydration error because the above content is a valid placeholder and it knows that a Client Component will go there.</p>

  <p>When the Client Component generates its html, that html entirely replaces the content above in the document.</p>

  <h3>The Virtual DOM for Client-Only Components</h3>
  <p>The Virtual DOM representation of this page has more content and a few new things, like $Sreact.suspense:</p>
  <ObserverWindow filter={filterRawEvents} inline={true}/>
  <p>What's going on here?</p>
  <p>Let's dig in a little more...</p>

  <p><a className={"button"} href={"/client-components/details/"}>Client Component Details</a></p>

</>
