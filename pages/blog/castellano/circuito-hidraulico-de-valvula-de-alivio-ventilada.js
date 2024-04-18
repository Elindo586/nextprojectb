import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish20 = ({ db }) => {
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
        .filter((item) => item.id === "20")
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
                  <h4>Circuito hidráulico de válvula de alivio ventilada</h4>
                  <br />
                  <p>
                    El funcionamiento de un circuito hidráulico con una válvula
                    de alivio ventilada es crucial para entender cómo se
                    controla la presión en sistemas hidráulicos. Estas válvulas
                    desempeñan un papel fundamental en la seguridad y eficiencia
                    de tales sistemas.
                  </p>
                  <br />
                  <p>
                    Una válvula de alivio ventilada, como su nombre sugiere, se
                    utiliza para aliviar la presión en un circuito hidráulico.
                    Funciona permitiendo que el fluido pase a través de ella
                    cuando la presión en el sistema alcanza un nivel
                    preestablecido. Esto evita que la presión aumente demasiado
                    y cause daños en el sistema.
                  </p>
                  <br />
                  <p>
                    La válvula de alivio ventilada consta de varios componentes
                    clave, incluyendo un resorte de ajuste de presión, un pistón
                    y una válvula de asiento. Cuando la presión en el sistema
                    alcanza el nivel preestablecido, el resorte se comprime, lo
                    que permite que el pistón se mueva y abra la válvula de
                    asiento. Esto permite que el fluido escape del sistema,
                    aliviando la presión.
                  </p>
                  <br />
                  <p>
                    Es importante destacar que la válvula de alivio ventilada
                    está diseñada para funcionar en conjunto con otros
                    componentes del circuito hidráulico, como bombas, cilindros
                    y motores. Su configuración y ajuste preciso son
                    fundamentales para garantizar un rendimiento óptimo del
                    sistema.
                  </p>
                  <br />
                  <p>
                    Entre las ventajas de utilizar una válvula de alivio
                    ventilada en un circuito hidráulico se incluyen:
                  </p>
                  <ul>
                    <li>
                      Protección contra sobrepresión: Evita daños en el sistema
                      al limitar la presión máxima.
                    </li>
                    <li>
                      Regulación de la presión: Permite ajustar la presión del
                      sistema según sea necesario.
                    </li>
                    <li>
                      Seguridad: Contribuye a mantener un entorno de trabajo
                      seguro al prevenir accidentes causados por presiones
                      excesivas.
                    </li>
                  </ul>
                  <br />
                  <p>
                    En resumen, el circuito hidráulico de válvula de alivio
                    ventilada es un componente esencial en los sistemas
                    hidráulicos, proporcionando protección contra sobrepresión y
                    contribuyendo a su eficiencia y seguridad general.
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

export default PostSpanish20;
