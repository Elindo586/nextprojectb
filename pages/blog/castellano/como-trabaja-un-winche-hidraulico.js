import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish36 = ({ db }) => {
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
        .filter((item) => item.id === "36")
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
                  <h4>Cómo Trabaja un Winche Hidráulico</h4>
                  <p>
                    En este video, exploraremos cómo funciona un winche
                    hidráulico en un sistema hidráulico y cómo se utiliza en
                    diversas aplicaciones industriales y comerciales.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Funcionamiento Básico:</strong> Un winche
                      hidráulico es un dispositivo que utiliza la potencia
                      hidráulica para enrollar y desenrollar cables, cuerdas o
                      cadenas. Consiste en un tambor giratorio que se acciona
                      mediante un sistema hidráulico que aplica presión sobre un
                      pistón o motor hidráulico para generar el movimiento de
                      rotación necesario.
                    </li>
                    <li>
                      {" "}
                      <strong>Aplicaciones Comunes:</strong> Los winches
                      hidráulicos se utilizan en una amplia variedad de
                      aplicaciones, incluyendo la industria marítima para
                      levantar y bajar anclas, en la industria forestal para
                      arrastrar troncos y en la industria de la construcción
                      para levantar y mover cargas pesadas.
                    </li>
                    <li>
                      {" "}
                      <strong>Componentes Principales:</strong> Los componentes
                      principales de un winche hidráulico incluyen el tambor, el
                      sistema hidráulico de accionamiento, el pistón o motor
                      hidráulico, y los controles para operar el winche de
                      manera segura y eficiente.
                    </li>
                    <li>
                      {" "}
                      <strong>Operación:</strong> Cuando se activa el sistema
                      hidráulico, la presión del fluido hidráulico se aplica al
                      pistón o motor hidráulico, lo que genera el movimiento de
                      rotación del tambor. El cable o la cuerda se enrolla o
                      desenrolla según la dirección y la velocidad controladas
                      por el operador.
                    </li>
                  </ul>

                  <h4>Beneficios del Winche Hidráulico</h4>

                  <ul>
                    <li>
                      {" "}
                      <strong>Mayor Potencia:</strong> Los winches hidráulicos
                      pueden proporcionar una mayor potencia de arrastre en
                      comparación con los winches eléctricos, lo que los hace
                      ideales para aplicaciones que requieren una alta capacidad
                      de carga.
                    </li>
                    <li>
                      {" "}
                      <strong>Control Preciso:</strong> Los sistemas hidráulicos
                      permiten un control preciso de la velocidad y la dirección
                      del winche, lo que facilita su operación en condiciones
                      exigentes y entornos de trabajo difíciles.
                    </li>
                    <li>
                      {" "}
                      <strong>Adaptabilidad:</strong> Los winches hidráulicos
                      son altamente adaptables y pueden integrarse fácilmente en
                      una variedad de sistemas y equipos, lo que los hace
                      versátiles para una amplia gama de aplicaciones.
                    </li>
                  </ul>

                  <p>
                    En resumen, un winche hidráulico es una herramienta potente
                    y versátil que utiliza la potencia hidráulica para realizar
                    tareas de elevación, arrastre y tracción en una variedad de
                    aplicaciones industriales y comerciales.
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

export default PostSpanish36;
