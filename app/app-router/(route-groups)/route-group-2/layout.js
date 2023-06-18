import PageInfo from "@/components/PageInfo";

export default function Layout({ children }) {
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/(route-groups)/route-group-2/layout.js"/>
        {children}
      </div>
  )
}
