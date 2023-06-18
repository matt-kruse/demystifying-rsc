import Link from "@/components/next/Link";
import PageInfo from "@/components/PageInfo";

export default ({params})=>{
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/dynamic-routes/[id]/page.js"/>
        <h3>{params.id}</h3>
        <Link href={"/app-router/dynamic-routes/"}>/app-router/dynamic-routes/</Link>
      </div>
  )
}
