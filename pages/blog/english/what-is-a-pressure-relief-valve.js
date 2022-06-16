import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Meta from "../../components/meta-data";
import Blogger1 from "../../components/blog-post-english";

const Post1 = () => {
  return (
    <div>
      <div>
        <Head>
          <Meta />
        </Head>
      </div>
      <Blogger1
        title="What is a pressure relief valve."
        body={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Z4sLwGu1Xdk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
        previous=""
        next="/blog/english/how-to-test-a-pressure-compensated-pump"
        description="A pressure relief valve is used to limit the amount of pressure used
            in a hydraulic system to do work. Higher working pressures in the
            same area means more force to move heavier items."
      />
    </div>
  );
};

export default Post1;
