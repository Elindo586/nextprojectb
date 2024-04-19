import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish1 = ({ db }) => {
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
        .filter((item) => item.id === "1")
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
                    Prueba de Bomba Hidráulica de Presión Compensada:
                    Procedimiento y Consideraciones
                  </h4>
                  <br />
                  <p>
                    La prueba de una bomba hidráulica de presión compensada es
                    un paso crucial en el mantenimiento y diagnóstico de
                    sistemas hidráulicos, ya que permite verificar el
                    rendimiento y la eficiencia de la bomba en condiciones de
                    operación reales. Esta prueba es especialmente importante
                    para garantizar un funcionamiento óptimo del sistema y
                    prevenir posibles fallas o problemas futuros.
                  </p>
                  <br />
                  <p>
                    Para realizar una prueba efectiva de una bomba hidráulica de
                    presión compensada, es necesario seguir un procedimiento
                    adecuado y tener en cuenta ciertas consideraciones
                    importantes:
                  </p>
                  <br />
                  <h4>Procedimiento de Prueba</h4>
                  <ul>
                    <li>
                      <strong>Preparación del Sistema:</strong> Antes de
                      realizar la prueba, es importante asegurarse de que el
                      sistema hidráulico esté debidamente preparado y en
                      condiciones de funcionamiento adecuadas. Esto incluye
                      verificar el nivel de fluido, la presión de trabajo y la
                      correcta conexión de las líneas hidráulicas.
                    </li>
                    <li>
                      <strong>Registro de Parámetros:</strong> Durante la
                      prueba, se deben registrar y monitorear varios parámetros
                      importantes, como la presión de salida de la bomba, la
                      velocidad de rotación del motor, el caudal de fluido y
                      cualquier anomalía o variación en el funcionamiento del
                      sistema.
                    </li>
                    <li>
                      <strong>Prueba de Carga:</strong> Se puede realizar una
                      prueba de carga para evaluar el rendimiento de la bomba
                      bajo condiciones de carga típicas. Esto implica aplicar
                      una carga al sistema y medir la capacidad de la bomba para
                      mantener una presión constante en condiciones de carga
                      variable.
                    </li>
                    <li>
                      <strong>Verificación de Presión Compensada:</strong>{" "}
                      Durante la prueba, se debe verificar que la bomba mantenga
                      una presión constante dentro de un rango específico de
                      carga, lo que indica un funcionamiento adecuado de la
                      función de compensación de presión de la bomba.
                    </li>
                  </ul>
                  <br />
                  <p>
                    Es importante realizar la prueba de la bomba hidráulica de
                    presión compensada con cuidado y precisión para obtener
                    resultados precisos y confiables. Cualquier anomalía o
                    problema detectado durante la prueba debe abordarse de
                    inmediato para evitar daños mayores al sistema y garantizar
                    un funcionamiento seguro y eficiente a largo plazo.
                  </p>
                  <br />
                  <p>
                    En el video adjunto, se proporciona una guía detallada sobre
                    cómo realizar una prueba efectiva de una bomba hidráulica de
                    presión compensada. Se explican los pasos del procedimiento
                    de prueba y se ofrecen consejos y recomendaciones para
                    garantizar resultados precisos y confiables.
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

export default PostSpanish1;
