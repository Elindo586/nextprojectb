import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish8 = ({ db }) => {
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
        .filter((item) => item.id === "8")
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
                    Circuito Hidráulico de Meter-In y Meter-Out: Principios y
                    Aplicaciones
                  </h4>
                  <br />
                  <p>
                    En el campo de la hidráulica, los circuitos de meter-in y
                    meter-out son fundamentales para controlar la velocidad y el
                    flujo de un actuador hidráulico, como un cilindro o un
                    motor. Estos circuitos se utilizan comúnmente en una
                    variedad de aplicaciones industriales donde se requiere un
                    control preciso del movimiento y la velocidad.
                  </p>
                  <br />
                  <p>
                    En un circuito de meter-in, el flujo de entrada al actuador
                    se regula mediante una válvula de control instalada en la
                    línea de suministro. Esta válvula controla la velocidad del
                    actuador al regular la cantidad de fluido que ingresa al
                    sistema.
                  </p>
                  <br />
                  <p>
                    Por otro lado, en un circuito de meter-out, el flujo de
                    salida del actuador se regula mediante una válvula de
                    control instalada en la línea de retorno. Esta válvula
                    controla la velocidad del actuador al regular la cantidad de
                    fluido que sale del sistema.
                  </p>
                  <br />
                  <h4>Principios de Funcionamiento</h4>
                  <ul>
                    <li>
                      En un circuito de meter-in, el actuador se mueve a la
                      velocidad máxima cuando la válvula de control está
                      completamente abierta, permitiendo el flujo máximo de
                      entrada de fluido al actuador. A medida que se cierra la
                      válvula, la velocidad del actuador disminuye.
                    </li>
                    <li>
                      En un circuito de meter-out, el actuador se mueve a la
                      velocidad máxima cuando la válvula de control está
                      completamente cerrada, lo que restringe el flujo de salida
                      de fluido del actuador. A medida que se abre la válvula,
                      la velocidad del actuador aumenta.
                    </li>
                  </ul>
                  <br />
                  <p>
                    La selección entre un circuito de meter-in y un circuito de
                    meter-out depende de varios factores, incluida la aplicación
                    específica, los requisitos de velocidad y control, y las
                    condiciones de carga del sistema. Ambos circuitos ofrecen un
                    control preciso del movimiento y la velocidad del actuador,
                    pero cada uno tiene sus propias ventajas y limitaciones.
                  </p>
                  <br />
                  <p>
                    En el video adjunto, se explican con más detalle los
                    principios de funcionamiento y las aplicaciones prácticas de
                    los circuitos de meter-in y meter-out en sistemas
                    hidráulicos. Además, se proporcionan ejemplos y
                    demostraciones para ayudar a los espectadores a comprender
                    mejor cómo implementar y utilizar estos circuitos en sus
                    propios proyectos de ingeniería hidráulica.
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

export default PostSpanish8;
