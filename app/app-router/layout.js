import PageInfo from "@/components/PageInfo";
import Link from "next/link";

export default ({children})=>{
  return <div className={"box"}>
    <PageInfo filename="/app-router/layout.js" linkPath={"/app-router/"} linkText={"[Back To App Router]"}/>
    {children}
  </div>
}

