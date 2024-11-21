import {ClientComponentNoSSR} from "./ClientComponentSSRWrapper";
import ObserverWindow, {filterClientComponent, filterRawEvents} from "@/components/observer/RSCObserver";
import FileSource from "@/components/FileSource";
import ViewSource from "@/components/ViewSource";

export default ()=><>
  <h2>Client Component Details</h2>
  <ClientComponentNoSSR/>

  <p>Above is a variation of our Client Component with:</p>
  <ul>
    <li>Delayed content display</li>
    <li>A "Loading" state</li>
  </ul>
  <p>These are significant changes and allow us to see more details about how Client Components really work. Let's dig in...</p>
  <p>Here are the relevant lines from the React Virtual DOM:</p>
  <ObserverWindow filter={"\"NoSSR\"|react.suspense|fallback|ClientComponent"} find={"^([^:]*:).*?(\\[\"\\$\",\"\\$[^\"]+\",null,{\"fallback\".*?]}]).*"} replace="$1 ... $2 ..." inline={true}/>

  <p><i>(Because this is all dynamic, I cannot reference exact line labels or numbers, since they may change depending on the run-time environment and other factors. I will reference things generally.)</i></p>
  <p>The meaning of these 4 lines is:</p>
  <ul>
    <li>The long line with "..." is the Virtual DOM chopped down to show only the part relevant to what we are demonstrating</li>
    <li>In that line, the first component reference (ex: $b) is to "$Sreact.suspense". This tells React to insert a &lt;suspense&gt; tag into the html when constructing from the Virtual DOM </li>
    <li>The "fallback" property of this Suspense component is what you first see when the page loads</li>
    <li>Its "children" property is a reference to NextJS's auto-inserted wrapper around Client Components that are imported without SSR
      <ul>
        <li>Internally, it has code that prevents html from being generated on the server</li>
        <li>When run on the client (typeof window !== "undefined") then it just returns its children</li>
      </ul>
    </li>
    <li>Internally, the NoSSR component uses React.lazy() to dynamically load our Client Component</li>
    <li>Finally, the children property of this NoSSR wrapper is a reference to our Client Component itself, which gets shown once it resolves.</li>
  </ul>

  <h3>Client Component</h3>
  <p>Let's look at the client component source:</p>
  <FileSource title={"ClientComponent.js"} filepath={"/app/client-components/details/ClientComponent.js"}/>
  <ul>
    <li>This Client Component is defined as async, so it returns a Promise and delays its content.</li>
    <li>async Client Components are only available in the canary releases of React 18 included with NextJS 13.</li>
    <li>After 3 seconds, the Promise is resolved and the Component renders its html</li>
  </ul>
  <p>Simple enough. It should be obvious what the intent is.</p>

  <h3>NoSSR Wrapper</h3>
  <p>In order to use this Client Component and prevent it from running on the server, we wrap it in a wrapper RSC Component:</p>
  <FileSource title={"ClientComponentSSRWrapper.js"} filepath={"/app/client-components/details/ClientComponentSSRWrapper.js"}/>

  <p>Here you see the "fallback" defined as part of the call to next/dynamic. And this component simply returns the rendered results of the async Client Component.</p>
  <p><i>(Note: The .then() and "default" syntax are hacks needed for next/dynamic to import a named export rather than the default, which React.lazy() expects)</i></p>

  <h3>Let's Build A Generic NoSSR Wrapper Component!</h3>
  <p>No.</p>
  <p>You might be tempted to write a reusable RSC function that does the next/dynamic and ssr:false magic for you in a reusable way, so you can hide it away. Like:</p>
  <pre className={"code"}>const ClientComponent = NoSSRImport('@/components/ClientComponent');</pre>
  <p>That could internally use next/dynamic and pass the string argument into import(), right?</p>
  <p>Unfortunately, no. import() is magically converted to other syntax at build time, and requires a static string argument. It cannot be dynamic, so you can't pass it a variable. This is just the black box magic that happens in compilers/bundlers that is invisible to you and causes confusing error messages.</p>

  <h3>Client Component FAQs</h3>
  <dl>
    <dt>Can I import() an RSC into a Client Component?</dt>
    <dd>No. If a Client Component imports another Component, it is treated as a Client Component. This is because the Client Component runs in the browser. It can't call Server Component code on the fly while it's trying to render itself in the browser! Once a 'use client' directive is found in a Component, every one of its imported Components and all their imported Components will all be treated as Client Components. This is necessary because they rely on each other to render at run-time in the browser. I hope that makes sense. This is important. More later.</dd>

    <dt>Can I import() a Client Component into an RSC?</dt>
    <dd>Yes. As previously covered, that just tells the bundler to bundle the Client Component source separately and send it to the browser for execution.</dd>

    <dt>Can an Server Component be a child of a Client Component?</dt>
    <dd>Yes. We will explore this next. The reason is because the RSC's output can be treated as static input to the {"{children}"} prop of the Client Component. It doesn't know or care whether its children content was static, rendered on the server, or rendered on the client.</dd>

    <dt>Can a Server Component's output be passed as a prop to a Client Component?</dt>
    <dd>Yes, for the same reason.</dd>

    <dt>Can I pass a Server-Side Function as a prop to a Client Component?</dt>
    <dd>No. Anything passed as props to a Client Component must be serializable, so it can be sent as static content. Functions cannot be serialized. But there's a catch: Server Functions. This is alpha pre-release functionality and will be covered later.</dd>

    <dt>Can a Client Component be a child of a Server Component?</dt>
    <dd>Yes! We have already demonstrated it on this page! </dd>
  </dl>

  <p><a className={"button"} href={"/client-components/server-children/"}>Server Components as Children of Client Components</a></p>

</>
