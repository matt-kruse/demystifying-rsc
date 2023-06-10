import ClientComponent from "./ClientComponent";
import ViewSource from "@/components/ViewSource";
import ObserverWindow, {filterRawEvents, filterVirtualDomForClientComponent} from "@/components/observer/RSCObserver";
import FileSource from "@/components/FileSource";

export default ()=><>
  <h2>Client Components</h2>
  <p>If components require interactivity or hooks like useState, or are basically any "typical" React component, then they expect to run in the browser, not on the server.</p>
  <p>The default with RSC is to treat components as server components, and you must opt into treating them as client components that run in the browser.</p>
  <p>This differs with the previous /pages directory in NextJS, for example, which defaulted to client components and you opted into treating something as a server component by defining a getServerProps() method etc.</p>

  <h3>Example Client Component Output</h3>
  <ClientComponent/>

  <h3>Client Component Source</h3>
  <FileSource filepath={"/app/client-components/ClientComponent.js"}/>

  <p>This component was delivered as javascript to the browser, where it ran, generated html, and then that html was inserted into the DOM.</p>

  <p>But if you <ViewSource highlight={"Client Component HTML"}/> you will see that static html was returned from this client component. Why?</p>
  <p>Because by default, client components are pre-rendered on the server, and their html is included in the static output. This is called SSR and has been around for a while. It's different than RSC.</p>
  <p>If you look in your browser console, you will see a log statement showing that the client component DID run.</p>
  <p>So let's dissect what just happened.</p>

  <p>(More to do here...)</p>
  <ObserverWindow inline={true} filter={filterRawEvents}/>



  <a className={"button"} href={"/client-components/hydration-failed/"}>Hydration Failure</a>
</>
