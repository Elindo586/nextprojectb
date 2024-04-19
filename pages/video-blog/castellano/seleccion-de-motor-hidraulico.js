import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish65 = ({ db }) => {
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
        .filter((item) => item.id === "65")
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
                    Selección Fácil de Motor Hidráulico: Encuentra el Motor
                    Perfecto para tu Sistema Hidráulico
                  </h4>
                  <p>
                    Seleccionar el motor hidráulico adecuado para un sistema
                    puede ser una tarea desafiante, pero con los conocimientos
                    adecuados y las herramientas correctas, este proceso puede
                    simplificarse significativamente. En este artículo,
                    exploraremos cómo seleccionar fácilmente un motor hidráulico
                    dadas las especificaciones técnicas de un sistema
                    hidráulico, como rpm, torque y psi.
                  </p>

                  <ul>
                    <li>
                      <strong>Comprender los Requisitos Técnicos:</strong> Antes
                      de seleccionar un motor hidráulico, es crucial comprender
                      los requisitos técnicos de tu sistema hidráulico. Esto
                      incluye conocer la velocidad de rotación (rpm) deseada, el
                      torque requerido y la presión máxima de funcionamiento
                      (psi) del sistema.
                    </li>

                    <li>
                      <strong>Utilizar Herramientas de Selección:</strong>{" "}
                      Existen diversas herramientas disponibles en línea que
                      pueden facilitar el proceso de selección de motores
                      hidráulicos. Una de estas herramientas es el catálogo de
                      motores geroler, disponible en el siguiente enlace:{" "}
                      <a href="https://www.tu.biz/products/geroler-motors">
                        Catálogo de Motores Geroler
                      </a>
                      .
                    </li>

                    <li>
                      <strong>Consulta con Expertos:</strong> Si tienes dudas o
                      necesitas asesoramiento adicional sobre la selección de un
                      motor hidráulico, no dudes en ponerte en contacto con
                      expertos en sistemas hidráulicos. Muchos proveedores de
                      motores hidráulicos ofrecen servicios de asesoramiento
                      técnico para ayudarte a encontrar la mejor solución para
                      tus necesidades.
                    </li>

                    <li>
                      <strong>Formulario de Contacto:</strong> Además del
                      catálogo de motores, también puedes acceder a un
                      formulario de contacto en el mismo enlace proporcionado.
                      Este formulario te permite comunicarte directamente con el
                      equipo de ventas y soporte técnico de la empresa para
                      obtener asistencia personalizada en la selección de
                      motores hidráulicos.
                    </li>

                    <li>
                      <strong>Beneficios de la Selección Fácil:</strong> Al
                      utilizar herramientas de selección y consultar con
                      expertos, puedes disfrutar de una serie de beneficios,
                      incluyendo:
                      <ul>
                        <li>
                          Ahorro de Tiempo: La selección fácil de motores
                          hidráulicos te permite encontrar rápidamente el motor
                          adecuado para tu aplicación, ahorrando tiempo y
                          esfuerzo en el proceso.
                        </li>
                        <li>
                          Optimización del Rendimiento: Al seleccionar un motor
                          hidráulico que cumpla con los requisitos técnicos de
                          tu sistema, puedes garantizar un rendimiento óptimo y
                          eficiente en todas las operaciones.
                        </li>
                        <li>
                          Confianza en la Elección: Al contar con el apoyo de
                          expertos y herramientas de selección, puedes tomar
                          decisiones informadas y tener confianza en la elección
                          del motor hidráulico adecuado para tu aplicación.
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <p>
                    Con la selección fácil de motores hidráulicos, puedes
                    encontrar rápidamente la solución perfecta para tus
                    necesidades de sistemas hidráulicos, asegurando un
                    funcionamiento suave, eficiente y confiable en todas tus
                    operaciones.
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

export default PostSpanish65;
