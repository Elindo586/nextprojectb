import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish21 = ({ db }) => {
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
        .filter((item) => item.id === "21")
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
                  <h4>Reemplazo de Productos Hidráulicos de Eaton Vickers</h4>
                  <p>
                    En este video, exploraremos las opciones de reemplazo
                    disponibles para algunos de los productos hidráulicos de
                    Eaton Vickers, como bombas de paletas, bombas de pistones,
                    válvulas de control direccional, válvulas de control de
                    presión y cilindros, entre otros componentes hidráulicos
                    populares.
                  </p>

                  <ul>
                    <li>
                      <strong>Bombas de Paletas:</strong> Ofrecemos una variedad
                      de bombas de paletas como alternativas a las bombas de
                      Eaton Vickers, con diferentes capacidades de caudal y
                      presión para adaptarse a diversas aplicaciones.
                    </li>
                    <li>
                      <strong>Bombas de Pistones:</strong> Nuestra selección de
                      bombas de pistones proporciona opciones de reemplazo
                      confiables y eficientes para las bombas de pistones de
                      Eaton Vickers, con capacidades de alta presión y
                      rendimiento.
                    </li>
                    <li>
                      <strong>Válvulas de Control Direccional:</strong> Contamos
                      con una amplia gama de válvulas de control direccional que
                      pueden utilizarse como alternativas a las válvulas de
                      Eaton Vickers, con diferentes configuraciones de puertos y
                      funciones de control.
                    </li>
                    <li>
                      <strong>Válvulas de Control de Presión:</strong> Nuestras
                      válvulas de control de presión ofrecen soluciones de
                      reemplazo efectivas para las válvulas de control de
                      presión de Eaton Vickers, ayudando a regular y mantener la
                      presión del sistema hidráulico de manera precisa.
                    </li>
                    <li>
                      <strong>Cilindros:</strong> Disponemos de una variedad de
                      cilindros hidráulicos que pueden utilizarse como
                      alternativas a los cilindros de Eaton Vickers, con
                      diferentes capacidades de carga, diámetros y recorridos
                      para adaptarse a diversas aplicaciones.
                    </li>
                  </ul>

                  <h4>Consideraciones al Seleccionar un Reemplazo</h4>
                  <p>
                    Al elegir un reemplazo para los productos hidráulicos de
                    Eaton Vickers, es importante tener en cuenta varios
                    factores, como:
                  </p>

                  <ul>
                    <li>
                      <strong>Compatibilidad:</strong> Asegurarse de que el
                      componente de reemplazo sea compatible con el sistema
                      hidráulico existente en términos de conexiones,
                      capacidades y especificaciones técnicas.
                    </li>
                    <li>
                      <strong>Rendimiento:</strong> Buscar componentes de
                      reemplazo que ofrezcan un rendimiento equivalente o
                      superior al producto original de Eaton Vickers,
                      garantizando un funcionamiento confiable y eficiente del
                      sistema hidráulico.
                    </li>
                    <li>
                      <strong>Calidad:</strong> Optar por productos de alta
                      calidad y de fabricantes confiables para garantizar una
                      larga vida útil y un rendimiento óptimo del sistema
                      hidráulico.
                    </li>
                    <li>
                      <strong>Consultar a Expertos:</strong> En caso de dudas o
                      necesidad de asesoramiento técnico, es recomendable
                      consultar a expertos en hidráulica que puedan ofrecer
                      orientación sobre la selección del reemplazo adecuado.
                    </li>
                  </ul>

                  <h4>Conclusión</h4>
                  <p>
                    En resumen, ofrecemos una amplia gama de opciones de
                    reemplazo para los productos hidráulicos de Eaton Vickers,
                    incluyendo bombas, válvulas y cilindros, entre otros
                    componentes. Con nuestra selección de productos de calidad y
                    experiencia en la industria, estamos comprometidos a
                    proporcionar soluciones efectivas y confiables para las
                    necesidades de nuestros clientes en sistemas hidráulicos.
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

export default PostSpanish21;
