import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish49 = ({ db }) => {
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
        .filter((item) => item.id === "49")
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
                  <h4>Catálogo de Bombas Hidráulicas de Aluminio</h4>
                  <p>
                    En este video, presentamos nuestro catálogo de bombas
                    hidráulicas de aluminio, que ofrece una amplia gama de
                    opciones para diversas aplicaciones hidráulicas. Nuestro
                    catálogo proporciona información detallada sobre nuestras
                    bombas de engranajes de aluminio y cómo seleccionar
                    adecuadamente una bomba según los requisitos técnicos
                    específicos de su proyecto.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Variedad de Productos:</strong> Nuestro catálogo
                      incluye una amplia variedad de bombas hidráulicas de
                      aluminio, que abarcan diferentes tamaños, caudales y
                      presiones de trabajo para adaptarse a diversas
                      aplicaciones industriales y móviles.
                    </li>
                    <li>
                      {" "}
                      <strong>Información Técnica:</strong> Proporcionamos
                      información técnica detallada sobre cada bomba, incluyendo
                      especificaciones de rendimiento, dimensiones, materiales
                      de construcción y características especiales.
                    </li>
                    <li>
                      {" "}
                      <strong>Selección de Bombas:</strong> Nuestro catálogo
                      incluye pautas y recomendaciones sobre cómo seleccionar la
                      bomba hidráulica de aluminio adecuada para su aplicación,
                      teniendo en cuenta factores como caudal, presión,
                      velocidad y tipo de fluido.
                    </li>
                  </ul>

                  <h4>Enlace al Catálogo</h4>

                  <p>
                    Para acceder a nuestro catálogo de bombas hidráulicas de
                    aluminio y explorar nuestra amplia gama de productos, haga
                    clic en el siguiente enlace:
                  </p>

                  <p>
                    <a href="https://www.tu.biz/pdf/hydraulic-gear-pumps-catalog.pdf">
                      Catálogo de Bombas Hidráulicas de Aluminio
                    </a>
                  </p>

                  <p>
                    ¡Esperamos que nuestro catálogo sea útil para ayudarlo a
                    encontrar la bomba hidráulica de aluminio perfecta para sus
                    necesidades específicas!
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

export default PostSpanish49;
