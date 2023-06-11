import Timer from "@/components/Timer";
import PageInfo from "@/components/PageInfo";

export default function Layout({ route1, route2, children }) {
  console.log("SSR: Running /app-router/parallel-routes/layout.js");
  return (
      <div className={"box"}>
        <PageInfo filename="/app-router/parallel-routes/layout.js"/>

          <h1>{"{route1}"}</h1>
          {route1}

          <h1>{"{route2}"}</h1>
          {route2}

          <h1>{"{children}"}</h1>
          {children}
      </div>
  )
}
