import React from "react";
import Head from "next/head";
import Blogger2 from "../../../components/blog-post-english";

const Post10 = () => {
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
          <title>Pressure compensated pump control adjustment</title>
          <meta
            name="description"
            content="Learn how to properly adjust a pressure compensated control of a hydraulic pump."
          />
          <meta name="keywords" content="cylinder force calculation" />
          <meta name="author" content="Edgar Lindo" />

          {/* Open Graph tags */}

          <meta
            property="og:title"
            content=" Pressure compensated pump control adjustment"
            id="meta-og-title"
          />
          <meta
            property="og:description"
            content="Learn how to properly adjust a pressure compensated control of a hydraulic pump."
            id="meta-og-desc"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/blog/english/pressure-compensated-pump-control-adjustment"
            id="meta-og-url"
          />
          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU-Technical Union" />
          <meta
            name="image"
            property="og:image"
            content="https://www.tu.biz//blog-images-english/pressure-compensated-pump-control.png"
            id="meta-og-image"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content="Pressure compensated pump control adjustment. "
          />

          <meta
            name="twitter:description"
            content="Learn how to properly adjust a pressure compensated control of a hydraulic pump."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/blog-images-english/pressure-compensated-pump-control.png"
          />
        </Head>
      </div>
      <Blogger2
        title="Pressure compensated pump control adjustment."
        body={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vq5TyJBKIbM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
        previous="/blog/english"
        next="/blog/english/hydraulic-cylinder-force-calculation"
        description="This is the proper way on how you adjust a pressure compensated control for a hydraulic pump."
      />
    </div>
  );
};

export default Post10;
