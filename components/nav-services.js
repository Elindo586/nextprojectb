import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ServicesNav() {
  const [pathName, setPathName] = useState();

  useEffect(() => {
    const url = window.location.pathname;
    setPathName(url);
  }, []);

  return (
    <div className="col-md-3 ">
      <div className="nav2">
        <Row>
          <p className="nav2title">
            <b>Services</b>
          </p>
        </Row>
        <Row>
          <Col className="link1" href="">
            Oil Analysis
          </Col>
        </Row>

        <Row>
          <Link legacyBehavior href="/services/fluid-analysis" passHref>
            <a
              className={
                pathName === "/services/fluid-analysis"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Laboratory Testing
            </a>
          </Link>
        </Row>

        <Row>
          <Col className="link1" href="#">
            Preventive Maintenance
          </Col>
        </Row>
        <Row>
          <Link
            legacyBehavior
            href="/services/preventive-maintenance-programs"
            passHref
          >
            <a
              className={
                pathName === "/services/preventive-maintenance-programs"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Programs
            </a>
          </Link>
        </Row>
      </div>
    </div>
  );
}

export default ServicesNav;
