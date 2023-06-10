'use client';
import {useEffect, useState} from "react";
import "./RSCObserver.css";

function ObserverWindow({inline=false,filter}) {
  const [log,setLog] = useState([]);
  const addLog = function(event) {
    if (filter) {
      event = filter(event);
    }
    if (event) {
      setLog(currentLog => [...currentLog, event]);
    }
  }

  useEffect(() => {
    RSCObserver('stream',addLog,true);
    RSCObserver('fetch',addLog,true);
  }, []);

  return <div className={`RscObserverWindow ignore-inserted ${inline?'inline':''}`}>
    {log.map((l,i)=>{
      let entry = typeof l=='string' ? l : JSON.stringify(l)
      return <pre className='entry ignore-inserted' key={i}>{entry}</pre>;
    })}
  </div>;
}
export default ObserverWindow;

export function filterRawEvents(event) {
  return event.raw;
}

export function filterVirtualDom(event) {
  if (/view source/i.test(event.raw)) {
    return JSON.stringify(event.vdom, null, 1);
  }
  return null;
}

export function filterClientComponent(event) {
  if (/ClientComponent\.js/.test(event.raw)) {
    return event.raw;
  }
  if (/initialTree/.test(event.raw)) {
    return event.raw;
  }
  return null;
}

export function filterVirtualDomForClientComponent(event) {
  if (/Client Component HTML/i.test(event.raw)) {
    return JSON.stringify(event.vdom, null, 1);
  }
  return null;
}
