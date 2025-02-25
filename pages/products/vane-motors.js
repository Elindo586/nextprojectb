import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import MotorForm from "../../components/Motor-form";
import ProductNav from "../../components/nav-products";
import VaneMotorScript from "../../components/data-structure/products/motor-vane-script";

const VaneMotors = () => {
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
          />{" "}
          <title> TU - Technical Union | Hydraulic Vane Motors </title>
          <meta
            name="description"
            content=" Find our hydraulic vane motor catalog. Everything from inventory for faster delivery times at competitive market pricing for your convenience. "
          />
          <meta name="keywords" content="TU, hydraulic, vane, motors " />
          <meta name="author" content="Edgar Lindo" />
          {/* OG tags */}
          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />
          <meta property="og:title" content=" TU | Vane Motors" />
          <meta
            property="og:description"
            content="Find hydraulic vane motors from TU"
          />
          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/vane-motors.png"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/products/vane-motors"
          />
          {/* Twitter tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />
          <meta name="twitter:title" content=" TU | Hydraulic Vane Motors" />
          <meta
            name="twitter:description"
            content="Find Hydraulic Vane Motors  from TU. Everything from inventory for faster delivery times at competitive market pricing for your convenience."
          />
          <meta
            name="twitter:image"
            content="https:www.tu.biz/oppictures/vane-motors.png"
          />
        </Head>
      </div>
      <VaneMotorScript />
      <div className="row">
        <div className="col-md-9 table-responsive">
          <div>
            <h6 className="product-title-text"> Vane Motors</h6> <br />
            <div className="vane-motors-div">
              <Image
                fill={true}
                src="/images/vane-motors.png"
                id="vane-motors"
                alt="hydraulic vane motors"
                sizes="100vw"
                // width={268}
                // height={132}
                priority={true}
              />
            </div>
            <br />
            <Link legacyBehavior href="/pdf/hydraulic-vane-motor-catalog.pdf">
              <a
                className="btn btn-info d-flex justify-content-center"
                target="blank"
              >
                Download PDF
              </a>
            </Link>
            <br />
          </div>
          <div>
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th colSpan="4" className="product-title-table-text">
                    Vane Motors{" "}
                  </th>
                </tr>

                <tr className="inside-table-text">
                  <td>Series</td>
                  <td>
                    Displacement <br /> (cu/in²)
                  </td>
                  <td>
                    Max Torque <br /> (lb. in.) <br /> at max psi
                  </td>
                  <td> Max rpm and psi</td>
                </tr>
              </thead>

              <tbody>
                <tr className="inside-table-text">
                  <td>25M</td>
                  <td>
                    2.68 <br /> 3.52 <br /> 4.19
                  </td>
                  <td>
                    1,025 <br /> 1,340 <br /> 1,600
                  </td>
                  <td rowSpan="3">
                    {" "}
                    3,600 rpm at 500 psi * <br /> 4,000 rpm at 500 psi **
                    <br /> 2,600 rpm at 2,250 psi* <br /> 3,000 rpm at 2,500 psi
                    **
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>35M</td>
                  <td>
                    5.10 <br /> 6.12 <br /> 7.44
                  </td>
                  <td>
                    1,960 <br /> 2,340 <br /> 2,840
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>45M</td>
                  <td>
                    8.42 <br /> 9.96 <br /> 11.79
                  </td>
                  <td>
                    3,200 <br /> 3,800 <br /> 4,450
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>50M</td>
                  <td>
                    14.11
                    <br /> 16.36 <br /> 19.35
                  </td>
                  <td>
                    5,450 <br /> 6,350 <br /> 7,470
                  </td>
                  <td>
                    {" "}
                    2,800 rpm at 500 psi * <br /> 3,200 rpm at 500 psi **
                    <br /> 2,200 rpm at 2,250 psi* <br /> 2,400 rpm at 2,500 psi
                    **
                  </td>
                </tr>

                <tr>
                  <td colSpan="4">
                    &nbsp; * Continuous operation. <br />
                    &nbsp; ** Intermittent operation. <br />
                    &nbsp; *** 114 model suffix: 2,500 psi counter clockwise /
                    2,250 psi clockwise. <br />
                    &nbsp; *** 124 model suffix: 2,500 psi bi-rotational
                    rotation. <br />
                    &nbsp; - Rotation view from shaft end.
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <MotorForm />
          </div>
        </div>
        <div className="col-md-3">
          <ProductNav />
        </div>
      </div>
    </div>
  );
};

export default VaneMotors;
