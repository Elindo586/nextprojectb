import React from "react";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Pagination from "../../../components/pagination";
import ImageMetadata from "../../../components/data-structure/image-metadata-english";

import db from "../../../utils/blogs-front/english/blog-english";

export async function getStaticProps() {
  return {
    props: { db },
  };
}
const BloggerFrontEnglish = ({ db }) => {
  // useEffect(() => {
  //   function setHeight() {
  //     const screenWidth = window.innerWidth;
  //     const divHeight = screenWidth * 0.36;
  //     const theDivs = document.querySelectorAll(".blog-div-image");

  //     for (let i = 0; i < theDivs.length; i++) {
  //       const theDiv = theDivs[i];
  //       if (screenWidth <= 875) {
  //         theDiv.style.height = `${divHeight}px`;
  //       } else {
  //         theDiv.style.height = `315px`;
  //       }
  //     }
  //   }

  //   // Call setHeight initially
  //   setHeight();

  //   // Add a listener to resize event
  //   window.addEventListener("resize", setHeight);

  //   // Cleanup function to remove the resize event listener
  //   return () => {
  //     window.removeEventListener("resize", setHeight);
  //   };
  // }, []); // Empty dependency array means this effect runs once after initial render

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

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  return (
    <div>
      <div>
        <Head>
          {/* Main */}
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
          <title>TU | Blogs</title>
          <meta name="description" content=" Technical blogs by Edgar Lindo" />
          <meta
            name="keywords"
            content="blogs, TU, hydraulic, mechanical, exports, electrical"
          />
          <meta name="author" content="Edgar Lindo" />

          {/* Open Graph tags */}

          <meta
            property="og:title"
            content=" TU blogs by Edgar Lindo"
            id="meta-og-title"
          />
          <meta
            property="og:description"
            content=" Industrial blogs on Hydraulics, Pneumatics, Electrical, and mechanical... and what-ever else comes to mind.."
            id="meta-og-desc"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/video-blog/english"
            id="meta-og-url"
          />
          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />
          <meta
            name="image"
            property="og:image"
            content="https://www.tu.biz//video-blog-images-english/blog-index-english.png"
            id="meta-og-image"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta name="twitter:title" content=" TU Blogs by Edgar Lindo " />

          <meta
            name="twitter:description"
            content=" Blogs about hydraulics, electrical, mechanical, industrial stuff and more."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/video-blog-images-english/blog-index-english.png"
          />
        </Head>
      </div>

      <ImageMetadata />

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
                  <div className="blog-div-image">
                    <Image
                      fill={true}
                      id="blog-image"
                      src={item.picture}
                      alt={item.alt}
                      sizes="100vw"
                      // width={600}
                      // height={315}
                      priority={true}
                    ></Image>
                  </div>
                  <br />
                  <div>
                    {" "}
                    <Link legacyBehavior href={item.link} prefetch={false}>
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
            <Link legacyBehavior href="">
              <a
                className="btn btn-info d-flex justify-content-center"
                target=""
              >
                Previo
              </a>
            </Link>

            <Link legacyBehavior href="">
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
          <Link legacyBehavior href="/video-blog/castellano" prefetch={false}>
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
