import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import db from "../../../utils/blogs-front/english/blogs-english";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const BloggerFrontEnglish = ({ db }) => {
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
          <title>TU-Technical Union Blogs</title>
          <meta name="description" content=" Technical blogs by Edgar Lindo" />
          <meta
            name="keywords"
            content="blogs, technical, union, hydraulic, mechanical, exports, electrical"
          />
          <meta name="author" content="Edgar Lindo" />

          {/* Open Graph tags */}

          <meta
            property="og:title"
            content=" Technical blogs by Edgar Lindo"
            id="meta-og-title"
          />
          <meta
            property="og:description"
            content=" Hydrauics, electrical, mechanical, industrial blog"
            id="meta-og-desc"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/blog/english"
            id="meta-og-url"
          />
          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU-Technical Union" />
          <meta
            name="image"
            property="og:image"
            content="https://www.tu.biz//blog-images-english/blog-index-english"
            id="meta-og-image"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content=" Technical Blogs by Edgar Lindo "
          />

          <meta
            name="twitter:description"
            content=" Blogs about hydraulics, electrical, mechanical, industrial stuff and more."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/blog-images-english/blog-index-english"
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
                  <Image src={item.picture} width={350} height={200}></Image>
                  <div>
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
          <Link href="/blog/castellano">
            <a
              className="btn btn-info d-flex justify-content-center"
              target="blank"
            >
              Ir al blog en Castellano
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BloggerFrontEnglish;
