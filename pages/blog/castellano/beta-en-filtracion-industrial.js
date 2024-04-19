import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish10_1 = ({ db }) => {
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
        .filter((item) => item.id === "10.1")
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
                    ¿Qué es el Beta de un Filtro Hidráulico y Cómo Afecta la
                    Limpieza del Sistema?
                  </h4>
                  <br />
                  <p>
                    El beta de un filtro hidráulico es un término crucial en el
                    mundo de la filtración de fluidos y juega un papel
                    fundamental en mantener la limpieza y eficiencia de los
                    sistemas hidráulicos. En este artículo, exploraremos qué es
                    exactamente el beta de un filtro hidráulico, cómo se calcula
                    y por qué es importante para garantizar un rendimiento
                    óptimo del sistema.
                  </p>
                  <br />
                  <h4>¿Qué es el Beta de un Filtro Hidráulico?</h4>
                  <p>
                    El beta de un filtro hidráulico, también conocido como la
                    relación de eficiencia del filtro (Filter Efficiency Ratio),
                    es una medida que indica la capacidad de un filtro para
                    retener partículas de un determinado tamaño. Se calcula
                    dividiendo el número de partículas de un tamaño específico
                    presentes en el flujo de entrada del filtro entre el número
                    de partículas del mismo tamaño presentes en el flujo de
                    salida del filtro.
                  </p>
                  <br />
                  <h4>
                    Importancia del Beta en la Limpieza del Sistema Hidráulico:
                  </h4>
                  <ul>
                    <li>
                      <strong>Calidad del Fluidos:</strong> Un filtro con un
                      beta alto puede retener una mayor cantidad de partículas,
                      lo que resulta en un fluido más limpio y de mayor calidad.
                      Esto es crucial para proteger los componentes del sistema
                      hidráulico y prolongar su vida útil.
                    </li>
                    <li>
                      <strong>Rendimiento del Sistema:</strong> Un fluido limpio
                      reduce el desgaste y la abrasión en los componentes del
                      sistema, lo que mejora su rendimiento y eficiencia. Un
                      filtro con un alto beta puede garantizar un nivel adecuado
                      de limpieza para mantener el rendimiento óptimo del
                      sistema a largo plazo.
                    </li>
                    <li>
                      <strong>Costos de Mantenimiento:</strong> Al mantener un
                      fluido limpio y de alta calidad, se reducen los costos de
                      mantenimiento asociados con la reparación y reemplazo de
                      componentes dañados. Un filtro con un beta adecuado puede
                      ayudar a minimizar los costos operativos y prolongar los
                      intervalos de mantenimiento.
                    </li>
                  </ul>
                  <br />
                  <h4>Cálculo del Beta y Selección del Filtro:</h4>
                  <p>
                    El beta de un filtro se calcula mediante pruebas de
                    laboratorio que miden la eficiencia del filtro en la
                    retención de partículas de diferentes tamaños. Al
                    seleccionar un filtro para un sistema hidráulico, es
                    importante considerar el tamaño de las partículas que se
                    espera encontrar y elegir un filtro con un beta adecuado
                    para cumplir con los requisitos de limpieza del sistema.
                  </p>
                  <br />
                  <p>
                    En conclusión, el beta de un filtro hidráulico es una medida
                    clave de su eficiencia y capacidad para retener partículas
                    en un sistema hidráulico. Comprender el beta y seleccionar
                    filtros adecuados es fundamental para garantizar la limpieza
                    y el rendimiento óptimo del sistema a lo largo del tiempo.
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

export default PostSpanish10_1;
