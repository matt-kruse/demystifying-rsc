'use client';
import {useEffect, useState} from "react";

export default ()=>{
  const [events, setEvents] = useState([]);

  const handler = e=>{
    setEvents(prev => [...prev, e.raw]);
  }

  useEffect(() => {
    RSCObserver('stream',handler);
    RSCObserver('suspense',handler);
    RSCObserver('script',handler);
  }, []);

  return <div>
    {events.map((e,i)=>
      <div className={"box client-component overflow"} key={i}>{e}</div>
    )}
  </div>
}
