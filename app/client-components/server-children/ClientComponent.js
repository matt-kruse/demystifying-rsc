'use client'
export const ClientComponent = ({children}) => {
  return <div className={"box client-component"}>
    This is a Client-Side Component and this is its {"{children}"}:
    {children}
  </div>
}
