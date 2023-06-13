import dynamic from 'next/dynamic'
const ClientComponent = dynamic(() => import('./ClientComponent').then(m=>({"default":m.ClientComponent})), {
  ssr: false,
  loading: () => <div className={"client-component"}>Loading Slow Client Component...</div>
})
export const ClientComponentNoSSR = ()=><ClientComponent/>
