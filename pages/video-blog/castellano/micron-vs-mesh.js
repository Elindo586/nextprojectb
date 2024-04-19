import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish44 = ({ db }) => {
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
        .filter((item) => item.id === "44")
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
                    Micra vs Malla: Diferencias y Aplicaciones en Sistemas
                    Hidráulicos
                  </h4>
                  <p>
                    En este video, exploraremos las diferencias entre el tamaño
                    de una micra y el tamaño de una malla, y cómo se aplican en
                    un sistema hidráulico. Comprender estas diferencias es
                    fundamental para el mantenimiento efectivo y el
                    funcionamiento óptimo de los sistemas hidráulicos.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>¿Qué es una Micra?</strong> Una micra, también
                      conocida como micrómetro, es una unidad de medida que
                      equivale a una millonésima parte de un metro (1 μm =
                      0.000001 m). Se utiliza para medir el tamaño de partículas
                      sólidas en un fluido hidráulico, como el polvo, el barro y
                      otros contaminantes.
                    </li>
                    <li>
                      {" "}
                      <strong>¿Qué es una Malla?</strong> Una malla es una
                      medida que se refiere al número de aberturas por pulgada
                      lineal en una pantalla o tamiz. Se utiliza para determinar
                      el tamaño de las partículas sólidas en un fluido
                      hidráulico a través de la filtración. Cuanto mayor sea el
                      número de malla, más fina será la pantalla y más pequeñas
                      serán las partículas que puede retener.
                    </li>
                  </ul>

                  <h4>Aplicaciones en Sistemas Hidráulicos</h4>

                  <p>
                    Las micras y las mallas desempeñan roles importantes en la
                    filtración y limpieza de fluidos hidráulicos en sistemas.
                    Algunas aplicaciones comunes incluyen:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Filtración de Partículas:</strong> Las micras se
                      utilizan para especificar la eficiencia de filtración de
                      un elemento de filtro. Por ejemplo, un filtro de 10 micras
                      puede retener partículas con un tamaño de 10 micras o más
                      grandes.
                    </li>
                    <li>
                      {" "}
                      <strong>Selección de Elementos de Filtro:</strong> Las
                      mallas se utilizan para especificar el tamaño de las
                      aberturas en un tamiz o pantalla de filtro. Los elementos
                      de filtro con una malla más fina pueden capturar
                      partículas más pequeñas, mientras que aquellos con una
                      malla más gruesa pueden permitir el paso de partículas más
                      grandes.
                    </li>
                    <li>
                      {" "}
                      <strong>Control de Contaminación:</strong> Tanto las
                      micras como las mallas son importantes para controlar la
                      contaminación en sistemas hidráulicos, asegurando que el
                      fluido esté limpio y libre de partículas que puedan dañar
                      los componentes del sistema.
                    </li>
                  </ul>

                  <h4>Consideraciones Importantes</h4>

                  <p>
                    Al considerar el tamaño de las micras y las mallas en un
                    sistema hidráulico, es importante tener en cuenta lo
                    siguiente:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>
                        Compatibilidad del Elemento de Filtro:
                      </strong>{" "}
                      Seleccionar el elemento de filtro adecuado que tenga la
                      capacidad de retener las partículas deseadas sin
                      obstruirse ni afectar el flujo del fluido.
                    </li>
                    <li>
                      {" "}
                      <strong>Requisitos de la Aplicación:</strong> Considerar
                      las necesidades específicas de la aplicación, como el
                      nivel de limpieza requerido y la sensibilidad de los
                      componentes del sistema a la contaminación.
                    </li>
                  </ul>

                  <h4>Conclusiones</h4>

                  <p>
                    En resumen, comprender las diferencias entre las micras y
                    las mallas, y cómo se aplican en sistemas hidráulicos, es
                    esencial para el mantenimiento efectivo y el funcionamiento
                    óptimo de dichos sistemas. Al utilizar las especificaciones
                    de micras y mallas adecuadas, los operadores pueden
                    garantizar la limpieza y la integridad del fluido
                    hidráulico, prolongando así la vida útil de los componentes
                    y maximizando el rendimiento del sistema.
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

export default PostSpanish44;
