import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish28 = ({ db }) => {
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
        .filter((item) => item.id === "28")
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
                  <h4>Cálculo para Remover Calor en un Sistema Hidráulico</h4>
                  <p>
                    En este video, exploraremos cómo eliminar el calor de un
                    circuito hidráulico utilizando un intercambiador de calor de
                    aire. La gestión del calor es fundamental para garantizar el
                    funcionamiento eficiente y prolongar la vida útil de los
                    componentes en un sistema hidráulico. Un intercambiador de
                    calor de aire es una solución comúnmente utilizada para
                    disipar el calor generado durante la operación del sistema.
                  </p>

                  <ul>
                    <li>
                      <strong>
                        Funcionamiento del Intercambiador de Calor de Aire:
                      </strong>{" "}
                      Un intercambiador de calor de aire utiliza el aire
                      ambiente para disipar el calor del fluido hidráulico. El
                      aire caliente generado por el sistema hidráulico se dirige
                      a través del intercambiador de calor, donde el calor se
                      transfiere al aire circundante, que luego se disipa al
                      entorno.
                    </li>
                    <li>
                      <strong>Fórmula de Cálculo:</strong> La fórmula utilizada
                      en el video para calcular la cantidad de calor que se debe
                      eliminar por hora es: CALOR A REMOVER (BTU/HR) /
                      DIFERENCIAL DE TEMPERATURA (ENTRE LA TEMPERATURA MÁXIMA
                      ACTUAL DEL SISTEMA Y LA TEMPERATURA AMBIENTE) = BTU/HR/°F.
                      Esta fórmula permite determinar la capacidad de
                      enfriamiento necesaria para mantener la temperatura del
                      fluido hidráulico dentro de los límites aceptables.
                    </li>
                    <li>
                      <strong>Selección del Intercambiador de Calor:</strong> Al
                      seleccionar un intercambiador de calor de aire, es
                      importante considerar factores como el flujo de aire, la
                      capacidad de enfriamiento y el tamaño del intercambiador.
                      Se deben seguir las recomendaciones del fabricante y
                      consultar con un profesional para garantizar la selección
                      adecuada.
                    </li>
                    <li>
                      <strong>Beneficios:</strong> Utilizar un intercambiador de
                      calor de aire proporciona varios beneficios, incluida la
                      prevención del sobrecalentamiento del fluido hidráulico,
                      la mejora de la eficiencia del sistema y la prolongación
                      de la vida útil de los componentes.
                    </li>
                  </ul>

                  <h4>
                    Ventajas de Utilizar un Intercambiador de Calor de Aire
                  </h4>

                  <ul>
                    <li>
                      <strong>Enfriamiento Eficiente:</strong> El intercambiador
                      de calor de aire permite un enfriamiento eficiente del
                      fluido hidráulico al utilizar el aire ambiente como medio
                      de enfriamiento.
                    </li>
                    <li>
                      <strong>Ahorro de Energía:</strong> Al disipar el calor al
                      entorno, se reduce la necesidad de utilizar sistemas de
                      enfriamiento activo, lo que resulta en un ahorro de
                      energía.
                    </li>
                    <li>
                      <strong>Mayor Fiabilidad:</strong> Al mantener la
                      temperatura del fluido hidráulico dentro de los límites
                      aceptables, se mejora la fiabilidad y la durabilidad del
                      sistema hidráulico.
                    </li>
                    <li>
                      <strong>Costo Efectividad:</strong> Los intercambiadores
                      de calor de aire son una solución rentable para la gestión
                      del calor en comparación con otras opciones de
                      enfriamiento.
                    </li>
                  </ul>

                  <p>
                    En conclusión, el uso de un intercambiador de calor de aire
                    es una manera efectiva de eliminar el calor de un sistema
                    hidráulico y mantener una temperatura óptima del fluido. Con
                    una selección adecuada y un mantenimiento regular, los
                    intercambiadores de calor de aire pueden mejorar la
                    eficiencia y la fiabilidad de los sistemas hidráulicos en
                    una variedad de aplicaciones industriales y móviles.
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

export default PostSpanish28;
