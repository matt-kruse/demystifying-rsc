export default function({highlight}) {
  let h = highlight ? `?highlight=${highlight.replaceAll('"','&quot;')}` : '';
  return <span dangerouslySetInnerHTML={{ __html: `<a href="#" onClick="this.href='/view-source'+location.pathname+'${h}'" class="view-source" target="_blank">View Source</a>` }} />
}
