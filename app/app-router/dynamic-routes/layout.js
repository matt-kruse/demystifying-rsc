import PageInfo from "@/components/PageInfo";

export default function Layout({ children }) {
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/dynamic-routes/layout.js"/>
        {children}
      </div>
  )
}
