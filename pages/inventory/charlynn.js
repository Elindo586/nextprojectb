import React from "react";
import { useEffect, useState, useMemo } from "react";
import Head from "next/head";
import Pagination from "../../components/pagination";

import db from "../../utils/parts-charlynn.json";

export async function getStaticProps() {
  // await clientPromise;
  // `await clientPromise` will use the default database passed in the MONGODB_URI
  // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
  //
  // const client = await clientPromise;
  // const db = client.db("parts");
  //
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  return {
    props: { db },
  };
}
// console.log({ db });

const CharlynnList = ({ db }) => {
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
          <title>TU | Hydraulic Inventory to replace Eaton - Charlynn. </title>

          <meta
            name="description"
            content="Large inventory of hydraulic components to replace Eaton Charlynn hydraulic motors."
          />
          <meta name="keywords" content="tu, inventory, Eaton,  char-lynn" />
          <meta name="author" content="Edgar Lindo" />

          {/* OG tags */}

          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />

          <meta
            property="og:title"
            content=" Replacements for Eaton Charlynn hydraulic motors"
          />

          <meta
            property="og:description"
            content="Large inventory to replace Eaton Charlynn hydraulic motors."
          />

          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/charlynn-replacement.png"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/inventory/charlynn"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content=" TU | Charlynn replacement motors"
          />

          <meta
            name="twitter:description"
            content="This is a view of hydraulic motors to replace Eaton Charlynn hydraulic motors."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/oppictures/charlynn-replacement.png"
          />
        </Head>
      </div>
      <div className="col-md-12">
        <span className=" invy-text">
          <p>
            Here is a quick overview of regular components coming from our
            inventory to replace the Eaton Charlynn hydraulic motor units. If
            you have any requirements on these components you can always{" "}
            <a href="https://www.tu.biz/contact-us"> contact us </a> for a quote
            request.
          </p>
        </span>
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
              <th>Replacement</th>
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
  );
};

export default CharlynnList;
