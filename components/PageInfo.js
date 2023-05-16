import Timer from "@/components/Timer";

const PageInfo = ({filename})=>{
  return <div className="page-info">{filename} <Timer/> @ {Date.now()}</div>
}
export default PageInfo;
