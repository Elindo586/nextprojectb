import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish32 = ({ db }) => {
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
        .filter((item) => item.id === "32")
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
                  <h4>Esquemas de Bombas y Motores Hidráulicos</h4>
                  <p>
                    En este video, aprenderemos sobre la importancia de dibujar
                    esquemas adecuados para bombas y motores hidráulicos en
                    sistemas hidráulicos. Los esquemas proporcionan una
                    representación visual clara y precisa de cómo están
                    conectados y funcionan estos componentes vitales en un
                    sistema hidráulico.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Función de los Esquemas:</strong> Los esquemas de
                      bombas y motores hidráulicos muestran la disposición y la
                      interconexión de estos componentes en un sistema
                      hidráulico. Proporcionan información detallada sobre cómo
                      fluye el fluido hidráulico, qué dirección toma y cómo se
                      controla el movimiento en el sistema.
                    </li>
                    <li>
                      {" "}
                      <strong>Elementos Representados:</strong> En los esquemas,
                      se representan los distintos tipos de bombas y motores
                      hidráulicos, como bombas de engranajes, bombas de pistones
                      y motores de paletas. Cada componente se identifica
                      claramente con símbolos estandarizados para facilitar la
                      comprensión y el análisis del sistema.
                    </li>
                    <li>
                      {" "}
                      <strong>Conexiones y Tuberías:</strong> Los esquemas
                      muestran las conexiones de entrada y salida de las bombas
                      y motores hidráulicos, así como las tuberías y conductos
                      que transportan el fluido entre los diferentes componentes
                      del sistema. Esto ayuda a visualizar el flujo de fluido y
                      a identificar posibles puntos de fuga o restricciones en
                      el sistema.
                    </li>
                    <li>
                      {" "}
                      <strong>Controles y Válvulas:</strong> Los esquemas
                      también incluyen controles y válvulas utilizados para
                      regular el flujo de fluido, cambiar la dirección del
                      movimiento y controlar la presión en el sistema
                      hidráulico. Estos elementos son esenciales para el
                      funcionamiento seguro y eficiente del sistema.
                    </li>
                  </ul>

                  <h4>Importancia de los Esquemas</h4>

                  <ul>
                    <li>
                      {" "}
                      <strong>Guía para la Instalación:</strong> Los esquemas
                      proporcionan una guía clara para la instalación de bombas
                      y motores hidráulicos, ayudando a los técnicos a ubicar y
                      conectar los componentes correctamente en el sistema.
                    </li>
                    <li>
                      {" "}
                      <strong>Diagnóstico de Problemas:</strong> Los esquemas
                      son herramientas útiles para diagnosticar y solucionar
                      problemas en el sistema hidráulico. Permiten identificar
                      rápidamente la ubicación de componentes defectuosos o
                      áreas con bajo rendimiento.
                    </li>
                    <li>
                      {" "}
                      <strong>Documentación Técnica:</strong> Los esquemas
                      sirven como documentación técnica importante para el
                      diseño, la instalación y el mantenimiento de sistemas
                      hidráulicos. Proporcionan una referencia visual completa
                      que puede ser utilizada por técnicos y operadores.
                    </li>
                  </ul>

                  <p>
                    En resumen, los esquemas de bombas y motores hidráulicos son
                    herramientas indispensables para comprender, diseñar e
                    instalar sistemas hidráulicos de manera eficiente y segura.
                    Proporcionan una representación visual detallada del sistema
                    y facilitan el mantenimiento y la resolución de problemas.
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

export default PostSpanish32;
