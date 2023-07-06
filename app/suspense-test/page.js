import {Suspense} from "react";
export const dynamic='force-dynamic';
import dynamic2 from "next/dynamic";
import BufferDetector from "@/app/suspense-test/BufferDetector";

async function Delay() {
  return new Promise(r=>{
    setTimeout(()=>r(<div>Delayed Content: {Date.now()}</div>),5000);
  });
}
export default async()=>{
  return <>
    <p>Buffer: <BufferDetector/></p>
      <Suspense fallback={<div>Loading...</div>}><Delay/></Suspense>
  </>
}
