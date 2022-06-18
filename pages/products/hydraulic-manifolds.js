import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import PumpForm from "../components/pump-form";
import ProductNav from "../components/nav-products";

const HydraulicManifolds = () => {
  return (
    <div>
      <div>
        <Head>
          <meta charset="UTF-8" />
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
          <title> TU - Technical Union | Hydraulic Manifolds </title>

          <meta
            name="description"
            content=" Find our hydraulic manifold catalog. Everything from inventory for faster delivery times at competitive market pricing for your convenience. "
          />
          <meta name="keywords" content="hydraulic, manifolds,  " />
          <meta name="author" content="Edgar Lindo" />

          {/* OG tags */}

          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU-Technical Union" />

          <meta
            property="og:title"
            content=" Technical Union | Hydraulic Manifolds"
          />
          <meta
            property="og:description"
            content="Find Hydraulic Manifolds from Technical Union. Everything from inventory for faster delivery times at competitive market pricing for your convenience."
          />
          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/manifolds.png"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/products/hydraulic-manifolds"
          />
          {/* Twitter tags */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content=" Technical Union | Hydraulic Manifolds"
          />

          <meta
            name="twitter:description"
            content="Find Hydraulic manifolds  from TU Technical Union. Everything from inventory for faster delivery times at competitive market pricing for your convenience."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/oppictures/manifolds.png"
          />
        </Head>
      </div>
      <div className="row">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12">
            <h6 className="product-title-text"> Hydraulic Manifolds </h6> <br />
            <span className="product-pic d-flex justify-content-center">
              <Image
                src="/images/hydraulic-manifolds.png"
                id="hydraulic-manifolds"
                alt="hydraulic manifolds"
                width={250}
                height={187}
              />
            </span>
            <br />
            <div className="centering-btn">
              <Link href="/pdf/d03-manifold.pdf">
                <a
                  className="btn btn-info d-flex justify-content-center"
                  target="blank"
                >
                  Download PDF
                </a>
              </Link>
              <Link href="/pdf/d05-manifold.pdf">
                <a
                  className="btn btn-info d-flex justify-content-center"
                  target="blank"
                >
                  Download PDF
                </a>
              </Link>{" "}
              <Link href="/pdf/d07-manifold.pdf">
                <a
                  className="btn btn-info d-flex justify-content-center"
                  target="blank"
                >
                  Download PDF
                </a>
              </Link>{" "}
              <Link href="/pdf/d08-manifold.pdf">
                <a
                  className="btn btn-info d-flex justify-content-center"
                  target="blank"
                >
                  Download PDF
                </a>
              </Link>
            </div>
            <br />
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th colSpan="4" className="product-title-table-text">
                    {" "}
                    Hydraulic Manifolds{" "}
                  </th>
                </tr>

                <tr className="inside-table-text">
                  <td>Size</td>
                  <td>PSI</td>
                  <td>Material</td>
                  <td> Stations</td>
                </tr>
              </thead>

              <tbody>
                <tr className="inside-table-text">
                  <td>D03</td>
                  <td>3,000</td>
                  <td>Aluminum</td>
                  <td>1-16</td>
                </tr>

                <tr className="inside-table-text">
                  <td>D03</td>
                  <td>5,000</td>
                  <td>Ductile Iron</td>
                  <td>1-16</td>
                </tr>

                <tr className="inside-table-text">
                  <td>D05</td>
                  <td>3,000</td>
                  <td>Aluminum</td>
                  <td>1-21</td>
                </tr>

                <tr className="inside-table-text">
                  <td>D05</td>
                  <td>5,000</td>
                  <td>Ductile Iron</td>
                  <td>1-21</td>
                </tr>

                <tr className="inside-table-text">
                  <td>D07</td>
                  <td>3,000</td>
                  <td>Aluminum</td>
                  <td>1-8</td>
                </tr>

                <tr className="inside-table-text">
                  <td>D07</td>
                  <td>5,000</td>
                  <td>Ductile Iron</td>
                  <td>1-8</td>
                </tr>

                <tr className="inside-table-text">
                  <td>D08</td>
                  <td>3,000</td>
                  <td>Aluminum</td>
                  <td>1-7</td>
                </tr>

                <tr className="inside-table-text">
                  <td>D08</td>
                  <td>5,000</td>
                  <td>Ductile Iron</td>
                  <td>1-7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-3">
          <ProductNav />
        </div>
      </div>
    </div>
  );
};

export default HydraulicManifolds;
