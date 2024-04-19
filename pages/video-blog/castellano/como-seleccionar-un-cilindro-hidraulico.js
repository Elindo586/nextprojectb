import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish13 = ({ db }) => {
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
        .filter((item) => item.id === "13")
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
                    Cómo Seleccionar un Cilindro Hidráulico: Guía Paso a Paso
                  </h4>
                  <br />
                  <p>
                    Seleccionar el cilindro hidráulico adecuado es esencial para
                    garantizar un rendimiento óptimo en una variedad de
                    aplicaciones industriales y móviles. Un cilindro mal
                    seleccionado puede resultar en problemas de rendimiento,
                    fallos prematuros y costosos tiempos de inactividad. En este
                    artículo, exploraremos los pasos clave para seleccionar un
                    cilindro hidráulico que cumpla con los requisitos
                    específicos de tu aplicación.
                  </p>
                  <br />
                  <h4>Pasos para Seleccionar un Cilindro Hidráulico:</h4>
                  <ul>
                    <li>
                      <strong>Requisitos de Presión (psi):</strong> Antes de
                      seleccionar un cilindro hidráulico, es importante
                      determinar los requisitos de presión del sistema. Esto
                      incluye la presión máxima de trabajo a la que estará
                      expuesto el cilindro. Asegúrate de seleccionar un cilindro
                      que pueda manejar la presión sin comprometer la seguridad
                      ni el rendimiento.
                    </li>
                    <li>
                      <strong>Carrera (Stroke):</strong> La carrera del cilindro
                      se refiere a la distancia total que el pistón puede
                      recorrer dentro del cilindro. Es crucial seleccionar una
                      carrera que sea compatible con los requisitos de
                      movimiento de tu aplicación. Si la carrera es demasiado
                      corta, el cilindro no completará el recorrido necesario;
                      si es demasiado larga, puede haber desperdicio de espacio
                      y energía.
                    </li>
                    <li>
                      <strong>Requisitos de Fuerza:</strong> Determina la fuerza
                      de salida requerida del cilindro para realizar la tarea
                      específica. Esto implica calcular la fuerza necesaria para
                      mover la carga o realizar la tarea deseada. Selecciona un
                      cilindro con una capacidad de fuerza adecuada para
                      garantizar un funcionamiento eficiente y seguro.
                    </li>
                    <li>
                      <strong>Montaje:</strong> Considera cómo se montará el
                      cilindro en tu aplicación. Esto incluye el tipo de montaje
                      (vertical u horizontal), así como los accesorios y
                      soportes necesarios para asegurar una instalación segura y
                      robusta.
                    </li>
                  </ul>
                  <br />
                  <p>
                    Al seleccionar un cilindro hidráulico, también es importante
                    tener en cuenta otros factores, como el tipo de fluido
                    hidráulico utilizado, las condiciones ambientales de
                    operación y las especificaciones de rendimiento del
                    fabricante.
                  </p>
                  <br />
                  <p>
                    En resumen, seleccionar un cilindro hidráulico adecuado
                    requiere un enfoque cuidadoso y metódico. Al seguir los
                    pasos mencionados anteriormente y considerar todos los
                    factores relevantes, puedes elegir un cilindro que cumpla
                    con los requisitos de tu aplicación y garantice un
                    rendimiento óptimo a largo plazo.
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

export default PostSpanish13;
