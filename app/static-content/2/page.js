import ObserverWindow from "@/components/observer/RSCObserver";
import {rawEvents, virtualDom} from "./filter"

export default ()=><>
  <p>If you view the source of this page, you'll see the javascript at the bottom contains this:</p>
  <ObserverWindow inline={true} filter={rawEvents}/>
  <p>This is React's new line-based internal data streaming format.</p>
  <h3>Why is it needed?</h3>
  <ul>
    <li>It contains a Virtual DOM representation of the static page that was generated. <i>(See the box below for an expanded view of the Virtual DOM of the generated page)</i></li>
    <li>If there are client (browser) React components, it needs to know where to insert them at run-time</li>
    <li>When routing happens, only the modified parts of the page will be updated (we'll see this later), so it needs to have a virtual representation of the page to dynamically update the DOM</li>
  </ul>

  <h3>A few notes about this format</h3>
    <ul>
      <li>Lines are separated with a \n, so this is a line-based format, not JSON, for example</li>
      <li>The content is actually split into chunks in the source and pushed into an array inside script tags. The above format is only visible after combining the pieces and splitting on \n</li>
      <li>Each line is in the format "ID:TYPE?JSON"</li>
      <li>This data format is not documented anywhere!</li>
      <li>The exact format has been seen to change between React canary releases, so it's a moving target.</li>
      <li>Lines can contain references to other lines by using $ID in their content</li>
      <li>This format is considered "internal" to React and is not meant for human consumption. You do not need to know how it works to make apps with RSC. But it's useful to see what is happening behind the scenes.</li>
      <li>The <a href="https://rsc-parser.vercel.app/" target="_blank">RSC Parser</a> is a tool built by someone else that explores this format.</li>
    </ul>

  <h3>Virtual DOM Detailed View</h3>
  <p>This is React's internal representation of the current page/DOM structure. If it needs to update the page, it can compare what it wants with what it knows is there, and perform an efficient update to the DOM.</p>
  <p>You can see all the visible content on this page within this Virtual DOM.</p>
  <ObserverWindow inline={true} filter={virtualDom}/>

  <h3>Virtual DOM Reconciliation</h3>
  <p>When the page loads, React does a reconciliation between the Virtual DOM that it thinks represents the page, and the actual static DOM that the server returned. If any differences are found, it throws a console error. This is because it won't be able to accurately update the DOM if it doesn't have the correct structure representation.</p>

  <p>
    <a href={"/client-components/"}>Next: Integrating Client Components</a>
  </p>
</>