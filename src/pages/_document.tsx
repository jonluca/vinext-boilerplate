import { Head, Html, Main, NextScript } from "next/document";
import globalCss from "~/styles/globals.css?raw";

export default function Document() {
  return (
    <Html>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: globalCss }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
