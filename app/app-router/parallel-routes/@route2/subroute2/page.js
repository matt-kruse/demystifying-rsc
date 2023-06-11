import Link from "@/components/next/Link";

import Timer from "@/components/Timer";

export default function Page() {
  return (
      <div className={"box"}>
        <h1>/app-router/parallel-routes/@route2/subroute2/page.js <Timer/></h1>
        <ul>
          <li><Link href={"/app-router/parallel-routes/"}>/app-router/parallel-routes/</Link></li>
          <li><Link href={"/app-router/parallel-routes/subroute/"}>/app-router/parallel-routes/subroute/</Link></li>
        </ul>
      </div>
  )
}
