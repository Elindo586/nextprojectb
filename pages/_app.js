// import "../styles/globals.css";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/general.css";
import "../styles/pagination.scss";
import Head from "next/head";
import MainNav from "../components/nav-main";
import Footer from "../components/footer";
import Script from "next/script";
// import Sw from "../public/sw";
// import Manifest from "../public/manifest.json";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     window.addEventListener("load", function () {
  //       navigator.serviceWorker.register("/sw.js").then(
  //         function (registration) {
  //           console.log(
  //             "Service Worker registration successful with scope: ",
  //             registration.scope
  //           );
  //         },
  //         function (err) {
  //           console.log("Service Worker registration failed: ", err);
  //         }
  //       );
  //     });
  //   }
  // }, []);

  return (
    <div>
      <div>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#016698" />

          {/* IOS */}
          <meta name="format-detection" content="telephone=no"></meta>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/io/icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/io/icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/io/icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/io/icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/io/icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/io/icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/io/icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/io/icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/io/icon-180x180.png"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Technical Union"
          ></meta>
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black"
          ></meta>

          {/* ANDROID */}
          <meta name="mobile-web-app-capable" content="yes" />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/android/icon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/android/icon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/android/icon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android/icon-192x192.png"
          />
        </Head>
      </div>
      <div>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=UA-36867189-2"
        />

        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-36867189-2');
            `,
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8682017023658879"
          crossOrigin="anonymous"
        />
      </div>

      <nav>
        <MainNav />
      </nav>
      <Component {...pageProps} />

      <footer>
        <Footer />
      </footer>
      <script async type="module" src="app.js"></script>
    </div>
  );
}

export default MyApp;
