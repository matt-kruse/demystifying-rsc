import Delay from "./Delay";
export default () => <>
  <Delay seconds={1}/>
  <Delay seconds={1}/>
  <Delay seconds={1}>
    <Delay seconds={.5}>
      <Delay seconds={.5}/>
    </Delay>
  </Delay>
</>
