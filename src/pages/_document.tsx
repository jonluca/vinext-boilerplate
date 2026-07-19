import { Head, Html, Main, NextScript } from "next/document";
import globalCss from "~/styles/globals.css?raw";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Vinext Boilerplate</title>
        <meta content={"Minimal Next.js, Drizzle, Oxc, Vinext, and Wrangler starter."} name={"description"} />
        <style dangerouslySetInnerHTML={{ __html: globalCss }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
