import React from "react";
import Image from "next/image";
import Head from "next/head";

import ProductNav from "../../../components/nav-products";
import ContactForm from "../../../components/contact-form";

// import ProductNav from "../../components/nav-products";
// import GerolerMotorScript from "../../components/data-structure/products/motor-geroler-script";

const BallScrews = () => {
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
          <title> TU | Ball Screws </title>

          <meta
            name="description"
            content=" Find the the Ball Screws to fit your machine's application."
          />
          <meta name="keywords" content=" TU, Ball Screws" />
          <meta name="author" content="Edgar Lindo" />

          {/* OG Tags */}

          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />

          <meta property="og:title" content=" TU | Ball Screws" />
          <meta
            property="og:description"
            content=" Find the the Ball Screws to fit your machine's application."
          />
          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/ball-screws.png"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/products/mechanical/ball-screws"
          />
          {/* Twitter tags */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta name="twitter:title" content=" TU | Ball Screws" />

          <meta
            name="twitter:description"
            content="Find the the Ball Screws to fit your machine's application."
          />
          <meta
            name="twitter:image"
            content="https:www.tu.biz/oppictures/ball-screws.png"
          />
        </Head>
      </div>

      <div className="row">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12">
            <h6 className="product-title-text"> Ball Screws</h6> <br />
            <div className="ball-screws-div">
              <Image
                fill={true}
                src="/images/mechanical/ball-screws.png"
                id="ball-screws"
                alt="ball screws"
                sizes="100vw"
                // width={586}
                // height={339}
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
                    Ball Screws{" "}
                  </th>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    <b>Characteristics</b>
                  </td>
                  <td>
                    <b>Benefits</b>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr className="inside-table-text">
                  <td>Easy to transport</td>
                  <td>
                    Reduced friction to rolling motion by balls and enables
                    accurate fine feed.
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>Long Life</td>
                  <td>
                    Long rolling operation because the ball performs rolling
                    motion.
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>Simple Lubrication</td>
                  <td>
                    Due to constant rolling motion, lubrication is possible in
                    small quantities and can be supplemented with grease or
                    lubricant.
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <div>
              <p>
                We offer a wide range of ball screws for your industrial needs.
                Our ball screws are designed to provide high precision and
                efficiency in your applications.
              </p>
              <br />
              <p>
                Our ball screws can be interchanged with other brands and can
                meet your specific requirements.
              </p>
              <br />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>

          <div className="col-md12">{/* <MotorForm /> */}</div>
        </div>
        <div className="col-md-3">
          <ProductNav />
        </div>
      </div>
    </div>
  );
};

export default BallScrews;
