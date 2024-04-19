import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish2 = ({ db }) => {
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
        .filter((item) => item.id === "2")
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
                    Válvula de Alivio: Funcionamiento y Aplicaciones en Sistemas
                    Hidráulicos
                  </h4>
                  <br />
                  <p>
                    La válvula de alivio es un componente clave en sistemas
                    hidráulicos que se utiliza para proteger el sistema de
                    sobrepresiones peligrosas al regular el flujo de fluido
                    hidráulico. Esta válvula es fundamental para garantizar un
                    funcionamiento seguro y eficiente del sistema, ya que
                    previene daños en los componentes y equipos debido a
                    presiones excesivas.
                  </p>
                  <br />
                  <p>
                    Para comprender cómo funciona una válvula de alivio en un
                    sistema hidráulico, es importante conocer los siguientes
                    aspectos:
                  </p>
                  <br />
                  <h4>Principios de Funcionamiento</h4>
                  <ul>
                    <li>
                      <strong>Presión de Ajuste:</strong> La válvula de alivio
                      está diseñada para abrirse cuando la presión del sistema
                      alcanza un nivel preestablecido, conocido como presión de
                      ajuste. Una vez que la presión del sistema supera este
                      valor, la válvula se abre para permitir que el fluido
                      excedente fluya hacia el depósito de retorno, evitando así
                      un aumento excesivo de presión en el sistema.
                    </li>
                    <li>
                      <strong>Retorno Automático:</strong> Después de que se
                      alivia la presión excesiva, la válvula de alivio se cierra
                      automáticamente una vez que la presión del sistema vuelve
                      a niveles seguros. Esto asegura que el sistema vuelva a
                      funcionar normalmente sin la necesidad de intervención
                      manual.
                    </li>
                  </ul>
                  <br />
                  <p>
                    La válvula de alivio se utiliza en una variedad de
                    aplicaciones en sistemas hidráulicos, incluidas prensas
                    hidráulicas, sistemas de elevación, equipos de minería y
                    maquinaria industrial. Su función principal es proteger el
                    sistema y los componentes contra daños causados por
                    sobrepresiones, garantizando así la seguridad y la
                    fiabilidad del sistema en operación.
                  </p>
                  <br />
                  <p>
                    En el video adjunto, se proporciona una explicación
                    detallada sobre cómo funciona una válvula de alivio en un
                    sistema hidráulico. Se ilustran los principios de
                    funcionamiento y se ofrecen ejemplos prácticos para ayudar a
                    los espectadores a comprender mejor la importancia y las
                    aplicaciones de este componente esencial en sistemas
                    hidráulicos.
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

export default PostSpanish2;
