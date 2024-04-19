import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish5 = ({ db }) => {
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
        .filter((item) => item.id === "5")
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
                    Ajuste de Control para Bomba de Presión Compensada:
                    Principios y Funcionamiento
                  </h4>
                  <br />
                  <p>
                    El ajuste de control para bomba de presión compensada es un
                    aspecto fundamental en sistemas hidráulicos que permite
                    mantener una presión constante en el sistema,
                    independientemente de la carga o la velocidad de operación.
                    Esta tecnología es ampliamente utilizada en una variedad de
                    aplicaciones industriales donde se requiere un control
                    preciso de la presión hidráulica.
                  </p>
                  <br />
                  <p>
                    Para comprender cómo funciona el ajuste de control para
                    bomba de presión compensada, es necesario conocer los
                    siguientes conceptos básicos:
                  </p>
                  <br />
                  <h4>Principios de Funcionamiento</h4>
                  <ul>
                    <li>
                      <strong>Válvula de Control:</strong> El ajuste de control
                      para bomba de presión compensada utiliza una válvula de
                      control integrada en la bomba hidráulica. Esta válvula
                      regula la presión de salida de la bomba ajustando el
                      caudal de salida según la demanda del sistema.
                    </li>
                    <li>
                      <strong>Presión de Compensación:</strong> La válvula de
                      control está equipada con un mecanismo de compensación que
                      ajusta automáticamente la presión de salida para
                      mantenerla constante, incluso cuando la carga del sistema
                      varía.
                    </li>
                    <li>
                      <strong>Control de Retroalimentación:</strong> El sistema
                      de ajuste de control utiliza una retroalimentación
                      constante de la presión del sistema para ajustar
                      dinámicamente la posición de la válvula de control y
                      mantener la presión deseada en todo momento.
                    </li>
                  </ul>
                  <br />
                  <p>
                    La principal ventaja del ajuste de control para bomba de
                    presión compensada es su capacidad para mantener una presión
                    constante en el sistema, lo que garantiza un rendimiento
                    consistente y una operación eficiente. Esto es especialmente
                    importante en aplicaciones donde se requiere un control
                    preciso de la presión, como en sistemas de dirección
                    asistida, prensas hidráulicas y maquinaria industrial.
                  </p>
                  <br />
                  <p>
                    En el video adjunto, se proporciona una explicación
                    detallada sobre cómo funciona el ajuste de control para
                    bomba de presión compensada, junto con ejemplos prácticos y
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

export default PostSpanish5;
