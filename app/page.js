import Link from "@/components/next/Link";
import PageInfo from "@/components/PageInfo";
import Timer from "@/components/Timer";

export default function Home() {
  return <>
    <h1>Demystifying React Server Components in NextJS 13 /app</h1>
    <p>This purpose of this application is to demonstrate the concepts and code of React Server Components in NextJS13 in a way that exposes what is really happening.</p>
    <p><b>Audience:</b> Experienced React developers who are perhaps new to RSC. Or people using RSC who want to understand more about how it works.</p>

    <p>This app is intended to be stepped through linearly, but you may jump to any page below.</p>

    <p><a className={"button"} href={"/notes/"}>Important Notes</a></p>

    <h3>Contents</h3>
    <ol>
      <li><a href="/notes/">Important Notes</a></li>
      <li><a href="/static-content/">Static Content</a></li>
      <li><a href="/static-content/2/">Virtual DOM</a></li>
      <li><a href="/client-components/">Integrating Client Components</a></li>
      <li><a href="/client-components/no-ssr/">Disabling SSR for Client Components</a></li>
      <li>(More to come...)</li>
    </ol>

  </>;
}
