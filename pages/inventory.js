import React from "react";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Pagination from "react-bootstrap/Pagination";

const Inventory = () => {
  return (
    <div>
      <div>
        <Head>
          <meta name="Description" content="  " />
          <meta name="keywords" content=" " />
          <meta name="author" content="Edgar Lindo" />

          <meta
            property="og:title"
            content=" TU - Technical Union | Inventory"
          />
          <meta
            property="og:Description"
            content=" from  TU -Technical Union"
          />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />
        </Head>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* style="margin-top: 50px; margin-bottom: 20px" ADD CSS TO ELEMENT BELOW */}
          <p className="invy-text">
            Here is a quick overview of regular components coming from our
            inventory. If you have any requirements on these components you can
            always
            <Link href="/contact-us">
              <a> contact us </a>
            </Link>
            for a quote request.
          </p>
        </div>
        <div className="col-md-12"></div>
        <div className="col-md-12"></div>
        <div className="col-md12"></div>
      </div>
    </div>
  );
};

export default Inventory;
