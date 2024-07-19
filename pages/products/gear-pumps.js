import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import PumpForm from "../../components/pump-form";
import ProductNav from "../../components/nav-products";
import GearPumpScript from "../../components/data-structure/products/gear-pump-script";

const GearPumps = () => {
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

          <title> TU | Gear Pumps </title>

          <meta
            name="description"
            content=" Find our gear pump catalog. Everything from inventory for faster delivery times at competitive market pricing for your convenience. "
          />
          <meta name="keywords" content="TU, gear, pumps " />
          <meta name="author" content="Edgar Lindo" />

          {/* OG tags */}

          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU " />

          <meta property="og:title" content=" Technical Union | Gear Pumps" />
          <meta
            property="og:description"
            content="Find Hydraulic gear pumps from Technical Union. Everything from inventory for faster delivery times at competitive market pricing for your convenience."
          />
          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/gear-pumps.png"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/products/gear-pumps"
          />

          {/* Twitter tags */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta name="twitter:title" content=" TU | Hydraulic gear pumps" />

          <meta
            name="twitter:description"
            content="Find hydraulic gear pumps from TU. Everything from inventory for faster delivery times at competitive market pricing for your convenience."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/oppictures/gear-pumps.png"
          />
        </Head>
      </div>
      <GearPumpScript />
      <div className="row">
        <div className="col-md-9 table-responsive">
          <h6 className="product-title-text"> Gear Pumps </h6> <br />
          <div className="gear-pump-div">
            <Image
              fill={true}
              src="/images/gear-pumps.png"
              id="gear-pump"
              alt="hydraulic gear pumps"
              // width={316}
              // height={105}
              priority={true}
            />
          </div>
          <br />
          <Link legacyBehavior href="/pdf/hydraulic-gear-pumps-catalog.pdf">
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
                <th colSpan="5" className="gear-pump-table-title">
                  Gear Pump Range
                </th>
              </tr>

              <tr className="inside-table-text">
                <td>Style</td>
                <td>SAE Mount</td>
                <td>Displacement cu/in²</td>
                <td> * PSI</td>
                <td> * RPM</td>
              </tr>
            </thead>

            <tbody>
              <tr className="inside-table-text">
                <td>Single</td>
                <td>AA</td>
                <td> 0.04 - 0.82</td>
                <td>3,000</td>
                <td>4,000</td>
              </tr>

              <tr className="inside-table-text">
                <td>Single</td>
                <td>A</td>
                <td>0.24- 2.02</td>
                <td>3,500</td>
                <td>4,000</td>
              </tr>

              <tr className="inside-table-text">
                <td>Double</td>
                <td>A</td>
                <td> 0.30-0.30 / 1.31-1.31 </td>
                <td>3,000</td>
                <td>3,500</td>
              </tr>

              <tr className="inside-table-text">
                <td>Single</td>
                <td>B</td>
                <td> 1.40 - 5.49</td>
                <td>3,500</td>
                <td>3,000</td>
              </tr>

              <tr>
                <td colSpan="5">
                  {" "}
                  * RPM / PSI may vary depending on pump size range{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <div className="dump-pump-div">
            <Image
              fill={true}
              src="/images/dump-pump.png"
              id="dump-pump"
              alt="hydraulic dump pumps"
              sizes="100vw"
              //    width={168}
              //     height={108}
            />
          </div>
          <br />
          <Link legacyBehavior href="/pdf/dump-pumps.pdf">
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
                <th colSpan="5" className="gear-pump-table-title">
                  {" "}
                  Dump Pump Range
                </th>
              </tr>

              <tr className="inside-table-text">
                <td>Model</td>
                <td>Max. psi</td>
                <td colSpan="2">GPM at 1,800 RPM</td>
                <td>Max. rpm</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td colSpan="2" className="inside-table-text">
                  Size
                </td>
                <td></td>
              </tr>

              <tr className="inside-table-text">
                <td></td>
                <td></td>
                <td>2&quot;</td>
                <td>2.5&quot;</td>
                <td></td>
              </tr>

              <tr className="inside-table-text">
                <td>C101</td>
                <td>2,500</td>
                <td>39</td>
                <td>48</td>
                <td>2,400</td>
              </tr>

              <tr className="inside-table-text">
                <td>C102</td>
                <td>2,500</td>
                <td>39</td>
                <td>48</td>
                <td>2,400</td>
              </tr>
            </tbody>
          </table>
          <br /> <br />
          <PumpForm />
        </div>
        <div className="col-md-3">
          <ProductNav />
        </div>
      </div>
    </div>
  );
};

export default GearPumps;
