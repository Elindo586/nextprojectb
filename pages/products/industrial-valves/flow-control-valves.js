import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ProductNav from "../../../components/nav-products";
import IndustrialValvesFlowControlScript from "../../../components/data-structure/products/industrial-valves-flow-control";

const FlowControlValves = () => {
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
          <title> TU | Hydraulic Flow Control Valves | Needle Valves </title>

          <meta
            name="description"
            content=" Catalog for Flow control valves and needle valves. Everything from inventory for faster delivery times. "
          />
          <meta name="keywords" content="TU, flow, control, valves, needle " />
          <meta name="author" content="Edgar Lindo" />

          {/* OG tags */}

          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />

          <meta property="og:title" content=" TU | Flow Control Valves" />
          <meta
            property="og:description"
            content=" Catalog for Flow control valves and needle valves. Everything from inventory for faster delivery times."
          />
          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/flow-control-valves.png"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/products/flow-control-valves"
          />

          {/* Twitter tags */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta name="twitter:title" content=" TU | Flow Control Valves"></meta>

          <meta
            name="twitter:description"
            content=" Catalog for Flow control valves and needle valves. Everything from inventory for faster delivery times."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/oppictures/flow-control-valves.png"
          />
        </Head>
      </div>
      <IndustrialValvesFlowControlScript />
      <div className="row" lang="en">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12">
            <h6 className="product-title-text"> Needle Valves </h6> <br />
            <div className="flow-control-valves-div">
              <Image
                fill={true}
                src="/images/flow-control-valves.png"
                id="flow-control-valves"
                alt="flow control valves"
                sizes="100vw"
                // width={236}
                // height={128}
                priority={true}
              />
            </div>
            <br />
            <Link
              className="btn btn-info d-flex justify-content-center"
              target="blank"
              href="/pdf/flow-control-valves.pdf"
            >
              Download PDF
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
                  <td>1/4&quot;, 1-1/2&quot;</td>
                  <td>1/4&quot;, 1-1/4&quot;</td>
                  <td>5-100</td>
                  <td>5-70</td>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    Flow Control <br /> with <br /> check valve
                  </td>
                  <td>1/4&quot;, 1-1/2&quot;</td>
                  <td>1/4&quot;, 1-1/4&quot;</td>
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
