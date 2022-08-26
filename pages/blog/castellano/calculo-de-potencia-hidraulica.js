import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Blogger2 from "../../../components/blog-post-spanish";

const Post5 = () => {
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
            TU-Technical Union | Cálculo de potencia hidráulica para bomba.
          </title>
          <meta
            name="description"
            content="Cálculo de potencia hidráulica para bomba hidráulica."
          />
          <meta name="keywords" content="bomba hidraulica" />
          <meta name="author" content="Edgar Lindo" />

          {/* Open Graph */}

          <meta
            property="og:title"
            content=" Cálculo de potencia hidráulica para bomba."
            id="meta-og-title"
          />
          <meta
            property="og:description"
            content="Aprenda como calcular la potencia hidráulica requerida para el trabajo de una bomba hidráulica."
            id="meta-og-desc"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/calculo-de-potencia-hidraulica"
            id="meta-og-url"
          />
          <meta property="og:locale" content="es" />
          <meta property="site_name" content="TU-Technical Union" />
          <meta
            name="image"
            property="og:image"
            content="https://www.tu.biz//blog-images-spanish/HP-Spanish.png"
            id="meta-og-image"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content=" Cálculo de potencia hidráulica para bomba. "
          />

          <meta
            name="twitter:description"
            content="Aprenda como calcular la potencia hidráulica requerida para el trabajo de una bomba hidráulica."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/blog-images-spanish/HP-Spanish.png"
          />
        </Head>
      </div>
      <Blogger2
        title="Cálculo de potencia hidráulica para bomba."
        body={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/seYdZ2eXHY0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
        previous="/blog/castellano"
        next="/blog/castellano/valvula-de-alivio"
        description="La manera más simple de hacer un cálculo de potencia requierida para el trabajo de una bomba hidráulica. "
      />
    </div>
  );
};

export default Post5;
