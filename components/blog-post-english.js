import React from "react";
import Link from "next/link";
import AdBanner from "./ad-blog";
import Social2 from "./social-english";

function Blogger2(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <div className="text-center">
            {" "}
            <h3>{props.title}</h3> <br />
          </div>
          <div className="ratio ratio-16x9"> {props.body} </div> <br />
          <div>
            <Social2 /> <br />
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

export default Blogger2;
