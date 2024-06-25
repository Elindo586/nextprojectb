import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

function ProductNavSpanish() {
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
            <b>Productos</b>
          </p>
        </div>
        <div className="row">
          {" "}
          <button onClick={showPumps} className="link1">
            {" "}
            <b>Bombas</b>
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
              Bombas de Pistón
            </Link>
          </div>
          <div className="row">
            <Link
              href="/products/vane-pumps"
              className={
                pathName === "/products/vane-pumps" ? "link2 active2" : "link2"
              }
            >
              Bombas de Paletas
            </Link>
          </div>
          <div className="row">
            <Link
              href="/products/gear-pumps"
              className={
                pathName === "/products/gear-pumps" ? "link2 active2" : "link2"
              }
            >
              Bombas de Engranajes
            </Link>
          </div>
        </div>

        <div className="row">
          <button onClick={showMotors} className="link1">
            <b>Motores</b>
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
              Motores Geroler
            </Link>
          </div>
          <div className="row">
            <Link
              href="/products/vane-motors"
              className={
                pathName === "/products/vane-motors" ? "link2 active2" : "link2"
              }
            >
              Motores de Paletas
            </Link>
          </div>
        </div>
        <div className="row">
          <button onClick={showValves} className="link1">
            {" "}
            <b>Válvulas</b>
          </button>
        </div>
        <div id="valveDropdown" className=" col pumpHidden">
          <div className=" row link2Tittle">Válvulas Industriales</div>
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
              Control Direccional
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
              Control de Flujo
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
            <b>Filtros</b>
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
              Elementos Filtrantes
            </Link>
          </div>
        </div>
        <div className="row">
          {" "}
          <button onClick={showLinearBearings} className="link1">
            <b>Guías Lineales</b>
          </button>
        </div>
        <div id="linearBearingsDropdown" className=" col pumpHidden">
          <div className="row">
            {" "}
            <Link
              href="/castellano/productos/mecanicos/guias-lineales"
              className={
                pathName === "/castellano/productos/mecanicos/guias-lineales"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Guías Lineales
            </Link>
          </div>
        </div>
        <div className="row">
          {" "}
          <button onClick={showBallScrews} className="link1">
            <b>Husillo de bolas</b>
          </button>
        </div>
        <div id="ballScrewsDropdown" className=" col pumpHidden">
          <div className="row">
            {" "}
            <Link
              href="/castellano/productos/mecanicos/husillos-de-bolas"
              className={
                pathName === "/castellano/productos/mecanicos/husillos-de-bolas"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Husillo de bolas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductNavSpanish;
