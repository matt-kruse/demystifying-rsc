import Link from "@/components/next/Link";
import PageInfo from "@/components/PageInfo";

export default function Home({id}) {
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/products/[id]/page.js"/>
        <Link href={"/app-router/products"}>/products</Link>
      </div>
  )
}
