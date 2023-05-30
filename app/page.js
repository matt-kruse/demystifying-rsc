import Link from "@/components/next/Link";
import PageInfo from "@/components/PageInfo";
import Timer from "@/components/Timer";

export default function Home() {
  return <>
    <h1>Demystifying React Server Components in NextJS 13 /app</h1>
    <p>This purpose of this application is to demonstrate the concepts and code of React Server Components in NextJS13 in a way that exposes what is really happening.</p>
    <p><b>Audience:</b> Experienced React developers who are perhaps new to RSC. Or people using RSC who want to understand more about how it works.</p>
    <p><i>(This page is a lot of up-front intro content to get it out of the way! I encourage you to read it, but you can <a href={"/static-content/"}>skip forward</a> if you want to)</i></p>
    <h2>Important Notes</h2>
    <ol>
      <li>The code used in this app is <b>intentionally plain and simple</b> (I do not use Typescript or Tailwind, for example) so the concepts being demonstrated are not obfuscated by tooling.</li>
      <li>Although the RSC concepts are general, this app focuses on implementation in <b>NextJS 13 /app directory.</b></li>
      <li>This is not an exhaustive demonstration of all RSC capabilities or implementation. I'm focusing on the things that may be confusing or misunderstood.</li>
      <li>Boxes like <div className={"box"}>this<div className={"box"}>and this</div></div> are used to show how the layout of pages are constructed and layered.</li>
      <li>Details about where content comes from are usually shown at the top of each content area, like the top of this screen. It is in the format [file path] [timer?] [generated datestamp] [link?]</li>
      <li>Timers like this: <Timer/> are shown on most content headers to demonstrate that content is persisting and not being regenerated.</li>
      <li>When new elements are inserted into the page, they get a temporary <span className={"inserted"}>red outline</span>. When content is changed client-side, it is temporarily turned <span className={"contentChanged"}>red</span>. This is so you can easily visualize what part of the page is being updated dynamically.</li>
      <li>You should install this app locally and play with the code and watch what happens! This is the best way to cement the ideas into your mind.</li>
    </ol>
    <h2>Key Concepts</h2>
    <ol>
      <li>The term "React Server Components" (RSC) is used in two ways:
        <ul>
          <li>React components which are written to run only on the server, rather than in the browser.</li>
          <li>The framework and environment which allows existing React components and concepts to run on the server.</li>
        </ul>
        This dual-meaning distinction is important, because you must first discard the idea that RSCs are a special new thing. Instead, RSC is the way that the React team has defined as how React runs and works when executed on the server.
      </li>
      <li>RSC is different than framework-specific implementations like getServerSideProps() in NextJS which allow React to run on the server. Instead, RSC is framework-independent and doesn't depend on new special methods.</li>
      <li>Let's be clear about some terminology and when RSC runs:
        <ul>
          <li><b>SSG (Static Site Generation):</b> React code is run when you build your application, and the generated output is static.</li>
          <li><b>SSR (Server-Side Rendering):</b> React code runs at the time it is requested. The result may be cached for future requests.</li>
          <li><b>CSR (Client-Side Rendering):</b> React code is delivered to the browser, which generates content that is inserted into the DOM.</li>
        </ul>
      </li>
      <li><b>SSG is the default</b> time when React code gets executed in RSC! There are ways in which you can force code to run as SSR or CSR instead.</li>
    </ol>
  </>;
}
