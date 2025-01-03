import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

import ContactQuickEnglish from "./contact-quick-english";

function VideoBlogger2(props) {
  const displayText = () => {
    document.getElementById("text").style.display = "block";
    document.getElementById("less").style.display = "block";
    document.getElementById("more").style.display = "none";
  };

  const hideText = () => {
    document.getElementById("text").style.display = "none";
    document.getElementById("less").style.display = "none";
    document.getElementById("more").style.display = "block";
  };

  return (
    <div>
      <div>
        <Head>
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

          <title>{props.metaTitle}</title>
          <meta name="description" content={`${props.metaDescription}`} />
          <meta name="keywords" content={`${props.metaKeywords}`} />
          <meta name="author" content="Edgar Lindo" />

          {/* Open Graph */}
          <meta
            property="og:title"
            content={`${props.ogTitle}`}
            id="meta-og-title"
          />
          <meta
            property="og:description"
            content={`${props.ogDescription}`}
            id="meta-og-desc"
          />
          <meta property="og:url" content={`${props.ogURL}`} id="meta-og-url" />
          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />
          <meta
            name="image"
            property="og:image"
            content={`${props.ogImage}`}
            id="meta-og-image"
          />
          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta name="twitter:title" content={`${props.twitterTitle}`} />

          <meta
            name="twitter:description"
            content={`${props.twitterDescription}`}
          />
          <meta name="twitter:image" content={`${props.twitterImage}`} />
        </Head>
      </div>
      <div>
        <Script
          id="video-script"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `  
            [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "${props.iTitle}",
    "description": "${props.metaDescription}",
    "thumbnailUrl": "${props.ogImage}",
    "uploadDate": "2023-01-31T08:00:00+08:00",
    "contentUrl": "${props.ogURL}",
    "embedUrl": "${props.body}",
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": { "@type": "WatchAction" },
      "userInteractionCount": 5647018
    }
  },

  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${props.iTitle}",
    "image": "${props.twitterImage}",
    "datePublished": "2024-01-05T08:00:00+08:00",
    "dateModified": "2024-02-05T09:20:00+08:00",
    "author": {
      "@type": "Person",
      "name": "Edgar Lindo",
      "url": "https://www.edgarlindo.com"
    }
  }
]
`,
          }}
        />
      </div>
      <div className="row">
        <div className="col-md-9">
          <div className="text-center">
            {" "}
            <h2>{props.title}</h2> <br />
          </div>
          <div className="ratio ratio-16x9 col-md-9">
            {" "}
            <iframe
              width="560"
              height="315"
              src={`${props.body}`}
              title={`${props.iTitle}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>{" "}
          </div>
          <br />
          <div className="col">
            <ContactQuickEnglish />
            <br />
          </div>
          <div className="col centering-btn">
            {props.previous && (
              <Link legacyBehavior href={props.previous} prefetch={false}>
                <a
                  className="btn btn-info d-flex justify-content-center"
                  target=""
                >
                  Previous
                </a>
              </Link>
            )}
            {props.previous && (
              <Link legacyBehavior href={props.next} prefetch={false}>
                <a
                  className="btn btn-info d-flex justify-content-center"
                  target=""
                >
                  Next
                </a>
              </Link>
            )}
          </div>
          <br />
          <br />
          <div className="see-more" onClick={displayText} id="more">
            <h2>See more information... </h2>
          </div>
          <div className="video-blog-description" id="text">
            {" "}
            {props.description}{" "}
          </div>
          <div className="see-less" id="less" onClick={hideText}>
            {" "}
            <h2>See Less...</h2>
          </div>
        </div>
        <div className="col-md-3">
          {" "}
          <Link legacyBehavior href="/video-blog/castellano" prefetch={false}>
            <a
              className="btn btn-info d-flex justify-content-center"
              target="blank"
              lang="es"
            >
              Ir al blog en Castellano.
            </a>
          </Link>{" "}
          <br /> <br />
          {/* <AdBanner /> */}
        </div>
      </div>
    </div>
  );
}

export default VideoBlogger2;
