import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish7 = ({ db }) => {
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
        .filter((item) => item.id === "7")
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
                    Manifold Hidráulico para Válvulas: Características y
                    Aplicaciones
                  </h4>
                  <br />
                  <p>
                    Los manifolds hidráulicos son componentes esenciales en
                    sistemas de potencia hidráulica que se utilizan para
                    distribuir fluido a múltiples válvulas desde una fuente
                    común. Estos manifolds ofrecen una solución eficiente y
                    compacta para la instalación y conexión de válvulas en
                    sistemas hidráulicos.
                  </p>
                  <br />
                  <p>
                    En el mercado actual, existen una amplia variedad de
                    manifolds hidráulicos disponibles, cada uno con sus propias
                    características y capacidades únicas. En el siguiente
                    catálogo, se detallan diferentes aspectos importantes a
                    tener en cuenta al seleccionar un manifold hidráulico para
                    válvulas:
                  </p>
                  <br />
                  <h4>Características Principales</h4>
                  <ul>
                    <li>
                      <strong>Clasificación de Presión:</strong> Los manifolds
                      hidráulicos están disponibles en una variedad de
                      clasificaciones de presión para adaptarse a diferentes
                      aplicaciones y requerimientos de presión del sistema.
                    </li>
                    <li>
                      <strong>Tamaño:</strong> Los manifolds vienen en
                      diferentes tamaños y configuraciones para adaptarse a las
                      necesidades de espacio y diseño del sistema hidráulico.
                    </li>
                    <li>
                      <strong>Tipo de Válvulas Compatibles:</strong> Es
                      importante seleccionar un manifold que sea compatible con
                      el tipo de válvulas específicas que se utilizarán en el
                      sistema, como válvulas direccionales, de control de flujo,
                      de presión, entre otras.
                    </li>
                    <li>
                      <strong>Material y Construcción:</strong> Los materiales
                      utilizados en la construcción del manifold deben ser
                      resistentes a la corrosión y capaces de soportar las
                      condiciones de funcionamiento del sistema hidráulico.
                    </li>
                  </ul>
                  <br />
                  <p>
                    Para obtener más detalles técnicos sobre los manifolds
                    hidráulicos y explorar una amplia gama de opciones
                    disponibles en el mercado, se puede consultar el siguiente
                    enlace:
                  </p>
                  <br />
                  <p>
                    <a href="https://www.tu.biz/products/hydraulic-manifolds">
                      Detalles Técnicos de Manifolds Hidráulicos
                    </a>
                  </p>
                  <br />
                  <p>
                    Esta referencia proporciona información detallada sobre las
                    especificaciones técnicas, capacidades y aplicaciones de los
                    manifolds hidráulicos, lo que facilita la selección del
                    manifold adecuado para cualquier proyecto de ingeniería
                    hidráulica.
                  </p>
                  <br />
                  <p>
                    En el video adjunto, se explora un catálogo de manifolds
                    hidráulicos para válvulas, destacando diferentes
                    características y opciones disponibles en el mercado.
                    Además, se ofrecen recomendaciones y consejos para ayudar a
                    los espectadores a tomar decisiones informadas al
                    seleccionar manifolds para sus sistemas hidráulicos.
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

export default PostSpanish7;
