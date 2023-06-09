import PageInfo from "@/components/PageInfo";

export default function Layout({ children }) {
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/router-refresh/layout.js"/>
        {children}
      </div>
  )
}
