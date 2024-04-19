import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish23 = ({ db }) => {
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
        .filter((item) => item.id === "23")
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
                    Válvulas Check / Válvulas Antirretorno: Funcionamiento y
                    Aplicaciones
                  </h4>
                  <p>
                    En este video, exploraremos el funcionamiento y las
                    aplicaciones de las válvulas check, también conocidas como
                    válvulas antirretorno, en un circuito hidráulico. Estas
                    válvulas desempeñan un papel crucial en los sistemas
                    hidráulicos al permitir el flujo de fluido en una dirección
                    mientras bloquean el flujo en la dirección opuesta.
                  </p>

                  <ul>
                    <li>
                      <strong>Mecanismo de Funcionamiento:</strong> Las válvulas
                      check operan mediante un mecanismo que permite el flujo de
                      fluido en una dirección mientras impide su retroceso en la
                      dirección opuesta. Cuando la presión del fluido en la
                      entrada supera la presión en la salida, la válvula se abre
                      y permite el paso del fluido. Sin embargo, cuando la
                      presión en la salida es mayor que en la entrada, la
                      válvula se cierra y bloquea el flujo.
                    </li>
                    <li>
                      <strong>Tipos de Válvulas Check:</strong> Existen varios
                      tipos de válvulas check, incluyendo las de bola, de
                      columpio y de pistón. Cada tipo tiene sus propias
                      características y aplicaciones específicas, y la selección
                      adecuada depende de las necesidades del sistema
                      hidráulico.
                    </li>
                    <li>
                      <strong>Aplicaciones Comunes:</strong> Las válvulas check
                      se utilizan en una amplia variedad de aplicaciones en
                      sistemas hidráulicos. Algunos ejemplos incluyen sistemas
                      de elevación, equipos de excavación, maquinaria agrícola,
                      sistemas de dirección asistida y sistemas de frenado
                      hidráulico.
                    </li>
                    <li>
                      <strong>Importancia en la Prevención de Daños:</strong>{" "}
                      Las válvulas check desempeñan un papel crucial en la
                      prevención de daños en los sistemas hidráulicos. Al evitar
                      el retroceso del fluido, ayudan a mantener la integridad
                      del sistema y a prevenir la pérdida de presión, lo que
                      podría provocar un mal funcionamiento o daños en los
                      componentes.
                    </li>
                  </ul>

                  <h4>Beneficios de las Válvulas Check</h4>
                  <p>
                    Las válvulas check ofrecen una serie de beneficios
                    importantes en los sistemas hidráulicos, que incluyen:
                  </p>

                  <ul>
                    <li>
                      <strong>Protección del Sistema:</strong> Ayudan a proteger
                      el sistema hidráulico al prevenir el retroceso del fluido
                      y mantener la presión adecuada en el sistema.
                    </li>
                    <li>
                      <strong>Mejora del Rendimiento:</strong> Al garantizar un
                      flujo unidireccional del fluido, contribuyen a mejorar el
                      rendimiento y la eficiencia del sistema.
                    </li>
                    <li>
                      <strong>Prevención de Daños:</strong> Evitan daños en los
                      componentes del sistema al evitar el flujo inverso del
                      fluido, lo que podría provocar sobrecargas o mal
                      funcionamiento.
                    </li>
                    <li>
                      <strong>Mayor Seguridad:</strong> Al mantener la presión
                      adecuada en el sistema, contribuyen a garantizar un
                      funcionamiento seguro y fiable de la maquinaria y equipos
                      hidráulicos.
                    </li>
                  </ul>

                  <h4>Conclusión</h4>
                  <p>
                    En resumen, las válvulas check desempeñan un papel
                    fundamental en los sistemas hidráulicos al permitir un flujo
                    unidireccional del fluido y prevenir el retroceso. Su
                    funcionamiento eficiente y sus numerosos beneficios las
                    convierten en componentes esenciales en una amplia gama de
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

export default PostSpanish23;
