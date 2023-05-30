'use client'
export function rawEvents(event) {
  return event.raw;
}
export function virtualDom(event) {
  if (/view the source/.test(event.raw)) {
    return JSON.stringify(event.vdom,null,1);
  }
  return null;
}