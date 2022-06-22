import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Blogger1 from "../../components/blog-post-english";

const Post2 = () => {
  return (
    <div>
      <div>
        <Head>
          {/* Main */}
          <meta charset="UTF-8" />
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
          <title>TU-Technical Union</title>
          <meta
            name="description"
            content="Here is where you can learn how to test a pressure compensated pump quick and easy."
          />
          <meta name="keywords" content="pressure compensated pump " />
          <meta name="author" content="Edgar Lindo" />

          {/* Open Graph tags */}

          <meta
            property="og:title"
            content=" Technical Union"
            id="meta-og-title"
          />
          <meta
            property="og:description"
            content=" Here is where you can learn how to test a pressure compensated pump quick and easy. "
            id="meta-og-desc"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/how-to-test-a-pressure-compensated-pump"
            id="meta-og-url"
          />
          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU-Technical Union" />
          <meta
            name="image"
            property="og:image"
            content="https://www.tu.biz//blog-images-english/pressure-comp-pump-test.png"
            id="meta-og-image"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta name="twitter:title" content=" TU -Technical Union | " />

          <meta
            name="twitter:description"
            content=" Here is how to properly test a pressure compensated pump quick and easy."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/blog-images-english/pressure-comp-pump-test.png"
          />
        </Head>
      </div>
      <Blogger1
        title="How to test a pressure compensated pump"
        body={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Dnwom8tI7FA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
        previous="/blog/english/what-is-a-pressure-relief-valve"
        next="/blog/english/how-to-test-a-pressure-compensated-pump"
        description="These are directions on how to test a pressure compensated pump."
      />
    </div>
  );
};

export default Post2;
