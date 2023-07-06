import {Suspense} from "react";
export const dynamic='force-dynamic';
import BufferDetector from "@/app/BufferDetector";

async function Delay() {
  return new Promise(r=>{
    setTimeout(()=>r(<div>Delayed Content: {Date.now()}</div>),5000);
  });
}
export default async()=>{
  return <>
    <BufferDetector/>
    <Suspense fallback={<div>Loading...</div>}><Delay/></Suspense>
  </>
}
