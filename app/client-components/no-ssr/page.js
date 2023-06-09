import ClientComponent from "./ClientComponent";
import fs from 'fs';
import path from 'path';
import ObserverWindow, {filterClientComponent} from "@/components/observer/RSCObserver";

const source = fs.readFileSync(path.join(process.cwd(),'/app/client-components/no-ssr/ClientComponent.js'),'utf-8');

export default ()=><>
  <ClientComponent/>
  <p>The above component is a client component that does not trigger the hydration errors. The source code is below:</p>
  <pre className={"code"}>{source}</pre>

  <h3>Key Points:</h3>
  <ol>
    <li>The component uses a local state variable to track whether it's running on the server or not</li>
    <li>By default, it is true. When it runs on the server, it renders with isServer==true</li>
    <li>useEffect does not run in SSR. So the setServer() is never called during SSR.</li>
    <li>When the component first renders on the browser, isServer==true because useEffect hasn't run yet.</li>
    <li>The output in the client will match the output on the server, so the hydration error is not triggered.</li>
    <li>After initial render, setServer is called in useEffect, setting isServer to undefined, which evaluates to false.</li>
    <li>The component renders again, this time displaying the Date.now() output</li>
  </ol>

  <p>This approach lets the <b>component</b> control how it handles SSR.</p>

  <h3>'use client'</h3>

  <p><b>What does this really mean?</b></p>
  <ul>
    <li>It tells the bundler to output this code as a separate file with its own url so it can be loaded lazily.</li>
    <li>It tells the compiler when this code is needed, and it should add code to load the js file for this component.</li>
    <li>It tells RSC to SSR the component but leave a placeholder in the virtual DOM for the client-side component.</li>
  </ul>

  <p>The two lines below are part of the RSC output, and show that the Client Component is defined as an external include file, and how it is referenced in the Virtual DOM Tree.</p>

  <p>(More to do here)</p>

  <ObserverWindow inline={true} filter={filterClientComponent}/>

  <p><a className={"button"} href={"/client-components/next-dynamic/"}>Next: Disabling SSR Server-Side</a></p>

</>
