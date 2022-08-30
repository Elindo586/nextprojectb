import React from "react";
import Head from "next/head";
import Blogger2 from "../../../components/blog-post-english";

const Post6 = () => {
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
          <title>Hydraulic Horsepower calculation.</title>
          <meta
            name="description"
            content="Learn how to properly calculate hydraulic horsepower needed for your hydraulic system."
          />
          <meta name="keywords" content="horsepower, calculation " />
          <meta name="author" content="Edgar Lindo" />

          {/* Open Graph tags */}

          <meta
            property="og:title"
            content=" Hydraulic horsepower calculation."
            id="meta-og-title"
          />
          <meta
            property="og:description"
            content=" Learn how to properly calculate the amount of horsepower needed for your hydraulic system. "
            id="meta-og-desc"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/blog/english/horsepower-fluid-power-calculation"
            id="meta-og-url"
          />
          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU-Technical Union" />
          <meta
            name="image"
            property="og:image"
            content="https://www.tu.biz//blog-images-english/HP-English.png"
            id="meta-og-image"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content=" TU -Technical Union | Hydraulic Horsepower calculation "
          />

          <meta
            name="twitter:description"
            content=" Learn how to properly calculate hydraulic horsepower needed for your hydraulic system."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/blog-images-english/HP-English.png"
          />
        </Head>
      </div>
      <Blogger2
        title="How to calculate hydraulic horsepower."
        body={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/82sEwGEgIs8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
        previous="/blog/english/hydraulic-cylinder-force-calculation"
        next="/blog/english/how-to-test-a-pressure-compensated-pump"
        description="Learn how to calculate the hydraulic horsepower for your hydraulic system."
      />
    </div>
  );
};

export default Post6;
