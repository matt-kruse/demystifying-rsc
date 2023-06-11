import Link from "@/components/next/Link";

import Timer from "@/components/Timer";
import PageInfo from "@/components/PageInfo";

export default function Page() {
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/parallel-routes/@route2/page.js"/>
        <ul>
          <li><Link href={"/app-router/parallel-routes/subroute/"}>/app-router/parallel-routes/subroute</Link></li>
          <li><Link href={"/app-router/parallel-routes/subroute2/"}>/app-router/parallel-routes/subroute2</Link></li>
          <li><Link href={"/app-router/parallel-routes/sharedsubroute/"}>/app-router/parallel-routes/sharedsubroute</Link></li>
        </ul>
      </div>
  )
}
