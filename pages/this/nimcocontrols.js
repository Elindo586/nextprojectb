import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ProductNav from "../../components/nav-products";

const NimcoControls = () => {
  return (
    <div>
      <div>
        <Head></Head>
      </div>
      <div className="row">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12"> This is the Nimco Page.</div>
          <div className="col-md-12"></div>
          <div className="col-md-12"></div>
          <div className="col-md-12"></div>
        </div>
        <div className="col-md-3">
          {" "}
          <ProductNav />{" "}
        </div>
      </div>
    </div>
  );
};

export default NimcoControls;
