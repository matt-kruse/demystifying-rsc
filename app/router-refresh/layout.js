import Timer from "@/components/Timer";
import PageInfo from "@/components/PageInfo";

export default function Layout({ children }) {
  console.log("SSR: Running /router-refresh/layout.js");
  return (
      <div className={"box"}>
        <PageInfo filename="/router-refresh/layout.js"/>
        {children}
      </div>
  )
}
