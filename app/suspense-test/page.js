import {Suspense} from "react";
export const dynamic='force-dynamic';

async function Delay() {
  return new Promise(r=>{
    setTimeout(()=>r(<div>Delayed Content: {Date.now()}</div>),5000);
  });
}
export default async()=>{
  return <Suspense fallback={<div>Loading...</div>}><Delay/></Suspense>
}
