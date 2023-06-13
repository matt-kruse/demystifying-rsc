'use client'
function pause(t) {
  return new Promise(r=>setTimeout(r,t))
}
export const ClientComponent =  async() => {
  await pause(3000);
  return <p className={"client-component"}>
    This content is generated client-side. Datestamp: {Date.now()}
  </p>
}
