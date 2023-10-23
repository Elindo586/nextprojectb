import React from "react";
import Head from "next/head";
import Link from "next/link";
import AdBanner from "./ad-blog";
import Social1 from "./social-spanish";

function Blogger1(props) {
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
          <meta property="og:locale" content="es" />
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
      <div className="row">
        <div className="col-md-9">
          <div className="text-center">
            {" "}
            <h3 lang="es">{props.title}</h3> <br />
          </div>
          <div className="ratio ratio-16x9">
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
          </div>{" "}
          <br />
          <div>
            <Social1 /> <br />
          </div>
          <div className="col-md-12 centering-btn">
            {props.previous && (
              <Link legacyBehavior href={props.previous}>
                <a
                  className="btn btn-info d-flex justify-content-center"
                  target=""
                  lang="es"
                >
                  Previo
                </a>
              </Link>
            )}
            {props.previous && (
              <Link legacyBehavior href={props.next}>
                <a
                  className="btn btn-info d-flex justify-content-center"
                  target=""
                  lang="es"
                >
                  Próximo
                </a>
              </Link>
            )}
          </div>
          <br />
          <div className=""> {props.description} </div>
        </div>
        <div className="col-md-3">
          {" "}
          <Link legacyBehavior href="/blog/english">
            <a
              className="btn btn-info d-flex justify-content-center"
              target="blank"
            >
              Go to English Blogs
            </a>
          </Link>{" "}
          <br /> <br />
          <AdBanner />
        </div>
      </div>
    </div>
  );
}

export default Blogger1;
