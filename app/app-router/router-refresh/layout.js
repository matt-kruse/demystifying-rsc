import Timer from "@/components/Timer";
import PageInfo from "@/components/PageInfo";

export default function Layout({ children }) {
  console.log("SSR: Running /app-router/router-refresh/layout.js");
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/router-refresh/layout.js"/>
        {children}
      </div>
  )
}
