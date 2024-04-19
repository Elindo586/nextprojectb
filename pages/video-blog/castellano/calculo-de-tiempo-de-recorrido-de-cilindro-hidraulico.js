import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish60 = ({ db }) => {
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
        .filter((item) => item.id === "60")
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
                    Cálculo de Tiempo de Recorrido para un Cilindro Hidráulico
                  </h4>
                  <p>
                    Los cilindros hidráulicos son componentes esenciales en una
                    amplia gama de aplicaciones industriales y móviles, desde
                    maquinaria pesada hasta equipos de construcción. Calcular el
                    tiempo que tarda en extenderse completamente un cilindro
                    hidráulico es crucial para el diseño y la optimización de
                    sistemas hidráulicos. En este video, aprenderemos cómo
                    calcular este tiempo utilizando una fórmula simple y
                    efectiva.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Fórmula de Cálculo:</strong> El tiempo (T)
                      necesario para que un cilindro hidráulico se extienda
                      completamente se puede calcular utilizando la siguiente
                      fórmula:
                    </li>
                  </ul>

                  <p class="indent">T = Área x Carrera x .26 / GPM</p>

                  <p>Donde:</p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Área:</strong> El área del pistón del cilindro
                      hidráulico, medida en pulgadas cuadradas.
                    </li>
                    <li>
                      {" "}
                      <strong>Carrera:</strong> La distancia total que recorre
                      el pistón, medida en pulgadas.
                    </li>
                    <li>
                      {" "}
                      <strong>GPM:</strong> El flujo de galones por minuto
                      suministrado al cilindro hidráulico.
                    </li>
                  </ul>

                  <p>
                    Esta fórmula nos permite determinar el tiempo necesario para
                    que un cilindro hidráulico alcance su extensión máxima, lo
                    que es crucial para planificar y optimizar procesos
                    industriales y operaciones de maquinaria.
                  </p>

                  <h4>Aplicación Práctica</h4>

                  <p>
                    Para comprender mejor cómo aplicar esta fórmula,
                    consideremos un ejemplo:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Área del Pistón:</strong> 20 pulgadas cuadradas
                    </li>
                    <li>
                      {" "}
                      <strong>Carrera del Pistón:</strong> 12 pulgadas
                    </li>
                    <li>
                      {" "}
                      <strong>Flujo de Galones por Minuto (GPM):</strong> 5 GPM
                    </li>
                  </ul>

                  <p>Aplicando la fórmula, obtenemos:</p>

                  <p class="indent">
                    T = 20 pulgadas cuadradas x 12 pulgadas x .26 / 5 GPM
                  </p>

                  <p>
                    Después de realizar los cálculos, encontramos que el tiempo
                    requerido para que este cilindro hidráulico se extienda
                    completamente es de aproximadamente 3.12 minutos.
                  </p>

                  <h4>Consideraciones Importantes</h4>

                  <p>
                    Es importante tener en cuenta algunas consideraciones al
                    utilizar esta fórmula:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Presión del Sistema:</strong> La presión del
                      sistema hidráulico puede afectar el tiempo de recorrido
                      del cilindro. A mayor presión, es posible que el cilindro
                      se extienda más rápido.
                    </li>
                    <li>
                      {" "}
                      <strong>Viscosidad del Fluido:</strong> La viscosidad del
                      fluido hidráulico también puede influir en el tiempo de
                      recorrido del cilindro. Fluidos más viscosos pueden
                      reducir la velocidad de extensión.
                    </li>
                    <li>
                      {" "}
                      <strong>Condiciones de Operación:</strong> Las condiciones
                      ambientales y la carga aplicada al cilindro pueden afectar
                      el tiempo de recorrido real en situaciones prácticas.
                    </li>
                  </ul>

                  <h4>Conclusiones</h4>

                  <p>
                    Calcular el tiempo de recorrido para un cilindro hidráulico
                    es esencial para diseñar sistemas eficientes y optimizar
                    operaciones industriales. Con la fórmula proporcionada y
                    teniendo en cuenta las consideraciones mencionadas, los
                    ingenieros y técnicos pueden planificar y ejecutar proyectos
                    con mayor precisión y eficacia en el campo de la hidráulica.
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

export default PostSpanish60;
