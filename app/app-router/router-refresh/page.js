import Timer from "@/components/Timer";
import RouterRefresh from "@/components/RouterRefresh";
import Link from "@/components/next/Link";
import PageInfo from "@/components/PageInfo";

export default function Home() {
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/router-refresh/page.js"/>
        <div>
          This demonstrates a full refresh of the route to update server-side data. The entire component tree is re-rendered server-side, and the diff is applied client-side. This allows server components to update themselves without disrupting client-side state.
        </div>
        <RouterRefresh/>
      </div>
  )
}
