import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish66 = ({ db }) => {
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
        .filter((item) => item.id === "66")
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
                  <h4>
                    Explorando la Simulación de Circuitos Hidráulicos: Una
                    Experiencia Interactiva
                  </h4>
                  <p>
                    Las simulaciones interactivas de circuitos hidráulicos
                    ofrecen una manera fascinante de comprender y visualizar el
                    funcionamiento de estos sistemas complejos. En este
                    artículo, exploraremos una simulación interactiva de un
                    circuito hidráulico y cómo un cilindro se extiende y se
                    retrae según los comandos de una válvula de control
                    direccional, mostrando los caminos de flujo hacia el
                    cilindro.
                  </p>

                  <ul>
                    <li>
                      <strong>Experiencia Interactiva:</strong> La simulación
                      interactiva proporciona a los espectadores una experiencia
                      práctica para comprender el funcionamiento de un circuito
                      hidráulico. A través de la animación interactiva, los
                      usuarios pueden observar cómo cambian los caminos de flujo
                      y cómo se mueve el cilindro en respuesta a los comandos de
                      la válvula de control direccional.
                    </li>

                    <li>
                      <strong>Funcionamiento del Circuito:</strong> La
                      simulación muestra con detalle cómo se distribuye el flujo
                      de fluido a través del circuito hidráulico y cómo esto
                      afecta el movimiento del cilindro. Al interactuar con la
                      válvula de control direccional, los usuarios pueden
                      observar cómo cambia la dirección del flujo y cómo esto se
                      traduce en el movimiento de extensión o retracción del
                      cilindro hidráulico.
                    </li>

                    <li>
                      <strong>Enlace de Referencia:</strong> Para acceder a la
                      simulación de circuito hidráulico mencionada, puedes
                      visitar el siguiente enlace:{" "}
                      <a href="https://www.tu.biz/blog/castellano/simulacion-de-circuito-hidraulico">
                        Simulación de Circuito Hidráulico
                      </a>
                      . Esta simulación te permitirá interactuar con el circuito
                      hidráulico y comprender visualmente cómo funcionan los
                      componentes en tiempo real.
                    </li>

                    <li>
                      <strong>Beneficios de la Simulación:</strong> La
                      simulación de circuitos hidráulicos ofrece una serie de
                      beneficios, incluyendo:
                      <ul>
                        <li>
                          Comprensión Práctica: Los usuarios pueden experimentar
                          de primera mano cómo funcionan los circuitos
                          hidráulicos y cómo interactúan los diferentes
                          componentes.
                        </li>
                        <li>
                          Visualización Detallada: La simulación proporciona una
                          representación visual detallada de los caminos de
                          flujo y el movimiento del cilindro, facilitando la
                          comprensión de los conceptos hidráulicos.
                        </li>
                        <li>
                          Experimentación Segura: Los usuarios pueden
                          experimentar con diferentes configuraciones y comandos
                          de válvulas en un entorno virtual, sin riesgo de dañar
                          equipos reales.
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <p>
                    Explorar la simulación de circuitos hidráulicos es una
                    excelente manera de adquirir conocimientos prácticos sobre
                    el funcionamiento de estos sistemas esenciales en la
                    industria. Con una comprensión clara del funcionamiento de
                    los circuitos hidráulicos, los usuarios pueden diseñar,
                    operar y mantener estos sistemas con mayor eficiencia y
                    confianza.
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

export default PostSpanish66;
