import React from "react";
import Script from "next/script";

import { useEffect } from "react";

// Define allConsentGranted outside the component

const GoogleTags = () => {
  useEffect(() => {
    if (
      !sessionStorage.getItem("theTags1") &&
      !sessionStorage.getItem("theTags2")
    ) {
      setTimeout(() => {
        document.getElementById("main-cookies-id").style.display = "block";
      }, 2000);
    }
  }, []);

  const handleNo = () => {
    document.getElementById("main-cookies-id").style.display = "none";
    sessionStorage.setItem("theTags2", "tagsNotAccepted");
  };

  return (
    <div id="main-cookies-id" className=" container-md main-cookies ">
      <div className="row">
        <Script
          id="google-tag1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `      
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
              gtag('set', 'url_passthrough', true);
              gtag('set', 'ads_data_redaction', true);
              `,
          }}
        />

        <Script
          id="google-tag2"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4RB3V861V1"
        />

        <Script
          id="google-tag3"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4RB3V861V1', { 'debug_mode':true });
            `,
          }}
        />
        <Script
          id="google-tag4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            function allConsentGranted() {
              gtag('consent', 'update', {
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
              });
              

              document.getElementById("main-cookies-id").style.display = "none";
              sessionStorage.setItem("theTags1", "tagsAccepted");
            }`,
          }}
        />
        {/* <Script
          id="google-tag-manager-1"
          strategy="afterInteractive"
          dangeroulySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KXZRG4LK'); `,
          }}
        /> */}

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KXZRG4LK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </div>
      <div>
        <div className="row">
          <div>
            <h4>Privacy Preferences</h4>
            <p>
              We use cookies and similar methods to recognize visitors and
              remember their preferences.{" "}
            </p>
            <p>
              We also use them to measure ad campaign effectiveness, target ads
              and analyze site traffic.
            </p>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              onClick={() => {
                if (typeof window.allConsentGranted !== "undefined") {
                  window.allConsentGranted();
                } else {
                  console.log("allConsentGranted not found in global scope");
                }
              }}
            >
              Accept All
            </button>{" "}
          </div>
          <div className="col">
            <button onClick={handleNo}>Decline All</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleTags;
