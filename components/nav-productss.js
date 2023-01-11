import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProductNav2() {
  function showPumps() {
    document.getElementById("pumpDropdown").classList.toggle("showPumps");
  }
  function showMotors() {
    document.getElementById("motorDropdown").classList.toggle("showPumps");
  }
  function showValves() {
    document.getElementById("valveDropdown").classList.toggle("showPumps");
  }

  const [pathName, setPathName] = useState();

  useEffect(() => {
    const url = window.location.pathname;
    setPathName(url);
  }, []);

  return (
    <div className=" col-md-3">
      <Row>
        <h3 className="nav2title">PRODUCTS</h3>
      </Row>
      <div className="nav2">
        <Row>
          {" "}
          <button onClick={showPumps} className="link1">
            {" "}
            <b>Pumps</b>
          </button>{" "}
        </Row>
        <Col id="pumpDropdown" className="pumpHidden">
          <Row>
            <Link href="/products/piston-pumps" passHref>
              <a
                className={
                  pathName === "/products/piston-pumps"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Piston Pumps
              </a>
            </Link>
          </Row>
          <Row>
            <Link href="/products/vane-pumps" passHref>
              <a
                className={
                  pathName === "/products/vane-pumps"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Vane Pumps
              </a>
            </Link>
          </Row>
          <Row>
            <Link href="/products/gear-pumps" passHref>
              <a
                className={
                  pathName === "/products/gear-pumps"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Gear Pumps
              </a>
            </Link>
          </Row>
        </Col>

        <Row>
          <button onClick={showMotors} className="link1">
            <b>Motors</b>
          </button>
        </Row>
        <Col id="motorDropdown" className="pumpHidden">
          <Row>
            <Link href="/products/geroler-motors" passHref>
              <a
                className={
                  pathName === "/products/geroler-motors"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Geroler Motors
              </a>
            </Link>
          </Row>
          <Row>
            <Link href="/products/vane-motors" passHref>
              <a
                className={
                  pathName === "/products/vane-motors"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Vane Motors
              </a>
            </Link>
          </Row>
        </Col>
        <Row>
          <button onClick={showValves} className="link1">
            {" "}
            <b>Valves</b>
          </button>
        </Row>
        <Col id="valveDropdown" className="pumpHidden">
          <Row>Industrial Valves</Row>
          <Row>
            <Link
              href="/products/industrial-valves/directional-control-valves"
              passHref
            >
              <a
                className={
                  pathName ===
                  "/products/industrial/valves/directional-control-valves"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Directional Control
              </a>
            </Link>
          </Row>
          <Row>
            <Link
              href="/products/industrial-valves/flow-control-valves"
              passHref
            >
              <a
                className={
                  pathName === "/products/industrial-valves/flow-control-valves"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Flow Control
              </a>
            </Link>
          </Row>
          <Row>Mobile Valves</Row>
          <Row></Row>
        </Col>
        <Row>
          <button className="link1" href="#">
            <b>Flowmeters</b>
          </button>
        </Row>
        <Col id="flowmeterDropdown" className="pumpHidden">
          <Row>
            {" "}
            <Link href="/products/flowmeters" passHref>
              <a
                className={
                  pathName === "/products/flowmeters"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Flowmeters
              </a>
            </Link>
          </Row>
        </Col>
        <Row>
          <button className="link1">
            {" "}
            <b>Manifolds</b>
          </button>
        </Row>
        <Col>
          <Row>
            <Link href="/products/hydraulic-manifolds" passHref>
              <a
                className={
                  pathName === "/products/hydraulic-manifolds"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Manifolds
              </a>
            </Link>
          </Row>
        </Col>
      </div>
    </div>
  );
}
export default ProductNav2;
