import React from "react";
import Head from "next/head";
import Blogger2 from "../../../components/blog-post-spanish";

const Post9 = () => {
  return (
    <div>
      <div>
        <Head>
          {/* Main */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/images/tu-favicon.png"
          />

          <meta
            name="facebook-domain-verification"
            content="fzctnjbrtlybvytmamk8glkng9af7p"
          />
          <title>Ajuste de control de bomba de presión compensada.</title>
          <meta
            name="description"
            content="Aprenda como ajustar el control hidráulico de una bomba de presión compensada."
          />
          <meta name="keywords" content="presión compensada" />
          <meta name="author" content="Edgar Lindo" />

          {/* Open Graph */}

          <meta
            property="og:title"
            content=" Ajuste de control de bomba de presión compensada."
            id="meta-og-title"
          />
          <meta
            property="og:description"
            content="Aprenda como ajustar el control hidráulico de una bomba de presión compensada."
            id="meta-og-desc"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/blog/castellano/ajuste-de-control-para-bomba-de-presion-compensada"
            id="meta-og-url"
          />
          <meta property="og:locale" content="es" />
          <meta property="site_name" content="TU-Technical Union" />
          <meta
            name="image"
            property="og:image"
            content="https://www.tu.biz//blog-images-spanish/ajuste-presion-compensada.png"
            id="meta-og-image"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content="Ajuste de control de bomba de presión compensada. "
          />

          <meta
            name="twitter:description"
            content="Aprenda como ajustar el control hidráulico de una bomba de presión compensada."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/blog-images-spanish/ajuste-presion-compensada.png"
          />
        </Head>
      </div>
      <Blogger2
        title="Ajuste de control de bomba de presión compensada."
        body={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Q7go3yQiphw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
        previous="/blog/castellano"
        next="/blog/castellano/fuerza-hidraulica-de-un-cilindro"
        description="Como hacer ajuste de control hidráulico para una bomba de presión compensada. "
      />
    </div>
  );
};

export default Post9;
