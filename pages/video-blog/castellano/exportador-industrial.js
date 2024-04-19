import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish61 = ({ db }) => {
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
        .filter((item) => item.id === "61")
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
                    Exportador Industrial: Expandiendo tus Opciones de Productos
                    Industriales
                  </h4>
                  <p>
                    En un mundo globalizado, la importación y exportación de
                    productos industriales se ha convertido en una práctica
                    común para empresas de todo el mundo. Como exportador
                    industrial con sede en los Estados Unidos, tenemos como
                    objetivo proporcionar acceso a una amplia gama de productos
                    industriales de alta calidad a clientes internacionales.
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Conexiones Globales:</strong> Nuestra red de
                      asociaciones y contactos en el extranjero nos permite
                      ofrecer una variedad de productos industriales
                      provenientes de diferentes partes del mundo.
                    </li>
                    <li>
                      {" "}
                      <strong>Calidad Garantizada:</strong> Trabajamos con
                      fabricantes y proveedores que cumplen con los más altos
                      estándares de calidad, garantizando que los productos que
                      ofrecemos sean confiables y duraderos.
                    </li>
                    <li>
                      {" "}
                      <strong>Variedad de Productos:</strong> Desde maquinaria y
                      equipos industriales hasta componentes y materiales,
                      nuestra cartera de productos es diversa y se adapta a las
                      necesidades de diversos sectores industriales.
                    </li>
                  </ul>

                  <h4>¿Cómo Puedes Contactarnos?</h4>

                  <p>
                    Si estás interesado en adquirir productos industriales de
                    alta calidad de fuentes internacionales, ¡estás en el lugar
                    correcto! Puedes ponerte en contacto con nosotros de las
                    siguientes maneras:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Formulario en Línea:</strong> Visita nuestro sitio
                      web y completa el formulario de contacto con tus detalles
                      y requerimientos específicos. Nos pondremos en contacto
                      contigo en breve para discutir cómo podemos ayudarte.
                    </li>
                    <li>
                      {" "}
                      <strong>Correo Electrónico:</strong> Envíanos un correo
                      electrónico a [correo electrónico] con tus consultas y
                      detalles de contacto. Uno de nuestros representantes se
                      comunicará contigo lo antes posible.
                    </li>
                    <li>
                      {" "}
                      <strong>Llamada Telefónica:</strong> Si prefieres una
                      comunicación más directa, no dudes en llamarnos al [número
                      de teléfono]. Estamos disponibles para responder tus
                      preguntas y proporcionarte la información que necesitas.
                    </li>
                  </ul>

                  <h4>Beneficios de Trabajar con un Exportador Industrial</h4>

                  <p>
                    Al elegir trabajar con un exportador industrial como
                    nosotros, puedes disfrutar de una serie de beneficios,
                    incluyendo:
                  </p>

                  <ul>
                    <li>
                      {" "}
                      <strong>Acceso a Mercados Globales:</strong> Amplía tus
                      opciones de proveedores y productos al acceder a mercados
                      internacionales a través de nuestra plataforma.
                    </li>
                    <li>
                      {" "}
                      <strong>Ahorro de Tiempo y Esfuerzo:</strong> Nos
                      encargamos de todo el proceso de importación, desde la
                      selección de productos hasta la entrega final, lo que te
                      permite enfocarte en tu negocio principal.
                    </li>
                    <li>
                      {" "}
                      <strong>Asistencia Personalizada:</strong> Nuestro equipo
                      está comprometido a brindarte un servicio personalizado y
                      adaptado a tus necesidades específicas, asegurando una
                      experiencia sin problemas en todo momento.
                    </li>
                  </ul>

                  <h4>Conclusiones</h4>

                  <p>
                    Como exportador industrial, nos enorgullece facilitar el
                    acceso a productos industriales de calidad a clientes de
                    todo el mundo. Si estás buscando expandir tus opciones de
                    abastecimiento y obtener productos industriales de fuentes
                    confiables y respetadas, ¡no dudes en ponerte en contacto
                    con nosotros hoy mismo!
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

export default PostSpanish61;
