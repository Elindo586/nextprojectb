import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish12 = ({ db }) => {
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
        .filter((item) => item.id === "12")
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
                    Cálculo de Caballos de Fuerza para un Sistema Hidráulico:
                    Una Guía Práctica
                  </h4>
                  <br />
                  <p>
                    El cálculo de los caballos de fuerza (HP) en un sistema
                    hidráulico es fundamental para comprender y evaluar su
                    rendimiento. Los caballos de fuerza son una medida de la
                    potencia que puede generar un sistema hidráulico y son
                    esenciales para dimensionar correctamente los componentes y
                    predecir su desempeño. En este artículo, exploraremos cómo
                    calcular los caballos de fuerza utilizando la fórmula
                    estándar y cómo esta información puede ayudarte a optimizar
                    tu sistema hidráulico.
                  </p>
                  <br />
                  <h4>Fórmula para el Cálculo de Caballos de Fuerza:</h4>
                  <p>
                    La fórmula básica para calcular los caballos de fuerza en un
                    sistema hidráulico es:
                  </p>
                  <br />
                  <p>HP = (gpm x psi) / 1714</p>
                  <br />
                  <p>Donde:</p>
                  <ul>
                    <li>
                      <strong>HP</strong>: Representa los caballos de fuerza
                      generados por el sistema hidráulico.
                    </li>
                    <li>
                      <strong>gpm</strong>: Es el flujo volumétrico del fluido
                      en galones por minuto (gallons per minute).
                    </li>
                    <li>
                      <strong>psi</strong>: Es la presión del sistema hidráulico
                      en libras por pulgada cuadrada (pounds per square inch).
                    </li>
                  </ul>
                  <br />
                  <p>
                    Esta fórmula nos permite calcular la potencia en caballos de
                    fuerza que un sistema hidráulico puede generar en función de
                    su flujo y presión. Es importante tener en cuenta que esta
                    fórmula es una aproximación y puede variar dependiendo de
                    las condiciones específicas del sistema y de las
                    características del fluido.
                  </p>
                  <br />
                  <h4>Pasos para Calcular los Caballos de Fuerza:</h4>
                  <ol>
                    <li>
                      Medir el flujo volumétrico del fluido en galones por
                      minuto (gpm).
                    </li>
                    <li>
                      Determinar la presión del sistema hidráulico en libras por
                      pulgada cuadrada (psi).
                    </li>
                    <li>
                      Aplicar la fórmula HP = (gpm x psi) / 1714 para calcular
                      los caballos de fuerza.
                    </li>
                  </ol>
                  <br />
                  <p>
                    Una vez que hayas calculado los caballos de fuerza de tu
                    sistema hidráulico, podrás utilizar esta información para
                    tomar decisiones informadas sobre el dimensionamiento de
                    componentes, la selección de equipos y la optimización del
                    rendimiento general del sistema.
                  </p>
                  <br />
                  <p>
                    En resumen, el cálculo de los caballos de fuerza en un
                    sistema hidráulico es una tarea importante que puede
                    proporcionar información valiosa sobre su rendimiento y
                    capacidad. Al comprender cómo utilizar la fórmula básica y
                    seguir los pasos adecuados, podrás calcular con precisión
                    los caballos de fuerza de tu sistema y optimizar su
                    funcionamiento.
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

export default PostSpanish12;
