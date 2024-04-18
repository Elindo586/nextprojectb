import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish53 = ({ db }) => {
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
        .filter((item) => item.id === "53")
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
                  <h4>Reemplazos de Válvulas Hidráulicas Direcionales</h4>
                  <p>
                    El reemplazo de válvulas direccionales de potencia fluida es
                    una tarea común en la industria hidráulica, ya sea por
                    necesidad de actualización, mantenimiento o reparación. En
                    este video, proporcionamos información sobre cómo reemplazar
                    válvulas direccionales de potencia fluida con otras marcas
                    disponibles en el mercado, y cómo pueden ponerse en contacto
                    con nosotros para cualquier requerimiento de válvulas
                    hidráulicas.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Variedad de Marcas:</strong> Ofrecemos una amplia
                      gama de válvulas direccionales de potencia fluida de
                      diferentes marcas en el mercado, lo que permite a nuestros
                      clientes encontrar la opción adecuada para sus necesidades
                      específicas.
                    </li>
                    <li>
                      {" "}
                      <strong>Compatibilidad:</strong> Nuestras válvulas
                      direccionales de potencia fluida son compatibles con una
                      variedad de sistemas y equipos hidráulicos, lo que
                      facilita su integración y reemplazo en aplicaciones
                      existentes.
                    </li>
                    <li>
                      {" "}
                      <strong>Asesoramiento Profesional:</strong> Nuestro equipo
                      de expertos está disponible para brindar asesoramiento y
                      recomendaciones personalizadas sobre el reemplazo de
                      válvulas direccionales de potencia fluida, garantizando
                      una solución óptima para cada situación.
                    </li>
                  </ul>

                  <h4>Proceso de Reemplazo</h4>

                  <p>
                    El proceso de reemplazo de válvulas direccionales de
                    potencia fluida puede variar dependiendo del tipo de válvula
                    y del equipo en el que se encuentra instalada. Sin embargo,
                    algunos pasos generales incluyen:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Identificación:</strong> Identificar el tipo y
                      modelo de la válvula existente, así como sus
                      especificaciones técnicas.
                    </li>
                    <li>
                      {" "}
                      <strong>Selección:</strong> Seleccionar la válvula de
                      reemplazo adecuada que cumpla con las mismas
                      especificaciones y requerimientos de la aplicación.
                    </li>
                    <li>
                      {" "}
                      <strong>Instalación:</strong> Desmontar la válvula
                      existente y instalar la nueva válvula de reemplazo
                      siguiendo las instrucciones del fabricante y los
                      procedimientos de seguridad adecuados.
                    </li>
                    <li>
                      {" "}
                      <strong>Pruebas:</strong> Realizar pruebas de
                      funcionamiento para asegurar que la nueva válvula de
                      reemplazo opere correctamente y cumpla con los estándares
                      de rendimiento esperados.
                    </li>
                  </ul>

                  <h4>Contacto</h4>

                  <p>
                    Para cualquier requerimiento de válvulas hidráulicas
                    direccionales o para obtener más información sobre nuestros
                    servicios y productos, no dude en ponerse en contacto con
                    nosotros. Nuestro equipo estará encantado de ayudarle y
                    proporcionarle soluciones personalizadas para sus
                    necesidades hidráulicas.
                  </p>

                  <p>¡Estamos aquí para ayudarte en cada paso del camino!</p>
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

export default PostSpanish53;
