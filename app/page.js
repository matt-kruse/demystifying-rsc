import Link from "@/components/next/Link";
import PageInfo from "@/components/PageInfo";

export default function Home() {
  return (
      <div className={"box"}>
        <PageInfo filename="/page.js"/>
        <ul>
          <li><Link href={"/products/"}>/products</Link></li>
          <li><Link href={"/parallel-routes/"}>/parallel-routes</Link></li>
          <li><Link href={"/router-refresh/"}>/router-refresh</Link></li>
          <li><Link href={"/server-delay/"}>/server-delay</Link></li>
          <li><Link href={"/server-suspense/"}>/server-suspense</Link></li>
        </ul>

      </div>
  )
}
