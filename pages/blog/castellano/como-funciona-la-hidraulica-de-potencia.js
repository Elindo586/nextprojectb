import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish37 = ({ db }) => {
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
        .filter((item) => item.id === "37")
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
                  <br></br>
                  <article>
                    <h4>Cómo Funciona la Hidráulica de Potencia</h4>

                    <p>
                      La hidráulica de potencia es una tecnología que se
                      encuentra en el corazón de numerosas aplicaciones
                      industriales y maquinaria pesada. A través de la
                      utilización de fluidos incompresibles, esta tecnología
                      ofrece una forma eficaz de transmitir fuerza y energía. En
                      este artículo, exploraremos cómo funciona la hidráulica de
                      potencia y cómo se aplica en una variedad de situaciones.
                    </p>

                    <h4>Principios Básicos de la Hidráulica de Potencia</h4>
                    <p>
                      La hidráulica de potencia se basa en los siguientes
                      principios clave:
                    </p>
                    <ul>
                      <li>
                        <strong>Fluidos Incompresibles:</strong> Se utilizan
                        fluidos, generalmente aceite hidráulico, que no se
                        comprimen fácilmente. Esto permite transmitir la fuerza
                        de manera efectiva.
                      </li>
                      <li>
                        <strong>Ley de Pascal:</strong> Según esta ley,
                        cualquier cambio de presión aplicado en un punto de un
                        fluido se transmite de manera uniforme en todas las
                        direcciones. Esto permite la amplificación de la fuerza.
                      </li>
                      <li>
                        <strong>Cilindros y Motores Hidráulicos:</strong> Los
                        cilindros y los motores hidráulicos son componentes
                        clave que convierten la presión del fluido en movimiento
                        mecánico.
                      </li>
                    </ul>

                    <h4>Funcionamiento de un Sistema Hidráulico</h4>
                    <p>
                      En un sistema hidráulico de potencia, la energía se genera
                      mediante una bomba que presuriza el aceite hidráulico. El
                      aceite presurizado se dirige a través de tuberías y
                      mangueras hacia cilindros o motores hidráulicos. La
                      presión del fluido se convierte en fuerza mecánica, que se
                      utiliza para realizar trabajo, como levantar cargas
                      pesadas, mover maquinaria, o realizar operaciones
                      industriales específicas.
                    </p>

                    <h4>Aplicaciones de la Hidráulica de Potencia</h4>
                    <p>
                      La tecnología de la hidráulica de potencia se utiliza en
                      una amplia gama de aplicaciones, incluyendo:
                    </p>
                    <ul>
                      <li>
                        Maquinaria de construcción, como excavadoras y
                        retroexcavadoras.
                      </li>
                      <li>
                        Vehículos pesados, como camiones de carga y grúas.
                      </li>
                      <li>
                        Maquinaria industrial, incluyendo prensas y robots
                        industriales.
                      </li>
                      <li>Sistemas de dirección asistida en automóviles.</li>
                      <li>
                        Sistemas de frenado hidráulico en automóviles y
                        aeronaves.
                      </li>
                    </ul>

                    <h4>Ventajas de la Hidráulica de Potencia</h4>
                    <p>
                      La hidráulica de potencia ofrece varias ventajas, como una
                      alta potencia en relación con el tamaño, control preciso
                      de la velocidad y la fuerza, y la capacidad de operar en
                      entornos hostiles, como altas temperaturas y altas
                      presiones. Además, es una tecnología duradera y confiable
                      cuando se realiza el mantenimiento adecuado.
                    </p>

                    <h4>Conclusión</h4>
                    <p>
                      La hidráulica de potencia es una tecnología fundamental
                      que impulsa muchas de las máquinas y sistemas que
                      utilizamos en nuestra vida diaria. Comprender cómo
                      funciona y dónde se aplica esta tecnología es esencial
                      para apreciar su impacto en la eficiencia y la potencia de
                      una amplia variedad de equipos e industrias.
                    </p>
                  </article>
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

export default PostSpanish37;
