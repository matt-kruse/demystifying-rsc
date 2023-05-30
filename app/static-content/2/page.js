import ObserverWindow from "@/components/observer/RSCObserver";
import {rawEvents, virtualDom} from "./filter"

export default ()=><>
  <p>If you view the source of this page, you'll see the javascript at the bottom contains this, as well as some other content:</p>
  <ObserverWindow inline={true} filter={rawEvents}/>
  <p>This is React's new line-based internal streaming format. A few notes:</p>
    <ul>
      <li>Each line is in the format "ID:DATA"</li>
      <li>Lines can contain references to other lines by using $ID in their content</li>
    </ul>
  <ObserverWindow inline={true} filter={virtualDom}/>

</>