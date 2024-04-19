import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish39 = ({ db }) => {
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
        .filter((item) => item.id === "39")
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
                  <h4>¿Qué es el 1714 en las Fórmulas Hidráulicas?</h4>
                  <p>
                    En este video, exploraremos el significado del número 1714
                    en las fórmulas hidráulicas, específicamente en la fórmula
                    que calcula la potencia hidráulica en caballos de fuerza
                    (HP).
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Origen del Número 1714:</strong> El número 1714
                      proviene de la conversión de unidades en el sistema inglés
                      de unidades. En este sistema, la potencia se mide en
                      unidades de caballos de fuerza (HP), el caudal se mide en
                      galones por minuto (gpm) y la presión se mide en libras
                      por pulgada cuadrada (psi). Para realizar la conversión de
                      unidades de manera apropiada en la fórmula de potencia
                      hidráulica, se utiliza el número 1714 como factor de
                      conversión.
                    </li>
                    <li>
                      {" "}
                      <strong>Significado en la Fórmula:</strong> En la fórmula
                      de potencia hidráulica, que se expresa como HP = (gpm *
                      psi) / 1714, el número 1714 se utiliza para ajustar las
                      unidades de caudal y presión al sistema de unidades de
                      caballos de fuerza. Esto garantiza que la potencia
                      hidráulica se calcule correctamente y se exprese en la
                      unidad de medida estándar.
                    </li>
                    <li>
                      {" "}
                      <strong>
                        Importancia en Aplicaciones Hidráulicas:
                      </strong>{" "}
                      Comprender el significado del número 1714 en las fórmulas
                      hidráulicas es crucial para realizar cálculos precisos y
                      para garantizar un diseño y operación eficientes de los
                      sistemas hidráulicos. Al aplicar correctamente este factor
                      de conversión, los ingenieros y operadores pueden
                      determinar con precisión la potencia necesaria para
                      diversas aplicaciones hidráulicas, lo que contribuye a un
                      funcionamiento óptimo y seguro de los sistemas.
                    </li>
                  </ul>

                  <h4>Conclusiones</h4>

                  <p>
                    En resumen, el número 1714 en las fórmulas hidráulicas es un
                    factor de conversión que se utiliza para ajustar las
                    unidades de caudal y presión al sistema de unidades de
                    caballos de fuerza. Este número es esencial para realizar
                    cálculos precisos de potencia hidráulica y garantizar un
                    diseño y operación eficientes de los sistemas hidráulicos.
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

export default PostSpanish39;
