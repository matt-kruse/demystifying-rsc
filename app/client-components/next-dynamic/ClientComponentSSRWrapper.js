import dynamic from 'next/dynamic'
const ClientComponent = dynamic(() => import('./ClientComponent'), {
  ssr: false
})
export const ClientComponentNoSSR = ()=><ClientComponent/>
