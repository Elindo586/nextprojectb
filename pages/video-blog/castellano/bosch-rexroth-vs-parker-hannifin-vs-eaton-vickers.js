import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish52 = ({ db }) => {
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
        .filter((item) => item.id === "52")
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
                  <h4>Bosch Rexroth vs. Parker Hannifin vs. Eaton Vickers</h4>
                  <p>
                    Comparar marcas como Bosch Rexroth, Parker Hannifin y Eaton
                    Vickers en el mundo de la hidráulica puede resultar en una
                    tarea desafiante, ya que cada una tiene sus propias
                    fortalezas, debilidades y soluciones específicas. En este
                    video, compartiré mis propias opiniones sobre estas marcas,
                    destacando posibles beneficios, posibles desventajas y
                    ofreciendo soluciones generales.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Bosch Rexroth:</strong> Con una reputación sólida
                      en la industria hidráulica, Bosch Rexroth es conocida por
                      su innovación tecnológica, calidad de fabricación y
                      soluciones integradas. Sus productos suelen ser confiables
                      y ofrecen un rendimiento consistente en una amplia gama de
                      aplicaciones.
                    </li>
                    <li>
                      {" "}
                      <strong>Parker Hannifin:</strong> Parker Hannifin es otra
                      marca reconocida en el mundo de la hidráulica, conocida
                      por su diversidad de productos y soluciones
                      personalizadas. Parker ofrece una amplia gama de
                      componentes y sistemas hidráulicos para diversas
                      industrias y aplicaciones.
                    </li>
                    <li>
                      {" "}
                      <strong>Eaton Vickers:</strong> Eaton Vickers es conocida
                      por sus productos duraderos y de alta calidad,
                      especialmente en aplicaciones industriales y móviles. Su
                      línea de productos abarca desde válvulas y bombas hasta
                      sistemas de control completo, proporcionando soluciones
                      completas para las necesidades hidráulicas.
                    </li>
                  </ul>

                  <h4>Posibles Beneficios</h4>

                  <p>
                    Al considerar estas marcas, es importante tener en cuenta
                    los posibles beneficios que cada una puede ofrecer:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Innovación Tecnológica:</strong> Bosch Rexroth se
                      destaca por su continua innovación tecnológica, ofreciendo
                      soluciones avanzadas para mejorar la eficiencia y el
                      rendimiento.
                    </li>
                    <li>
                      {" "}
                      <strong>Variedad de Productos:</strong> Parker Hannifin
                      ofrece una amplia variedad de productos y soluciones
                      personalizadas para adaptarse a una amplia gama de
                      aplicaciones y requisitos.
                    </li>
                    <li>
                      {" "}
                      <strong>Durabilidad:</strong> Eaton Vickers es conocida
                      por la durabilidad y confiabilidad de sus productos, lo
                      que los hace ideales para aplicaciones exigentes y de alto
                      rendimiento.
                    </li>
                  </ul>

                  <h4>Posibles Desventajas</h4>

                  <p>
                    Por otro lado, es importante considerar las posibles
                    desventajas de cada marca:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Costo:</strong> Los productos de Bosch Rexroth
                      pueden tener un costo inicial más alto debido a su enfoque
                      en la innovación tecnológica y la calidad.
                    </li>
                    <li>
                      {" "}
                      <strong>Complejidad:</strong> La amplia gama de productos
                      de Parker Hannifin puede resultar en una mayor complejidad
                      al seleccionar y especificar componentes para una
                      aplicación específica.
                    </li>
                    <li>
                      {" "}
                      <strong>Disponibilidad:</strong> La disponibilidad de
                      productos de Eaton Vickers puede variar según la región
                      geográfica, lo que puede afectar la conveniencia y el
                      tiempo de entrega.
                    </li>
                  </ul>

                  <h4>Soluciones Generales</h4>

                  <p>
                    En términos generales, la elección entre Bosch Rexroth,
                    Parker Hannifin y Eaton Vickers dependerá de las necesidades
                    específicas de cada aplicación, así como de consideraciones
                    como presupuesto, disponibilidad y soporte técnico. Es
                    importante realizar una investigación exhaustiva y consultar
                    con expertos en la industria para tomar la mejor decisión
                    para su proyecto.
                  </p>

                  <p>
                    ¡Espero que esta comparación te haya sido útil y te ayude a
                    tomar una decisión informada!
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

export default PostSpanish52;
