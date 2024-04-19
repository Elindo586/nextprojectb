import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish17 = ({ db }) => {
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
        .filter((item) => item.id === "17")
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
                  <h4>Símbolos hidráulicos para válvulas direccionales</h4>
                  <br />
                  <p>
                    En este vídeo, vamos a explorar los símbolos hidráulicos
                    utilizados para representar las válvulas direccionales en
                    esquemas hidráulicos. La correcta interpretación de estos
                    símbolos es crucial para comprender cómo funcionan los
                    sistemas de control direccional en aplicaciones de potencia
                    fluida.
                  </p>
                  <ul>
                    <li>
                      <strong>Símbolo de la válvula direccional:</strong> La
                      válvula direccional se representa típicamente como un
                      cuadrado con flechas indicando las posiciones de trabajo
                      de la válvula. Estas flechas muestran la dirección del
                      flujo de fluido cuando la válvula está en una posición
                      específica.
                    </li>
                    <li>
                      <strong>Símbolo de las posiciones de la válvula:</strong>
                      Cada posición de la válvula direccional tiene su propio
                      símbolo específico que indica la ruta del flujo de fluido
                      en esa posición. Por ejemplo, una posición de
                      &#34;abierta&#34; puede representarse con una flecha
                      apuntando hacia afuera del cuadrado, mientras que una
                      posición de &#34;cerrada&#34; puede mostrarse con una
                      línea cruzando el cuadrado.
                    </li>
                    <li>
                      <strong>Símbolos de los puertos de conexión:</strong> Los
                      puertos de conexión de la válvula se representan con
                      círculos en el esquema hidráulico. Estos círculos pueden
                      tener etiquetas que indican la función del puerto, como
                      &#34;P&#34; para presión, &#34;T&#34; para retorno o
                      tanque, &#34;A&#34; y &#34;B&#34; para las conexiones de
                      los actuadores, entre otros.
                    </li>
                    <li>
                      <strong>Símbolos de las líneas de flujo:</strong> Las
                      líneas que conectan los diferentes componentes en el
                      esquema hidráulico también tienen símbolos específicos.
                      Por ejemplo, una línea sólida indica un conducto de
                      presión, mientras que una línea punteada puede representar
                      un conducto de retorno o un flujo de baja presión.
                    </li>
                    <li>
                      <strong>Símbolos de los actuadores:</strong> Los
                      actuadores, como cilindros hidráulicos o motores, también
                      tienen símbolos específicos en los esquemas hidráulicos.
                      Estos símbolos suelen mostrar la dirección del movimiento
                      y el sentido del flujo de fluido dentro del actuador.
                    </li>
                  </ul>
                  <p>
                    Comprender estos símbolos es fundamental para poder
                    interpretar correctamente los esquemas hidráulicos y diseñar
                    sistemas de control direccional eficientes y seguros.
                    Además, la correcta documentación de los esquemas
                    hidráulicos facilita el mantenimiento y la solución de
                    problemas en los sistemas hidráulicos existentes.
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

export default PostSpanish17;
