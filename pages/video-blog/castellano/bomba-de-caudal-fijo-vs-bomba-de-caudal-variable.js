import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish9 = ({ db }) => {
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
        .filter((item) => item.id === "9")
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
                    Bomba de Caudal Fijo vs. Bomba de Caudal Variable:
                    Diferencias Clave en la Hidráulica de Potencia
                  </h4>
                  <br />
                  <p>
                    En el mundo de la hidráulica de potencia, la elección entre
                    una bomba de caudal fijo y una bomba de caudal variable
                    puede tener un impacto significativo en el rendimiento y la
                    eficiencia de un sistema hidráulico. Ambos tipos de bombas
                    tienen sus propias características y aplicaciones
                    específicas, y comprender las diferencias entre ellas es
                    fundamental para seleccionar la opción más adecuada para una
                    aplicación particular.
                  </p>
                  <br />
                  <h4>Bomba de Caudal Fijo</h4>
                  <ul>
                    <li>
                      Una bomba de caudal fijo, como su nombre lo indica,
                      suministra un caudal constante independientemente de la
                      demanda del sistema.
                    </li>
                    <li>
                      Estas bombas son simples en diseño y operación, lo que las
                      hace ideales para aplicaciones donde se requiere un caudal
                      constante, como en sistemas de dirección asistida.
                    </li>
                    <li>
                      La velocidad del motor de la bomba puede variar para
                      ajustar la presión, pero el caudal de salida permanece
                      constante.
                    </li>
                  </ul>
                  <br />
                  <h4>Bomba de Caudal Variable</h4>
                  <ul>
                    <li>
                      Una bomba de caudal variable tiene la capacidad de ajustar
                      su caudal de salida según la demanda del sistema.
                    </li>
                    <li>
                      Estas bombas son más complejas y costosas que las de
                      caudal fijo, pero ofrecen una mayor flexibilidad y
                      eficiencia en una variedad de aplicaciones.
                    </li>
                    <li>
                      La velocidad del motor y/o el ángulo de inclinación del
                      pistón pueden ajustarse para variar el caudal de salida y
                      mantener una presión constante en el sistema.
                    </li>
                  </ul>
                  <br />
                  <p>
                    La elección entre una bomba de caudal fijo y una bomba de
                    caudal variable depende de varios factores, incluida la
                    aplicación específica, el rendimiento deseado y las
                    restricciones de costos. En general, las bombas de caudal
                    variable son más adecuadas para aplicaciones donde se
                    requiere un control preciso del caudal y una mayor
                    eficiencia energética, mientras que las bombas de caudal
                    fijo son más adecuadas para aplicaciones simples donde se
                    necesita un caudal constante a una presión determinada.
                  </p>
                  <br />
                  <p>
                    En el video adjunto, se explican con más detalle las
                    diferencias entre una bomba de caudal fijo y una bomba de
                    caudal variable, así como sus aplicaciones y consideraciones
                    de diseño. Además, se ilustran ejemplos prácticos para
                    ayudar a los espectadores a comprender mejor cómo
                    seleccionar la bomba adecuada para sus necesidades
                    específicas en sistemas hidráulicos de potencia.
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

export default PostSpanish9;
