import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish51 = ({ db }) => {
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
        .filter((item) => item.id === "51")
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
                  <h4>Cálculo de RPM de Motor Hidráulico</h4>
                  <p>
                    Calcular las RPM (revoluciones por minuto) de un motor
                    hidráulico es crucial para comprender su rendimiento y su
                    capacidad para impulsar un sistema hidráulico. En este
                    video, proporcionaré información sobre cómo calcular las RPM
                    para un motor hidráulico utilizando la fórmula rpm = gpm x
                    231 / disp.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Fórmula de Cálculo:</strong> Las RPM de un motor
                      hidráulico se pueden calcular utilizando la siguiente
                      fórmula:
                    </li>
                  </ul>

                  <p class="indent">rpm = gpm x 231 / disp</p>

                  <p>Donde:</p>

                  <ul>
                    <li>
                      {" "}
                      <strong>rpm:</strong> Revoluciones por minuto del motor
                      hidráulico.
                    </li>
                    <li>
                      {" "}
                      <strong>gpm:</strong> Galones por minuto (GPM) de flujo
                      volumétrico que entra al motor.
                    </li>
                    <li>
                      {" "}
                      <strong>disp:</strong> Desplazamiento del motor
                      hidráulico, medido en pulgadas cúbicas por revolución.
                    </li>
                  </ul>

                  <p>
                    Esta fórmula nos permite determinar la velocidad de rotación
                    del motor hidráulico en función del flujo de entrada y el
                    desplazamiento del motor. Es esencial para dimensionar
                    correctamente el motor y asegurar un rendimiento óptimo en
                    el sistema hidráulico.
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
                      <strong>Desplazamiento del Motor (disp):</strong> 2
                      pulgadas cúbicas por revolución
                    </li>
                  </ul>

                  <p>Aplicando la fórmula, obtenemos:</p>

                  <p class="indent">
                    rpm = 10 GPM x 231 / 2 pulgadas cúbicas por revolución
                  </p>

                  <p>
                    Después de realizar los cálculos, encontramos que las RPM
                    del motor hidráulico son de aproximadamente 1155 RPM.
                  </p>

                  <h4>Consideraciones Importantes</h4>

                  <p>
                    Al utilizar esta fórmula, es importante tener en cuenta
                    algunas consideraciones:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Presión del Sistema:</strong> La presión del
                      sistema hidráulico puede afectar el rendimiento real del
                      motor y su velocidad de rotación.
                    </li>
                    <li>
                      {" "}
                      <strong>Viscosidad del Fluido:</strong> La viscosidad del
                      fluido hidráulico puede influir en la eficiencia del motor
                      y en su capacidad para mantener una velocidad constante.
                    </li>
                    <li>
                      {" "}
                      <strong>Condiciones de Carga:</strong> Las condiciones de
                      carga y la resistencia del sistema pueden afectar la
                      velocidad de rotación del motor en situaciones prácticas.
                    </li>
                  </ul>

                  <h4>Conclusiones</h4>

                  <p>
                    En resumen, el cálculo de las RPM de un motor hidráulico es
                    esencial para comprender su rendimiento y su capacidad para
                    impulsar un sistema hidráulico. Con la fórmula proporcionada
                    y teniendo en cuenta las consideraciones mencionadas, los
                    ingenieros y técnicos pueden seleccionar y dimensionar
                    adecuadamente los motores hidráulicos para satisfacer las
                    necesidades específicas de sus aplicaciones.
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

export default PostSpanish51;
