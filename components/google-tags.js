import React from "react";
import Script from "next/script";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

const GoogleTags = () => {
  const [load, setLoad] = useState(true);

  // const handleYes = () => {
  //   document.getElementById("main-cookies-id").style.display = "none";
  // };
  const handleNo = () => {
    document.getElementById("main-cookies-id").style.display = "none";
  };

  useEffect(() => {
    if (load) {
      setTimeout(() => {
        document.getElementById("main-cookies-id").style.display = "block";
      }, 2000);
    }
    setLoad(false);
  }, [load]);

  return (
    <Container id="main-cookies-id" className="main-cookies">
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
        {/* <Script
          id="google-tag2"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4RB3V861V1"
        /> */}
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
            }`,
          }}
        />
      </Row>
      <Row>
        <div>
          <p>do you want cookies? </p>
        </div>
      </Row>
      <Row>
        <Col>
          <button onClick={allConsentGranted}>Yes</button>{" "}
        </Col>
        <Col>
          <button onClick={handleNo}>No</button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default GoogleTags;
