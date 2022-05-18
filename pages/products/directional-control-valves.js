import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ProductNav from "../components/nav-products";

const DirectionalControlValves = () => {
  return (
    <div>
      <div>
        <Head>
          <title>
            {" "}
            TU - Technical Union | Hydraulic Directional Control Valves{" "}
          </title>

          <meta
            name="description"
            content=" Find our catalog for directional control valves for hydraulics "
          />
          <meta name="keywords" content=" directional control valves" />
          <meta name="author" content="Edgar Lindo" />

          <meta
            property="og:title"
            content=" Technical Union | Directional Control Valves"
          />
          <meta
            property="og:description"
            content="Find Directional Control Valves from TU Technical Union"
          />
          <meta
            property="og:image"
            content="/images/oppictures/directional-control-valves.png"
          />
          <meta
            property="og:url"
            content="http://www.tu.biz/products/directional-control-valves"
          />
        </Head>
      </div>
      <div className="row">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12">
            <h6 className="product-title-text"> Directional Control Valves</h6>{" "}
            <br />
            <span className="product-pic d-flex justify-content-center">
              <Image
                src="/images/directional-control-valves.png"
                id="directional-control-valves"
                alt="directional control valves"
                width={272}
                height={85}
              />
            </span>
            <br />
            <Link href="/pdf/directional-control-valves.pdf">
              <a
                className="btn btn-info d-flex justify-content-center"
                target="blank"
              >
                Download PDF
              </a>
            </Link>
            <br />
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th colSpan="4" className="product-title-table-text">
                    {" "}
                    Directional Control Valves{" "}
                  </th>
                </tr>

                <tr className="inside-table-text">
                  <td>Size</td>
                  <td colSpan="2">Pressure (psi)</td>
                  <td> GPM </td>
                </tr>
              </thead>

              <tbody>
                <tr className="inside-table-text">
                  <td></td>
                  <td>
                    <strong>P-A-B</strong>
                  </td>
                  <td>
                    <strong>Tank</strong>
                  </td>
                  <td></td>
                </tr>

                <tr className="inside-table-text">
                  <td>NG6 / D03</td>
                  <td>4,567</td>
                  <td>2,300</td>
                  <td>21</td>
                </tr>

                <tr className="inside-table-text">
                  <td>NG10 / D05</td>
                  <td>4,567</td>
                  <td>2,300</td>
                  <td>32</td>
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

export default DirectionalControlValves;
