import Link from "next/link";

export const dynamic='force-dynamic';
export default ()=>{
  return <div className={"box"}>
    <div>Random: {Math.random()}</div>
    <Link href={"../1/"}>Go to other page</Link>
  </div>
}