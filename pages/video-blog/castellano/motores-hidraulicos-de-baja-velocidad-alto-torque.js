import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish56 = ({ db }) => {
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
        .filter((item) => item.id === "56")
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
                  <h4>Compre Motores de Baja Velocidad y Alto Torque</h4>
                  <p>
                    Los motores de baja velocidad y alto torque son componentes
                    fundamentales en una variedad de aplicaciones hidráulicas
                    donde se requiere potencia y rendimiento confiable. En este
                    video, ofrecemos una amplia gama de motores de baja
                    velocidad y alto torque para diversas aplicaciones
                    hidráulicas, asegurando que aquellos que necesiten motores
                    hidráulicos puedan encontrar los motores adecuados para sus
                    requerimientos.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Variedad de Motores:</strong> Disponemos de una
                      amplia gama de motores hidráulicos de baja velocidad y
                      alto torque para adaptarse a diversas aplicaciones,
                      incluyendo motores orbitales, motores de pistones radiales
                      y motores de engranajes.
                    </li>
                    <li>
                      {" "}
                      <strong>Rendimiento Confiable:</strong> Nuestros motores
                      hidráulicos están diseñados y fabricados con los más altos
                      estándares de calidad para garantizar un rendimiento
                      confiable y duradero en condiciones exigentes.
                    </li>
                    <li>
                      {" "}
                      <strong>Personalización:</strong> Ofrecemos opciones de
                      personalización para adaptar nuestros motores hidráulicos
                      a los requerimientos específicos de tus aplicaciones,
                      incluyendo opciones de montaje, capacidad de carga y
                      configuración de velocidad y torque.
                    </li>
                  </ul>

                  <h4>Aplicaciones Comunes</h4>

                  <p>
                    Nuestros motores de baja velocidad y alto torque son
                    adecuados para una variedad de aplicaciones hidráulicas,
                    incluyendo:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Maquinaria Agrícola:</strong> Nuestros motores
                      hidráulicos son utilizados en tractores, cosechadoras y
                      otras máquinas agrícolas para proporcionar potencia y
                      tracción en condiciones difíciles.
                    </li>
                    <li>
                      {" "}
                      <strong>Equipos de Construcción:</strong> En aplicaciones
                      de construcción, nuestros motores hidráulicos son
                      utilizados en excavadoras, cargadores y grúas para
                      proporcionar potencia de elevación y movimiento preciso.
                    </li>
                    <li>
                      {" "}
                      <strong>Maquinaria Industrial:</strong> En entornos
                      industriales, nuestros motores hidráulicos son utilizados
                      en prensas, laminadoras y otros equipos para proporcionar
                      potencia de accionamiento y control de movimiento.
                    </li>
                  </ul>

                  <h4>Ventajas de Nuestros Motores</h4>

                  <p>
                    Al elegir nuestros motores de baja velocidad y alto torque,
                    puedes beneficiarte de las siguientes ventajas:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Calidad Garantizada:</strong> Nos comprometemos a
                      ofrecer motores hidráulicos de la más alta calidad que
                      cumplan con tus estándares de rendimiento y fiabilidad.
                    </li>
                    <li>
                      {" "}
                      <strong>Asistencia Técnica:</strong> Nuestro equipo de
                      expertos está disponible para brindar asesoramiento
                      técnico y recomendaciones personalizadas para ayudarte a
                      seleccionar el motor adecuado para tus aplicaciones.
                    </li>
                    <li>
                      {" "}
                      <strong>Entrega Rápida:</strong> Contamos con un amplio
                      inventario de motores hidráulicos listos para ser enviados
                      de manera rápida y eficiente a cualquier ubicación.
                    </li>
                  </ul>

                  <h4>Conclusiones</h4>

                  <p>
                    En resumen, nuestros motores de baja velocidad y alto torque
                    son la opción ideal para aquellos que buscan potencia y
                    rendimiento confiable en aplicaciones hidráulicas. Con una
                    amplia gama de opciones disponibles y un compromiso con la
                    calidad y el servicio al cliente, estamos aquí para
                    satisfacer tus necesidades de motores hidráulicos y ayudarte
                    a alcanzar tus objetivos de rendimiento y eficiencia.
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

export default PostSpanish56;
