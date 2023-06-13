'use client';
import {useEffect, useState} from "react";
import "./RSCObserver.css";
import escape from "escape-html";

function ObserverWindow({inline=false,filter,escapeHtml=true,highlight,find,replace="NO REPLACE SPECIFIED WITH FIND"}) {
  const [log,setLog] = useState([]);
  const addLog = function(event) {
    if (filter) {
      if (typeof filter=="string") {
        event = (new RegExp(filter)).test(event.raw) ? event.raw : null;
      }
      else {
        event = filter(event);
      }
    }
    // If regex is specified, only keep matched groups
    if (event && find && replace) {
      if (typeof event!="string") {
        event = event.raw;
      }
      find = new RegExp(find,"g");
      event = event.replaceAll(find,replace);
    }
    if (event) {
      if (highlight) {
        event = event.replaceAll(`highlight=${highlight}`, ``);
        const highlights = highlight.split('||');
        highlights.forEach(h => {
          if (/^\/(.*)\/$/.test(h)) {
            let exp = RegExp.$1;
            exp = escape(exp);
            h = new RegExp(exp, 'g');
          }
          event = event.replaceAll(h, `<span class="h">$&</span>`);
        });
      }
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
  return (/Client Component HTML|"ClientComponent"/.test(event.raw)) ? event.raw : null;
}

export function filterVirtualDomForClientComponentLimited(event) {
  if (/"ClientComponent"/.test(event.raw)) {
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

