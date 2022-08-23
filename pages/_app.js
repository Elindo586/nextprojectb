// import "../styles/globals.css";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/general.css";
import "../styles/pagination.scss";
import Head from "next/head";
import MainNav from "../components/nav-main";
import Footer from "../components/footer";
import Script from "next/script";
import Sw from "../public/sw";
// import Manifest from "../public/manifest.json";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <div>
      <div>
        <Head>
          <link rel="manifest" href="/manifest.json" />
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
          crossorigin="anonymous"
        />
      </div>

      <nav>
        <MainNav />
      </nav>
      <Component {...pageProps} />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;
