import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

function ProductNav() {
  const [pathName, setPathName] = useState();

  useEffect(() => {
    const url = window.location.pathname;
    setPathName(url);
  });

  return (
    <div className=" col-md-3">
      <h3 className="nav2title">PRODUCTS</h3>
      <ul className="nav2">
        <li>
          <h5 className="link1" href="#">
            Pumps
          </h5>
        </li>
        <dl>
          {/* Might need to useState on which link is active */}
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
        </dl>
        <dl>
          <Link href="/products/vane-pumps" passHref>
            <a
              className={
                pathName === "/products/vane-pumps" ? "link2 active2" : "link2"
              }
            >
              Vane Pumps
            </a>
          </Link>
        </dl>

        <dl>
          <Link href="/products/gear-pumps" passHref>
            <a
              className={
                pathName === "/products/gear-pumps" ? "link2 active2" : "link2"
              }
            >
              Gear Pumps
            </a>
          </Link>
        </dl>

        <li>
          <h5 className="link1" href="#">
            Motors
          </h5>
        </li>
        <dl>
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
        </dl>
        <dl>
          <Link href="/products/vane-motors" passHref>
            <a
              className={
                pathName === "/products/vane-motors" ? "link2 active2" : "link2"
              }
            >
              Vane Motors
            </a>
          </Link>
        </dl>

        <li>
          <h5 className="link1" href="#">
            Flowmeters
          </h5>
        </li>
        <dl>
          <Link href="/products/flowmeters" passHref>
            <a
              className={
                pathName === "/products/flowmeters" ? "link2 active2" : "link2"
              }
            >
              Flowmeters
            </a>
          </Link>
        </dl>

        <li>
          <h5 className="link1" href="#">
            Valves
          </h5>
        </li>
        <dl>
          <Link href="/products/directional-control-valves" passHref>
            <a
              className={
                pathName === "/products/directional-control-valves"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Directional Control
            </a>
          </Link>
        </dl>

        <dl>
          <Link href="/products/flow-control-valves" passHref>
            <a
              className={
                pathName === "/products/flow-control-valves"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Flow Control
            </a>
          </Link>
        </dl>

        <li>
          <h5 className="link1"> Manifolds</h5>
        </li>
        <dl>
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
        </dl>
      </ul>
    </div>
  );
}
export default ProductNav;
