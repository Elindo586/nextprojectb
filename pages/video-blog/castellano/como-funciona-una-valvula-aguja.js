import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish58 = ({ db }) => {
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
        .filter((item) => item.id === "58")
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
                  <h4>Cómo Funciona una Válvula Aguja</h4>
                  <p>
                    Las válvulas aguja son componentes esenciales en sistemas
                    hidráulicos y neumáticos, diseñadas para regular con
                    precisión el flujo de fluido en una amplia gama de
                    aplicaciones industriales y comerciales. En este video,
                    exploraremos cómo funciona una válvula aguja en un sistema
                    hidráulico de potencia fluida.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Funcionamiento:</strong> Una válvula aguja está
                      compuesta por un husillo fino y una sede cónica, que
                      juntos forman un pasaje estrecho para el flujo de fluido.
                      Al girar el husillo, se ajusta la apertura entre la sede y
                      el husillo, lo que controla el flujo de fluido de manera
                      precisa.
                    </li>
                  </ul>

                  <h4>Componentes Principales</h4>

                  <p>
                    Para comprender mejor cómo funciona una válvula aguja, es
                    importante conocer sus componentes principales:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Husillo:</strong> El husillo es una varilla larga
                      y delgada que se puede girar para ajustar la apertura de
                      la válvula. Al girar el husillo en sentido horario, se
                      cierra la válvula, mientras que al girarlo en sentido
                      antihorario, se abre.
                    </li>
                    <li>
                      {" "}
                      <strong>Sede Cónica:</strong> La sede cónica es una
                      superficie inclinada en el extremo del husillo que se
                      ajusta a una superficie cónica en el cuerpo de la válvula.
                      Al girar el husillo, se modifica la distancia entre la
                      sede y el husillo, lo que controla el flujo de fluido a
                      través de la válvula.
                    </li>
                    <li>
                      {" "}
                      <strong>Cuerpo de la Válvula:</strong> El cuerpo de la
                      válvula es la estructura principal que alberga el husillo
                      y la sede cónica. Está diseñado para soportar presiones y
                      temperaturas elevadas, proporcionando un entorno seguro
                      para el funcionamiento de la válvula.
                    </li>
                  </ul>

                  <h4>Aplicaciones Comunes</h4>

                  <p>
                    Las válvulas aguja se utilizan en una variedad de
                    aplicaciones donde se requiere un control preciso del flujo
                    de fluido, incluyendo:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Sistemas Hidráulicos:</strong> Las válvulas aguja
                      se utilizan para controlar el flujo de aceite en sistemas
                      hidráulicos de maquinaria pesada, equipos industriales y
                      vehículos.
                    </li>
                    <li>
                      {" "}
                      <strong>Sistemas Neumáticos:</strong> En aplicaciones
                      neumáticas, las válvulas aguja regulan el flujo de aire
                      comprimido en equipos y procesos industriales.
                    </li>
                    <li>
                      {" "}
                      <strong>Instrumentación:</strong> Las válvulas aguja se
                      utilizan en instrumentación de precisión para controlar el
                      flujo de líquidos y gases en equipos de laboratorio y
                      análisis.
                    </li>
                  </ul>

                  <h4>Beneficios y Ventajas</h4>

                  <p>
                    Algunos de los beneficios y ventajas de las válvulas aguja
                    incluyen:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Control Preciso:</strong> Las válvulas aguja
                      ofrecen un control extremadamente preciso del flujo de
                      fluido, lo que las hace ideales para aplicaciones donde se
                      requiere una regulación exacta.
                    </li>
                    <li>
                      {" "}
                      <strong>Compactas y Livianas:</strong> Su diseño compacto
                      y liviano las hace adecuadas para aplicaciones donde el
                      espacio y el peso son limitados.
                    </li>
                    <li>
                      {" "}
                      <strong>Fiabilidad:</strong> Las válvulas aguja son
                      conocidas por su fiabilidad y durabilidad en entornos
                      industriales exigentes.
                    </li>
                  </ul>

                  <h4>Conclusiones</h4>

                  <p>
                    En resumen, las válvulas aguja desempeñan un papel crucial
                    en el control del flujo de fluido en una variedad de
                    aplicaciones industriales y comerciales. Con su capacidad
                    para proporcionar un control preciso y confiable del flujo,
                    las válvulas aguja son una opción popular para ingenieros y
                    diseñadores en busca de soluciones de regulación de fluidos
                    eficientes y efectivas.
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

export default PostSpanish58;
