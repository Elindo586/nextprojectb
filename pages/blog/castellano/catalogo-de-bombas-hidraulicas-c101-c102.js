import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish16 = ({ db }) => {
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
        .filter((item) => item.id === "16")
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
                  <h4>Catálogo de bombas hidráulicas C101 y C102</h4>
                  <br />
                  <p>
                    En este vídeo, presentamos un catálogo de bombas hidráulicas
                    de engranajes, también conocidas como &#34;bombas de
                    descarga&#34;, para las series C101 y C102. Estas bombas son
                    componentes fundamentales en sistemas de potencia fluida y
                    es crucial seleccionar la bomba adecuada según los
                    requisitos técnicos específicos de cada aplicación.
                  </p>
                  <ul>
                    <li>
                      <strong>Selección de la bomba adecuada:</strong> Al
                      seleccionar una bomba hidráulica para una aplicación
                      particular, es importante tener en cuenta factores como la
                      capacidad de flujo, la presión de operación, la velocidad
                      de rotación y las condiciones ambientales.
                    </li>
                    <li>
                      <strong>Serie C101:</strong> Esta serie de bombas
                      hidráulicas ofrece una variedad de modelos con diferentes
                      capacidades de flujo y presiones de operación. Las bombas
                      de la serie C101 son ideales para aplicaciones que
                      requieren un rendimiento constante y fiable.
                    </li>
                    <li>
                      <strong>Serie C102:</strong> Las bombas de la serie C102
                      son similares a las de la serie C101, pero están diseñadas
                      para aplicaciones que requieren un mayor caudal y presión.
                      Estas bombas son adecuadas para aplicaciones más exigentes
                      donde se necesita una mayor potencia de salida.
                    </li>
                  </ul>
                  <p>
                    Para obtener más información sobre las especificaciones
                    técnicas y las opciones disponibles para las bombas de las
                    series C101 y C102, consulta nuestro catálogo en línea{" "}
                    <a href="https://www.tu.biz/pdf/dump-pumps.pdf">aquí</a>.
                  </p>
                  <p>
                    Seleccionar la bomba hidráulica adecuada es crucial para
                    garantizar el rendimiento óptimo y la fiabilidad del sistema
                    hidráulico en general. Si tienes alguna pregunta sobre cómo
                    seleccionar la bomba adecuada para tu aplicación específica,
                    no dudes en ponerte en contacto con nuestro equipo de
                    expertos.
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

export default PostSpanish16;
