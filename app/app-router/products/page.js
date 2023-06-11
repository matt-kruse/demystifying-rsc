import Link from "@/components/next/Link";
import PageInfo from "@/components/PageInfo";

export default function Home() {
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/products/page.js"/>
        <ul>
          <li><Link href={"/app-router/products/123/"}>Product 123</Link></li>
          <li><Link href={"/app-router/products/456"}>Product 456</Link></li>
        </ul>
      </div>
  )
}
