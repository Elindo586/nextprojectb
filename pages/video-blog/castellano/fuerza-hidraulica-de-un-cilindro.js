import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish4 = ({ db }) => {
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
        .filter((item) => item.id === "4")
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
                    Cálculo de Fuerza para Cilindro Hidráulico: Fundamentos y
                    Aplicaciones
                  </h4>
                  <br />
                  <p>
                    El cálculo de fuerza para un cilindro hidráulico es un
                    concepto fundamental en la ingeniería de sistemas
                    hidráulicos que permite determinar la fuerza de salida o de
                    trabajo de un cilindro en función de la presión hidráulica y
                    el área del pistón. Esta fórmula básica, F = P x A, es
                    ampliamente utilizada en el diseño, análisis y selección de
                    cilindros hidráulicos para una variedad de aplicaciones
                    industriales.
                  </p>
                  <br />
                  <p>
                    Para comprender cómo funciona el cálculo de fuerza para un
                    cilindro hidráulico, es importante entender los siguientes
                    aspectos clave:
                  </p>
                  <br />
                  <h4>Principios de Funcionamiento</h4>
                  <ul>
                    <li>
                      <strong>Presión Hidráulica (P):</strong> La presión
                      hidráulica es la fuerza ejercida por el fluido hidráulico
                      sobre la superficie del pistón del cilindro. Se mide en
                      unidades de presión, como psi (libras por pulgada
                      cuadrada) o bar.
                    </li>
                    <li>
                      <strong>Área del Pistón (A):</strong> El área del pistón
                      es la superficie efectiva sobre la cual actúa la presión
                      hidráulica. Se calcula multiplicando el diámetro del
                      pistón por la constante pi (π) y dividiendo por 4 (A = π x
                      r²).
                    </li>
                    <li>
                      <strong>Fuerza Resultante (F):</strong> La fuerza
                      resultante es la fuerza de salida o de trabajo del
                      cilindro hidráulico, que se calcula multiplicando la
                      presión hidráulica por el área del pistón (F = P x A).
                    </li>
                  </ul>
                  <br />
                  <p>
                    La capacidad de calcular la fuerza de un cilindro hidráulico
                    es crucial en numerosas aplicaciones, como en sistemas de
                    elevación, prensado, sujeción y movimiento de cargas
                    pesadas. Comprender cómo utilizar esta fórmula básica
                    permite a los ingenieros diseñar y seleccionar cilindros
                    adecuados para cumplir con los requisitos de fuerza y
                    rendimiento de una aplicación específica.
                  </p>
                  <br />
                  <p>
                    En el video adjunto, se proporciona una explicación
                    detallada sobre cómo calcular la fuerza para un cilindro
                    hidráulico utilizando la fórmula F = P x A. Se ilustran
                    ejemplos prácticos y se ofrecen consejos para aplicar esta
                    fórmula en diferentes situaciones de ingeniería hidráulica.
                    Además, se discuten las consideraciones importantes a tener
                    en cuenta al diseñar y seleccionar cilindros hidráulicos
                    para aplicaciones específicas.
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

export default PostSpanish4;
