import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Meta from "../../components/meta-data";
import Blogger1 from "../../components/blog-post-english";

const Post2 = () => {
  return (
    <div>
      <div>
        <Head>
          <Meta />
        </Head>
      </div>
      <Blogger1
        title="How to test a pressure compensated pump"
        body={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Dnwom8tI7FA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
        previous="/blog/english/what-is-a-pressure-relief-valve"
        next="/blog/english/how-to-test-a-pressure-compensated-pump"
        description="These are directions on how to test a pressure compensated pump."
      />
    </div>
  );
};

export default Post2;
