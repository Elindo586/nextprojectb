import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <Script
          id="google-tag2"
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4RB3V861V1"
        /> */}
      </body>
    </Html>
  );
}
