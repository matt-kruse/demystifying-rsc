'use client';
import {useEffect, useState} from "react";

export default ({limit=500})=>{
  const [isServer,setServer] = useState(true);
  const [startTime, setStartTime] = useState(Date.now());
  const [time, setTime] = useState(0);

  // After initial render, cause a re-render as a Client Component
  useEffect(()=> {
    window.BUFFER_DETECT_START = Date.now();
    setServer(false);
    // Listen for the document ready event, meaning streaming has stopped
    if (document.readyState !== "loading") {
      setTime(Date.now());
    }
    else {
      addEventListener('DOMContentLoaded', () => {
        setTime(Date.now());
      })
    }
  },[]);

  // If everything is good, render nothing
  if (isServer || !time || time-startTime>limit) return <></>;

  // Render a buffer error
  return <div style={{backgroundColor:"#e0002b",color:"white",padding:"10px"}}>
    <p>Oops! It looks like streaming data didn't work for you. This could be caused by a buffering proxy, like a content filter or a corporate firewall that scans websites. Proxies like this buffer all the content until it is done, then inspect it, rather than streaming it to you as it is sent. So RSC Streaming doesn't work and instead you just see a long delay!</p>
    <p>Note: This could also be triggered by router or browser caching. Try reloading!</p>
  </div>
}