import Link from "@/components/next/Link";

import Timer from "@/components/Timer";
import PageInfo from "@/components/PageInfo";

export default function Page() {
  return (
      <div className={"box"}>
        <PageInfo filename="/parallel-routes/@route2/page.js"/>
        <ul>
          <li><Link href={"/parallel-routes/subroute/"}>/parallel-routes/subroute</Link></li>
          <li><Link href={"/parallel-routes/subroute2/"}>/parallel-routes/subroute2</Link></li>
          <li><Link href={"/parallel-routes/sharedsubroute/"}>/parallel-routes/sharedsubroute</Link></li>
        </ul>
      </div>
  )
}
