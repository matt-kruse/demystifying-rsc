import Timer from "@/components/Timer";
import Link from "@/components/next/Link";

const PageInfo = ({filename, timer=true, linkPath=null, linkText=null})=>{
  return <div className="page-info">
    {filename}
    {timer?<Timer/>:null}
    @ {Date.now()}
    {linkPath && linkText ? <Link href={linkPath}>{linkText}</Link> : null}
  </div>
}
export default PageInfo;
