import PageInfo from "@/components/PageInfo";

export default function Layout({ children }) {
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/(route-groups)/route-group-1/layout.js"/>
        {children}
      </div>
  )
}
