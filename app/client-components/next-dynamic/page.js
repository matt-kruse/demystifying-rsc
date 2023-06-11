import {ClientComponentNoSSR} from "./ClientComponentSSRWrapper";
import ObserverWindow, {filterClientComponent} from "@/components/observer/RSCObserver";
import FileSource from "@/components/FileSource";

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

  <p>(Much more to add here!!!)</p>

  <p><a className={"button"} href={"/client-components/details/"}>Client Component Details</a></p>

</>
