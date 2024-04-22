import React from "react";
import Script from "next/script";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GoogleTags = () => {
  const handleYes = () => {};
  const handleNo = () => {};
  return (
    <Container id="main-cookies-id" ClassName="main-cookies">
      <Row>
        {" "}
        {/* <Script
            id="gtag-init1"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: ` 
              window.dataLayer = window.dataLayer || [];
              unction gtag(){dataLayer.push(arguments);}
              // Set default consent to 'denied' as a placeholder
              // Determine actual values based on your own requirements
              gtag('consent', 'default', {
              'ad_storage': 'denied',
              'wait_for_update': 500,
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied'
              `,
            }}
          />
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-4RB3V861V1"
          />
          <Script
            id="gtag-init"
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
            id="gtag-function-update"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
          function consentGrantedAdStorage () {
            gtag('consent', 'update', {
              'ad_storage': 'granted'
            });
          }`,
            }}
          /> */}
      </Row>
      <Row>
        <div>
          <p>do you want cookies? </p>
        </div>
      </Row>
      <Row>
        <Col>
          <button onClick={handleYes}>Yes</button>{" "}
        </Col>
        <Col>
          <button onClick={handleNo}>No</button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default GoogleTags;
