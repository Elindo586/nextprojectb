import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const NimcoControls = () => {
  return (
    <div>
      <div>
        <Head></Head>
      </div>
      <div className="row">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12"></div>
          <div className="col-md-12"></div>
          <div className="col-md-12"></div>
          <div className="col-md-12"></div>
        </div>
        <div className="col-md-3"> Navbar</div>
      </div>
    </div>
  );
};

export default NimcoControls;
