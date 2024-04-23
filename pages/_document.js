import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import GoogleTags from "../components/google-tags";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <GoogleTags /> */}
      </body>
    </Html>
  );
}
