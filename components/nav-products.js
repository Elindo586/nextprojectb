import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

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

  function showLinearBearings() {
    document
      .getElementById("linearBearingsDropdown")
      .classList.toggle("showPumps");
  }

  function showBallScrews() {
    document.getElementById("ballScrewsDropdown").classList.toggle("showPumps");
  }

  const [pathName, setPathName] = useState();

  useEffect(() => {
    const url = window.location.pathname;
    setPathName(url);
  }, []);

  return (
    <div className=" col-md-3">
      <div className="nav2">
        <div className="row">
          {" "}
          <p className="nav2title">
            <b>Products</b>
          </p>
        </div>
        <div className="row">
          {" "}
          <button onClick={showPumps} className="link1">
            {" "}
            <b>Pumps</b>
          </button>{" "}
        </div>
        <div id="pumpDropdown" className=" col pumpHidden">
          <div className="row">
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
          </div>
          <div className="row">
            <Link
              href="/products/vane-pumps"
              className={
                pathName === "/products/vane-pumps" ? "link2 active2" : "link2"
              }
            >
              Vane Pumps
            </Link>
          </div>
          <div className="row">
            <Link
              href="/products/gear-pumps"
              className={
                pathName === "/products/gear-pumps" ? "link2 active2" : "link2"
              }
            >
              Gear Pumps
            </Link>
          </div>
        </div>

        <div className="row">
          <button onClick={showMotors} className="link1">
            <b>Motors</b>
          </button>
        </div>
        <div id="motorDropdown" className=" col pumpHidden">
          <div className="row">
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
          </div>
          <div className="row">
            <Link
              href="/products/vane-motors"
              className={
                pathName === "/products/vane-motors" ? "link2 active2" : "link2"
              }
            >
              Vane Motors
            </Link>
          </div>
        </div>
        <div className="row">
          <button onClick={showValves} className="link1">
            {" "}
            <b>Valves</b>
          </button>
        </div>
        <div id="valveDropdown" className=" col pumpHidden">
          <div className=" row link2Tittle">Industrial Valves</div>
          <div className="row">
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
          </div>
          <div className="row">
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
          </div>
          {/* <div className=" row link2Tittle">Mobile Valves</div> */}
          {/* <div className="col">
            <div className="row">
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
            </div>
            <div className="row">
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
            </div>
            <div className="row">
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
            </div>
            <div className="row">
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
            </div>
            <div className="row">
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
            </div>
            <div className="row">
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
            </div>
            <div className="row">
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
            </div>
          </div> */}
        </div>
        {/* <div className="row">
          <button onClick={showFlowmeters} className="link1">
            <b>Flowmeters</b>
          </button>
        </div>
        <div id="flowmeterDropdown" className=" col pumpHidden">
          <div className="row">
            {" "}
            <Link
              href="/products/flowmeters"
              className={
                pathName === "/products/flowmeters" ? "link2 active2" : "link2"
              }
            >
              Flowmeters
            </Link>
          </div>
        </div> */}
        <div className="row">
          <button onClick={showManifolds} className="link1">
            {" "}
            <b>Manifolds</b>
          </button>
        </div>
        <div id="manifoldDropdown" className=" col pumpHidden">
          <div className="row">
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
          </div>
        </div>
        <div className="row">
          {" "}
          <button onClick={showFilters} className="link1">
            <b>Filters</b>
          </button>
        </div>
        <div id="filterDropdown" className=" col pumpHidden">
          <div className="row">
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
          </div>
        </div>
        <div className="row">
          {" "}
          <button onClick={showLinearBearings} className="link1">
            <b>Linear Bearings</b>
          </button>
        </div>
        <div id="linearBearingsDropdown" className=" col pumpHidden">
          <div className="row">
            {" "}
            <Link
              href="/products/mechanical/linear-bearings"
              className={
                pathName === "/products/mechanical/linear-bearings"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Linear Bearings
            </Link>
          </div>
        </div>
        <div className="row">
          {" "}
          <button onClick={showBallScrews} className="link1">
            <b>Ball Screws</b>
          </button>
        </div>
        <div id="ballScrewsDropdown" className=" col pumpHidden">
          <div className="row">
            {" "}
            <Link
              href="/products/mechanical/ball-screws"
              className={
                pathName === "/products/mechanical/ball-screws"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Ball Screws
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductNav;
