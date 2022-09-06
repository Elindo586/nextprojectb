import React from "react";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Pagination from "../../../components/pagination";

import db from "../../../utils/blogs-front/english/blog-english";

export async function getStaticProps() {
  return {
    props: { db },
  };
}
const BloggerFrontEnglish = ({ db }) => {
  let PageSize = 5;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDb = useMemo(
    () =>
      db.filter((val) => {
        if (searchTerm === "") {
          return val;
        }
        return (
          val.title.normalize("NFKD").includes(searchTerm.toLowerCase()) ||
          val.title.normalize("NFKC").includes(searchTerm.toLowerCase()) ||
          val.title
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(searchTerm.toLowerCase()) ||
          val.title.normalize("NFC").includes(searchTerm.toLowerCase()) ||
          val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          `${val.title}`.normalize("NFKD").includes(searchTerm) ||
          `${val.title}`.normalize("NFKC").includes(searchTerm) ||
          `${val.title}`.normalize("NFD").includes(searchTerm) ||
          `${val.title}`.normalize("NFC").includes(searchTerm)
        );
      }),
    [searchTerm, db]
  );

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredDb.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, filteredDb]);

  const totalPages = Math.ceil(filteredDb.length / PageSize);

  useEffect(() => {
    setCurrentPage((prev) =>
      prev > totalPages ? totalPages : Math.max(1, prev)
    );
  }, [totalPages]);

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
            content=" Industrial blogs on Hydraulics, Pneumatics, Electrical, and mechanical... and what-ever else comes to mind.."
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
            content="https://www.tu.biz//blog-images-english/blog-index-english.png"
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
            content="https://www.tu.biz/blog-images-english/blog-index-english.png"
          />
        </Head>
      </div>
      <div className="row">
        <div className="col-md-9">
          <div>
            <input
              className="blog-input-spanish"
              type="text"
              id="myInput"
              // onKeyUp="myFunction()"
              onKeyUp={(event) => {
                setSearchTerm(event.target.value);
              }}
              placeholder="Search in blogs.."
              title="Type in a name"
            />{" "}
            <br /> <br />
          </div>
          <div className="text-center">
            {currentTableData.map((item, id) => {
              return (
                <div key={id}>
                  <div>
                    {" "}
                    <h4>{item.title}</h4>
                  </div>
                  <Image
                    src={item.picture}
                    alt="Blog picture"
                    width={400}
                    height={210}
                  ></Image>
                  <div>
                    {" "}
                    <Link href={item.link}>
                      <a className="btn btn-info d-flex justify-content-center">
                        {item.more}
                      </a>
                    </Link>
                  </div>
                  <br /> <br />
                </div>
              );
            })}
          </div>
          <div className="col-md-12">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={filteredDb.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
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
