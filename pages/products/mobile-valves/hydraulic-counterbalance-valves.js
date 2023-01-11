import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ProductNav from "../../../components/nav-products";

const MobileCounterbalanceValves = () => {
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
          <title> TU | Hydraulic Mobile Counterbalance Valves</title>

          <meta
            name="description"
            content=" Find our catalog for counterbalance valves for hydraulics. Everything from inventory for faster delivery times. "
          />
          <meta name="keywords" content="TU, counterbalance valves" />
          <meta name="author" content="Edgar Lindo" />

          {/* OpenGraph tags */}

          <meta property="og:locale" content="en" />
          <meta
            property="site_name"
            content="TU | Conterbalance hydraulic valves."
          />

          <meta
            property="og:title"
            content=" TU | Hydraulic Mobile Counterbalance Valves."
          />
          <meta
            property="og:description"
            content="Find Counterbalance Valves from TU. Everything from inventory for faster delivery times"
          />
          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/mobile-valves-counterbalance.png"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/products/mobile-valves/hydraulic-counterbalance-valves"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content=" TU | Hydraulic counterbalance valves."
          />

          <meta
            name="twitter:description"
            content="Find Counterbalance Valves from TU Technical Union. Everything from inventory for faster delivery times."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/oppictures/mobile-valves-counterbalance.png"
          />
        </Head>
      </div>
      <div className="row" lang="en">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12">
            <h6 className="product-title-text">
              {" "}
              Hydraulic Mobile Counterbalance Valves
            </h6>{" "}
            <br />
            <span className="product-pic d-flex justify-content-center">
              <Image
                src="/images/mobile-valves/tsay.png"
                id="hydraulic-counterbalance-valve"
                alt="mobile hydraulic counterbalance valve"
                width={180.5}
                height={150}
              />
            </span>
            <br />
            <Link
              className="btn btn-info d-flex justify-content-center"
              target="blank"
              href="/pdf/mobile-hydraulic-valves/counterbalance/tsay.pdf"
            >
              Download PDF
            </Link>
            <br />
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th colSpan="4" className="product-title-table-text">
                    {" "}
                    Hydraulic Counterbalance Valves{" "}
                  </th>
                </tr>

                <tr className="inside-table-text">
                  <td>Part</td>
                  <td>Max Flow (gpm)</td>
                  <td> Standard Setting (psi) </td>
                  <td> Range (psi) </td>
                </tr>
              </thead>

              <tbody>
                <tr className="inside-table-text">
                  <td>TSA1B21YA</td>
                  <td>7.9</td>
                  <td>3,045</td>
                  <td>435-3,045</td>
                </tr>

                <tr className="inside-table-text">
                  <td>TSA1B35YA</td>
                  <td>7.9</td>
                  <td>5,075</td>
                  <td>870-5,075</td>
                </tr>

                <tr className="inside-table-text">
                  <td>TSA2B21YA</td>
                  <td>10.6</td>
                  <td>3,045</td>
                  <td>435-3,045</td>
                </tr>
                <tr className="inside-table-text">
                  <td>TSA2B35YA</td>
                  <td>10.6</td>
                  <td>5,075</td>
                  <td>870-5,075</td>
                </tr>
                <tr className="inside-table-text">
                  <td>TSA3B21YA</td>
                  <td>15.9</td>
                  <td>3,045</td>
                  <td>435-3,045</td>
                </tr>
                <tr className="inside-table-text">
                  <td>TSAB35YA</td>
                  <td>15.9</td>
                  <td>5,075</td>
                  <td>870-5,075</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-3">
          {" "}
          <ProductNav />
        </div>
      </div>
    </div>
  );
};

export default MobileCounterbalanceValves;
