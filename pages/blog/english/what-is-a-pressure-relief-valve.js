import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Blogger1 from "../../../components/blog-post-english";

const Post1 = () => {
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
          <title>TU-Technical Union | Relief Valve</title>
          <meta
            name="description"
            content="Understanding a pressure relief valve, uses, requirements, and why it is important in the hydraulic system. "
          />
          <meta name="keywords" content=" relief valve" />
          <meta name="author" content="Edgar Lindo" />

          {/* Open Graph tags */}

          <meta
            property="og:title"
            content=" Hydraulic relief valve"
            id="meta-og-title"
          />
          <meta
            property="og:description"
            content="Understanding why is important to use a hydraulic relief valve for your hydraulic machinery"
            id="meta-og-desc"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/what-is-a-pressure-relief-valve"
            id="meta-og-url"
          />
          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU-Technical Union" />
          <meta
            name="image"
            property="og:image"
            content="https://www.tu.biz//blog-images-english/pressure-relief-valve.png"
            id="meta-og-image"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content=" What is a hydraulic relief valve? "
          />

          <meta
            name="twitter:description"
            content="Understanding how a hydraulic relief valve work, and why it is important to use a relief valve in a hydraulic system."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/blog-images-english/pressure-relief-valve.png"
          />
        </Head>
      </div>
      <Blogger1
        title="What is a pressure relief valve."
        body={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Z4sLwGu1Xdk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
        previous="/blog/english/how-to-test-a-pressure-compensated-pump"
        next="/blog/english"
        description="A pressure relief valve is used to limit the amount of pressure used
            in a hydraulic system to do work. Higher working pressures in the
            same area means more force to move heavier items."
      />
    </div>
  );
};

export default Post1;
