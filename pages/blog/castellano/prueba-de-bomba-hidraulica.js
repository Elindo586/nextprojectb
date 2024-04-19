import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish18 = ({ db }) => {
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
        .filter((item) => item.id === "18")
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
                  <h4>Prueba de bomba hidráulica</h4>
                  <br />
                  <p>
                    En este vídeo te explicaremos cómo realizar una prueba de
                    bomba hidráulica en un circuito hidráulico. Las bombas
                    hidráulicas son componentes esenciales en sistemas de
                    potencia fluida, y es importante asegurarse de que estén
                    funcionando correctamente para garantizar el rendimiento
                    óptimo del sistema.
                  </p>
                  <ul>
                    <li>
                      <strong>Paso 1:</strong> Antes de comenzar la prueba,
                      asegúrate de que el circuito hidráulico esté completamente
                      apagado y que todas las válvulas estén cerradas para
                      evitar cualquier riesgo de lesiones.
                    </li>
                    <li>
                      <strong>Paso 2:</strong> Conecta el manómetro al circuito
                      en un punto adecuado para medir la presión de salida de la
                      bomba hidráulica.
                    </li>
                    <li>
                      <strong>Paso 3:</strong> Enciende la bomba hidráulica y
                      asegúrate de que esté funcionando correctamente. Deberías
                      poder escuchar el sonido del motor y sentir el flujo de
                      fluido a través del circuito.
                    </li>
                    <li>
                      <strong>Paso 4:</strong> Observa la lectura en el
                      manómetro. Debería mostrar una presión dentro del rango
                      especificado para la bomba hidráulica. Si la presión es
                      demasiado baja o demasiado alta, puede ser un indicador de
                      un problema con la bomba o con el sistema en general.
                    </li>
                    <li>
                      <strong>Paso 5:</strong> Si la presión está fuera del
                      rango deseado, puedes realizar ajustes en la configuración
                      de la bomba hidráulica según las especificaciones del
                      fabricante. Esto podría implicar ajustar la velocidad del
                      motor, cambiar la configuración de las válvulas, o
                      realizar otras modificaciones según sea necesario.
                    </li>
                    <li>
                      <strong>Paso 6:</strong> Una vez que hayas realizado los
                      ajustes necesarios, vuelve a realizar la prueba para
                      asegurarte de que la presión esté dentro del rango deseado
                      y que la bomba esté funcionando correctamente.
                    </li>
                    <li>
                      <strong>Paso 7:</strong> Después de completar la prueba,
                      apaga la bomba hidráulica y desconecta el manómetro del
                      circuito.
                    </li>
                  </ul>
                  <p>
                    Realizar pruebas periódicas en la bomba hidráulica es
                    crucial para mantener la eficiencia y la fiabilidad del
                    sistema hidráulico en general. Siempre sigue las
                    precauciones de seguridad adecuadas al trabajar con equipos
                    hidráulicos y consulta a un profesional si tienes alguna
                    pregunta o inquietud sobre el funcionamiento de tu sistema.
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

export default PostSpanish18;
