import Link from "@/components/next/Link";
import PageInfo from "@/components/PageInfo";

export default ()=>{
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/(route-groups)/route-groups/page.js"/>
        <h3>Route Groups</h3>
        <p>Note the path of the page.js file that contains this content. The (route-groups) directory is not included in the path. Any directory in (parentheses) is ignored, and its subdirectories are "pushed up" a level.</p>
        <p>That's why this page can be accessed at /app-router/app-groups/ instead of /app-router/(route-groups)/route-groups/</p>
        <ul>
          <li><Link href={"../route-group-1/"}>route-group-1</Link></li>
          <li><Link href={"../route-group-2/"}>route-group-2</Link></li>
        </ul>
      </div>
  )
}
