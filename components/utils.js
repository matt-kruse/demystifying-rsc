import dynamic from "next/dynamic";

export const ClientOnly = (Component)=>{
  return dynamic(
      ()=>Promise.resolve(Component), {ssr: false}
  );
}
