import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish15 = ({ db }) => {
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
        .filter((item) => item.id === "15")
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
                    La Bomba de Pistones Radiales: Una Guía para Seleccionarla
                    Correctamente
                  </h4>
                  <br />
                  <p>
                    En el mundo de la ingeniería hidráulica, la selección
                    adecuada de una bomba de pistones radiales es crucial para
                    garantizar un rendimiento óptimo en sistemas de fluidos de
                    potencia. Estas bombas son componentes esenciales en una
                    variedad de aplicaciones industriales, desde maquinaria
                    pesada hasta sistemas de control de procesos.
                  </p>
                  <br />
                  <p>
                    Para comprender cómo seleccionar correctamente una bomba de
                    pistones radiales, es fundamental tener en cuenta varios
                    parámetros técnicos clave, como psi (libras por pulgada
                    cuadrada), gpm (galones por minuto) y rpm (revoluciones por
                    minuto). Estos parámetros determinan la capacidad de la
                    bomba para generar presión y caudal en el sistema
                    hidráulico.
                  </p>
                  <br />
                  <p>
                    Para obtener información técnica detallada sobre bombas de
                    pistones radiales, se puede consultar el siguiente enlace:{" "}
                    <a href="https://www.tu.biz/products/piston-pumps">
                      www.tu.biz/products/piston-pumps
                    </a>
                    .
                  </p>
                  <br />
                  <h4>
                    Parámetros a Considerar al Seleccionar una Bomba de Pistones
                    Radiales:
                  </h4>
                  <ul>
                    <li>
                      Presión de Trabajo (psi): La presión de trabajo es la
                      presión máxima que la bomba puede generar en el sistema.
                      Es importante seleccionar una bomba con una capacidad de
                      psi adecuada para las demandas del sistema.
                    </li>
                    <li>
                      Caudal (gpm): El caudal se refiere a la cantidad de fluido
                      que la bomba puede suministrar por minuto. Es crucial
                      elegir una bomba que pueda proporcionar el caudal
                      necesario para mantener el funcionamiento eficiente del
                      sistema.
                    </li>
                    <li>
                      Velocidad de Operación (rpm): La velocidad de operación de
                      la bomba, medida en revoluciones por minuto, afecta
                      directamente su rendimiento y vida útil. Es importante
                      seleccionar una velocidad de operación que sea compatible
                      con los requisitos de la aplicación y que garantice una
                      operación suave y confiable.
                    </li>
                  </ul>
                  <br />
                  <p>
                    Al seleccionar una bomba de pistones radiales, también es
                    fundamental considerar otros factores, como la viscosidad
                    del fluido, la temperatura de operación y la compatibilidad
                    con otros componentes del sistema.
                  </p>
                  <br />
                  <p>
                    En resumen, la selección adecuada de una bomba de pistones
                    radiales es crucial para garantizar un rendimiento óptimo en
                    sistemas hidráulicos. Al considerar cuidadosamente los
                    parámetros técnicos clave y consultar recursos como el
                    enlace proporcionado, los ingenieros pueden tomar decisiones
                    informadas que maximicen la eficiencia y la fiabilidad del
                    sistema.
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

export default PostSpanish15;
