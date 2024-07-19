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

const LinearGuides = ({ pages }) => {
  useEffect(() => {
    function setHeight() {
      const screenWidth = window.innerWidth;
      const divHeight = screenWidth * 0.3;
      const theDiv = document.querySelector(".linear-guides-div");
      if (screenWidth <= 1000) {
        theDiv.style.height = `${divHeight}px`;
      } else {
        theDiv.style.height = `346px`;
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
          .filter((item) => item.id === "2")
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
          <h6 className="product-title-text"> Guías Lineales</h6>
          <div className="linear-guides-div">
            <Image
              fill={true}
              src="/images/mechanical/linear-guides.png"
              id="linear-guides"
              alt="Guías Lineales"
              sizes="100vw"
              // width={551}
              // height={346}
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
                  Guías Lineales / Rodamientos Lineales{" "}
                </th>
              </tr>

              <tr className="inside-table-text">
                <td>
                  {" "}
                  <b>Estilo</b>
                </td>
                <td>
                  {" "}
                  <b>Características</b>
                </td>
              </tr>
            </thead>

            <tbody>
              <tr className="inside-table-text">
                <td>Movimiento lineal</td>
                <td>
                  <ul>
                    <li>Rodamiento lineal de bolas estándar mundial.</li>
                    <li>
                      Carga igual en 4 direcciones con ángulo de contacto de
                      45°.
                    </li>
                    <li>Capacidad de absorción de errores.</li>
                    <li>Alta rigidez y precisión.</li>
                  </ul>
                </td>
              </tr>

              <tr className="inside-table-text">
                <td>Movimiento lineal ancho</td>
                <td>
                  <ul>
                    <li>
                      Carga igual en 4 direcciones con ángulo de contacto de
                      45°.
                    </li>
                    <li>Estructura baja y centrada con cola ancha y corta.</li>
                    <li>
                      Utilizable como monoeje donde se requiere alta rigidez.
                    </li>
                  </ul>
                </td>
              </tr>

              <tr className="inside-table-text">
                <td>Cadena espaciadora</td>
                <td>
                  <ul>
                    <li>Rodamiento lineal de bolas estándar mundial</li>
                    <li> 4 direction equal load with 45° contact angel.</li>
                    <li>
                      Carga igual en 4 direcciones con ángulo de contacto de
                      45°.
                    </li>
                    <li>Tipo retenedor con base de bola espaciadora.</li>
                    <li>Bajo nivel de ruido y poco polvo .</li>
                  </ul>
                </td>
              </tr>

              <tr className="inside-table-text">
                <td>Carga miniatura</td>
                <td>
                  <ul>
                    <li>Miniatura con alta rigidez.</li>
                    <li>Amplia gama de formas y tamaños.</li>
                    <li>Diseño compacto.</li>
                    <li>Alta durabilidad y confiabilidad.</li>
                  </ul>
                </td>
              </tr>

              <tr className="inside-table-text">
                <td>Rodamiento lineal</td>
                <td>
                  <ul>
                    <li>Habilitación de rodillos con guía rígida.</li>
                    <li>
                      Carga igual en 4 direcciones con ángulo de contacto de
                      45°.
                    </li>
                    <li>Amplia superficie de contacto.</li>
                    <li>Cargas altas.</li>
                    <li>Alta rigidez y precisión.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <br />{" "}
          <div>
            <p>
              * Podemos intercambiar y proporcionar reemplazos para la mayoría
              marcas de guías lineales disponibles en el mercado.{" "}
            </p>
          </div>
          <div>
            <ContactFormSpanish />
          </div>
          <br />
          <div className="col-md12">{/* <MotorForm /> */}</div>
        </div>
        <div className="col-md-3">
          <ProductNavSpanish />
        </div>
      </div>
    </div>
  );
};

export default LinearGuides;
