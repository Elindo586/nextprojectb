import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish63 = ({ db }) => {
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
        .filter((item) => item.id === "63")
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
                    Cómo Saber si tu Cilindro Hidráulico Funciona Correctamente
                  </h4>
                  <p>
                    Los cilindros hidráulicos desempeñan un papel crucial en una
                    amplia variedad de aplicaciones industriales, desde
                    maquinaria pesada hasta equipos de construcción. Es
                    importante garantizar que los cilindros hidráulicos
                    funcionen correctamente para mantener la eficiencia y
                    seguridad en el sistema. En este artículo, exploraremos
                    diferentes pasos para verificar si un cilindro hidráulico
                    está funcionando correctamente.
                  </p>

                  <ul>
                    <li>
                      <strong>Inspección Visual:</strong> El primer paso para
                      verificar la funcionalidad de un cilindro hidráulico es
                      realizar una inspección visual. Busca signos de fugas de
                      aceite, daños en el cuerpo del cilindro o en las
                      conexiones de mangueras. Cualquier evidencia de fugas o
                      daños debe ser abordada de inmediato para evitar problemas
                      mayores.
                    </li>

                    <li>
                      <strong>Comprobación de Presión:</strong> Utiliza un
                      manómetro para verificar la presión en el sistema
                      hidráulico mientras el cilindro está en funcionamiento. La
                      presión debe estar dentro de los límites especificados
                      para el cilindro y la aplicación. Una presión demasiado
                      baja puede indicar un problema en la bomba hidráulica o en
                      las válvulas de control.
                    </li>

                    <li>
                      <strong>Prueba de Movimiento:</strong> Activa el sistema
                      hidráulico para verificar el movimiento del cilindro.
                      Observa si el cilindro se extiende y se retrae de manera
                      suave y sin problemas. Cualquier vibración excesiva, ruido
                      anormal o movimiento irregular puede ser un indicio de
                      problemas en el cilindro o en otros componentes del
                      sistema.
                    </li>

                    <li>
                      <strong>Comprobación de la Velocidad y la Fuerza:</strong>{" "}
                      Si es posible, mide la velocidad y la fuerza del cilindro
                      mientras está en funcionamiento. La velocidad y la fuerza
                      deben estar dentro de los rangos especificados para el
                      cilindro y la aplicación. Variaciones significativas en la
                      velocidad o la fuerza pueden indicar problemas de
                      rendimiento o desgaste en el cilindro.
                    </li>

                    <li>
                      <strong>Revisión de Componentes Adicionales:</strong>{" "}
                      Además de verificar el cilindro en sí, también es
                      importante revisar otros componentes del sistema, como las
                      válvulas de control, la bomba hidráulica y las mangueras.
                      Asegúrate de que todos los componentes estén en buen
                      estado y funcionen correctamente para garantizar un
                      rendimiento óptimo del sistema hidráulico en su conjunto.
                    </li>
                  </ul>

                  <p>
                    Al seguir estos pasos de verificación, podrás determinar si
                    tu cilindro hidráulico está funcionando correctamente y
                    tomar medidas correctivas si es necesario. Mantener un
                    cilindro hidráulico en buen estado de funcionamiento es
                    esencial para garantizar la eficiencia, seguridad y
                    durabilidad del sistema hidráulico en general.
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

export default PostSpanish63;
