import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish35 = ({ db }) => {
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
        .filter((item) => item.id === "35")
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
                  <h4>Hidráulica vs. Neumática</h4>
                  <p>
                    En este video, exploraremos las diferencias entre la
                    hidráulica y la neumática, dos tecnologías ampliamente
                    utilizadas para transmitir energía en sistemas industriales
                    y comerciales. Analizaremos las aplicaciones en las que cada
                    una de estas tecnologías sería más adecuada según los
                    requisitos técnicos de las aplicaciones, como carga,
                    velocidad y fuerza.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Principio de Funcionamiento:</strong> La
                      hidráulica utiliza líquidos incompresibles, como aceite,
                      para transmitir energía, mientras que la neumática utiliza
                      gases comprimidos, como aire. Ambas tecnologías aprovechan
                      la presión generada para realizar trabajo mecánico.
                    </li>
                    <li>
                      {" "}
                      <strong>Aplicaciones de la Hidráulica:</strong> La
                      hidráulica es ideal para aplicaciones que requieren una
                      alta fuerza y precisión, como en la industria de la
                      construcción para el funcionamiento de excavadoras y
                      grúas, en la industria automotriz para sistemas de frenado
                      y dirección asistida, y en maquinaria pesada para levantar
                      y mover cargas pesadas.
                    </li>
                    <li>
                      {" "}
                      <strong>Aplicaciones de la Neumática:</strong> La
                      neumática es más adecuada para aplicaciones que requieren
                      movimientos rápidos y menos fuerza, como en la
                      automatización de líneas de ensamblaje, en sistemas de
                      transporte de materiales, y en herramientas neumáticas
                      para perforación, lijado y pintura.
                    </li>
                    <li>
                      {" "}
                      <strong>Consideraciones Técnicas:</strong> Al elegir entre
                      hidráulica y neumática, es importante considerar factores
                      como la carga a levantar, la velocidad requerida, la
                      precisión necesaria y el entorno de trabajo. La hidráulica
                      es más adecuada para aplicaciones de alta carga y baja
                      velocidad, mientras que la neumática es mejor para
                      aplicaciones de alta velocidad y baja carga.
                    </li>
                  </ul>

                  <h4>Selección de Tecnología</h4>

                  <p>
                    La elección entre hidráulica y neumática depende de las
                    necesidades específicas de cada aplicación. Es importante
                    evaluar cuidadosamente los requisitos técnicos y las
                    limitaciones de cada tecnología para garantizar un
                    rendimiento óptimo y una eficiencia energética adecuada en
                    el sistema.
                  </p>

                  <p>
                    En resumen, tanto la hidráulica como la neumática son
                    tecnologías valiosas que ofrecen diferentes beneficios según
                    las aplicaciones específicas. Al comprender las diferencias
                    entre ambas y sus aplicaciones respectivas, los ingenieros y
                    diseñadores pueden seleccionar la tecnología más adecuada
                    para cada situación.
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

export default PostSpanish35;
