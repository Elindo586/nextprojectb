import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Meta from "../../components/meta-data";
import Blogger from "../../components/blog-post";

const TestPost = () => {
  return (
    <div>
      <div>
        <Head>
          <Meta />
        </Head>
      </div>
      <Blogger
        title="Hello"
        body="this is the body"
        description="this is description"
      />
    </div>
  );
};

export default TestPost;
