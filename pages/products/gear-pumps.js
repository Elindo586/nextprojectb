import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import PumpForm from "../components/pump-form";
import ProductNav from "../components/nav-products";

const GearPumps = () => {
  return (
    <div>
      <div>
        <Head>
          <title> TU - Technical Union | Gear Pumps </title>

          <meta name="description" content=" Find our gear pump catalog " />
          <meta name="keywords" content="gear pumps " />
          <meta name="author" content="Edgar Lindo" />

          <meta property="og:title" content=" Technical Union | Gear Pumps" />
          <meta
            property="og:description"
            content="Find Hydraulic gear pumps from Technical Union"
          />
          <meta
            property="og:image"
            content="./Images/oppictures/gear-pumps.png"
          />
          <meta
            property="og:url"
            content="http://www.tu.biz/products/gear-pumps"
          />
        </Head>
      </div>
      <div className="row">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12">
            <h6 className="product-title-text"> Gear Pumps </h6> <br />
            <span className="product-pic d-flex justify-content-center">
              <Image
                src="/images/gear-pumps.png"
                id="gear-pumps"
                alt="hydraulic gear pumps"
                width={316}
                height={105}
              />
            </span>
            <br />
            <Link href="/pdf/hydraulic-gear-pumps-catalog.pdf">
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
          </div>
          <div className="col-md-12">
            <span className="product-pic d-flex justify-content-center">
              <Image
                src="/images/dump-pump.png"
                id="dump-pump"
                alt="hydraulic dump pumps"
                width={168}
                height={108}
              />
            </span>
            <br />
            <Link href="/pdf/dump-pumps.pdf">
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
                  <td>2"</td>
                  <td>2.5"</td>
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
          </div>
          <div className="col-md-12">
            <PumpForm />
          </div>
        </div>
        <div className="col-md-3">
          <ProductNav />
        </div>
      </div>
    </div>
  );
};

export default GearPumps;
