import React from "react";
import { useEffect, useState, useMemo } from "react";
import Head from "next/head";

import Pagination from "../../components/pagination";

import db from "../../utils/parts-denison.json";

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

const DenisonList = ({ db }) => {
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
          <title>TU - Technical Union | Denison hydraulic replacements.</title>

          <meta
            name="description"
            content="Inventory to replace hydraulic components from Denison."
          />
          <meta
            name="keywords"
            content="tu, Denison, inventory, replacements "
          />
          <meta name="author" content="Edgar Lindo" />

          {/* OG tags */}

          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />

          <meta
            property="og:title"
            content=" Replacements for Denison hydraulics"
          />
          <meta
            property="og:description"
            content="This is a view of our inventory to replace Denison hydraulic components."
          />
          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/denison-replacement.png"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/inventory/denison"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content=" TU | Denison hydraulic replacements"
          />

          <meta
            name="twitter:description"
            content="Inventory to replace Denison hydraulic components."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/oppictures/denison-replacement.png"
          />
        </Head>
      </div>
      <div className="col-md-12">
        <span className=" invy-text">
          <p>
            Here is a quick overview of regular components coming from our
            inventory to replace Denison hydraulic components. If you have any
            requirements on these components you can always{" "}
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

export default DenisonList;
