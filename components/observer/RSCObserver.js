'use client';
import {useEffect, useState} from "react";
import "./RSCObserver.css";

function ObserverWindow() {
  const [log,setLog] = useState([]);
  const addLog = function(event) {
    setLog(currentLog=>[...currentLog,event]);
  }

  useEffect(() => {
    RSCObserver('stream',addLog,true);
    RSCObserver('fetch',addLog,true);
  }, []);

  return <div className="RscObserverWindow ignore-inserted">
    {log.map((l,i)=>{
      let entry = JSON.stringify(l)
      return <code className='entry ignore-inserted' key={i}>{entry}</code>;
    })}
  </div>;
}
export default ObserverWindow;
