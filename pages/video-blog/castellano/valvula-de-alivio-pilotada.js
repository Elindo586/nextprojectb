import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish11 = ({ db }) => {
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
        .filter((item) => item.id === "11")
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
                    Válvula de Alivio Pilotada vs. Válvula de Alivio de Acción
                    Directa: Diferencias y Aplicaciones
                  </h4>
                  <br />
                  <p>
                    En el diseño de circuitos hidráulicos, la selección de la
                    válvula de alivio adecuada es crucial para garantizar un
                    funcionamiento seguro y eficiente del sistema. Dos tipos
                    comunes de válvulas de alivio son las válvulas de alivio
                    pilotadas y las válvulas de alivio de acción directa. En
                    este artículo, exploraremos las diferencias entre estos dos
                    tipos de válvulas y sus respectivas aplicaciones en
                    circuitos hidráulicos.
                  </p>
                  <br />
                  <h4>Válvula de Alivio Pilotada:</h4>
                  <ul>
                    <li>
                      <strong>Funcionamiento:</strong> Las válvulas de alivio
                      pilotadas utilizan una señal de presión externa, llamada
                      piloto, para controlar la apertura y cierre de la válvula
                      principal. Cuando la presión en el lado piloto alcanza un
                      valor preestablecido, la válvula principal se abre para
                      permitir el paso del fluido y aliviar la presión en el
                      sistema.
                    </li>
                    <li>
                      <strong>Características:</strong> Estas válvulas son
                      capaces de manejar altas presiones y caudales, lo que las
                      hace adecuadas para aplicaciones donde se requiere un
                      control preciso de la presión.
                    </li>
                    <li>
                      <strong>Aplicaciones:</strong> Las válvulas de alivio
                      pilotadas son comúnmente utilizadas en circuitos
                      hidráulicos donde se necesita un control de presión
                      sensible y preciso, como en sistemas de maquinaria pesada
                      y prensas hidráulicas.
                    </li>
                  </ul>
                  <br />
                  <h4>Válvula de Alivio de Acción Directa:</h4>
                  <ul>
                    <li>
                      <strong>Funcionamiento:</strong> Las válvulas de alivio de
                      acción directa operan directamente en respuesta a la
                      presión del fluido en el sistema. Cuando la presión
                      alcanza un valor preestablecido, la válvula se abre
                      automáticamente para aliviar la presión excesiva.
                    </li>
                    <li>
                      <strong>Características:</strong> Estas válvulas son
                      simples en diseño y operación, lo que las hace confiables
                      y económicas. Sin embargo, pueden tener limitaciones en
                      cuanto a la presión y el caudal que pueden manejar.
                    </li>
                    <li>
                      <strong>Aplicaciones:</strong> Las válvulas de alivio de
                      acción directa son adecuadas para aplicaciones donde se
                      necesita una protección básica contra sobrepresiones y
                      donde se pueden tolerar fluctuaciones menores en la
                      presión del sistema, como en sistemas de elevación y
                      transporte.
                    </li>
                  </ul>
                  <br />
                  <p>
                    En resumen, tanto las válvulas de alivio pilotadas como las
                    válvulas de alivio de acción directa tienen sus propias
                    ventajas y aplicaciones específicas en circuitos
                    hidráulicos. La elección entre ellas dependerá de los
                    requisitos de la aplicación, incluyendo el nivel de control
                    de presión necesario, la capacidad de caudal y las
                    consideraciones de costos.
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

export default PostSpanish11;
