import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

function ProductNav() {
  const [pathName, setPathName] = useState();

  useEffect(() => {
    const url = window.location.pathname;
    setPathName(url);
  }, []);

  return (
    <div className=" col-md-3">
      <h3 className="nav2title">PRODUCTS</h3>
      <dl className="nav2">
        <dt>
          <p className="link1" href="#">
            Pumps
          </p>
        </dt>
        <dd>
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
        </dd>
        <dd>
          <Link href="/products/vane-pumps" passHref>
            <a
              className={
                pathName === "/products/vane-pumps" ? "link2 active2" : "link2"
              }
            >
              Vane Pumps
            </a>
          </Link>
        </dd>

        <dd>
          <Link href="/products/gear-pumps" passHref>
            <a
              className={
                pathName === "/products/gear-pumps" ? "link2 active2" : "link2"
              }
            >
              Gear Pumps
            </a>
          </Link>
        </dd>

        <dt>
          <p className="link1" href="#">
            Motors
          </p>
        </dt>
        <dd>
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
        </dd>
        <dd>
          <Link href="/products/vane-motors" passHref>
            <a
              className={
                pathName === "/products/vane-motors" ? "link2 active2" : "link2"
              }
            >
              Vane Motors
            </a>
          </Link>
        </dd>

        <dt>
          <p className="link1" href="#">
            Flowmeters
          </p>
        </dt>
        <dd>
          <Link href="/products/flowmeters" passHref>
            <a
              className={
                pathName === "/products/flowmeters" ? "link2 active2" : "link2"
              }
            >
              Flowmeters
            </a>
          </Link>
        </dd>

        <dt>
          <p className="link1" href="#">
            Valves
          </p>
        </dt>
        <dd>
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
        </dd>

        <dd>
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
        </dd>

        <dt>
          <p className="link1"> Manifolds</p>
        </dt>
        <dd>
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
        </dd>
      </dl>
    </div>
  );
}
export default ProductNav;
