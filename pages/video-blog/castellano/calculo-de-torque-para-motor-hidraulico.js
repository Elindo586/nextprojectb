import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish50 = ({ db }) => {
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
        .filter((item) => item.id === "50")
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
                  <h4>Cálculo de Torque de Motor Hidráulico</h4>
                  <p>
                    Calcular el torque de un motor hidráulico es esencial para
                    comprender su capacidad para generar fuerza y ​​realizar
                    trabajo en un sistema hidráulico. En este video,
                    proporcionaré información sobre cómo calcular el torque para
                    un motor hidráulico utilizando la fórmula torque = psi x
                    disp / 6.28.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Fórmula de Cálculo:</strong> El torque de un motor
                      hidráulico se puede calcular utilizando la siguiente
                      fórmula:
                    </li>
                  </ul>

                  <p class="indent">torque = psi x disp / 6.28</p>

                  <p>Donde:</p>

                  <ul>
                    <li>
                      {" "}
                      <strong>torque:</strong> Torque del motor hidráulico,
                      medido en libras-pie (lb-ft).
                    </li>
                    <li>
                      {" "}
                      <strong>psi:</strong> Presión del sistema hidráulico,
                      medida en libras por pulgada cuadrada (psi).
                    </li>
                    <li>
                      {" "}
                      <strong>disp:</strong> Desplazamiento del motor
                      hidráulico, medido en pulgadas cúbicas por revolución.
                    </li>
                  </ul>

                  <p>
                    Esta fórmula nos permite determinar la fuerza de torsión que
                    puede generar el motor hidráulico en función de la presión
                    del sistema y el desplazamiento del motor. Es esencial para
                    dimensionar correctamente el motor y garantizar su capacidad
                    para realizar el trabajo necesario en el sistema hidráulico.
                  </p>

                  <h4>Aplicación Práctica</h4>

                  <p>
                    Para comprender mejor cómo aplicar esta fórmula,
                    consideremos un ejemplo:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Presión del Sistema (psi):</strong> 2000 libras
                      por pulgada cuadrada
                    </li>
                    <li>
                      {" "}
                      <strong>Desplazamiento del Motor (disp):</strong> 10
                      pulgadas cúbicas por revolución
                    </li>
                  </ul>

                  <p>Aplicando la fórmula, obtenemos:</p>

                  <p class="indent">
                    torque = 2000 psi x 10 pulgadas cúbicas por revolución /
                    6.28
                  </p>

                  <p>
                    Después de realizar los cálculos, encontramos que el torque
                    del motor hidráulico es de aproximadamente 317.77
                    libras-pie.
                  </p>

                  <h4>Consideraciones Importantes</h4>

                  <p>
                    Al utilizar esta fórmula, es importante tener en cuenta
                    algunas consideraciones:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Eficiencia del Sistema:</strong> La eficiencia del
                      sistema hidráulico puede afectar el rendimiento real del
                      motor y su capacidad para generar torque.
                    </li>
                    <li>
                      {" "}
                      <strong>Viscosidad del Fluido:</strong> La viscosidad del
                      fluido hidráulico puede influir en la eficiencia del motor
                      y en su capacidad para mantener una fuerza de torsión
                      constante.
                    </li>
                    <li>
                      {" "}
                      <strong>Condiciones de Carga:</strong> Las condiciones de
                      carga y la resistencia del sistema pueden afectar la
                      capacidad del motor para generar torque en situaciones
                      prácticas.
                    </li>
                  </ul>

                  <h4>Conclusiones</h4>

                  <p>
                    En resumen, el cálculo del torque de un motor hidráulico es
                    esencial para comprender su capacidad para generar fuerza y
                    realizar trabajo en un sistema hidráulico. Con la fórmula
                    proporcionada y teniendo en cuenta las consideraciones
                    mencionadas, los ingenieros y técnicos pueden seleccionar y
                    dimensionar adecuadamente los motores hidráulicos para
                    satisfacer las necesidades específicas de sus aplicaciones.
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

export default PostSpanish50;
