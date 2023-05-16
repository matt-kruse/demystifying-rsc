import Link from "@/components/next/Link";
import PageInfo from "@/components/PageInfo";

export default function Home() {
  return (
      <div className={"box"}>
        <PageInfo filename="/products/page.js"/>
        <ul>
          <li><Link href={"/products/123/"}>Product 123</Link></li>
          <li><Link href={"/products/456"}>Product 456</Link></li>
        </ul>
      </div>
  )
}
