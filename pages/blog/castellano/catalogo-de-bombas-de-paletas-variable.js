import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish43 = ({ db }) => {
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
        .filter((item) => item.id === "43")
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
                  <h4>Catálogo de Bombas de Paletas Variables</h4>
                  <p>
                    En este video, presentamos nuestro catálogo para la
                    selección adecuada de bombas hidráulicas de paletas
                    variables de desplazamiento. Nuestro catálogo proporciona
                    información detallada sobre las bombas de paletas variables
                    y cómo seleccionar la bomba adecuada para diversas
                    aplicaciones hidráulicas.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Variedad de Productos:</strong> Nuestro catálogo
                      incluye una amplia gama de bombas de paletas variables,
                      que ofrecen diferentes capacidades de desplazamiento y
                      presiones de trabajo para adaptarse a una variedad de
                      aplicaciones industriales y móviles.
                    </li>
                    <li>
                      {" "}
                      <strong>Información Técnica:</strong> Proporcionamos
                      detalles técnicos completos sobre cada bomba de paletas
                      variable, incluyendo especificaciones de rendimiento,
                      dimensiones, características y opciones de configuración.
                    </li>
                    <li>
                      {" "}
                      <strong>Selección de Bombas:</strong> Nuestro catálogo
                      incluye pautas y recomendaciones sobre cómo seleccionar la
                      bomba de paletas variable adecuada para su aplicación
                      específica, teniendo en cuenta factores como caudal,
                      presión, velocidad y tipo de fluido.
                    </li>
                  </ul>

                  <h4>Enlace al Catálogo</h4>

                  <p>
                    Para acceder a nuestro catálogo de bombas de paletas
                    variables y explorar nuestra gama de productos, visite el
                    siguiente enlace:
                  </p>

                  <p>
                    <a href="https://www.tu.biz/pdf/variable-vane-pump-catalog.pdf">
                      Catálogo de Bombas de Paletas Variables
                    </a>
                  </p>

                  <p>
                    ¡Esperamos que nuestro catálogo sea útil para ayudarlo a
                    seleccionar la bomba de paletas variable adecuada para sus
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

export default PostSpanish43;
