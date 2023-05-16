import Link from "@/components/next/Link";

import Timer from "@/components/Timer";

export default function Page() {
  return (
      <div className={"box"}>
        <h1>/parallel-routes/@route1/subroute/page.js <Timer/></h1>
        <ul>
          <li><Link href={"/parallel-routes/"}>/parallel-routes/</Link></li>
          <li><Link href={"/parallel-routes/subroute2/"}>/parallel-routes/subroute2/</Link></li>
        </ul>
      </div>
  )
}
