import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish40 = ({ db }) => {
  // This is another way to do it if I dont do filter below
  // function post(info) {
  //   return (
  //     info.id === "5",
  //     info.item,
  //     info.metaTitle,
  //     info.metaDescription,
  //     info.metaKeywords,
  //     info.ogTitle,
  //     info.ogDescription,
  //     info.ogURL,
  //     info.ogImage,
  //     info.twitterTitle,
  //     info.twitterDescription,
  //     info.twitterImage,
  //     info.title,
  //     info.body,
  //     info.description,
  //     info.previous,
  //     info.next
  //   );
  // }

  // const item = db.find(post);

  return (
    <div>
      {db
        .filter((item) => item.id === "40")
        .map((item) => {
          return (
            <Blogger1
              key={item.id}
              metaTitle={item.metaTitle}
              metaDescription={item.metaDescription}
              metaKeywords={item.metaKeywords}
              ogTitle={item.ogTitle}
              ogDescription={item.ogDescription}
              ogURL={item.ogURL}
              ogImage={item.ogImage}
              twitterTitle={item.twitterTitle}
              twitterDescription={item.twitterDescription}
              twitterImage={item.twitterImage}
              title={item.title}
              body={item.body}
              iTitle={item.iTitle}
              description={
                <div>
                  <br />
                  <h4>Catálogo de Válvulas Hidráulicas de Aguja</h4>
                  <p>
                    En este video, presentamos nuestro catálogo para la
                    selección adecuada de válvulas hidráulicas de aguja. Nuestro
                    catálogo proporciona información detallada sobre las
                    válvulas de aguja y cómo seleccionar la válvula adecuada
                    para diversas aplicaciones hidráulicas.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Variedad de Productos:</strong> Nuestro catálogo
                      incluye una amplia gama de válvulas hidráulicas de aguja,
                      que ofrecen diferentes tamaños, presiones y
                      configuraciones de puerto para adaptarse a una variedad de
                      aplicaciones industriales y móviles.
                    </li>
                    <li>
                      {" "}
                      <strong>Información Técnica:</strong> Proporcionamos
                      detalles técnicos completos sobre cada válvula de aguja,
                      incluyendo especificaciones de rendimiento, tales como psi
                      (libras por pulgada cuadrada), gpm (galones por minuto),
                      número de puertos y otras características importantes.
                    </li>
                    <li>
                      {" "}
                      <strong>Selección de Válvulas:</strong> Nuestro catálogo
                      incluye pautas y recomendaciones sobre cómo seleccionar la
                      válvula de aguja adecuada para su aplicación específica,
                      teniendo en cuenta factores como la presión de trabajo, el
                      flujo requerido, el tamaño de los puertos y otras
                      necesidades técnicas.
                    </li>
                  </ul>

                  <h4>Enlace a la Información Técnica</h4>

                  <p>
                    Para acceder a más información técnica sobre nuestras
                    válvulas hidráulicas de aguja y explorar nuestra gama de
                    productos, visite el siguiente enlace:
                  </p>

                  <p>
                    <a href="https://www.tu.biz/products/industrial-valves/flow-control-valves">
                      Información Técnica sobre Válvulas Hidráulicas de Aguja
                    </a>
                  </p>

                  <p>
                    ¡Esperamos que nuestro catálogo sea útil para ayudarlo a
                    seleccionar la válvula de aguja adecuada para sus
                    necesidades hidráulicas específicas!
                  </p>
                </div>
              }
              previous={item.previous}
              next={item.next}
            />
          );
        })}
    </div>
  );
};

export default PostSpanish40;
