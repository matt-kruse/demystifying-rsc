import ClientComponent from "./ClientComponent";
import ObserverWindow, {filterClientComponent} from "@/components/observer/RSCObserver";
import FileSource from "@/components/FileSource";

export default ()=><>
  <h2>Disabling SSR for Client Components</h2>
  <ClientComponent/>
  <p>The above component is a client component that does not trigger the hydration errors. The source code is below:</p>
  <FileSource filepath={"/app/client-components/no-ssr/ClientComponent.js"}/>

  <h3>Key Points:</h3>
  <ol>
    <li>The component uses a local state variable to track whether it's running on the server or not</li>
    <li>By default, it is true. When it runs on the server, it renders with isServer==true</li>
    <li>useEffect does not run in SSR. So the setServer() is never called during SSR. isServer remains true.</li>
    <li>When the component first renders on the browser, isServer==true because useEffect hasn't run yet.</li>
    <li>The output in the client will match the output on the server (empty string), so the hydration error is not triggered.</li>
    <li>After initial render, useEffect is triggered and setServer is called, setting isServer to undefined, which evaluates to false.</li>
    <li>Since state has changed, the component renders again, this time displaying the Date.now() output</li>
  </ol>

  <p>This approach lets the <b>component</b> control how it handles SSR.</p>

  <h3>'use client'</h3>

  <p>Let's revisit this - <b>What does this really mean?</b></p>
  <ul>
    <li>It tells the bundler to output this code as a separate file with its own url so it can be loaded lazily in the browser.</li>
    <li>It tells the compiler when this code is needed, it should add code to load the js file for this component.</li>
    <li>It tells RSC that the Virtual DOM it generates should contain a placeholder reference to this Client Component, rather than the component's html output.</li>
    <li>It still runs on the server!</li>
    <li>'use client' does not disable SSR!</li>
  </ul>

  <p>The two lines below are part of the RSC output, and show that the Client Component is defined as an external include file, and how it is referenced in the Virtual DOM Tree.</p>

  <p>But what if a reusable Client Component doesn't do this itself, and causes hydration errors because of SSR?</p>

  <p><a className={"button"} href={"/client-components/next-dynamic/"}>Disabling Component SSR Server-Side</a></p>

</>
