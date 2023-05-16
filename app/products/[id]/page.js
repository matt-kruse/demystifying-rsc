import Link from "@/components/next/Link";
import PageInfo from "@/components/PageInfo";

export default function Home({id}) {
  return (
      <div className={"box"}>
        <PageInfo filename="/products/[id]/page.js"/>
        <Link href={"/products"}>/products</Link>
      </div>
  )
}
