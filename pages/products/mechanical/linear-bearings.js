import React from "react";
import Image from "next/image";
import Head from "next/head";

import ProductNav from "../../../components/nav-products";
import ContactForm from "../../../components/contact-form";

// import ProductNav from "../../components/nav-products";
// import GerolerMotorScript from "../../components/data-structure/products/motor-geroler-script";

const LinearGuides = () => {
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
          <title> TU | Linear Bearings </title>

          <meta
            name="description"
            content=" Find Linear Bearings to meet your machine specific applications."
          />
          <meta name="keywords" content=" TU, linear bearings" />
          <meta name="author" content="Edgar Lindo" />

          {/* OG Tags */}

          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />

          <meta property="og:title" content=" TU | Linear Bearings" />
          <meta
            property="og:description"
            content=" Find Linear Bearings to meet your machine specific applications."
          />
          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/linear-bearings.png"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/products/mechanical/linear-bearings"
          />
          {/* Twitter tags */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta name="twitter:title" content=" TU | Linear Bearings" />

          <meta
            name="twitter:description"
            content="Find Linear Bearings to meet your machine specific applications.."
          />
          <meta
            name="twitter:image"
            content="https:www.tu.biz/oppictures/linear-bearings.png"
          />
        </Head>
      </div>

      <div className="row">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12">
            <h6 className="product-title-text"> Linear Guides</h6> <br />
            <div className="linear-guides-div">
              <Image
                fill={true}
                src="/images/mechanical/linear-guides.png"
                id="linear-guides"
                alt="hydraulic geroloer motors"
                sizes="100vw"
                // width={551}
                // height={346}
                priority={true}
              />
            </div>
            <br />
            {/* <Link
              legacyBehavior
              href="/pdf/hi-torque-low-speed-hydraulic-motors.pdf"
            >
              <a
                className="btn btn-info d-flex justify-content-center"
                target="blank"
              >
                Download PDF
              </a>
            </Link> */}
            <br />
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th colSpan="2" className="product-title-table-text">
                    Linear Bearings{" "}
                  </th>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    {" "}
                    <b>Style</b>
                  </td>
                  <td>
                    {" "}
                    <b>Characteristics</b>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr className="inside-table-text">
                  <td>Linear Motion Bearing</td>
                  <td>
                    <ul>
                      <li>World Standard ball linear bearing.</li>
                      <li>4 direction equal load with 45° contact angel.</li>
                      <li>Error-absorb ability.</li>
                      <li>High rigidity and precision.</li>
                    </ul>
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>Wider Linear Motion</td>
                  <td>
                    <ul>
                      <li>4 direction equal load with 45° contact angel.</li>
                      <li>Low centered structure with wide short tail.</li>
                      <li>
                        Usable as one-axis where high rigidity is required.
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>Spacer Chain Bearing</td>
                  <td>
                    <ul>
                      <li>World Standard ball linear bearing.</li>
                      <li> 4 direction equal load with 45° contact angel.</li>
                      <li>Error-absorb ability.</li>
                      <li>Spacer ball based retainer type.</li>
                      <li>Low noise and low dust.</li>
                    </ul>
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>Miniature Bearing</td>
                  <td>
                    <ul>
                      <li>Miniature with high rigidity.</li>
                      <li>Wide range of shape and sizes.</li>
                      <li>Compact design.</li>
                      <li>High durability and reliability.</li>
                    </ul>
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>Roller Linear Bearing</td>
                  <td>
                    <ul>
                      <li>Roller enable with rigid guide.</li>
                      <li>4 direction equal load with 45° contact angel.</li>
                      <li>Wide contact surface.</li>
                      <li>High loads.</li>
                      <li>High rigidity and precision.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />{" "}
            <div>
              <p>
                * We are able to interchange and provide replacements for most
                linear bearing brands available in the market.{" "}
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>

          <br />

          <div className="col-md12">{/* <MotorForm /> */}</div>
        </div>
        <div className="col-md-3">
          <ProductNav />
        </div>
      </div>
    </div>
  );
};

export default LinearGuides;
