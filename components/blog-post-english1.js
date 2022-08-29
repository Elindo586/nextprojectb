import React from "react";
import Head from "next/head";
import Link from "next/link";
import AdBanner from "./ad-blog";
import Social1 from "./social-english";

function Blogger11(props) {
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
        </Head>
      </div>
      <div className="row">
        <div className="col-md-9">
          <div className="text-center">
            {" "}
            <h3>{props.title}</h3> <br />
          </div>
          <div className="ratio ratio-16x9"> {props.body} </div> <br />
          <div>
            <Social1 /> <br />
          </div>
          <div className="col-md-12 centering-btn">
            {props.previous && (
              <Link href={props.previous}>
                <a
                  className="btn btn-info d-flex justify-content-center"
                  target=""
                >
                  Previous
                </a>
              </Link>
            )}
            {props.previous && (
              <Link href={props.next}>
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
          <div className=""> {props.description} </div>
        </div>
        <div className="col-md-3">
          {" "}
          <Link href="/blog/castellano">
            <a
              className="btn btn-info d-flex justify-content-center"
              target="blank"
            >
              Ir al blog en Castellano.
            </a>
          </Link>{" "}
          <br /> <br />
          <AdBanner />
        </div>
      </div>
    </div>
  );
}

export default Blogger11;
