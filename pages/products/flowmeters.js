import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import FlowmeterForm from "../../components/flowmeter-form";
import ProductNav from "../../components/nav-products";

const Flowmeters = () => {
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
          <title> TU - Technical Union | Flowmeters </title>

          <meta
            name="description"
            content=" Find our catalog for flowmeters. Everything from inventory for faster delivery times at competitive market pricing for your convenience. "
          />
          <meta name="keywords" content=" TU, flowmeters , hydraulic" />
          <meta name="author" content="Edgar Lindo" />

          {/* OG tags */}

          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />

          <meta property="og:title" content=" Technical Union | Flowmeters" />
          <meta
            property="og:description"
            content="Find flowmeters from Technical Union. Everything from inventory for faster delivery times at competitive market pricing for your convenience."
          />
          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/flowmeters.png"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/products/flowMeters"
          />
          {/* Twitter tags */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta name="twitter:title" content=" TU | Hydraulic Flowmeters." />

          <meta
            name="twitter:description"
            content="Find hydraulic flowmeters from TU .Everything from inventory for faster delivery times at competitive market pricing for your convenience."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/oppictures/flowmeters.png"
          />
        </Head>
      </div>
      <div className="row">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12">
            <h6 className="product-title-text"> Flowmeters</h6> <br />
            <span className="product-pic d-flex justify-content-center">
              <Image
                src="/images/flowmeter.png"
                id="flowmeter"
                alt="hydraulic flowmeter"
                width={159}
                height={300}
              />
            </span>
            <br />
            <Link
              href="/pdf/Simple-Flowmeter-Datasheet.pdf"
              target="blank"
              className="btn btn-info d-flex justify-content-center"
            >
              Download PDF
            </Link>
            <br />
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th colSpan="4" className="product-title-table-text">
                    Flowmeters{" "}
                  </th>
                </tr>

                <tr className="inside-table-text">
                  <td>Size</td>
                  <td>PSI</td>
                  <td>
                    Ports
                    <br /> SAE / NPT
                  </td>
                  <td> GPM </td>
                </tr>
              </thead>

              <tbody>
                <tr className="inside-table-text">
                  <td>1</td>
                  <td>
                    3,500 (aluminum or brass) <br /> 6,000 (Stainless Steel)
                  </td>
                  <td>
                    #6, #8, #10 <br /> 1/4&quot;, 3/8&quot;, 1/2&quot;
                  </td>
                  <td>
                    {" "}
                    1-5 <br /> 1-10 <br /> 1-15
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>2</td>
                  <td>
                    3,500 (aluminum or brass) <br /> 6,000 (Stainless Steel)
                  </td>
                  <td>
                    #12, #16
                    <br /> 3/4&quot;, 1&quot;
                  </td>
                  <td>
                    {" "}
                    1-10 <br /> 3-15 <br /> 7.5-20 <br /> 5-30
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>3</td>
                  <td>
                    3,500 (aluminum or brass) <br /> 6,000 (Stainless Steel)
                  </td>
                  <td>
                    #20, #24, #32 <br /> 1-1/4&quot;, 1-1/2&quot;, 2&quot;
                  </td>
                  <td>
                    {" "}
                    5-50 <br /> 5-75 <br /> 10-100
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>
          <div className="col-md-12">
            <FlowmeterForm />
          </div>
        </div>
        <div className="col-md-3">
          <ProductNav />
        </div>
      </div>
    </div>
  );
};

export default Flowmeters;
