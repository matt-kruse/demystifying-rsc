import './style.css';
import PageInfo from "@/components/PageInfo";
import Link from "@/components/next/Link";
import Script from "next/script";
import ObserverWindow from "@/components/observer/RSCObserver";

export const metadata = {
  title: 'Next SPA',
  description: 'This is a static SPA generated from NextJS 13.3 /app dir',
}

export default function RootLayout({ children }) {
  console.log("SSR: Running /layout.js");
  return (
    <html lang="en">
      <head>
        {/* This is vanilla js loaded early to watch for DOM changes before Next/React even runs */}
        <Script id="watcher" src="/RSCObserver.js" strategy={'beforeInteractive'}></Script>
      </head>
      <body>
        <ObserverWindow></ObserverWindow>
        <div className={"box"}>
          <PageInfo filename="/layout.js"/>
          {children}
          <div><Link href={"/"}>Back to /</Link></div>
        </div>
      </body>
    </html>
  )
}
