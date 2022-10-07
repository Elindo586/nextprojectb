import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  function fullYear() {
    const yearFormat = new Date();
    return yearFormat.getFullYear();
  }
  return (
    <div>
      <footer className="main-footer">
        <Container>
          <Row>
            <Col className="footer-privacy">
              <b>PRIVACY</b>
            </Col>
          </Row>
          <Row>
            {" "}
            <Col>
              <p className="copyright">
                Copyright © {fullYear()} TU - All Rights Reserved{" "}
              </p>
            </Col>
            <Col className="dev-by">
              <span className="dev-by2">Developed by:</span>{" "}
              <a
                className="edgar"
                href="https://www.edgarlindo.com/"
                target="blank"
              >
                Edgar Lindo
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
