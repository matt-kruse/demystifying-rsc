import PageInfo from "@/components/PageInfo";

export default function Layout({route1, route2, children}) {
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/parallel-routes/layout.js"/>
        <h5>{"{route1}"}</h5>
        <p>The "slot" above is placed into layout.js below. You can see that the content to fill {'{route1}'} comes from the @route1 subdirectory.</p>
        {route1}
        <h5>{"{route2}"}</h5>
        {route2}
        <p>Same with the slot above.</p>
        <h5>{"{children}"}</h5>
        {children}
        <p>The {'{children}'} slot is still filled with the content from page.js</p>
      </div>
  )
}
