import React from "react";
// import { useEffect } from "react";
import Blogger1 from "../../../components/blog-post-spanish";

import db from "../../../utils/blogs-front/spanish/blog-spanish.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostSpanish24 = ({ db }) => {
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
        .filter((item) => item.id === "24")
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
                    Cómo Comprar Productos Industriales en Estados Unidos a Buen
                    Precio
                  </h4>
                  <p>
                    En este video, exploraremos el proceso para adquirir
                    productos industriales de alta calidad a precios
                    competitivos directamente desde Estados Unidos. Nuestra
                    plataforma ofrece una amplia gama de productos industriales
                    para exportación, y facilitamos el proceso de compra para
                    clientes de todo el mundo.
                  </p>

                  <ul>
                    <li>
                      <strong>Explorar Nuestro Catálogo:</strong> En nuestro
                      sitio web, encontrarás un extenso catálogo de productos
                      industriales que abarcan diversas industrias y
                      aplicaciones. Desde maquinaria y equipo hasta componentes
                      y suministros, ofrecemos una amplia variedad de productos
                      para satisfacer tus necesidades.
                    </li>
                    <li>
                      <strong>Contacto Directo:</strong> Para realizar una
                      compra, simplemente contáctanos a través de nuestro sitio
                      web. Nuestro equipo de atención al cliente está disponible
                      para ayudarte en todo momento y responder a cualquier
                      pregunta que puedas tener sobre nuestros productos,
                      precios y procesos de envío.
                    </li>
                    <li>
                      <strong>Asesoramiento Personalizado:</strong> Entendemos
                      que cada cliente y proyecto es único, por lo que ofrecemos
                      asesoramiento personalizado para garantizar que encuentres
                      los productos adecuados para tus necesidades específicas.
                      Nuestro equipo de expertos está aquí para ayudarte a tomar
                      decisiones informadas y encontrar las mejores soluciones
                      para tu negocio.
                    </li>
                    <li>
                      <strong>Proceso de Compra Sencillo:</strong> Una vez que
                      hayas seleccionado los productos que deseas adquirir, te
                      guiaremos a través del proceso de compra de forma sencilla
                      y transparente. Nos aseguraremos de que tu pedido se
                      procese de manera rápida y eficiente para que puedas
                      recibir tus productos en el menor tiempo posible.
                    </li>
                  </ul>

                  <h4>Beneficios de Comprar con Nosotros</h4>
                  <p>
                    Al elegirnos como tu proveedor de productos industriales en
                    Estados Unidos, disfrutarás de una serie de beneficios,
                    entre los que se incluyen:
                  </p>

                  <ul>
                    <li>
                      <strong>Productos de Calidad:</strong> Trabajamos con los
                      principales fabricantes y proveedores de la industria para
                      ofrecerte productos de la más alta calidad y rendimiento.
                    </li>
                    <li>
                      <strong>Precios Competitivos:</strong> Negociamos precios
                      competitivos para garantizar que obtengas el mejor valor
                      por tu dinero.
                    </li>
                    <li>
                      <strong>Envío Internacional:</strong> Ofrecemos envío
                      internacional para que puedas recibir tus productos en
                      cualquier parte del mundo.
                    </li>
                    <li>
                      <strong>Atención al Cliente:</strong> Nuestro equipo de
                      atención al cliente está aquí para brindarte el mejor
                      servicio y asistencia en todo momento.
                    </li>
                  </ul>

                  <h4>Contacta con Nosotros</h4>
                  <p>
                    Si estás interesado en comprar productos industriales en
                    Estados Unidos a buen precio, no dudes en ponerte en
                    contacto con nosotros a través de nuestro sitio web. Estamos
                    aquí para ayudarte a encontrar los productos que necesitas y
                    facilitar el proceso de compra para ti.
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

export default PostSpanish24;
