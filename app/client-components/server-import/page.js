import {ClientComponent} from "./ClientComponent";
import {ServerComponent} from "./ServerComponent";
import ObserverWindow, {filterClientComponent, filterRawEvents} from "@/components/observer/RSCObserver";
import FileSource from "@/components/FileSource";
import ViewSource from "@/components/ViewSource";

export default ()=><>
  <h2>Importing Server Components into Client Components</h2>
  <p>Okay, pay attention. This is where people get confused.</p>
  <ol>
    <li>Client Components can import "Server Components" as long as they can <b>also</b> run in the browser (they don't use Server-Only features).</li>
    <li>Client Components <b>cannot</b> import "Server Components" that use Server-Only features.</li>
    <li>This is because <b>any Component imported into a Client Component is forced to be treated as a Client Component.</b></li>
  </ol>

  <h3>Example of #1</h3>
  <ServerComponent/>
  <ClientComponent>
    <ServerComponent/>
  </ClientComponent>
  <p>Above, the first box is the ServerComponent rendered server-side, as a RSC. The second box is the ClientComponent, which imports the same ServerComponent and renders it client-side.</p>
  <p>If you <ViewSource highlight={"Server Component content"}/> you will see that both exist in the generated html, because the Client Component was SSR'd. But the Virtual DOM contains a reference to the client component for the second box.</p>
  <FileSource title={"ClientComponent.js"} filepath={"/app/client-components/server-import/ClientComponent.js"}/>
  <FileSource title={"ServerComponent.js"} filepath={"/app/client-components/server-import/ServerComponent.js"}/>

  <p>Here, the "Server Component" doesn't do anything that can't also run in the browser. It doesn't use the filesystem, connect to a database, etc.</p>
  <p>It doesn't have a 'use client' directive at the top, but because it's imported into a Client Component, it becomes a Client Component.</p>
  <p>So it doesn't really make sense to say ServerComponent.js "IS A" Server Component. It's neither and it's both. It's executed "AS A" Server Component, and it's also executed "AS A" Client Component.</p>

  <h4>So There Are No "React Server Components"?</h4>
  <p>No, not literally. There is no declaration like 'use client' at the top of a file that says it must be run on the server. There is no equivalent 'use server'. (Server Functions use the 'use server' syntax, but that is different. More on that later.)</p>
  <p>A component is run "AS A" RSC. Some components can <b>only</b> be run "AS A" RSC because they use server-only functions. Yes, in some sense, that could mean it "IS A" RSC. The terminology is a bit ambiguous, which causes problems.</p>
  <p>Don't think of RSC as defining a type of thing. Think of it as the label of an environment where React can be run on a server.</p>

  <h3>Example of #2</h3>
  <p>Slightly modified versions of the components above demonstrate what happens when you try to import a server-only Component into a Client Component.</p>
  <FileSource title={"ClientComponentImportServerOnly.js"} filepath={"/app/client-components/server-import/ClientComponentImportServerOnly.js"}/>
  <FileSource title={"ServerOnlyComponent.js"} filepath={"/app/client-components/server-import/ServerOnlyComponent.js"}/>
  <p>The ServerOnlyComponent above uses a module called 'server-only' which will throw an error during the build process if it detects that this component is being imported into a Client Component.</p>
  <p>Although there is no top-level 'use server' directive, this serves that purpose. If we try to use the Client Component:</p>
  <pre className={"code"}>&lt;ClientComponentImportServerOnly/&gt;</pre>
  <p>then we get the following error:</p>
  <img src={"/import-error.png"}/>

  <h3>New Mental Model</h3>
  <img src={"/mental-model-client-2.png"}/>
  <ul>
    <li>Server Components can be the {"{children}"} of Client Components. The Client Component is just a box. We can construct the box without knowing what is going inside it.</li>
    <li>When a Client Component "imports" another Component, it is effectively saying: "I need this other piece to build the box".</li>
    <li>The box is being built in the browser (it's a Client Component), so all the pieces of the box need to be in the browser.</li>
    <li>So, any components imported by a Client Component must be treated as a Client Component.</li>
    <li>If I need nails to construct the Client Component box, those nails need to be with me, in the browser, when I'm constructing the box. They can't stay in China (on the server).</li>
    <li>Putting something in the box is different than using something to construct the box itself!</li>
  </ul>

  <h3>The One Rule To Remember</h3>
  <p>The deciding factor for what is treated as a Client Component is what is <b>imported</b> in the code, not how components are <b>nested</b> in the JSX.</p>

  <p><a className={"button"} href={"/"}>async Server Components</a></p>

</>
