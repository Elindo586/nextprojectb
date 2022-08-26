import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Blogger2 from "../../../components/blog-post-spanish";

const Post7 = () => {
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
          <title>
            TU-Technical Union | Cálculo de fuerza para cilindro hidráulico.
          </title>
          <meta
            name="description"
            content="Aprenda a calcular la fuerza de un cilindro hidráulico correctamente."
          />
          <meta name="keywords" content="cilindro hidráulico" />
          <meta name="author" content="Edgar Lindo" />

          {/* Open Graph */}

          <meta
            property="og:title"
            content=" Cálculo de fuerza para cilindro hidráulico."
            id="meta-og-title"
          />
          <meta
            property="og:description"
            content="Aprenda como calcular la fuerza de un cilindro hidráulico correctamente."
            id="meta-og-desc"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/blog/castellano/fuerza-hidraulica-de-un-cilindro"
            id="meta-og-url"
          />
          <meta property="og:locale" content="es" />
          <meta property="site_name" content="TU-Technical Union" />
          <meta
            name="image"
            property="og:image"
            content="https://www.tu.biz//blog-images-spanish/calculo-fuerza-de-cilindro.png"
            id="meta-og-image"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content=" Cálculo de fuerza para cilindro hidráulico. "
          />

          <meta
            name="twitter:description"
            content="Aprenda como calcular la fuerza de un cilindro hidráulico correctamente."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/blog-images-spanish/calculo-fuerza-de-cilindro.png"
          />
        </Head>
      </div>
      <Blogger2
        title="Cálculo de fuerza para cilindro hidráulico."
        body={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/47vUcjn2Dl8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
        previous="/blog/castellano"
        next="/blog/castellano/calculo-de-potencia-hidraulica"
        description="Aprenda a calcular la fuerza de un cilindro hidráulico. "
      />
    </div>
  );
};

export default Post7;
