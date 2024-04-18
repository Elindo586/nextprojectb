import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish46 = ({ db }) => {
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
        .filter((item) => item.id === "46")
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
                  <h4>Catálogo de Bomba de Pistones A10V</h4>
                  <p>
                    En este video, presentamos nuestro catálogo para la
                    selección de bombas de pistones hidráulicas de la serie
                    A10V. Nuestro catálogo proporciona información detallada
                    sobre las bombas de pistones A10V y cómo seleccionar la
                    bomba adecuada para diversas aplicaciones hidráulicas.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Variedad de Productos:</strong> Nuestro catálogo
                      incluye una amplia gama de bombas de pistones A10V, que
                      ofrecen diferentes tamaños, caudales y presiones de
                      trabajo para adaptarse a diversas aplicaciones
                      industriales y móviles.
                    </li>
                    <li>
                      {" "}
                      <strong>Información Técnica:</strong> Proporcionamos
                      detalles técnicos completos sobre cada bomba de la serie
                      A10V, incluyendo especificaciones de rendimiento,
                      dimensiones, características y opciones de configuración.
                    </li>
                    <li>
                      {" "}
                      <strong>Selección de Bombas:</strong> Nuestro catálogo
                      incluye pautas y recomendaciones sobre cómo seleccionar la
                      bomba de pistones A10V adecuada para su aplicación
                      específica, teniendo en cuenta factores como caudal,
                      presión, velocidad y tipo de fluido.
                    </li>
                  </ul>

                  <h4>Enlace al Catálogo</h4>

                  <p>
                    Para acceder a nuestro catálogo de bombas de pistones A10V y
                    explorar nuestra amplia gama de productos, haga clic en el
                    siguiente enlace:
                  </p>

                  <p>
                    <a href="https://www.tu.biz/pdf/a10v-pump-catalog.pdf">
                      Catálogo de Bomba de Pistones A10V
                    </a>
                  </p>

                  <p>
                    ¡Esperamos que nuestro catálogo sea útil para ayudarlo a
                    seleccionar la bomba de pistones A10V perfecta para sus
                    necesidades hidráulicas!
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

export default PostSpanish46;
