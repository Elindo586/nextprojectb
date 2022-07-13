import React from "react";
import { useEffect, useState, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import Pagination from "../components/pagination";

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
const TestInventory = ({ db }) => {
  let PageSize = 10;

  function TestInventory() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
      <div>
        <div className="col-md-12">
          <span className=" invy-text">
            <p>
              Here is a quick overview of regular components coming from our
              inventory to replace the Eaton Charlynn hydraulic motor units. If
              you have any requirements on these components you can always{" "}
              <a href="./contact-us"> contact us </a> for a quote request.
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
              {currentTableData
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.Reference.toLowerCase().includes(
                      searchTerm.toLowerCase()
                    )
                  ) {
                  }
                })
                .map((item) => {
                  return (
                    <tr>
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
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    );
  }
};
export default TestInventory;
