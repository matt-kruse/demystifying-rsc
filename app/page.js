import Link from "@/components/next/Link";
import PageInfo from "@/components/PageInfo";
import Timer from "@/components/Timer";

export default function Home() {
  return <>
    <h1><img src={"/rsc.png"} className={"logo"}/>Demystifying React Server Components<br/>with NextJS 13 App Router</h1>
    <p>This purpose of this application is to demonstrate the concepts and code of React Server Components in NextJS13 in a way that exposes what is really happening.</p>
    <p><b>Audience:</b> Experienced React developers who are perhaps new to RSC. Or people using RSC who want to understand more about how it works.</p>

    <p>This tutorial is intended to be stepped through linearly, but you may jump to any page below.</p>

    <p><a className={"button"} href={"/notes/"}>Important Notes</a></p>

    <h3>Contents</h3>
    <ol>
      <li><a href="/notes/">Important Notes</a></li>
      <li><a href="/static-content/">Static Content</a></li>
      <li><a href="/static-content/2/">Virtual DOM</a></li>
      <li><a href="/client-components/">Integrating Client Components</a></li>
      <li><a href="/client-components/hydration-failed/">Hydration Failure</a></li>
      <li><a href="/client-components/no-ssr/">Disabling SSR for Client Components</a></li>
      <li><a href="/client-components/next-dynamic/">Disabling Component SSR Server-Side</a></li>
      <li>Client Component Details</li>
      <li>Server Components as children of Client Components</li>
      <li>Server Components as props of Client Components</li>
      <li>async Server Components</li>
      <li>Streaming with Server-Side Suspense</li>
      <li>Dynamically Updating Server-Rendered Content</li>
      <li>RSC Caching</li>
      <li>Server Functions?</li>
      <li>RSC FAQs</li>
      <li>
        <a href="/app-router/">App Router Demos</a> (These are very much a WIP, converting and improving from an old demo)
        <ul>
          <li>Layout Nesting</li>
          <li>Client-Side Routing</li>
          <li><a href="/app-router/products/">Dynamic Routes</a></li>
          <li><a href="/app-router/parallel-routes/">Parallel Routes</a></li>
          <li><a href="/app-router/router-refresh/">Router Refresh</a></li>
          <li><a href="/app-router/server-delay/">Server Delay</a></li>
          <li><a href="/app-router/server-suspense/">Server Suspense</a></li>
        </ul>
      </li>
    </ol>

  </>;
}
