import PageInfo from "@/components/PageInfo";

export default function Layout({ children }) {
  console.log("SSR: Running /products/layout.js");
  return (
      <div className={"box"}>
        <PageInfo filename="/products/layout.js"/>
        {children}
      </div>
  )
}
