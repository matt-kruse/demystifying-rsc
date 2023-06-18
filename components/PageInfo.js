import Timer from "@/components/Timer";
import Link from "@/components/next/Link";

// Cache the first time a specific page was compiled
let cache = {};

const PageInfo = ({filename, timer=true, linkPath=null, linkText=null})=>{
  let now = cache[filename];
  if (!now) {
    now = Date.now();
    cache[filename] = now;
  }
  return <div className="page-info">
    {filename} {timer?<Timer/>:null} @ {now} {linkPath && linkText ? <Link href={linkPath}>{linkText}</Link> : null}
  </div>
}
export default PageInfo;
