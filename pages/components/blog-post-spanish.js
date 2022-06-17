import React from "react";
import Link from "next/link";

function Blogger2(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <div className="text-center">
            {" "}
            <h3 lang="es">{props.title}</h3> <br />
          </div>
          <div className="text-center" lang="es">
            {" "}
            {props.body}{" "}
          </div>

          <div className="col-md-12 centering-btn">
            {props.previous && (
              <Link href={props.previous}>
                <a
                  className="btn btn-info d-flex justify-content-center"
                  target="blank"
                >
                  Previo
                </a>
              </Link>
            )}
            {props.previous && (
              <Link href={props.next}>
                <a
                  className="btn btn-info d-flex justify-content-center"
                  target="blank"
                >
                  Proximo
                </a>
              </Link>
            )}
          </div>
          <br />
          <div className="">
            <p lang="es">{props.description}</p>{" "}
          </div>
        </div>
        <div className="col-md-3">
          {" "}
          <Link href="/blog/english/what-is-a-pressure-relief-valve">
            <a
              className="btn btn-info d-flex justify-content-center"
              target="blank"
            >
              Go to English blog
            </a>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default Blogger2;
