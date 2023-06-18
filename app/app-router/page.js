import PageInfo from "@/components/PageInfo";
import Link from "next/link";

export default ()=><>
  <div className={"box"}>
    <PageInfo filename="/app-router/page.js"/>
    <h3>App Router</h3>
    <p>These pages demonstrate how different features of the app router work.</p>
    <p>The next/link component is used for client-side routing. You'll notice red outlines highlighting the parts of the page that are inserted dynamically as you navigate.</p>
    <p>This demonstrates that client-side routing is being used. You can also hard refresh any url to see that full html content is also returned when a deep path is requested.</p>
    <ul>
      <li><Link href={"/app-router/nested/routing/"}>nested/routing/</Link></li>
      <li><Link href={"/app-router/dynamic-routes/"}>[dynamic-routes]</Link></li>
      <li><Link href={"/app-router/route-groups/"}>(route-groups)</Link></li>
      <li><Link href={"/app-router/parallel-routes/"}>@parallel-routes</Link></li>
      <li><Link href={"/app-router/router-refresh/"}>/app-router/router-refresh/</Link></li>
    </ul>
  </div>
  </>