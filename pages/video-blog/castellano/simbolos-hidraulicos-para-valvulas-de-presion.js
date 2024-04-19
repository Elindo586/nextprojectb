import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish25 = ({ db }) => {
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
        .filter((item) => item.id === "25")
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
                    Símbolos Hidráulicos para Válvulas Hidráulicas de Presión
                  </h4>
                  <p>
                    En este video se detalla la importancia de comprender y
                    utilizar correctamente los símbolos hidráulicos en los
                    esquemas de circuitos hidráulicos, específicamente en
                    relación con las válvulas hidráulicas de presión. Las
                    válvulas de presión son componentes clave en los sistemas
                    hidráulicos, y su correcta representación en los diagramas
                    es fundamental para comprender su funcionamiento y su papel
                    en el sistema en su conjunto.
                  </p>

                  <ul>
                    <li>
                      <strong>Identificación de Componentes:</strong> Los
                      símbolos hidráulicos permiten identificar fácilmente
                      diferentes tipos de válvulas hidráulicas de presión en un
                      esquema, como válvulas de alivio, válvulas de seguridad y
                      válvulas de control de presión. Cada tipo de válvula tiene
                      su propio símbolo específico, lo que facilita su
                      reconocimiento y comprensión en el diagrama.
                    </li>
                    <li>
                      <strong>Representación de Funciones:</strong> Los símbolos
                      hidráulicos también representan las funciones y
                      características de las válvulas de presión, como la
                      dirección del flujo de fluido, la presión de ajuste y el
                      sentido de la acción de la válvula. Por ejemplo, una
                      flecha indica la dirección del flujo, mientras que un
                      triángulo con una letra dentro puede representar una
                      válvula de alivio.
                    </li>
                    <li>
                      <strong>Clasificación Estándar:</strong> Existen normas y
                      estándares internacionales que establecen la clasificación
                      y el uso adecuado de los símbolos hidráulicos en los
                      esquemas de circuitos hidráulicos. Estos estándares
                      aseguran la consistencia y la uniformidad en la
                      representación de los componentes y las funciones en los
                      diagramas, lo que facilita la comunicación entre los
                      profesionales de la industria.
                    </li>
                  </ul>

                  <h4>Importancia de los Símbolos Hidráulicos</h4>
                  <p>
                    El uso adecuado de los símbolos hidráulicos es esencial para
                    la comprensión y el diseño eficaz de los sistemas
                    hidráulicos. Los ingenieros, diseñadores y técnicos deben
                    familiarizarse con los símbolos estándar y su significado
                    para interpretar correctamente los esquemas de circuitos
                    hidráulicos y garantizar el funcionamiento óptimo del
                    sistema.
                  </p>

                  <h4>Aplicación Práctica</h4>
                  <p>
                    En el campo de la ingeniería hidráulica, el conocimiento de
                    los símbolos hidráulicos es esencial para realizar tareas
                    como el diseño, la instalación, el mantenimiento y la
                    solución de problemas de sistemas hidráulicos. La correcta
                    interpretación de los esquemas de circuitos hidráulicos
                    permite identificar rápidamente los componentes y comprender
                    su función en el sistema, lo que facilita la realización de
                    ajustes y mejoras según sea necesario.
                  </p>

                  <h4>Conclusión</h4>
                  <p>
                    Los símbolos hidráulicos son herramientas fundamentales para
                    la comunicación y el diseño eficaz de sistemas hidráulicos.
                    Al comprender su significado y aplicación, los profesionales
                    de la industria pueden crear esquemas de circuitos
                    hidráulicos precisos y detallados, lo que contribuye a la
                    operación segura y eficiente de equipos y maquinaria
                    hidráulica.
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

export default PostSpanish25;
