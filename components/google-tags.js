import React from "react";
import Script from "next/script";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";

const GoogleTags = () => {
  const handleNo = () => {
    document.getElementById("main-cookies-id").style.display = "none";
    localStorage.setItem("theTags2", "tagsNotAccepted");
  };

  useEffect(() => {
    if (
      !localStorage.getItem("theTags1") &&
      !localStorage.getItem("theTags2")
    ) {
      setTimeout(() => {
        document.getElementById("main-cookies-id").style.display = "block";
      }, 2000);
    }
  }, []);

  return (
    <Container md={8} xs={8} id="main-cookies-id" className="main-cookies ">
      <Row>
        {" "}
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
              });`,
          }}
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
          id="check-cookies"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
    (function() {
      function allConsentGrantedCheck() {
        if (localStorage.getItem("theTags1") === "tagsAccepted") {
          gtag('consent', 'update', {
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'ad_storage': 'granted',
            'analytics_storage': 'granted'
          }); 
          document.getElementById("main-cookies-id").style.display = "none";
          console.log("tagsAccepted");
         
        }
        
        if (localStorage.getItem("theTags2") === "tagsNotAccepted") {
          document.getElementById("main-cookies-id").style.display = "none";
         
        }
      }
      
      // Call the function immediately
      allConsentGrantedCheck();
    })();
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
              localStorage.setItem("theTags1", "tagsAccepted");
            }`,
          }}
        />
      </Row>

      <Row>
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
      </Row>
      <Row>
        <Col>
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
        </Col>
        <Col>
          <button onClick={handleNo}>Decline All</button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default GoogleTags;
