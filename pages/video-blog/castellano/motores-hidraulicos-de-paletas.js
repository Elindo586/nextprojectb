import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish68 = ({ db }) => {
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
        .filter((item) => item.id === "68")
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
              description=<div
              // dangerouslySetInnerHTML={{ __html: item.description }}
              >
                <br></br>
                <article>
                  <h3>¿Qué son los Motores Hidráulicos de Paletas?</h3>
                  <p>
                    Los motores hidráulicos de paletas son dispositivos que
                    convierten la energía hidráulica en energía mecánica
                    rotativa. Estos motores constan de un rotor con paletas en
                    su interior que se desplazan dentro de una carcasa,
                    aprovechando la presión del fluido hidráulico para generar
                    movimiento. Su diseño simple y eficiente los hace ideales
                    para una amplia gama de aplicaciones.
                  </p>
                </article>

                <article>
                  <h3>Funcionamiento de los Motores de Paletas:</h3>
                  <p>
                    El funcionamiento de un motor hidráulico de paletas se basa
                    en el principio de desplazamiento positivo. Cuando el fluido
                    hidráulico se suministra al motor, las paletas dentro del
                    rotor se ven presionadas contra la carcasa. Esta presión
                    hace que el rotor gire, generando energía mecánica. La
                    velocidad de rotación del motor está directamente
                    relacionada con la presión y el caudal del fluido
                    suministrado.
                  </p>
                </article>

                <article>
                  <h3>Ventajas de los Motores de Paletas:</h3>
                  <ul>
                    <li>
                      Eficiencia: Los motores hidráulicos de paletas son
                      conocidos por su eficiencia en la conversión de energía
                      hidráulica en energía mecánica. Esto los hace ideales para
                      aplicaciones donde se requiere un alto rendimiento.
                    </li>
                    <li>
                      Diseño Simple: Su diseño mecánico simple y robusto les
                      proporciona una gran durabilidad y una larga vida útil.
                    </li>
                    <li>
                      Control Preciso: Estos motores permiten un control preciso
                      de la velocidad y el par motor, lo que los hace adecuados
                      para aplicaciones que requieren una respuesta precisa.
                    </li>
                  </ul>
                </article>

                <article>
                  <h3>Aplicaciones de los Motores Hidráulicos de Paletas:</h3>
                  <p>
                    Los motores de paletas se utilizan en una amplia variedad de
                    aplicaciones industriales, como:
                  </p>
                  <ul>
                    <li>
                      Maquinaria agrícola: En tractores y equipos para labranza.
                    </li>
                    <li>
                      Industria naval: Para el funcionamiento de cabrestantes y
                      sistemas de dirección.
                    </li>
                    <li>
                      Maquinaria de construcción: En excavadoras,
                      retroexcavadoras y otros equipos pesados.
                    </li>
                    <li>
                      Industria manufacturera: Para maquinaria de producción y
                      sistemas de automatización.
                    </li>
                    <li>
                      Aplicaciones móviles: En vehículos de servicio público,
                      grúas y sistemas de elevación.
                    </li>
                  </ul>
                </article>

                <article>
                  <h3>Conclusión:</h3>
                  <p>
                    Los motores hidráulicos de paletas son componentes
                    esenciales en muchos sistemas hidráulicos, ofreciendo
                    eficiencia, durabilidad y control preciso. Su versatilidad
                    los convierte en una elección inteligente para una amplia
                    gama de aplicaciones industriales. Si estás considerando la
                    incorporación de motores hidráulicos de paletas en tu
                    sistema, asegúrate de seleccionar la opción adecuada según
                    tus necesidades específicas.
                  </p>
                </article>
              </div>
              previous={item.previous}
              next={item.next}
            />
          );
        })}
    </div>
  );
};

export default PostSpanish68;
