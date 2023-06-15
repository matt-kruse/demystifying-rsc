export default async function Delay({seconds=1,children}) {
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(
        <div className={"box"}>
          Render Timestamp: {Date.now()}
          {children}
        </div>
    ),seconds*1000);
  });
}
