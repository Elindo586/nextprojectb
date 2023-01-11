import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProductNav() {
  function showPumps() {
    document.getElementById("pumpDropdown").classList.toggle("showPumps");
  }
  function showMotors() {
    document.getElementById("motorDropdown").classList.toggle("showPumps");
  }
  function showValves() {
    document.getElementById("valveDropdown").classList.toggle("showPumps");
  }

  function showFlowmeters() {
    document.getElementById("flowmeterDropdown").classList.toggle("showPumps");
  }

  function showManifolds() {
    document.getElementById("manifoldDropdown").classList.toggle("showPumps");
  }

  function showFilters() {
    document.getElementById("filterDropdown").classList.toggle("showPumps");
  }

  const [pathName, setPathName] = useState();

  useEffect(() => {
    const url = window.location.pathname;
    setPathName(url);
  }, []);

  return (
    <div className=" col-md-3">
      <div className="nav2">
        <Row>
          {" "}
          <p className="nav2title">
            <b>Products</b>
          </p>
        </Row>
        <Row>
          {" "}
          <button onClick={showPumps} className="link1">
            {" "}
            <b>Pumps</b>
          </button>{" "}
        </Row>
        <Col id="pumpDropdown" className="pumpHidden">
          <Row>
            <Link
              href="/products/piston-pumps"
              className={
                pathName === "/products/piston-pumps"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Piston Pumps
            </Link>
          </Row>
          <Row>
            <Link
              href="/products/vane-pumps"
              className={
                pathName === "/products/vane-pumps" ? "link2 active2" : "link2"
              }
            >
              Vane Pumps
            </Link>
          </Row>
          <Row>
            <Link
              href="/products/gear-pumps"
              className={
                pathName === "/products/gear-pumps" ? "link2 active2" : "link2"
              }
            >
              Gear Pumps
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
            <Link
              href="/products/geroler-motors"
              className={
                pathName === "/products/geroler-motors"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Geroler Motors
            </Link>
          </Row>
          <Row>
            <Link
              href="/products/vane-motors"
              className={
                pathName === "/products/vane-motors" ? "link2 active2" : "link2"
              }
            >
              Vane Motors
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
          <Row className="link2Tittle">Industrial Valves</Row>
          <Row>
            <Link
              href="/products/industrial-valves/directional-control-valves"
              className={
                pathName ===
                "/products/industrial/valves/directional-control-valves"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Directional Control
            </Link>
          </Row>
          <Row>
            <Link
              href="/products/industrial-valves/flow-control-valves"
              className={
                pathName === "/products/industrial-valves/flow-control-valves"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Flow Control
            </Link>
          </Row>
          <Row className="link2Tittle">Mobile Valves</Row>
          <Col>
            <Row>
              <Link
                href="/products/mobile-valves/hydraulic-counterbalance-valves"
                className={
                  pathName ===
                  "/products/mobile-valves/hydraulic-counterbalance-valves"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Counterbalance
              </Link>
            </Row>
            <Row>
              <Link
                href="/products/mobile-valves/hydraulic-sequence-valves"
                className={
                  pathName ===
                  "/products/mobile-valves/hydraulic-sequence-valves"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Sequence
              </Link>
            </Row>
            <Row>
              <Link
                href="/products/mobile-valves/hydraulic-relief-valves"
                className={
                  pathName === "/products/mobile-valves/hydraulic-relief-valves"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Relief
              </Link>
            </Row>
            <Row>
              <Link
                href="/products/mobile-valves/hydraulic-check-valves"
                className={
                  pathName === "/products/mobile-valves/hydraulic-check-valves"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Check
              </Link>
            </Row>
            <Row>
              <Link
                href="/products/mobile-valves/hydraulic-shuttle-valves"
                className={
                  pathName ===
                  "/products/mobile-valves/hydraulic-shuttle-valves"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Shuttle
              </Link>
            </Row>
            <Row>
              <Link
                href="/products/mobile-valves/hydraulic-hose-burst-valves"
                className={
                  pathName ===
                  "/products/mobile-valves/hydraulic-hose-burst-valves"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Hose Burts
              </Link>
            </Row>
            <Row>
              <Link
                href="/products/mobile-valves/hydraulic-flow-divider-valves"
                className={
                  pathName ===
                  "/products/mobile-valves/hydraulic-flow-divider-valves"
                    ? "link2 active2"
                    : "link2"
                }
              >
                Flow Divider
              </Link>
            </Row>
          </Col>
        </Col>
        <Row>
          <button onClick={showFlowmeters} className="link1">
            <b>Flowmeters</b>
          </button>
        </Row>
        <Col id="flowmeterDropdown" className="pumpHidden">
          <Row>
            {" "}
            <Link
              href="/products/flowmeters"
              className={
                pathName === "/products/flowmeters" ? "link2 active2" : "link2"
              }
            >
              Flowmeters
            </Link>
          </Row>
        </Col>
        <Row>
          <button onClick={showManifolds} className="link1">
            {" "}
            <b>Manifolds</b>
          </button>
        </Row>
        <Col id="manifoldDropdown" className="pumpHidden">
          <Row>
            <Link
              href="/products/hydraulic-manifolds"
              className={
                pathName === "/products/hydraulic-manifolds"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Manifolds
            </Link>
          </Row>
        </Col>
        <Row>
          {" "}
          <button onClick={showFilters} className="link1">
            <b>Filters</b>
          </button>
        </Row>
        <Col id="filterDropdown" className="pumpHidden">
          <Row>
            {" "}
            <Link
              href="/products/filter-elements"
              className={
                pathName === "/products/filter-elements"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Filter Elements
            </Link>
          </Row>
        </Col>
      </div>
    </div>
  );
}
export default ProductNav;
