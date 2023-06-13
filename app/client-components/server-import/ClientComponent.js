'use client'
import {ServerComponent} from "./ServerComponent";

export const ClientComponent = ({children}) => {
  return <div className={"box client-component"}>
    This is a Client-Side Component and this its imported Server Component:
    <ServerComponent/>
  </div>
}
