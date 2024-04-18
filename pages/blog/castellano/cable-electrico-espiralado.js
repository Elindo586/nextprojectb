import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish57 = ({ db }) => {
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
        .filter((item) => item.id === "57")
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
                  <h4>Cable Eléctrico Espiralado</h4>
                  <p>
                    Los cables eléctricos espiralados son una solución versátil
                    y eficiente para una variedad de aplicaciones industriales y
                    comerciales donde se requiere flexibilidad y resistencia a
                    la tensión. En este video, exploraremos las características
                    y ventajas de los cables eléctricos espiralados y cómo
                    pueden satisfacer las necesidades específicas de tu negocio.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Flexibilidad:</strong> Los cables eléctricos
                      espiralados están diseñados con una estructura en espiral
                      que les permite estirarse y contraerse, lo que los hace
                      ideales para aplicaciones donde se requiere movimiento y
                      flexibilidad.
                    </li>
                    <li>
                      {" "}
                      <strong>Resistencia a la Tensión:</strong> Gracias a su
                      diseño robusto y materiales de alta calidad, los cables
                      espiralados pueden soportar tensiones y estiramientos
                      repetidos sin comprometer su integridad estructural.
                    </li>
                    <li>
                      {" "}
                      <strong>Protección:</strong> Además de proporcionar
                      conducción eléctrica, los cables espiralados también
                      ofrecen protección contra daños mecánicos, abrasión y
                      exposición a elementos ambientales adversos.
                    </li>
                  </ul>

                  <h4>Características Principales</h4>

                  <p>
                    Algunas de las características principales de los cables
                    eléctricos espiralados incluyen:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Materiales de Calidad:</strong> Fabricados con
                      materiales resistentes y duraderos, como PVC de alta
                      calidad, los cables espiralados garantizan un rendimiento
                      confiable y una larga vida útil.
                    </li>
                    <li>
                      {" "}
                      <strong>Variedad de Colores:</strong> Disponibles en una
                      variedad de colores para facilitar la identificación y el
                      cableado en aplicaciones industriales y comerciales.
                    </li>
                    <li>
                      {" "}
                      <strong>Opciones de Personalización:</strong> Se pueden
                      fabricar cables espiralados a medida para adaptarse a las
                      necesidades específicas de tu aplicación, incluyendo
                      longitudes, diámetros y especificaciones eléctricas.
                    </li>
                  </ul>

                  <h4>Aplicaciones Comunes</h4>

                  <p>
                    Los cables eléctricos espiralados se utilizan en una amplia
                    gama de aplicaciones industriales y comerciales, incluyendo:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Maquinaria Industrial:</strong> Los cables
                      espiralados son ideales para la conexión de componentes
                      eléctricos en maquinaria y equipos industriales donde se
                      requiere movimiento y flexibilidad.
                    </li>
                    <li>
                      {" "}
                      <strong>Vehículos:</strong> En aplicaciones automotrices y
                      de transporte, los cables espiralados se utilizan para la
                      conexión de sistemas eléctricos en vehículos comerciales y
                      de servicio pesado.
                    </li>
                    <li>
                      {" "}
                      <strong>Equipos Médicos:</strong> En el campo médico, los
                      cables espiralados son utilizados en equipos médicos y de
                      diagnóstico donde se requiere movilidad y resistencia a la
                      tensión.
                    </li>
                  </ul>

                  <h4>Ventajas de Trabajar con Nosotros</h4>

                  <p>
                    Al elegir nuestros cables eléctricos espiralados, puedes
                    beneficiarte de:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Calidad Garantizada:</strong> Nos comprometemos a
                      proporcionar productos de la más alta calidad que cumplan
                      con tus estándares de rendimiento y fiabilidad.
                    </li>
                    <li>
                      {" "}
                      <strong>Asesoramiento Profesional:</strong> Nuestro equipo
                      de expertos en cables eléctricos está disponible para
                      ofrecer asesoramiento y recomendaciones personalizadas
                      para satisfacer tus necesidades específicas.
                    </li>
                    <li>
                      {" "}
                      <strong>Entrega Rápida:</strong> Contamos con un proceso
                      de producción eficiente y una cadena de suministro
                      confiable para garantizar la entrega oportuna de tus
                      cables espiralados.
                    </li>
                  </ul>

                  <h4>Conclusiones</h4>

                  <p>
                    En resumen, los cables eléctricos espiralados son una
                    solución versátil y confiable para una variedad de
                    aplicaciones industriales y comerciales donde se requiere
                    flexibilidad y resistencia a la tensión. Con una amplia gama
                    de características y opciones de personalización
                    disponibles, los cables espiralados pueden adaptarse a tus
                    necesidades específicas y proporcionar una solución de
                    cableado eficiente y efectiva.
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

export default PostSpanish57;
