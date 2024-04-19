import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish33 = ({ db }) => {
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
        .filter((item) => item.id === "33")
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
                  <h4>Circuito de Seguridad para Acumulador Hidráulico</h4>
                  <p>
                    En este video, exploraremos la importancia de los circuitos
                    de seguridad para los acumuladores hidráulicos en sistemas
                    hidráulicos industriales. Estos circuitos juegan un papel
                    crucial en la protección de los equipos, los operadores y el
                    medio ambiente ante posibles fallas o situaciones de
                    emergencia.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Función del Acumulador:</strong> Los acumuladores
                      hidráulicos almacenan energía hidráulica en forma de
                      fluido bajo presión para su posterior liberación cuando se
                      necesita. Estos dispositivos son comúnmente utilizados
                      para proporcionar energía adicional durante picos de
                      demanda o para actuar como respaldo en caso de fallo del
                      sistema.
                    </li>
                    <li>
                      {" "}
                      <strong>
                        Importancia del Circuito de Seguridad:
                      </strong>{" "}
                      Los circuitos de seguridad están diseñados para prevenir
                      situaciones peligrosas, como sobrepresiones o
                      desbordamientos, que podrían ocurrir debido a mal
                      funcionamiento del acumulador o del sistema hidráulico en
                      general. Estos circuitos garantizan un funcionamiento
                      seguro y confiable del sistema en todo momento.
                    </li>
                    <li>
                      {" "}
                      <strong>Componentes del Circuito de Seguridad:</strong> Un
                      circuito de seguridad típico para un acumulador hidráulico
                      puede incluir válvulas de alivio de presión, válvulas de
                      descarga, sensores de presión y dispositivos de bloqueo de
                      emergencia. Estos componentes trabajan en conjunto para
                      controlar la presión del sistema y evitar situaciones de
                      riesgo.
                    </li>
                    <li>
                      {" "}
                      <strong>Implementación Correcta:</strong> Es fundamental
                      que los circuitos de seguridad se diseñen e implementen
                      correctamente según las especificaciones del sistema y los
                      requisitos de seguridad. Esto incluye la selección
                      adecuada de componentes, la instalación correcta y la
                      realización de pruebas y mantenimiento periódicos.
                    </li>
                  </ul>

                  <h4>Beneficios de los Circuitos de Seguridad</h4>

                  <ul>
                    <li>
                      {" "}
                      <strong>Protección del Equipo:</strong> Los circuitos de
                      seguridad ayudan a proteger el equipo hidráulico contra
                      daños causados por sobrepresiones o situaciones de
                      emergencia, lo que prolonga la vida útil de los
                      componentes y reduce los costos de mantenimiento.
                    </li>
                    <li>
                      {" "}
                      <strong>Seguridad del Operador:</strong> Al prevenir
                      accidentes y situaciones peligrosas, los circuitos de
                      seguridad garantizan la seguridad de los operadores y
                      otros trabajadores que interactúan con el sistema
                      hidráulico.
                    </li>
                    <li>
                      {" "}
                      <strong>Protección del Medio Ambiente:</strong> Evitar
                      derrames de fluido hidráulico y posibles contaminaciones
                      ambientales es crucial para cumplir con los estándares
                      ambientales y proteger el medio ambiente.
                    </li>
                  </ul>

                  <p>
                    En resumen, los circuitos de seguridad son componentes
                    esenciales en sistemas hidráulicos que garantizan un
                    funcionamiento seguro y confiable. Al implementar
                    adecuadamente estos circuitos, los usuarios pueden proteger
                    el equipo, los operadores y el medio ambiente contra
                    posibles riesgos y accidentes.
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

export default PostSpanish33;
