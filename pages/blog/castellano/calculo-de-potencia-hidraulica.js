import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish3 = ({ db }) => {
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
        .filter((item) => item.id === "3")
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
                    Cálculo de Potencia Hidráulica para Bomba: Conceptos y
                    Aplicaciones
                  </h4>
                  <br />
                  <p>
                    El cálculo de la potencia hidráulica para una bomba es un
                    aspecto esencial en el diseño y la selección de sistemas
                    hidráulicos, ya que permite determinar la potencia máxima
                    que puede proporcionar una bomba en función de su velocidad
                    de rotación y su desplazamiento volumétrico. Esta fórmula
                    básica, HP = RPM X DISP/ 231, es fundamental para garantizar
                    un funcionamiento eficiente y seguro del sistema hidráulico.
                  </p>
                  <br />
                  <p>
                    Para comprender cómo funciona el cálculo de potencia
                    hidráulica para una bomba, es importante tener en cuenta los
                    siguientes aspectos clave:
                  </p>
                  <br />
                  <h4>Principios de Funcionamiento</h4>
                  <ul>
                    <li>
                      <strong>Velocidad de Rotación (RPM):</strong> La velocidad
                      de rotación es la velocidad a la que gira el eje de la
                      bomba, medida en revoluciones por minuto (RPM). Esta
                      velocidad determina la frecuencia con la que la bomba
                      suministra fluido al sistema.
                    </li>
                    <li>
                      <strong>Desplazamiento Volumétrico (DISP):</strong> El
                      desplazamiento volumétrico es el volumen de fluido que la
                      bomba puede desplazar por cada revolución del eje, medido
                      en pulgadas cúbicas por revolución (in³/rev).
                    </li>
                    <li>
                      <strong>Potencia Hidráulica (HP):</strong> La potencia
                      hidráulica es la potencia máxima que puede proporcionar la
                      bomba hidráulica al sistema, calculada mediante la fórmula
                      HP = RPM X DISP/ 231. Esta potencia se expresa típicamente
                      en unidades de caballos de fuerza (HP).
                    </li>
                  </ul>
                  <br />
                  <p>
                    El cálculo de la potencia hidráulica para una bomba es
                    crucial para garantizar que el sistema hidráulico funcione
                    de manera eficiente y segura. Determinar la potencia máxima
                    que puede proporcionar la bomba permite a los ingenieros
                    seleccionar adecuadamente la bomba y otros componentes del
                    sistema para cumplir con los requisitos de rendimiento y
                    carga de la aplicación.
                  </p>
                  <br />
                  <p>
                    En el video adjunto, se proporciona una explicación
                    detallada sobre cómo calcular la potencia hidráulica para
                    una bomba utilizando la fórmula HP = RPM X DISP/ 231. Se
                    ilustran ejemplos prácticos y se ofrecen consejos para
                    aplicar esta fórmula en diferentes situaciones de ingeniería
                    hidráulica. Además, se discuten las consideraciones
                    importantes a tener en cuenta al diseñar y seleccionar
                    bombas hidráulicas para aplicaciones específicas.
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

export default PostSpanish3;
