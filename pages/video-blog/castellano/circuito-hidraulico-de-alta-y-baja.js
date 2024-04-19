import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish30 = ({ db }) => {
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
        .filter((item) => item.id === "30")
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
                  <h4>Circuito Hidráulico de Alta y Baja</h4>
                  <p>
                    En este video, exploraremos el funcionamiento de un circuito
                    hidráulico de alta y baja en un sistema hidráulico. Este
                    tipo de circuito es utilizado en aplicaciones donde se
                    requiere una operación de alta velocidad y baja velocidad en
                    el mismo sistema, proporcionando flexibilidad y eficiencia
                    en diversas situaciones.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Operación de Alta Velocidad:</strong> En el
                      circuito de alta, se utilizan componentes que permiten un
                      flujo rápido de fluido hidráulico, lo que resulta en
                      movimientos rápidos de los actuadores hidráulicos. Esto es
                      ideal para operaciones donde se necesita una respuesta
                      rápida y un alto rendimiento.
                    </li>
                    <li>
                      {" "}
                      <strong>Operación de Baja Velocidad:</strong> Por otro
                      lado, en el circuito de baja, se implementan componentes
                      que reducen el flujo de fluido hidráulico, lo que resulta
                      en movimientos más lentos pero con mayor fuerza de los
                      actuadores. Esto es útil para aplicaciones que requieren
                      un mayor control y precisión en el movimiento.
                    </li>
                    <li>
                      {" "}
                      <strong>Selección de Velocidad:</strong> El cambio entre
                      el circuito de alta y baja velocidad se realiza mediante
                      válvulas de control direccionales o proporcionales. Estas
                      válvulas dirigen el flujo de fluido hidráulico hacia el
                      circuito adecuado según los requisitos de la aplicación en
                      ese momento.
                    </li>
                    <li>
                      {" "}
                      <strong>Aplicaciones:</strong> Los circuitos hidráulicos
                      de alta y baja son comunes en una variedad de industrias,
                      incluyendo la construcción, la agricultura, la industria
                      automotriz y la manufactura. Se utilizan en equipos como
                      excavadoras, grúas, prensas hidráulicas y maquinaria
                      pesada.
                    </li>
                  </ul>

                  <h4>Ventajas del Circuito de Alta y Baja Velocidad</h4>

                  <ul>
                    <li>
                      {" "}
                      <strong>Flexibilidad:</strong> El circuito de alta y baja
                      velocidad permite adaptarse a diferentes condiciones de
                      trabajo y requisitos de la aplicación, proporcionando
                      flexibilidad operativa.
                    </li>
                    <li>
                      {" "}
                      <strong>Rendimiento Mejorado:</strong> Al ofrecer tanto
                      alta velocidad como baja velocidad en un solo sistema, se
                      maximiza el rendimiento y la eficiencia en una amplia gama
                      de situaciones.
                    </li>
                    <li>
                      {" "}
                      <strong>Mayor Control:</strong> La capacidad de cambiar
                      entre alta y baja velocidad proporciona un mayor control
                      sobre el movimiento de los actuadores hidráulicos, lo que
                      mejora la precisión y la seguridad en la operación.
                    </li>
                    <li>
                      {" "}
                      <strong>Optimización de la Energía:</strong> Al poder
                      seleccionar la velocidad adecuada según las necesidades de
                      la aplicación, se optimiza el uso de energía y se reduce
                      el consumo de combustible en equipos móviles.
                    </li>
                  </ul>

                  <p>
                    En conclusión, los circuitos hidráulicos de alta y baja
                    velocidad son una solución versátil y eficiente para
                    aplicaciones que requieren tanto movimientos rápidos como
                    controlados. Su capacidad para adaptarse a diferentes
                    condiciones de trabajo los hace indispensables en una
                    variedad de industrias y equipos.
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

export default PostSpanish30;
