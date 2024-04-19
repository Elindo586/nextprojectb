import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish27 = ({ db }) => {
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
        .filter((item) => item.id === "27")
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
                  <h4>Catálogo de Bombas Hidráulicas de Paletas</h4>
                  <p>
                    En este video, se presenta un catálogo técnico de bombas
                    hidráulicas de paletas y se explica la selección adecuada de
                    estas bombas según los detalles de psi, gpm y rpm. Las
                    bombas de paletas son un componente fundamental en los
                    sistemas hidráulicos, utilizadas para generar flujo de
                    fluido a través del sistema y proporcionar la presión
                    necesaria para el funcionamiento de los actuadores
                    hidráulicos.
                  </p>

                  <ul>
                    <li>
                      <strong>Funcionamiento de las Bombas de Paletas:</strong>{" "}
                      Las bombas de paletas funcionan mediante el desplazamiento
                      de paletas dentro de una carcasa o anillo. Al girar el eje
                      de la bomba, las paletas se deslizan hacia afuera debido a
                      la fuerza centrífuga, creando una cámara de succión que
                      aspira el fluido hidráulico. A medida que las paletas
                      vuelven a entrar en la carcasa, el fluido es expulsado a
                      alta presión.
                    </li>
                    <li>
                      <strong>Selección de Bombas:</strong> La selección
                      adecuada de bombas de paletas es crucial para garantizar
                      un rendimiento óptimo del sistema hidráulico. Factores
                      como la presión máxima de trabajo (psi), el caudal
                      volumétrico (gpm) y la velocidad de rotación (rpm) deben
                      tenerse en cuenta al elegir la bomba adecuada para una
                      aplicación específica.
                    </li>
                    <li>
                      <strong>Catálogo Técnico:</strong> El catálogo técnico
                      proporciona información detallada sobre las diferentes
                      series y modelos de bombas de paletas disponibles,
                      incluidas las especificaciones de rendimiento, dimensiones
                      y opciones de montaje. Este recurso es invaluable para los
                      ingenieros y diseñadores que necesitan seleccionar la
                      bomba adecuada para sus proyectos.
                    </li>
                  </ul>

                  <h4>Enlace al Catálogo Técnico de Bombas de Paletas</h4>
                  <p>
                    Para obtener más información sobre las bombas hidráulicas de
                    paletas y explorar el catálogo técnico completo, puedes
                    visitar el siguiente enlace:{" "}
                    <a href="https://www.tu.biz/products/vane-pumps">
                      Catálogo de Bombas de Paletas
                    </a>
                    .
                  </p>

                  <p>
                    En resumen, el catálogo de bombas hidráulicas de paletas
                    proporciona una amplia gama de opciones para satisfacer las
                    necesidades específicas de diversas aplicaciones
                    industriales y móviles. Al seleccionar la bomba adecuada
                    según los requisitos técnicos del proyecto, se garantiza un
                    rendimiento confiable y eficiente del sistema hidráulico.
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

export default PostSpanish27;
