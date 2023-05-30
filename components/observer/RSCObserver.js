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
