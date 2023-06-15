import PageInfo from "@/components/PageInfo";
import Link from "next/link";

export default ()=><>
  <div className={"box"}>
    <PageInfo filename="/app-router/page.js"/>
    <ul>
      <li><Link href={"/app-router/products/"}>/app-router/products</Link></li>
      <li><Link href={"/app-router/parallel-routes/"}>/app-router/parallel-routes</Link></li>
      <li><Link href={"/app-router/router-refresh/"}>/app-router/router-refresh</Link></li>
    </ul>
  </div>
  </>