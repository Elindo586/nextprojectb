import React from "react";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Pagination from "react-bootstrap/Pagination";

import db from "../../utils/parts-charlynn.json";

const Inventory2 = () => {
  return (
    <div>
      <div>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/images/tu-favicon.png"
          />

          <meta
            name="facebook-domain-verification"
            content="fzctnjbrtlybvytmamk8glkng9af7p"
          />
          <title>
            TU | Industrial exporters, hydraulics, pneumatics, electrical,
            mechanical products.{" "}
          </title>

          <meta
            name="description"
            content=" Product categories for hydraulic, mechanical, electrical and more.."
          />
          <meta
            name="keywords"
            content="tu, hydraulics, valves, motors, pumps"
          />
          <meta name="author" content="Edgar Lindo" />

          {/* OG tags */}

          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />

          <meta
            property="og:title"
            content="TU | Industrial exporters, hydraulics, pneumatics, electrical,
            mechanical products"
          />
          <meta
            property="og:description"
            content=" Product categories for hydraulic, mechanical, electrical and more.."
          />
          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/inventory.png"
          />
          <meta property="og:url" content="https://www.tu.biz/inventory" />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content=" TU | Industrial exporters, hydraulics, pneumatics, electrical,
            mechanical products"
          />

          <meta
            name="twitter:description"
            content=" Product categories for hydraulic, mechanical, electrical and more.."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/oppictures/inventory.png"
          />
        </Head>
      </div>
      <div className="col-md-12 invy-text">
        Here is a quick overview of regular components coming from our
        inventory. <br />
        If you have any requirements on these components you can always{" "}
        <a href="https://www.tu.biz/contact-us" className="contact-us">
          {" "}
          contact us{" "}
        </a>{" "}
        for a quote request.
      </div>
      <div className="col-md-12">
        <span>
          {" "}
          <h3>General Inventory Items</h3>
        </span>
      </div>

      <div className="col-md-12 ">
        Click below for alternative components to replace items such as:
        <br /> <br />
      </div>
      <div className="col-md-12 footer-margin">
        <ul>
          <li>
            <Link legacyBehavior href="/inventory/vickers">
              <a className="inventory-list">Eaton-Vickers</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/inventory/charlynn">
              <a className="inventory-list">Eaton-Charlynn</a>
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link legacyBehavior href="/inventory/rexroth">
              <a className="inventory-list">Bosch-Rexroth</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link legacyBehavior href="/inventory/racine">
              <a className="inventory-list">Bosch-Racine</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/inventory/parker">
              <a className="inventory-list">Parker</a>
            </Link>{" "}
          </li>
          <li>
            <Link legacyBehavior href="/inventory/denison">
              <a className="inventory-list">Parker Denison</a>
            </Link>{" "}
          </li>
        </ul>
      </div>

      <div className="col-md-12"></div>
    </div>
  );
};

export default Inventory2;
