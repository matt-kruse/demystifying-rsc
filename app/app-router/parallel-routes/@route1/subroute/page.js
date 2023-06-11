import Link from "@/components/next/Link";

import Timer from "@/components/Timer";

export default function Page() {
  return (
      <div className={"box"}>
        <h1>/app-router/parallel-routes/@route1/subroute/page.js <Timer/></h1>
        <ul>
          <li><Link href={"/app-router/parallel-routes/"}>/app-router/parallel-routes/</Link></li>
          <li><Link href={"/app-router/parallel-routes/subroute2/"}>/app-router/parallel-routes/subroute2/</Link></li>
        </ul>
      </div>
  )
}
