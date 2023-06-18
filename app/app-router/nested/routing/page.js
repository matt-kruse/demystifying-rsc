import PageInfo from "@/components/PageInfo";
import Link from "@/components/next/Link";

export default ()=><>
  <div className={"box"}>
    <PageInfo filename="/app-router/nested/layout/page.js"/>

    <h3>Nested Routing</h3>
    <p>This page demonstrates the simple structure of nested routing.</p>
    <p>In a deep path, the layout.js in each directory gets rendered as a container for everything under it.</p>
    <p>Only the page.js in the deepest directory gets rendered as the content. But every layout.js file in every directory of the deep path gets rendered.</p>
    <p>Go <Link href={"deeper/"}>one level deeper</Link></p>
  </div>
</>