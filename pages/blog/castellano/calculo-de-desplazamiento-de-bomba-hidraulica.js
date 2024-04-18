import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish54 = ({ db }) => {
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
        .filter((item) => item.id === "54")
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
                  <h4>Cálculo de Desplazamiento de Bomba Hidráulica</h4>
                  <p>
                    El cálculo del desplazamiento de una bomba hidráulica es
                    fundamental para determinar su capacidad de suministro de
                    fluido y su rendimiento en un sistema hidráulico. En este
                    video, proporcionamos información sobre cómo calcular el
                    desplazamiento de una bomba hidráulica utilizando la fórmula
                    disp = gpm x 231 / rpm.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Fórmula de Cálculo:</strong> El desplazamiento de
                      una bomba hidráulica (en pulgadas cúbicas por revolución)
                      se puede calcular utilizando la siguiente fórmula:
                    </li>
                  </ul>

                  <p class="indent">disp = gpm x 231 / rpm</p>

                  <p>Donde:</p>

                  <ul>
                    <li>
                      {" "}
                      <strong>disp:</strong> Desplazamiento de la bomba
                      hidráulica, medido en pulgadas cúbicas por revolución.
                    </li>
                    <li>
                      {" "}
                      <strong>gpm:</strong> Flujo volumétrico de la bomba
                      hidráulica, medido en galones por minuto (GPM).
                    </li>
                    <li>
                      {" "}
                      <strong>rpm:</strong> Velocidad de rotación de la bomba
                      hidráulica, medida en revoluciones por minuto (RPM).
                    </li>
                  </ul>

                  <p>
                    Esta fórmula nos permite determinar cuánto fluido puede
                    suministrar la bomba hidráulica en cada revolución, lo que
                    es esencial para dimensionar adecuadamente el sistema y
                    garantizar un rendimiento óptimo.
                  </p>

                  <h4>Aplicación Práctica</h4>

                  <p>
                    Para comprender mejor cómo aplicar esta fórmula,
                    consideremos un ejemplo:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Flujo Volumétrico (GPM):</strong> 10 galones por
                      minuto
                    </li>
                    <li>
                      {" "}
                      <strong>Velocidad de Rotación (RPM):</strong> 1200
                      revoluciones por minuto
                    </li>
                  </ul>

                  <p>Aplicando la fórmula, obtenemos:</p>

                  <p class="indent">disp = 10 GPM x 231 / 1200 RPM</p>

                  <p>
                    Después de realizar los cálculos, encontramos que el
                    desplazamiento de esta bomba hidráulica es de
                    aproximadamente 1.925 pulgadas cúbicas por revolución.
                  </p>

                  <h4>Consideraciones Importantes</h4>

                  <p>
                    Es importante tener en cuenta algunas consideraciones al
                    utilizar esta fórmula:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Presión del Sistema:</strong> La presión del
                      sistema hidráulico puede afectar el rendimiento real de la
                      bomba y su capacidad de suministro de fluido.
                    </li>
                    <li>
                      {" "}
                      <strong>Viscosidad del Fluido:</strong> La viscosidad del
                      fluido hidráulico puede influir en la eficiencia de la
                      bomba y en su capacidad para suministrar fluido a la
                      velocidad y presión deseadas.
                    </li>
                    <li>
                      {" "}
                      <strong>Condiciones de Operación:</strong> Las condiciones
                      ambientales y la carga aplicada al sistema pueden afectar
                      el rendimiento y la capacidad de la bomba hidráulica en
                      situaciones prácticas.
                    </li>
                  </ul>

                  <h4>Conclusiones</h4>

                  <p>
                    El cálculo del desplazamiento de una bomba hidráulica es
                    esencial para dimensionar adecuadamente el sistema y
                    garantizar un rendimiento óptimo en una variedad de
                    aplicaciones industriales y móviles. Con la fórmula
                    proporcionada y teniendo en cuenta las consideraciones
                    mencionadas, los ingenieros y técnicos pueden diseñar y
                    operar sistemas hidráulicos con mayor eficacia y precisión.
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

export default PostSpanish54;
