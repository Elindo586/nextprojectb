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
