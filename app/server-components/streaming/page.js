import {Suspense} from "react";
import Delay from '../Delay';
import ObserverWindow, {filterClientComponent, filterRawEvents} from "@/components/observer/RSCObserver";
import FileSource from "@/components/FileSource";
import ViewSource from "@/components/ViewSource";
import StreamWatcher from "./StreamWatcher";
export const revalidate=0;

export default ()=><>
  <h2>Streaming with Server-Side Suspense</h2>

  <p>It may take several reloads of this page to see what is happening!</p>

  <p>This box has two nested RSCs that each delay for 3 seconds, creating a waterfall. One &lt;suspense&gt; wraps them both, so it takes 6 seconds for all to resolve, and then they both appear.</p>
  <pre className={"tight gray"}>&lt;suspense&gt;</pre>
  <Suspense fallback={<div className="box">Loading both components (6 seconds)...</div>}>
    <Delay seconds={3}>
      <Delay seconds={3}/>
    </Delay>
  </Suspense>
  <pre className={"tight gray"}>&lt;/suspense&gt;</pre>

  <div>This is the same structure, but a &lt;suspense&gt; wraps both the outer and inner boxes. As soon as the outer suspense resolves, it renders itself and then the inner suspense takes over while the inner component waits.</div>
  <pre className={"tight gray"}>&lt;suspense&gt;</pre>
  <Suspense fallback={<div className="box">Loading outer component (3 seconds)...</div>}>
    <Delay seconds={3}>
      <pre className={"tight gray"}>&lt;suspense&gt;</pre>
      <Suspense fallback={<div className="box">Loading inner component (3 seconds)...</div>}>
        <Delay seconds={3}/>
      </Suspense>
      <pre className={"tight gray"}>&lt;/suspense&gt;</pre>
    </Delay>
  </Suspense>
  <pre className={"tight gray"}>&lt;/suspense&gt;</pre>

  <h3>Key Points</h3>
  <ul>
    <li>&lt;suspense&gt; in RSC causes the fallback to be immediately rendered, just like CSR. This is different than the previous example, where the entire page waited to be delivered until all Promises resolved.</li>
    <li>Notice that the delivery of the page is left open until the RSCs resolve. The page is still "loading" in your browser for a full 6 seconds because all the content has not yet been delivered.</li>
    <li>As Promises resolve on the server-side, updated content is delivered to the page and immediately shown</li>
    <li>Once all RSC Promises wrapped by &lt;suspense&gt; have resolved, the closing body and html tags are inserted and the document is considered complete.</li>
  </ul>

  <h3>Streaming Content</h3>
  <p>The content below is what is streamed in from the server while the page continues to load. If you reload and scroll down to here, you will see it pop in as it is delivered.</p>
  <StreamWatcher/>

  <h3>TODO</h3>
  <p>Much more to explain here...</p>

  <p><a className={"button"} href={"/server-components/router-refresh/"}>Dynamically Updating Server-Rendered Content</a></p>
</>
