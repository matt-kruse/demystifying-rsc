'use client';
import {useEffect, useState} from "react";
import "./RSCObserver.css";

function ObserverWindow({inline=false,filter,escapeHtml=true}) {
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
      return escapeHtml ?
          <code className='entry ignore-inserted' key={i}>{entry}</code>
          :
          <code className='entry ignore-inserted' key={i} dangerouslySetInnerHTML={{__html:entry}}></code>
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
  if (/ClientComponent\.js|initialTree/.test(event.raw)) {
    return event.raw;
  }
  return null;
}

export function filterVirtualDomForClientComponent(event) {
  return (/Client Component HTML|ClientComponent\.js/i.test(event.raw)) ? event.raw : null;
}

export function filterVirtualDomForClientComponentLimited(event) {
  if (/ClientComponent\.js/i.test(event.raw)) {
    return event.raw
  }
  if (/Client Component HTML/.test(event.raw)) {
    // We want to find a portion that looks like this:
    // ["$","h3",null,{"children":"Example Client Component Output"}],["$","$Lb",null,{}]
    // Yes, this is tightly coupled to the source. Oh well.
    let snippet = event.raw.replace(/^([^:]*:).*?(\["\$","h3",null,\{"children":"Example Client Component Output"}],\["\$",)("\$L.*?")(,null,\{}]).*/,"$1 ... $2<span class=\"highlight\">$3</span>$4 ...");
    return snippet;
  }
  return null;
}

