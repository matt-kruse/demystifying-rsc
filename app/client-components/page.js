import {ClientComponent} from "./ClientComponent";
import ViewSource from "@/components/ViewSource";
import ObserverWindow, {
  filterRawEvents,
  filterVirtualDomForClientComponent,
  filterVirtualDomForClientComponentLimited
} from "@/components/observer/RSCObserver";
import FileSource from "@/components/FileSource";

export default ()=><>
  <h2>Client Components</h2>
  <p>If components require interactivity or hooks like useState, or are basically any "typical" React component, then they expect to run in the browser, not on the server.</p>
  <p>The default with RSC is to treat components as server components, and you must opt into treating them as client components that run in the browser.</p>
  <p>This differs with the previous /pages directory in NextJS, for example, where everything is a client component and you opted into server-side behavior by defining a getServerProps() method etc to control SSR.</p>

  <h3>Example Client Component Output</h3>
  <ClientComponent/>

  <h3>Client Component Source</h3>
  <FileSource filepath={"/app/client-components/ClientComponent.js"}/>

  <p>This component was delivered as javascript to the browser where it ran, generated html, and then that html was inserted into the DOM.</p>

  <p>But if you <ViewSource highlight={"Client Component HTML"}/> you will see that static html was returned from this client component. Why would that happen if it's a client component?</p>
  <p>Because by default, client components are pre-rendered on the server, and their html is included in the static output. This is called SSR and has been around for a while. It's different than RSC.</p>
  <p>If you look in your browser console, you will see a log statement showing that the client component DID run.</p>
  <code>"Running client component"</code>
  <p>So let's dissect what just happened:</p>

  <h3>Virtual DOM</h3>
  <p>The relevant pieces of the React Virtual DOM for the client component are below.</p>
  <p>The 1st line is a reference to the JS file that contains the component.</p>
  <p>The 2nd line is the entire Virtual DOM.</p>
  <ObserverWindow inline={true} filter={filterVirtualDomForClientComponent}/>

  <p>Below we have chopped down the long Virtual DOM line to show the important part:</p>
  <ObserverWindow inline={true} filter={filterVirtualDomForClientComponentLimited} escapeHtml={false}/>
  <p>The highlighted part of the second row is a reference of the form $L[id] where the Client Component should be in the DOM (right after the header, see above in the page). This tells React to resolve the [id] line and if/when it exists, execute the component and insert its output in this position in the DOM.</p>

  <h3>'use client'</h3>
  <p>The reason that this component was split into a separate js file and inserted as a reference in the Virtual DOM is because this is a Client Component.</p>
  <p>The <code style={{"display":"inline"}}>'use client'</code> directive at the top of the Component's source file is what told the bundler and RSC to treat it that way.</p>
  <p>More on that later.</p>

  <h3>Hydration</h3>
  <p>As React reconciles the DOM created from the static html with its Virtual DOM, it recognizes that part of the static DOM was SSR output from a Client Component. It knows this because the $L[id] reference in the Virtual DOM is in place of the html in the static DOM.</p>
  <p>At this point, React renders the Client Component. The resulting Client Component html is inserted into the DOM where the static html is currently.</p>
  <p>This is called Hydration - turning static SSR html into dynamic client-side (CSR) html.</p>

  <h3>Current Mental Model</h3>
  <p>At this point, React also compares the SSR html to the CSR html, and expects them to be identical. This is because it assumes the initial state of the component as rendered on the server should match the initial state of the component as rendered in the browser.</p>

  <p><img src={"/mental-model-4.png"}/></p>

  <p>But they aren't <b>always</b> the same...</p>

  <a className={"button"} href={"/client-components/hydration-failed/"}>Hydration Failure</a>

</>
