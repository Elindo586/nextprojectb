import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish31 = ({ db }) => {
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
        .filter((item) => item.id === "31")
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
                  <h4>Bombas Hidráulicas Hibridas</h4>
                  <p>
                    En este video, exploraremos el concepto de las bombas
                    hidráulicas híbridas, un tipo de bomba que, aunque ya no se
                    produce, ha dejado una huella significativa en la industria
                    hidráulica. Estas bombas, que combinan características de
                    las bombas de desplazamiento variable y fijo, ofrecen una
                    solución única para ciertas aplicaciones hidráulicas.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Características:</strong> Una bomba hidráulica
                      híbrida consta de una bomba de desplazamiento variable en
                      la parte delantera y una bomba de desplazamiento fijo en
                      la parte trasera. Ambas bombas comparten una sola entrada,
                      pero tienen salidas separadas. Esto permite una
                      combinación de flujo controlado y flujo constante en el
                      sistema.
                    </li>
                    <li>
                      {" "}
                      <strong>Funcionamiento:</strong> La bomba de
                      desplazamiento variable en la parte delantera proporciona
                      flexibilidad en el caudal según la demanda del sistema,
                      mientras que la bomba de desplazamiento fijo en la parte
                      trasera asegura un flujo constante independientemente de
                      las variaciones de carga.
                    </li>
                    <li>
                      {" "}
                      <strong>Aplicaciones:</strong> Las bombas hidráulicas
                      híbridas eran comunes en aplicaciones industriales y
                      móviles donde se requería tanto precisión en el control
                      como un flujo constante. Sin embargo, debido a avances en
                      tecnología y diseño, estas bombas han sido reemplazadas en
                      gran medida por modelos más avanzados y eficientes.
                    </li>
                    <li>
                      {" "}
                      <strong>Legado:</strong> Aunque las bombas hidráulicas
                      híbridas ya no se producen en gran escala, su legado
                      perdura en la industria hidráulica. Estas bombas
                      demostraron la viabilidad y las ventajas de combinar
                      diferentes tipos de bombas para satisfacer las necesidades
                      específicas de los sistemas hidráulicos.
                    </li>
                  </ul>

                  <h4>Consideraciones Finales</h4>

                  <ul>
                    <li>
                      {" "}
                      <strong>Tecnología Antigua:</strong> Las bombas
                      hidráulicas híbridas representan una tecnología más
                      antigua que ha sido superada por diseños más modernos y
                      eficientes en la actualidad.
                    </li>
                    <li>
                      {" "}
                      <strong>Avances Tecnológicos:</strong> Los avances en
                      tecnología han llevado al desarrollo de bombas hidráulicas
                      más sofisticadas y eficientes que pueden satisfacer una
                      amplia gama de aplicaciones con mayor precisión y
                      rendimiento.
                    </li>
                    <li>
                      {" "}
                      <strong>Alternativas Actuales:</strong> Aunque las bombas
                      hidráulicas híbridas ya no están disponibles en el
                      mercado, existen numerosas alternativas modernas que
                      ofrecen un rendimiento superior y una mayor eficiencia
                      para las aplicaciones hidráulicas actuales.
                    </li>
                  </ul>

                  <p>
                    Aunque las bombas hidráulicas híbridas pueden haber sido
                    populares en el pasado, su uso ha disminuido con el tiempo
                    debido a los avances en la tecnología hidráulica. Sin
                    embargo, su legado sigue siendo importante en la evolución
                    de los sistemas hidráulicos.
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

export default PostSpanish31;
