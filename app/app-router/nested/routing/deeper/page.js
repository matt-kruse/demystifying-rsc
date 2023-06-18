import PageInfo from "@/components/PageInfo";
import Link from "@/components/next/Link";

export default ()=><>
  <div className={"box"}>
    <PageInfo filename="/app-router/nested/layout/deeper/page.js"/>

    <h3>No layout.js</h3>
    <p>Directories don't require a layout.js file, except for the root.</p>
    <p>In this path, there is no /app-router/nested/layout/deeper/layout.js file as you can see from the container structure.</p>
    <p>/layout.js must exist and contain the outer wrapper for the app - html and body tags.</p>
    <p>Go <Link href={"../"}>back ../</Link></p>
  </div>
</>