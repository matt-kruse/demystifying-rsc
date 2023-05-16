// We hold a ref to all events for late subscribers
// Keyed by type
const RSCEvents = {};

// Simple Observer components to listen to events
const RSCObserver = function(type, subscriber, pastEvents=false) {
  RSCEvents[type] ??= [];
  document.addEventListener(`RSC-${type}`,(event)=>{
    subscriber(event.detail);
  });
  if (pastEvents) {
    RSCEvents?.[type]?.forEach(e=>subscriber(e))
  }
}

const dispatchRSCEvent = function (type, event) {
  event.eventType = type;
  RSCEvents[type] ??= [];
  RSCEvents[type].push(event);
  document.dispatchEvent(new CustomEvent(`RSC-${type}`, {
    detail: event,
    bubbles: true
  }));
}

// Monkey Patch Fetch to intercept and observe
const { fetch: originalFetch } = window;
window.fetch = async (...args) => {
  let [resource, config] = args;
  // console.log(resource.method||'GET',resource.href,resource);
  let response = await originalFetch(resource, config);
  const clone = response.clone();
  clone.text().then(data=>{
    dispatchRSCEvent('fetch',{
      method:resource.method||'GET',
      href:resource.href,
      data
    });
    data = splitRSCLines(data);
    captureStreamContent(data,true)
  });
  return response;
};

// Functions to handle and process streamed RSC Data
function captureStreamContent(data,isFetch) {
  if (!data) return;
  if (typeof data==="string") data=[data];
  try {
    let lines = isFetch ? data : combineStreamingChunksIntoLines(data);
    lines.forEach(line=>{
      parseStreamingLine(line)
    })
  } catch(e) {
    // console.log(e);
  }
}

function splitRSCLines(data) {
  return data.split('\n') || []
}

function combineStreamingChunksIntoLines(blob=[]) {
  let s = blob.reduce((a,v)=>{
    return a+(v?.[1]||'');
  },'');
  return splitRSCLines(s);
}

function parseStreamingLine(line) {
  try {
    let [match,id,type,json] = line.match(/^([^:]+):([^{["]*)(.*)/)
    let vdom = JSON.parse(json);
    dispatchRSCEvent('stream',{id,type,vdom});
  } catch(e) {}
}

// Do an initial capture of the in-page stream
captureStreamContent(self.__next_f);

// Watch the DOM
const targetNode = document.documentElement;
const config = {characterData: true, characterDataOldValue: true, attributes: true, childList: true, subtree: true};
const callback = (mutationList) => {
  for (const mutation of mutationList) {
    // console.log(mutation);
    let target = null;
    if (mutation.type === 'characterData') {
      target = mutation?.target?.parentNode;
      target?.classList?.add('contentChanged');
    }
    if (mutation.addedNodes) {
      for (const node of mutation.addedNodes) {
        target = node;
        if (!node?.classList?.contains('ignore-inserted') && node?.tagName!=="NEXT-ROUTE-ANNOUNCER") {
          // console.log(node.outerHTML);
          node?.classList?.add('inserted');
        }
      }
    }
    if (target) {
      setTimeout(() => {
        target?.classList?.remove('inserted', 'contentChanged');
      }, 2000)
    }
  }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);