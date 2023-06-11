import PageInfo from "@/components/PageInfo";

export default function Layout({ children }) {
  console.log("SSR: Running /app-router/products/layout.js");
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/products/layout.js"/>
        {children}
      </div>
  )
}
