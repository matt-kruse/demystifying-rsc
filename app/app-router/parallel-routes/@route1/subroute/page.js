import Link from "@/components/next/Link";
import PageInfo from "@/components/PageInfo";

export default function Page() {
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/parallel-routes/@route1/subroute/page.js"/>
        <ul>
          <li><Link href={"/app-router/parallel-routes/"}>/app-router/parallel-routes/</Link></li>
          <li><Link href={"/app-router/parallel-routes/subroute2/"}>/app-router/parallel-routes/subroute2/</Link></li>
        </ul>
      </div>
  )
}
