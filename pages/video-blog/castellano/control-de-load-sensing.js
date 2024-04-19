import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish6 = ({ db }) => {
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
        .filter((item) => item.id === "6")
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
                    Cómo Trabaja un Control de Load Sensing para Bomba
                    Hidráulica
                  </h4>
                  <br />
                  <p>
                    El control de load sensing es una tecnología avanzada
                    utilizada en bombas hidráulicas para optimizar la eficiencia
                    y el rendimiento de los sistemas hidráulicos. Este sistema
                    de control ajusta automáticamente la presión y el caudal de
                    la bomba según la demanda de carga del sistema, lo que
                    permite un funcionamiento más eficiente y una menor pérdida
                    de energía.
                  </p>
                  <br />
                  <p>
                    Para comprender cómo trabaja un control de load sensing para
                    bomba hidráulica, es importante conocer los siguientes
                    aspectos clave:
                  </p>
                  <br />
                  <h4>Principios de Funcionamiento</h4>
                  <ul>
                    <li>
                      <strong>Sensores de Carga:</strong> El sistema de control
                      de load sensing utiliza sensores de carga para medir la
                      demanda de carga del sistema. Estos sensores detectan
                      cambios en la carga y transmiten esta información al
                      controlador de la bomba.
                    </li>
                    <li>
                      <strong>Control de Presión:</strong> El controlador de la
                      bomba ajusta la presión de salida según la demanda de
                      carga detectada por los sensores. Cuando se detecta una
                      carga alta, la presión de la bomba aumenta para satisfacer
                      esta demanda, y viceversa.
                    </li>
                    <li>
                      <strong>Regulación de Caudal:</strong> Además de ajustar
                      la presión, el control de load sensing también regula el
                      caudal de la bomba para mantener una velocidad constante
                      del actuador, incluso bajo cambios de carga.
                    </li>
                    <li>
                      <strong>Control de Retroalimentación:</strong> El sistema
                      de control de load sensing utiliza una retroalimentación
                      constante de los sensores de carga para ajustar
                      dinámicamente la presión y el caudal de la bomba según las
                      condiciones de carga en tiempo real.
                    </li>
                  </ul>
                  <br />
                  <p>
                    La principal ventaja del control de load sensing es su
                    capacidad para adaptarse automáticamente a las variaciones
                    de carga en el sistema, lo que mejora la eficiencia
                    energética y reduce el desgaste de los componentes
                    hidráulicos. Esto hace que los sistemas hidráulicos
                    equipados con esta tecnología sean ideales para aplicaciones
                    que requieren un control preciso y una alta eficiencia, como
                    maquinaria móvil, equipos de construcción y sistemas
                    industriales.
                  </p>
                  <br />
                  <p>
                    En el video adjunto, se proporciona una explicación
                    detallada sobre cómo trabaja un control de load sensing para
                    bomba hidráulica, junto con ejemplos prácticos y
                    demostraciones para ilustrar su funcionamiento en
                    situaciones reales. Además, se discuten las ventajas y
                    aplicaciones de esta tecnología en diferentes tipos de
                    sistemas hidráulicos.
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

export default PostSpanish6;
