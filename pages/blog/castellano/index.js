import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import db from "../../../utils/blogs-front/spanish/blogs-spanish";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const BloggerFrontSpanish = ({ db }) => {
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
          <title>TU-Technical Union Blogs en Castellano</title>
          <meta
            name="description"
            content="Blogs industriales entre otras cosas..."
          />
          <meta
            name="keywords"
            content="blogs, castellano, industrial, hidraulica, mecanica, electrica"
          />
          <meta name="author" content="Edgar Lindo" />

          {/* Open Graph */}

          <meta
            property="og:title"
            content=" Blogs industriales entre otras cosas "
            id="meta-og-title"
          />
          <meta
            property="og:description"
            content=" Hablando de cosas industriales, hidráulica, neumática, eléctrica, mecánica y más"
            id="meta-og-desc"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/blog/castellano"
            id="meta-og-url"
          />
          <meta property="og:locale" content="es" />
          <meta property="site_name" content="TU-Technical Union" />
          <meta
            name="image"
            property="og:image"
            content="https://www.tu.biz//blog-images-spanish/blog-index-spanish.png"
            id="meta-og-image"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content=" Blog industrial y más de parte Edgar Lindo para todo el mundo. "
          />

          <meta
            name="twitter:description"
            content="Hablando de cosas industriales, hidráulica, neumática, eléctrica, mecánica, entre otras cosas."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/blog-images-spanish/blog-index-spanish.png"
          />
        </Head>
      </div>
      <div className="row">
        <div className="col-md-9">
          <div className="text-center">
            {db.map((item, id) => {
              return (
                <div key={id}>
                  <div>
                    {" "}
                    <h4>{item.title}</h4>
                  </div>
                  <Image
                    src={item.picture}
                    alt="Blog picture"
                    width={350}
                    height={200}
                  ></Image>
                  <div lang="es">
                    {" "}
                    <Link href={item.link}>
                      <a className="btn btn-info d-flex justify-content-center">
                        {item.description}
                      </a>
                    </Link>
                  </div>
                  <br /> <br />
                </div>
              );
            })}
          </div>

          {/* <div className="col-md-12 centering-btn">
            <Link href="">
              <a
                className="btn btn-info d-flex justify-content-center"
                target=""
              >
                Previo
              </a>
            </Link>

            <Link href="">
              <a
                className="btn btn-info d-flex justify-content-center"
                target=""
              >
                Próximo
              </a>
            </Link>
          </div> */}
        </div>
        <div className="col-md-3">
          {" "}
          <Link href="/blog/english">
            <a
              className="btn btn-info d-flex justify-content-center"
              target="blank"
            >
              Go to English blog
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BloggerFrontSpanish;
