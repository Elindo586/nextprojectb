import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish45 = ({ db }) => {
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
        .filter((item) => item.id === "45")
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
                  <h4>Catálogo de Motores Hidráulicos de Geroler / Orbitrol</h4>
                  <p>
                    En este video, presentamos nuestro catálogo para la
                    selección de motores hidráulicos de tipo Geroler / Orbitrol.
                    Nuestro catálogo proporciona información detallada sobre los
                    motores hidráulicos Geroler / Orbitrol y cómo seleccionar el
                    motor adecuado para diversas aplicaciones hidráulicas.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Variedad de Productos:</strong> Nuestro catálogo
                      incluye una amplia gama de motores hidráulicos Geroler /
                      Orbitrol, que ofrecen diferentes tamaños, velocidades y
                      capacidades de torque para adaptarse a una variedad de
                      aplicaciones industriales y móviles.
                    </li>
                    <li>
                      {" "}
                      <strong>Información Técnica:</strong> Proporcionamos
                      detalles técnicos completos sobre cada motor hidráulico
                      Geroler / Orbitrol, incluyendo especificaciones de
                      rendimiento, dimensiones, características y opciones de
                      configuración.
                    </li>
                    <li>
                      {" "}
                      <strong>Selección de Motores:</strong> Nuestro catálogo
                      incluye pautas y recomendaciones sobre cómo seleccionar el
                      motor hidráulico Geroler / Orbitrol adecuado para su
                      aplicación específica, teniendo en cuenta factores como
                      velocidad, torque, presión y tipo de fluido.
                    </li>
                  </ul>

                  <h4>Enlace a la Información Técnica</h4>

                  <p>
                    Para acceder a más información técnica sobre nuestros
                    motores hidráulicos Geroler / Orbitrol y explorar nuestra
                    gama de productos, visite el siguiente enlace:
                  </p>

                  <p>
                    <a href="https://www.tu.biz/products/geroler-motors">
                      Información Técnica sobre Motores Hidráulicos Geroler /
                      Orbitrol
                    </a>
                  </p>

                  <p>
                    ¡Esperamos que nuestro catálogo sea útil para ayudarlo a
                    seleccionar el motor hidráulico Geroler / Orbitrol adecuado
                    para sus necesidades hidráulicas específicas!
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

export default PostSpanish45;
