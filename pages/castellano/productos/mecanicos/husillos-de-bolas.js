import React from "react";
import { useEffect } from "react";
import Image from "next/image";

import pages from "../../../../utils/meta-data/spanish-pages/pages.json";
import PageMetaData from "../../../../components/meta-data/pages-spanish";
import ProductNavSpanish from "../../../../components/nav-products-spanish";
import ContactFormSpanish from "../../../../components/contact-form-spanish";

// import ProductNav from "../../components/nav-products";
// import GerolerMotorScript from "../../components/data-structure/products/motor-geroler-script";

export async function getStaticProps() {
  return {
    props: { pages },
  };
}

const BallScrews = ({ pages }) => {
  useEffect(() => {
    function setHeight() {
      const screenWidth = window.innerWidth;
      const divHeight = screenWidth * 0.3;
      const theDiv = document.querySelector(".ball-screws-div");
      if (screenWidth <= 1000) {
        theDiv.style.height = `${divHeight}px`;
      } else {
        theDiv.style.height = `339px`;
      }
    }

    // Call setHeight initially
    setHeight();

    // Add a listener to resize event
    window.addEventListener("resize", setHeight);

    // Cleanup function to remove the resize event listener
    return () => {
      window.removeEventListener("resize", setHeight);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      <div className="row">
        {pages
          .filter((item) => item.id === "3")
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
                twitterDescription={item.metaDescription}
                twitterImage={item.twitterImage}
              />
            );
          })}
      </div>

      <div className="row">
        <div className="col-md-9 table-responsive">
          <h6 className="product-title-text"> Husillos de Bolas</h6>
          <div className="ball-screws-div">
            <Image
              fill={true}
              src="/images/mechanical/ball-screws.png"
              id="ball-screws"
              alt="Husillos de Bolas"
              sizes="100vw"
              // width={586}
              // height={339}
              priority={true}
            />
          </div>

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
                  Husillos de Bolas{" "}
                </th>
              </tr>

              <tr className="inside-table-text">
                <td>
                  <b>Características</b>
                </td>
                <td>
                  <b>Beneficios</b>
                </td>
              </tr>
            </thead>

            <tbody>
              <tr className="inside-table-text">
                <td>Fácil de mover</td>
                <td>
                  Reducción de la fricción al movimiento de rodadura de las
                  bolas y permite alimentación fina y precisa.
                </td>
              </tr>

              <tr className="inside-table-text">
                <td>Larga vida</td>
                <td>
                  Operación de rodamiento larga porque la bola rueda movimiento.
                </td>
              </tr>

              <tr className="inside-table-text">
                <td>Lubricación sencilla</td>
                <td>
                  Gracias al movimiento de rodadura constante, la lubricación es
                  posible en pequeñas cantidades y se puede complementar con
                  grasa o lubricante.
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <div>
            <p>
              Ofrecemos una amplia gama de husillos de bolas para sus
              necesidades industriales. Nuestros husillos de bolas están
              diseñados para proporcionar alta precisión y eficiencia en sus
              aplicaciones.
            </p>
            <br />
            <p>
              Nuestros husillos de bolas se pueden intercambiar con otras marcas
              y pueden cumplir con sus requisitos específicos.
            </p>
            <br />
          </div>
          <div>
            <ContactFormSpanish />
          </div>
        </div>
        <div className="col-md-3">
          <ProductNavSpanish />
        </div>
      </div>
    </div>
  );
};

export default BallScrews;
