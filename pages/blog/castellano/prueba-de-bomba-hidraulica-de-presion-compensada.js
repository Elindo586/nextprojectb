import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Meta from "../../components/meta-data";
import Blogger2 from "../../components/blog-post-spanish";

const Post4 = () => {
  return (
    <div>
      <div>
        <Head>
          <div>
            {/* Main */}
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              rel="shortcut icon"
              type="image/png"
              href="/images/tu-favicon.png"
            />

            <meta
              name="facebook-domain-verification"
              content="fzctnjbrtlybvytmamk8glkng9af7p"
            />
            <title>TU-Technical Union</title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
            <meta name="author" content="Edgar Lindo" />

            {/* Open Graph */}

            <meta
              property="og:title"
              content=" Technical Union"
              id="meta-og-title"
            />
            <meta property="og:description" content="" id="meta-og-desc" />
            <meta
              property="og:url"
              content="https://www.tu.biz"
              id="meta-og-url"
            />
            <meta property="og:locale" content="es" />
            <meta property="site_name" content="TU-Technical Union" />
            <meta
              name="image"
              property="og:image"
              content="https://wwww.tu.biz//"
              id="meta-og-image"
            />

            {/* Twitter card */}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@MrEdgarLindo" />

            <meta name="twitter:title" content=" TU -Technical Union | " />

            <meta name="twitter:description" content="" />
            <meta
              name="twitter:image"
              content="https://www.tu.biz/oppictures/.png"
            />
          </div>
        </Head>
      </div>
      <Blogger2
        title="Prueba de bomba hidráulica de presión compensada"
        body={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jUOYap36IVo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
        previous="/blog/castellano/valvula-de-alivio"
        next="/blog/castellano/prueba-de-bomba-hidraulica-de-presion-compensada"
        description="La manera mas simple de hacer una prueba para una bomba hidráulica de presión compensada "
      />
    </div>
  );
};

export default Post4;
