import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish55 = ({ db }) => {
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
        .filter((item) => item.id === "55")
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
                  <h4>Filtración Fuera de Línea</h4>
                  <p>
                    La filtración fuera de línea es una técnica eficaz para
                    mantener la limpieza y el rendimiento óptimo de los sistemas
                    hidráulicos de potencia fluida. En este video,
                    proporcionamos información sobre los beneficios de la
                    filtración fuera de línea para los sistemas hidráulicos,
                    como el mantenimiento fácil, la capacidad de cambiar el
                    tamaño de micras sin aumentar la presión en el sistema, la
                    posibilidad de cambiar el filtro sin detener la máquina y la
                    filtración constante.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Mantenimiento Fácil:</strong> La filtración fuera
                      de línea permite un mantenimiento sencillo y eficiente de
                      los sistemas hidráulicos al separar el proceso de
                      filtración de la operación principal del sistema, lo que
                      facilita el acceso y reemplazo de los filtros.
                    </li>
                    <li>
                      {" "}
                      <strong>Cambio de Tamaño de Micras:</strong> Con la
                      filtración fuera de línea, es posible cambiar el tamaño de
                      las micras del filtro sin aumentar la presión en el
                      sistema, lo que proporciona flexibilidad para adaptarse a
                      diferentes requisitos de limpieza según las necesidades de
                      la aplicación.
                    </li>
                    <li>
                      {" "}
                      <strong>No se Detiene la Máquina:</strong> Al realizar la
                      filtración fuera de línea, no es necesario detener la
                      máquina para cambiar el filtro, lo que minimiza el tiempo
                      de inactividad y mejora la productividad del equipo.
                    </li>
                    <li>
                      {" "}
                      <strong>Filtración Constante:</strong> La filtración fuera
                      de línea garantiza una filtración constante y continua del
                      fluido hidráulico, lo que ayuda a mantener la limpieza del
                      sistema y prolongar la vida útil de los componentes.
                    </li>
                  </ul>

                  <h4>Beneficios Adicionales</h4>

                  <p>
                    Además de los beneficios mencionados anteriormente, la
                    filtración fuera de línea ofrece otras ventajas importantes
                    para los sistemas hidráulicos, como:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Reducción del Desgaste:</strong> Al mantener la
                      limpieza del fluido hidráulico, la filtración fuera de
                      línea ayuda a reducir el desgaste de los componentes del
                      sistema, como bombas, válvulas y cilindros, prolongando su
                      vida útil.
                    </li>
                    <li>
                      {" "}
                      <strong>Mejora del Rendimiento:</strong> Un sistema
                      hidráulico limpio y libre de contaminantes funciona de
                      manera más eficiente y proporciona un rendimiento óptimo
                      en términos de velocidad, precisión y control.
                    </li>
                    <li>
                      {" "}
                      <strong>Protección del Medio Ambiente:</strong> Al
                      prevenir la contaminación del fluido hidráulico y reducir
                      la necesidad de reemplazar componentes desgastados, la
                      filtración fuera de línea contribuye a la protección del
                      medio ambiente al reducir la generación de residuos.
                    </li>
                  </ul>

                  <h4>Conclusiones</h4>

                  <p>
                    En resumen, la filtración fuera de línea es una estrategia
                    efectiva para mantener la limpieza y el rendimiento óptimo
                    de los sistemas hidráulicos de potencia fluida. Con una
                    variedad de beneficios, incluyendo fácil mantenimiento,
                    flexibilidad en el tamaño de micras, filtración constante y
                    protección del sistema, la filtración fuera de línea es una
                    opción valiosa para mejorar la fiabilidad y la eficiencia de
                    los equipos hidráulicos.
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

export default PostSpanish55;
