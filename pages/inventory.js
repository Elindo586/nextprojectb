import React from "react";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Pagination from "react-bootstrap/Pagination";
import {PartsData} from "./PartsData";



const Inventory = () => {
  const [isActive, setIsActive] = useState([]);
  const [isInventory, setIsInventory] = useState([]);
  const [savedParts, setSavedParts] = useState([]);

  let partsList = [];
  // store inventory items
  let itemsPerPage = [];
  // store count as an array
  let activepages = [];

  // pagination elements stored
  let paginatedElements = [];
  // activeInventoryElements stored
  let activeInventory = [];

  let pages;

  let itemStart = 0;
  let itemEnd = 24;

  useEffect(async () => {
    await getInventory();
    // console.log(partsList);
    setSavedParts(partsList);
    console.log(savedParts);

    // // get pages

    for (let i = 1; i <= pages; i++) {
      activepages.push(i);
    }

    // get 25 items
    renderItems();

    // create paginated elements
    getPagination();
  }, []);

  // fetch data from server
  const getInventory = {PartsData}
      .then((response) => {
        if (!response.ok) {
          return response.statusText();
        }
        return response.json();
      })
      .then((invDataArr) => {
        partsList = invDataArr;
      })
      .catch((error) => console.log(error));
  };

  // return pagination elements
  const getPagination = () => {
    // get pages
    if (activeInventory.length > 0) {
      pages = Math.ceil(activeInventory.length / 25);
    } else {
      pages = Math.ceil(partsList.length / 25);
    }

    for (let i = 1; i <= pages; i++) {
      paginatedElements.push(
        <Pagination.Item key={i} id={i} onClick={getActiveItems}>
          {i}
        </Pagination.Item>
      );
    }
    setIsActive(paginatedElements);
  };

  // return 25 items according to
  const getActiveItems = () => {
    // capture url
    let pageId = document.activeElement.id;

    if (itemStart === 0) {
      itemEnd = pageId * 25 - 1;
      itemStart = pageId * 25 - 25;
    }

    renderItems();

    itemStart = 0;
    itemEnd = 24;
  };

  const renderItems = () => {
    itemsPerPage = [];
    if (itemsPerPage === isInventory) {
      setIsInventory([]);
    }

    // get 25 items
    if (activeInventory.length > 0) {
      for (let i = itemStart; i <= itemEnd; i++) {
        if (activeInventory[i]) {
          itemsPerPage.push(activeInventory[i]);
        } else {
          break;
        }
      }
      setIsInventory(itemsPerPage);
    } else {
      console.log(partsList.length);
      for (let i = itemStart; i <= itemEnd; i++) {
        if (partsList[i]) {
          itemsPerPage.push(
            <tr key={`tr${i}`}>
              <td key={`ref${i}`}>{partsList[i].Reference}</td>
              <td key={`desc${i}`}>{partsList[i].Description}</td>
              <td key={`repl${i}`}>{partsList[i].Replacements}</td>
            </tr>
          );
        } else {
          break;
        }
      }
      setIsInventory(itemsPerPage);
    }
  };

  const searchItems = () => {
    let searching = document.activeElement.value;

    searching = searching.toString(searching);
    searching = searching.toLowerCase();
    searching = searching.trim(" ");

    itemsPerPage = [];
    partsList = savedParts;
    if (searching.length === 0) {
      console.log("nope");
      partsList = savedParts;
      renderItems();
      getPagination();
    } else {
      for (let i = 0; i <= savedParts.length; i++) {
        if (savedParts[i]) {
          // searching Reference number
          let refSearch = savedParts[i].Reference;
          refSearch = refSearch.toString(refSearch);
          refSearch = refSearch.toLowerCase(refSearch);

          // searching Reference number
          let descSearch = savedParts[i].Description;
          descSearch = descSearch.toString(descSearch);
          descSearch = descSearch.toLowerCase(descSearch);

          // searching Reference number
          let replSearch = savedParts[i].Replacements;
          replSearch = replSearch.toString(replSearch);
          replSearch = replSearch.toLowerCase(replSearch);

          if (
            refSearch.match(searching) ||
            descSearch.match(searching) ||
            replSearch.match(searching)
          ) {
            activeInventory.push(
              <tr key={`tr${i}`}>
                <td key={`ref${i}`}>{savedParts[i].Reference}</td>
                <td key={`desc${i}`}>{savedParts[i].Description}</td>
                <td key={`repl${i}`}>{savedParts[i].Replacements}</td>
              </tr>
            );
          }
        }
      }
      renderItems();
      getPagination();
    }
  };

  return (
  
      <div>
        <div className="col-md-12">
        {/* style="margin-top: 50px; margin-bottom: 20px" ADD CSS TO ELEMENT BELOW */}
        <p className="invy-text">
          Here is a quick overview of regular components coming from our
          inventory. If you have any requirements on these components you can
          always <Link to="/ContactUs"> contact us </Link> for a quote request.
        </p>
      </div>
      <div className="col-md-12">
        <input
          type="text"
          id="myInput"
          // onKeyUp="myFunction()"
          onKeyUp={searchItems}
          placeholder="Search for Part Number.."
          title="Type in a name"
        />
        <br />
        <br />

        <table
          className="my-talbe-sort table table-hover table-striped table-bordered"
          id="myTable"
        >
          <thead>
            <tr>
              <th>Reference Number</th>
              <th>Description / Long Part Number</th>
              <th>Alternative replacement for:</th>
            </tr>
          </thead>

          <tbody>{isInventory}</tbody>
        </table>

        <Pagination>{isActive}</Pagination>
      </div>
      </div>

      

  );
}

export default Inventory;