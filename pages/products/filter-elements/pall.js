import React from "react";
import { useEffect, useState, useMemo } from "react";
import Head from "next/head";
import Pagination from "../../../components/pagination";

import db from "../../../utils/elements-pall.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}
// console.log({ db });

const PallElements = ({ db }) => {
  let PageSize = 30;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDb = useMemo(
    () =>
      db.filter((val) => {
        if (searchTerm === "") {
          return val;
        }
        return (
          val.Description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          `${val.Description}`.includes(searchTerm) ||
          val.Reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
          `${val.Reference}`.includes(searchTerm) ||
          val.Replacements.toLowerCase().includes(searchTerm.toLowerCase()) ||
          `${val.Replacements}`.includes(searchTerm)
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
    <>
      <div>
        <div>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              rel="shortcut icon"
              type="image/png"
              href="/images/tu-favicon.png"
            />

            <meta
              name="facebook-domain-verification"
              content="fzctnjbrtlybvytmamk8glkng9af7p"
            />
            <title>TU | Hydraulic element replacement for Pall filters. </title>

            <meta
              name="description"
              content="Here is a list of filter element replacements for Pall filters."
            />
            <meta name="keywords" content="tu, pall, filters, elements " />
            <meta name="author" content="Edgar Lindo" />

            {/* OG tags */}

            <meta property="og:locale" content="en" />
            <meta property="site_name" content="TU" />

            <meta
              property="og:title"
              content=" TU | Hydraulic element replacement for Pall filters."
            />

            <meta
              property="og:description"
              content="Here is a list of filter element replacements for Pall filters."
            />

            <meta
              property="og:image"
              content="https://www.tu.biz//oppictures/pall-filters.png"
            />
            <meta
              property="og:url"
              content="https://www.tu.biz/products/filter-elements/pall"
            />

            {/* Twitter card */}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@MrEdgarLindo" />

            <meta
              name="twitter:title"
              content=" TU | Hydraulic element replacement for Pall filters."
            />

            <meta
              name="twitter:description"
              content="Here is a list of filter element replacements for Pall filters."
            />
            <meta
              name="twitter:image"
              content="https://www.tu.biz/oppictures/pall-filters.png"
            />
          </Head>
        </div>
        <div className="col-md-12">
          <div className=" invy-text">
            <p>
              Here is a quick overview of filter elements to interchange with
              Pall filters. If you have any requirements on these components, or
              you are looking for a filter element that you do not find, you can
              always <a href="https://www.tu.biz/contact-us"> contact us </a>{" "}
              for a quote request. <br /> <br />
              &#42; All part numbers are for reference only. We are not
              associated with the original product&#39;s manufacturer.
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <input
            type="text"
            id="myInput"
            // onKeyUp="myFunction()"
            onKeyUp={(event) => {
              setSearchTerm(event.target.value);
            }}
            placeholder="Search for Part Number.."
            title="Type in a name"
          />
          <br />
          <br />
          <table className="my-talbe-sort table table-hover table-striped table-bordered">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Description</th>
                <th>Replacements for</th>
              </tr>
            </thead>
            <tbody>
              {currentTableData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.Reference}</td>
                    <td>{item.Description}</td>
                    <td>{item.Replacements}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={filteredDb.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
};

export default PallElements;
