import Link from "@/components/next/Link";
import PageInfo from "@/components/PageInfo";

export default ()=>{
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/(route-groups)/route-group-1/page.js"/>
        <h3>Route Group 1</h3>
        <p>Notice how the (route-groups) directory is not in the url path, but this file comes from that directory. The layout.js file in that directory is also used.</p>
        <Link href={"/app-router/route-groups/"}>/app-router/route-groups/</Link>
      </div>
  )
}
