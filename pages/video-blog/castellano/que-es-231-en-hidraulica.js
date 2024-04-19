import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish38 = ({ db }) => {
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
        .filter((item) => item.id === "38")
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
                  <h4>¿Qué es el 231 en las Fórmulas Hidráulicas?</h4>
                  <p>
                    En este video, exploraremos el significado del número 231 en
                    las fórmulas hidráulicas, específicamente en la fórmula que
                    calcula el caudal (GPM) de una bomba hidráulica.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Origen del Número 231:</strong> El número 231
                      proviene de la conversión de unidades en el sistema inglés
                      de unidades. En este sistema, el caudal se mide en galones
                      por minuto (GPM), la velocidad de rotación se mide en
                      revoluciones por minuto (RPM) y el desplazamiento de la
                      bomba se mide en pulgadas cúbicas por revolución
                      (in³/rev). Para realizar la conversión de unidades de
                      manera apropiada en la fórmula de caudal, se utiliza el
                      número 231 como factor de conversión.
                    </li>
                    <li>
                      {" "}
                      <strong>Significado en la Fórmula:</strong> En la fórmula
                      para calcular el caudal de una bomba hidráulica, que se
                      expresa como GPM = RPM * DISP / 231, el número 231 se
                      utiliza para ajustar las unidades de velocidad de rotación
                      y desplazamiento al sistema de unidades de caudal en
                      galones por minuto. Esto garantiza que el caudal se
                      calcule correctamente y se exprese en la unidad de medida
                      estándar.
                    </li>
                    <li>
                      {" "}
                      <strong>
                        Importancia en Aplicaciones Hidráulicas:
                      </strong>{" "}
                      Comprender el significado del número 231 en las fórmulas
                      hidráulicas es crucial para realizar cálculos precisos de
                      caudal y para garantizar un diseño y operación eficientes
                      de los sistemas hidráulicos. Al aplicar correctamente este
                      factor de conversión, los ingenieros y operadores pueden
                      determinar con precisión el caudal que proporciona una
                      bomba hidráulica a una velocidad de rotación y
                      desplazamiento dados, lo que contribuye a un
                      funcionamiento óptimo y seguro de los sistemas.
                    </li>
                  </ul>

                  <h4>Conclusiones</h4>

                  <p>
                    En resumen, el número 231 en las fórmulas hidráulicas es un
                    factor de conversión que se utiliza para ajustar las
                    unidades de velocidad de rotación y desplazamiento al
                    sistema de unidades de caudal en galones por minuto. Este
                    número es esencial para realizar cálculos precisos de caudal
                    en bombas hidráulicas y garantizar un diseño y operación
                    eficientes de los sistemas hidráulicos.
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

export default PostSpanish38;
