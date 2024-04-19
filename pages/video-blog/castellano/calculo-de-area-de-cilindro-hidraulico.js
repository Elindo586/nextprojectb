import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish48 = ({ db }) => {
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
        .filter((item) => item.id === "48")
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
                  <h4>Cálculo de Área de Cilindro Hidráulico</h4>
                  <p>
                    Calcular el área de un cilindro hidráulico es fundamental
                    para entender su capacidad de trabajo y su aplicación en un
                    sistema hidráulico. En este video, proporcionaremos
                    información sobre cómo calcular el área de un cilindro
                    hidráulico utilizando la fórmula área del cilindro =
                    diámetro al cuadrado x .7854.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Fórmula de Cálculo:</strong> El área de un
                      cilindro hidráulico se puede calcular utilizando la
                      siguiente fórmula:
                    </li>
                  </ul>

                  <p class="indent">
                    área del cilindro = diámetro al cuadrado x .7854
                  </p>

                  <p>Donde:</p>

                  <ul>
                    <li>
                      {" "}
                      <strong>área del cilindro:</strong> Área del cilindro
                      hidráulico, medida en unidades de área (pulgadas cuadradas
                      o centímetros cuadrados).
                    </li>
                    <li>
                      {" "}
                      <strong>diámetro:</strong> Diámetro del cilindro
                      hidráulico, medido en unidades de longitud (pulgadas o
                      centímetros).
                    </li>
                  </ul>

                  <p>
                    Esta fórmula nos permite determinar el área transversal del
                    cilindro hidráulico, lo que es esencial para calcular la
                    fuerza de salida y la capacidad de trabajo del cilindro en
                    un sistema hidráulico.
                  </p>

                  <h4>Aplicación Práctica</h4>

                  <p>
                    Para comprender mejor cómo aplicar esta fórmula,
                    consideremos un ejemplo:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Diámetro del Cilindro:</strong> 4 pulgadas
                    </li>
                  </ul>

                  <p>Aplicando la fórmula, obtenemos:</p>

                  <p class="indent">
                    área del cilindro = 4 pulgadas x 4 pulgadas x .7854
                  </p>

                  <p>
                    Después de realizar los cálculos, encontramos que el área
                    del cilindro es de aproximadamente 12.5664 pulgadas
                    cuadradas.
                  </p>

                  <h4>Consideraciones Importantes</h4>

                  <p>
                    Al utilizar esta fórmula, es importante tener en cuenta
                    algunas consideraciones:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Unidades de Medida:</strong> Asegúrese de utilizar
                      unidades de medida coherentes para el diámetro y el área
                      del cilindro, ya sea pulgadas o centímetros.
                    </li>
                    <li>
                      {" "}
                      <strong>Precisión:</strong> Dependiendo de la aplicación,
                      puede ser necesario tener en cuenta la precisión del
                      cálculo del área del cilindro para garantizar resultados
                      precisos.
                    </li>
                  </ul>

                  <h4>Conclusiones</h4>

                  <p>
                    En resumen, el cálculo del área de un cilindro hidráulico es
                    esencial para comprender su capacidad de trabajo y su
                    aplicación en un sistema hidráulico. Con la fórmula
                    proporcionada y teniendo en cuenta las consideraciones
                    mencionadas, los ingenieros y técnicos pueden determinar el
                    área del cilindro de manera precisa y utilizar esta
                    información para diseñar y operar sistemas hidráulicos con
                    eficacia.
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

export default PostSpanish48;
