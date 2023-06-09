import ViewSource from "@/components/ViewSource";

export default async()=>{
  return <>
    <p>The content of this page was generated entirely server-side using RSC.</p>
    <p>If you <ViewSource highlight="What is all that javascript at the bottom of the page||self.__next_f.push"/> in your browser you'll see all this content as html in the source.</p>
    <p>In a typical SPA, the HTML delivered by the server would be an empty page, along with lots of javascript. That javascript would build the html and insert it into the page. Your html would appear in the DOM Inspector, but not in View Source.</p>
    <p>But with RSC, React components are run on the server and their HTML output is sent directly as the source.</p>
    <h3>Current Mental Model</h3>
    <p><img src={"/mental-model-1.png"}/></p>
    <p><b>But wait... </b></p>
    <p>What is all that javascript at the bottom of the page?</p>
    <p>Why is so much javascript included when RSC generates html, and there are no javascript components on this page?</p>
    <p><a className={"button"} href={"/static-content/2/"}>Virtual DOM</a> explains why.</p>
  </>
}