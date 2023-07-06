'use client';
import {Suspense, useEffect, useState} from "react";

export default ({limit=500})=>{
  const [isServer,setServer] = useState(true);
  const [startTime, setStartTime] = useState(Date.now());
  const [time, setTime] = useState(0);

  // After initial render, cause a re-render as a Client Component
  useEffect(()=> {
    window.BUFFER_DETECT_START = Date.now();
    setServer(false);
    // Listen for the document ready event, meaning streaming has stopped
    addEventListener('DOMContentLoaded',()=>{
      setTime(Date.now());
    })
  },[]);

  // This is executed the first time the component runs on the client, too
  if (isServer) return <></>;

  if (!time) {
    return <div>Detecting streaming...</div>
  }
  if (time-startTime<limit) {
    return <div>It Buffered!</div>
  }
  return <div>It Streamed!</div>
}