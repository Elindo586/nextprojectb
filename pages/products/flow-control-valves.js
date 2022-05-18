import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ProductNav from "../components/nav-products";

const FlowControlValves = () => {
  return (
    <div>
      <div>
        <Head>
          <title>
            {" "}
            TU - Technical Union | Flow Control Valves | Needle Valves{" "}
          </title>

          <meta
            name="description"
            content=" Catalog for Flow control valves and needle valves. "
          />
          <meta
            name="keywords"
            content=" flow control valves, needle valves "
          />
          <meta name="author" content="Edgar Lindo" />

          <meta
            property="og:title"
            content=" Technical Union | Flow Control Valves"
          />
          <meta
            property="og:description"
            content="Find Flow Control Valves from TU Technical Union"
          />
          <meta
            property="og:image"
            content="/images/oppictures/flow-control-valves.png"
          />
          <meta
            property="og:url"
            content="http://www.tu.biz/Products/flow-control-valves"
          />
        </Head>
      </div>
      <div className="row">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12">
            <h6 className="product-title-text"> Needle Valves </h6> <br />
            <span className="product-pic d-flex justify-content-center">
              <Image
                src="/images/flow-control-valves.png"
                id="flow-control-valves"
                alt="flow control valves"
                width={236}
                height={128}
              />
            </span>
            <br />
            <Link href="/pdf/flow-control-valves.pdf">
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
                  <th colSpan="5" className="product-title-table-text">
                    {" "}
                    Flow Control Valves{" "}
                  </th>
                </tr>

                <tr className="inside-table-text">
                  <td>Type</td>
                  <td colSpan="2">Connection</td>
                  <td>Rated GPM</td>
                </tr>
              </thead>

              <tbody>
                <tr className="inside-table-text">
                  <td></td>
                  <td>
                    <strong>SAE</strong>
                  </td>
                  <td>
                    <strong>NPT</strong>
                  </td>
                  <td>
                    <strong>SAE</strong>
                  </td>
                  <td>
                    <strong>NPT</strong>
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    Flow Control <br /> without <br /> check valve
                  </td>
                  <td>1/4", 1-1/2"</td>
                  <td>1/4", 1-1/4"</td>
                  <td>5-100</td>
                  <td>5-70</td>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    Flow Control <br /> with <br /> check valve
                  </td>
                  <td>1/4", 1-1/2"</td>
                  <td>1/4", 1-1/4"</td>
                  <td>5-100</td>
                  <td>5-70</td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>
        </div>
        <div className="col-md-3">
          <ProductNav />
        </div>
      </div>
    </div>
  );
};

export default FlowControlValves;
