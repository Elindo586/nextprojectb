import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish62 = ({ db }) => {
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
        .filter((item) => item.id === "62")
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
                  <h4>Calculo de Velocidad de Cilindro Hidráulico</h4>
                  <p>
                    Los cilindros hidráulicos son componentes fundamentales en
                    sistemas de maquinaria pesada y en aplicaciones industriales
                    que requieren movimiento lineal controlado. La velocidad a
                    la que un cilindro hidráulico se desplaza es un aspecto
                    crucial para el diseño y funcionamiento eficiente de estos
                    sistemas.
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <strong>Fórmula de Velocidad:</strong> La velocidad de un
                      cilindro hidráulico se puede calcular utilizando la
                      fórmula:
                    </li>
                  </ul>
                  <p class="indent">
                    Velocidad (ft/min) = Carrera x 5 / Tiempo
                  </p>
                  <p>Donde:</p>
                  <ul>
                    <li>
                      {" "}
                      <strong>Carrera:</strong> La distancia total que recorre
                      el pistón en el cilindro hidráulico, medida en pies.
                    </li>
                    <li>
                      {" "}
                      <strong>Tiempo:</strong> El tiempo necesario para que el
                      cilindro complete su carrera, medido en minutos.
                    </li>
                  </ul>
                  <p>
                    Esta fórmula proporciona una manera rápida y sencilla de
                    determinar la velocidad de un cilindro hidráulico en función
                    de su carrera y el tiempo que tarda en completar dicha
                    carrera.
                  </p>
                  <h4>Aplicación Práctica</h4>
                  <p>
                    Imaginemos un cilindro hidráulico con una carrera de 2 pies
                    que tarda 1 minuto en completar su movimiento. Para calcular
                    su velocidad, simplemente aplicamos la fórmula:
                  </p>
                  <p class="indent">
                    Velocidad = 2 pies x 5 / 1 minuto = 10 ft/min
                  </p>
                  <p>
                    Por lo tanto, la velocidad de este cilindro hidráulico sería
                    de 10 pies por minuto.
                  </p>
                  <h4>Consideraciones Importantes</h4>
                  <p>
                    Al utilizar esta fórmula para calcular la velocidad de un
                    cilindro hidráulico, es importante tener en cuenta algunos
                    factores clave:
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <strong>Presión y Carga:</strong> La velocidad de un
                      cilindro hidráulico puede variar según la presión del
                      sistema y la carga que esté moviendo.
                    </li>
                    <li>
                      {" "}
                      <strong>Rendimiento del Sistema:</strong> Otros
                      componentes del sistema, como las válvulas y la bomba
                      hidráulica, pueden afectar la velocidad final del
                      cilindro.
                    </li>
                    <li>
                      {" "}
                      <strong>Seguridad:</strong> Siempre se deben seguir las
                      recomendaciones del fabricante y las normativas de
                      seguridad al operar con cilindros hidráulicos.
                    </li>
                  </ul>
                  <h4>Conclusiones</h4>
                  <p>
                    Calcular la velocidad de un cilindro hidráulico es
                    fundamental para garantizar un rendimiento óptimo del
                    sistema y evitar problemas de funcionamiento. Con la fórmula
                    proporcionada, los ingenieros y técnicos pueden determinar
                    rápidamente la velocidad de un cilindro en función de su
                    carrera y tiempo de desplazamiento, lo que facilita el
                    diseño y la optimización de sistemas hidráulicos.
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

export default PostSpanish62;
