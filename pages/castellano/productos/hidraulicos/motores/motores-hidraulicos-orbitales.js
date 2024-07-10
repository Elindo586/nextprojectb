import React from "react";
import Image from "next/image";
import Link from "next/link";

import PageMetaData from "../../../../../components/meta-data/pages-spanish";
import pages from "../../../../../utils/meta-data/spanish-pages/pages.json";
import MotorFormSpanish from "../../../../../components/Motor-form-spanish";
import ProductNavSpanish from "../../../../../components/nav-products-spanish";

// import GerolerMotorScript from "../../components/data-structure/products/motor-geroler-script";

export async function getStaticProps() {
  return {
    props: { pages },
  };
}

const MotoresOrbitales = ({ pages }) => {
  return (
    <div>
      <div className="row">
        {pages
          .filter((item) => item.id === "4")
          .map((item) => {
            return (
              <PageMetaData
                key={item.id}
                metaTitle={item.metaTitle}
                metaDescription={item.metaDescription}
                metaKeywords={item.metaKeywords}
                ogTitle={item.metaTitle}
                ogDescription={item.metaDescription}
                ogImage={item.ogImage}
                ogURL={item.ogURL}
                twitterTitle={item.metaTitle}
                twitterDescription={item.itemMetaDescription}
                twitterImage={item.twitterImage}
              />
            );
          })}
      </div>
      {/* <GerolerMotorScript /> */}
      <div className="row">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12">
            <h6 className="product-title-text">
              {" "}
              Motores Hidráulicos Orbitales
            </h6>{" "}
            <br />
            <div className="geroler-motors-div">
              <Image
                fill={true}
                src="/images/geroloer-motors.png"
                id="geroler-motors"
                alt="Motores hidráulicos orbitales"
                sizes="90vw"
                // width={168}
                // height={137}
                priority={true}
              />
            </div>
            <br />
            <Link
              legacyBehavior
              href="/pdf/hi-torque-low-speed-hydraulic-motors.pdf"
            >
              <a
                className="btn btn-info d-flex justify-content-center"
                target="blank"
              >
                Descargar PDF
              </a>
            </Link>
            <br />
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th colSpan="5" className="product-title-table-text">
                    Motores Hidráulicos Orbitales{" "}
                  </th>
                </tr>

                <tr className="inside-table-text">
                  <td>Modelo</td>
                  <td>Tipo</td>
                  <td>
                    Desplazamiento
                    <br />
                    &gt; (cu. in.²)
                  </td>
                  <td>
                    {" "}
                    Presión <br />
                    &gt; (psi)
                  </td>
                  <td> RPM</td>
                </tr>
              </thead>

              <tbody>
                <tr className="inside-table-text">
                  <td>Serie H</td>
                  <td>Axial</td>
                  <td>3-23</td>
                  <td> 2,400</td>
                  <td>30-800</td>
                </tr>

                <tr className="inside-table-text">
                  <td>Serie S</td>
                  <td>Axial</td>
                  <td>3-23</td>
                  <td> 3,000</td>
                  <td>30-970</td>
                </tr>

                <tr className="inside-table-text">
                  <td>Serie 2,000</td>
                  <td>Disc</td>
                  <td>5-23</td>
                  <td> 3,250</td>
                  <td>30-800</td>
                </tr>

                <tr className="inside-table-text">
                  <td>Serie 6,000</td>
                  <td>Disc</td>
                  <td>10-49</td>
                  <td> 3,400</td>
                  <td>30-705</td>
                </tr>

                <tr className="inside-table-text">
                  <td>Serie 10,000</td>
                  <td>Disc</td>
                  <td>10-49</td>
                  <td> 4,000</td>
                  <td>10-446</td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>

          <div className="col-md12">
            <MotorFormSpanish />
          </div>
        </div>
        <div className="col-md-3">
          <ProductNavSpanish />
        </div>
      </div>
    </div>
  );
};

export default MotoresOrbitales;
