import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish10 = ({ db }) => {
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
        .filter((item) => item.id === "10")
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
                    Fórmulas de Hidráulica: Herramientas Esenciales para
                    Ingeniería de Sistemas Hidráulicos
                  </h4>
                  <br />
                  <p>
                    La hidráulica es una rama crucial de la ingeniería que se
                    encarga del estudio y aplicación de fluidos en movimiento y
                    su uso en la transmisión de energía. En el ámbito de la
                    ingeniería de sistemas hidráulicos, el conocimiento de las
                    fórmulas de hidráulica es fundamental para el diseño,
                    análisis y optimización de estos sistemas.
                  </p>
                  <br />
                  <p>
                    Para comprender y aplicar eficazmente las fórmulas de
                    hidráulica, es esencial tener una comprensión sólida de los
                    principios básicos de la mecánica de fluidos, así como de
                    los componentes y sistemas que componen un sistema
                    hidráulico.
                  </p>
                  <br />
                  <p>
                    En este artículo, exploraremos algunas de las fórmulas más
                    comunes utilizadas en la ingeniería de sistemas hidráulicos
                    y su importancia en el diseño y funcionamiento de estos
                    sistemas.
                  </p>
                  <br />
                  <h4>Fórmulas Comunes en Hidráulica</h4>
                  <ul>
                    <li>
                      La fórmula de la ley de continuidad, que establece que el
                      caudal de entrada es igual al caudal de salida en un
                      sistema hidráulico sin fugas.
                    </li>
                    <li>
                      La fórmula de la ley de Bernoulli, que describe la
                      relación entre la presión, la velocidad y la altura de un
                      fluido en movimiento.
                    </li>
                    <li>
                      La fórmula de la pérdida de carga, que calcula la pérdida
                      de energía debido a la fricción en un sistema hidráulico.
                    </li>
                    <li>
                      La fórmula de la potencia hidráulica, que determina la
                      cantidad de trabajo realizado por un fluido en un sistema
                      hidráulico.
                    </li>
                  </ul>
                  <br />
                  <p>
                    Estas son solo algunas de las muchas fórmulas que los
                    ingenieros de sistemas hidráulicos utilizan en su trabajo
                    diario. Para una lista completa de fórmulas y su aplicación
                    en la ingeniería de sistemas hidráulicos, se puede consultar
                    una fuente confiable, como el siguiente enlace:
                  </p>
                  <br />
                  <p>
                    <a href="https://www.tu.biz/fluid-power-formulas">
                      Fórmulas Interactivas de Hidráulica.
                    </a>
                  </p>
                  <br />
                  <p>
                    Esta página proporciona una amplia gama de fórmulas de
                    hidráulica, junto con ejemplos y aplicaciones prácticas que
                    ayudan a los ingenieros a comprender mejor y aplicar estas
                    fórmulas en sus proyectos.
                  </p>
                  <br />
                  <h4>Conclusión</h4>
                  <p>
                    En resumen, las fórmulas de hidráulica son herramientas
                    esenciales para la ingeniería de sistemas hidráulicos.
                    Comprender y aplicar estas fórmulas permite a los ingenieros
                    diseñar sistemas eficientes, predecir su comportamiento y
                    optimizar su rendimiento. Al utilizar recursos como las
                    fórmulas interactivas de hidráulica y neumática
                    proporcionadas en el enlace mencionado, los ingenieros
                    pueden mejorar aún más sus habilidades y conocimientos en
                    este campo en constante evolución.
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

export default PostSpanish10;
