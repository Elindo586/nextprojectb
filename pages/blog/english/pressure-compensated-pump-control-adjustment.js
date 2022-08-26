import React from "react";
import Head from "next/head";
import Blogger1 from "../../../components/blog-post-english";

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
          <title>Hydraulic Cylinder Force Calculation</title>
          <meta
            name="description"
            content="Learn how to calculate the cylinder force for your hydraulic system."
          />
          <meta name="keywords" content="cylinder force calculation" />
          <meta name="author" content="Edgar Lindo" />

          {/* Open Graph tags */}

          <meta
            property="og:title"
            content=" Cylinder Force Calculation"
            id="meta-og-title"
          />
          <meta
            property="og:description"
            content="Learn how to calculate the cylinder force in your hydraulic system. "
            id="meta-og-desc"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/blog/english/hydraulic-cylinder-force-calculation"
            id="meta-og-url"
          />
          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU-Technical Union" />
          <meta
            name="image"
            property="og:image"
            content="https://www.tu.biz//blog-images-english/cylinder-force-calculation.png"
            id="meta-og-image"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content=" Hydraulic Cylinder Force Calculation. "
          />

          <meta
            name="twitter:description"
            content="Learn how to properly calculate a hydraulic cylinder force for your hydraulic system."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/blog-images-english/cylinder-force-calculation.png"
          />
        </Head>
      </div>
      <Blogger1
        title="Hydraulic Cylinder Force Calculation."
        body={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/M-wsllOxfeA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
        previous="/blog/english"
        next="/blog/english/horsepower-fluid-power-calculation"
        description="This is how you calculate the work force for a hydraulic cylinder."
      />
    </div>
  );
};

export default Post10;
