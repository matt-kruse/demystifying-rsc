import {Suspense} from "react";

function Delay() {
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(
        <div className={"box"}>Delayed Content: {Date.now()}</div>
    ),5000);
  });
}

export default async()=>{
  return <Suspense fallback={<div>Loading...</div>}><Delay/></Suspense>
}
