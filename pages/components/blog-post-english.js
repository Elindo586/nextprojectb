import React from "react";
import Link from "next/link";

function Blogger1(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <div className="text-center">
            {" "}
            <h3>{props.title}</h3> <br />
          </div>
          <div className="text-center"> {props.body} </div>

          <div className="col-md-12 centering-btn">
            <Link href={props.previous}>
              <a
                className="btn btn-info d-flex justify-content-center"
                target="blank"
              >
                Previous
              </a>
            </Link>
            <Link href={props.next}>
              <a
                className="btn btn-info d-flex justify-content-center"
                target="blank"
              >
                Next
              </a>
            </Link>{" "}
          </div>
          <br />
          <div className="">
            {" "}
            <p>{props.description} </p>{" "}
          </div>
        </div>
        <div className="col-md-3">
          {" "}
          <Link href="/blog/castellano/valvula-de-alivio">
            <a
              className="btn btn-info d-flex justify-content-center"
              target="blank"
            >
              Ir al blog en Castellano.
            </a>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default Blogger1;
