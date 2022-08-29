import React from "react";
import Blogger11 from "../../../components/blog-post-english1";

import db from "../../../utils/blogs-front/spanish/blog-spanis1.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostTest = (db) => {
  return <Blogger11 />;
};

export default PostTest;
