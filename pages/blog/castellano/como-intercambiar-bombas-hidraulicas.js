import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish22 = ({ db }) => {
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
        .filter((item) => item.id === "22")
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
                    Cómo Intercambiar Bombas Hidráulicas: Guía Paso a Paso
                  </h4>
                  <p>
                    En este video, aprenderemos cómo intercambiar bombas
                    hidráulicas en un sistema, teniendo en cuenta los requisitos
                    técnicos de caudal, presión, rpm, montaje, eje y puertos.
                    Cambiar una bomba hidráulica puede ser necesario por
                    diversos motivos, como el desgaste, la obsolescencia o la
                    necesidad de actualizar el equipo.
                  </p>

                  <ul>
                    <li>
                      <strong>Evaluación de Requisitos:</strong> Antes de
                      realizar el intercambio de la bomba hidráulica, es crucial
                      evaluar los requisitos técnicos del sistema, como el
                      caudal necesario, la presión máxima de funcionamiento, la
                      velocidad de rotación, el tipo de montaje, el tamaño del
                      eje y el número y tipo de puertos.
                    </li>
                    <li>
                      <strong>Selección de la Nueva Bomba:</strong> Una vez que
                      se han identificado los requisitos del sistema, se debe
                      seleccionar una nueva bomba hidráulica que cumpla con esos
                      criterios. Es importante elegir una bomba que tenga
                      capacidades de caudal, presión y velocidad de rotación
                      adecuadas, así como un montaje y un eje compatibles con el
                      equipo existente.
                    </li>
                    <li>
                      <strong>Desmontaje de la Bomba Antigua:</strong> El primer
                      paso para intercambiar la bomba hidráulica es desmontar la
                      antigua del sistema. Esto puede implicar desconectar las
                      líneas de fluido, retirar los pernos de montaje y
                      desconectar el eje de accionamiento, entre otras cosas. Es
                      importante seguir las instrucciones del fabricante y tomar
                      precauciones de seguridad adecuadas durante este proceso.
                    </li>
                    <li>
                      <strong>Instalación de la Nueva Bomba:</strong> Una vez
                      que la bomba antigua ha sido desmontada, se puede proceder
                      a instalar la nueva bomba en su lugar. Esto implica
                      conectar las líneas de fluido, asegurar la bomba con
                      pernos de montaje, y conectar el eje de accionamiento. Es
                      importante seguir las especificaciones del fabricante y
                      verificar que la nueva bomba esté correctamente alineada y
                      asegurada.
                    </li>
                    <li>
                      <strong>Pruebas y Ajustes:</strong> Después de instalar la
                      nueva bomba, es importante realizar pruebas de
                      funcionamiento para asegurarse de que todo esté
                      funcionando correctamente. Esto puede incluir la
                      verificación del caudal, la presión y la velocidad de
                      rotación, así como cualquier ajuste necesario para
                      garantizar un rendimiento óptimo del sistema.
                    </li>
                  </ul>

                  <h4>Consideraciones Importantes</h4>
                  <p>
                    Al intercambiar bombas hidráulicas, es importante tener en
                    cuenta algunas consideraciones importantes, como:
                  </p>

                  <ul>
                    <li>
                      <strong>Compatibilidad:</strong> Asegurarse de que la
                      nueva bomba sea compatible con el sistema existente en
                      términos de capacidad, dimensiones y especificaciones
                      técnicas.
                    </li>
                    <li>
                      <strong>Calidad:</strong> Optar por una bomba de alta
                      calidad y de un fabricante confiable para garantizar un
                      rendimiento duradero y confiable.
                    </li>
                    <li>
                      <strong>Seguridad:</strong> Tomar precauciones de
                      seguridad adecuadas durante el desmontaje, la instalación
                      y las pruebas de la bomba para evitar lesiones personales
                      y daños en el equipo.
                    </li>
                    <li>
                      <strong>Profesionalismo:</strong> En algunos casos, puede
                      ser necesario recurrir a un técnico o ingeniero hidráulico
                      certificado para realizar el intercambio de la bomba y
                      garantizar un trabajo profesional y seguro.
                    </li>
                  </ul>

                  <h4>Conclusión</h4>
                  <p>
                    En resumen, el intercambio de bombas hidráulicas es un
                    proceso técnico que requiere una cuidadosa planificación,
                    evaluación y ejecución. Siguiendo los pasos adecuados y
                    tomando las precauciones necesarias, es posible realizar con
                    éxito el intercambio de una bomba hidráulica y mantener el
                    rendimiento óptimo del sistema.
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

export default PostSpanish22;
