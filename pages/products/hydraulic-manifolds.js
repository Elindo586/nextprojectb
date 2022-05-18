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
          <title> TU - Technical Union | Hydraulic Manifolds </title>

          <meta
            name="description"
            content=" Find our hydraulic manifold catalog "
          />
          <meta name="keywords" content="hydraulic, manifolds,  " />
          <meta name="author" content="Edgar Lindo" />

          <meta
            name="facebook-domain-verification"
            content="fzctnjbrtlybvytmamk8glkng9af7p"
          />

          <meta
            property="og:title"
            content=" Technical Union | Hydraulic Manifolds"
          />
          <meta
            property="og:description"
            content="Find Hydraulic Manifolds from Technical Union"
          />
          <meta
            property="og:image"
            content="/images/oppictures/manifolds.png"
          />
          <meta
            property="og:url"
            content="http://www.tu.biz/products/hydraulic-manifolds"
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
