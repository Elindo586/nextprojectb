// import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/general.css";
import "../styles/pagination.scss";
import Head from "next/head";
import MainNav from "../components/nav-main";
import Footer from "../components/footer";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  // if ("serviceWorker" in navigator) {
  //   navigator.serviceWorker.register("/sw.js").then(function () {
  //     console.log("service worker registered");
  //   });
  // }
  return (
    <div>
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
