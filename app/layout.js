import './style.css';
import PageInfo from "@/components/PageInfo";
import Script from "next/script";
import "@fontsource/jetbrains-mono";

export const metadata = {
  title: 'Demystifying React Server Components with NextJS 13 App Router',
  description: 'Understand RSC by digging into the details of how it really works'
}

export default function RootLayout({ children }) {
  console.log("SSR: Running /layout.js");
  return (
    <html lang="en">
      <head>
        {/* This is vanilla js loaded early to watch for native events before Next/React even runs */}
        <Script id="watcher" src="/RSCObserver.js" strategy={'beforeInteractive'}></Script>
      </head>
      <body>
          <PageInfo filename="/layout.js" timer={false} linkPath={"/"} linkText={"[Home]"}/>
          {children}
      </body>
    </html>
  )
}
