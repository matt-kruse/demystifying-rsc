import Timer from "@/components/Timer";
import Link from "next/link";
import {Suspense} from "react";
import PageInfo from "@/components/PageInfo";

export default function Page() {
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/server-suspense/page.js"/>
        <div>This shows how nested RSCs with Suspense will stream in. Both components wait until the outer Suspense is resolved.</div>
        <Suspense fallback={"Loading both components (6 seconds)..."}>
          <div>This is Date.now() of the outer component</div>
          <Delay1>
            <div>This is Date.now() of the inner component</div>
            <Delay2/>
          </Delay1>
        </Suspense>

        <div>These nested RSCs have their own suspense, showing an unveiling of the DOM tree</div>
        <Suspense fallback={"Loading outer component (3 seconds)..."}>
          <div>This is Date.now() of the outer component</div>
          <Delay1>
            <Suspense fallback={"Loading inner component (3 seconds)..."}>
              <div>This is Date.now() of the inner component</div>
              <Delay2/>
            </Suspense>
          </Delay1>
        </Suspense>

      </div>
  )
}
