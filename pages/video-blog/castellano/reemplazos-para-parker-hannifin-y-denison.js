import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish34 = ({ db }) => {
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
        .filter((item) => item.id === "34")
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
                  <h4>Reemplazos para Parker-Hannifin / Denison</h4>
                  <p>
                    En este video, exploraremos opciones de reemplazo para
                    productos específicos de Parker-Hannifin y Denison que son
                    comúnmente utilizados en sistemas hidráulicos. Estos
                    reemplazos ofrecen alternativas eficientes y compatibles que
                    pueden satisfacer las necesidades de los usuarios a un costo
                    competitivo.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Bombas de Paletas:</strong> Para reemplazar las
                      bombas de paletas de Parker-Hannifin o Denison, se pueden
                      considerar alternativas de otros fabricantes que ofrezcan
                      una calidad y rendimiento similares. Es importante buscar
                      productos compatibles en términos de dimensiones,
                      capacidades de flujo y presiones de trabajo.
                    </li>
                    <li>
                      {" "}
                      <strong>Bombas de Descarga:</strong> Las bombas de
                      descarga, también conocidas como dump pumps, son
                      componentes esenciales en sistemas hidráulicos. Se pueden
                      encontrar reemplazos adecuados de otras marcas que cumplan
                      con los requisitos de rendimiento y durabilidad.
                    </li>
                    <li>
                      {" "}
                      <strong>Kits de Paletas:</strong> Los kits de paletas para
                      bombas de paletas son componentes de desgaste que deben
                      reemplazarse periódicamente para mantener el rendimiento
                      óptimo de la bomba. Es posible encontrar kits de paletas
                      compatibles con las bombas de Parker-Hannifin o Denison.
                    </li>
                    <li>
                      {" "}
                      <strong>Válvulas de Control Direccional:</strong> Las
                      válvulas de control direccional estándar son cruciales
                      para controlar el flujo de fluido en sistemas hidráulicos.
                      Existen alternativas de otros fabricantes que ofrecen una
                      funcionalidad similar y pueden ser utilizadas como
                      reemplazos.
                    </li>
                  </ul>

                  <h4>Consideraciones al Seleccionar Reemplazos</h4>

                  <p>
                    Al seleccionar reemplazos para productos de Parker-Hannifin
                    o Denison, es importante tener en cuenta varios factores,
                    incluyendo la compatibilidad dimensional, el rendimiento, la
                    disponibilidad de piezas de repuesto y el soporte técnico
                    del fabricante. Además, es recomendable realizar pruebas y
                    verificaciones de compatibilidad antes de realizar la
                    instalación definitiva en el sistema hidráulico.
                  </p>

                  <p>
                    En resumen, los reemplazos para productos de Parker-Hannifin
                    y Denison ofrecen opciones viables para mantener y mejorar
                    sistemas hidráulicos existentes. Con la selección adecuada y
                    la instalación correcta, estos reemplazos pueden
                    proporcionar un rendimiento confiable y eficiente en una
                    variedad de aplicaciones industriales y comerciales.
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

export default PostSpanish34;
