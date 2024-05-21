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
              gtag('config', 'G-4RB3V861V1');
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
