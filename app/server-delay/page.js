import Timer from "@/components/Timer";
import Link from "next/link";
import PageInfo from "@/components/PageInfo";

async function Delay1({children}) {
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(
        <>
          <div>{Date.now()}</div>
          <div>{children}</div>
        </>
    ),1000);
  });
}

async function Delay2() {
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(Date.now()),1000);
  });
}

export default function Page() {
  return (
      <div className={"box"}>
        <PageInfo filename="/server-delay/page.js"/>
        <div>This shows how nested RSCs with delays will waterfall</div>
        <div>This is Date.now() of the first component</div>
        <Delay1>
          <div>This is Date.now() of the second component</div>
          <Delay2/>
        </Delay1>
        <div>Below shows two RSCs that are siblings, demonstrating that they run in parallel</div>
        <div><Delay2/></div>
        <div><Delay2/></div>

      </div>
  )
}
