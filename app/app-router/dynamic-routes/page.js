import Link from "@/components/next/Link";
import PageInfo from "@/components/PageInfo";

export default function Home() {
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/dynamic-routes/page.js"/>
        <h3>Dynamic Routes</h3>
        <p>Directories with the [slug] syntax (where "slug" can be any identifier) capture routes where part of the path is dynamic, like a product id.</p>
        <p>The two id-specific pages below are both handled by the same page.js file under the [id] directory.</p>
        <ul>
          <li><Link href={"/app-router/dynamic-routes/123"}>ID 123</Link></li>
          <li><Link href={"/app-router/dynamic-routes/456"}>ID 456</Link></li>
        </ul>
      </div>
  )
}
