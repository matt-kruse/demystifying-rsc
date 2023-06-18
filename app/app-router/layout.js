import PageInfo from "@/components/PageInfo";
export default ({children})=>{
  return <div className={"box"}>
    <PageInfo filename="/app-router/layout.js" linkPath={"/app-router/"} linkText={"[Back To App Router]"}/>
    {children}
  </div>
}

