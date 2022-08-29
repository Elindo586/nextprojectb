import React from "react";
import Blogger11 from "../../../components/blog-post-english1";

import db from "../../../utils/blogs-front/spanish/blog-spanis1.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostTest = ({ db }) => {
  function post(info) {
    return (
      info.id === "4995",
      info.item,
      info.metaTitle,
      info.metaDescription,
      info.metaKeywords,
      info.ogTitle,
      info.ogDescription,
      info.ogURL,
      info.ogImage,
      info.twitterTitle,
      info.twitterDescription,
      info.twitterImage,
      info.title,
      info.body,
      info.description,
      info.previous,
      info.next
    );
  }

  const item = db.find(post);

  return (
    <div>
      <Blogger11
        key={item.id}
        metaTitle={item.metaTitle}
        metaDescription={item.metaDescription}
        metaKeywords={item.metaKeywords}
        ogTitle={item.ogTitle}
        ogDescription={item.ogDescription}
        ogURL={item.ogURL}
        ogImage={item.ogImage}
        twitterTitle={item.twitterTitle}
        twitterDescription={item.twitterDescription}
        twitterImage={item.twitterImage}
        title={item.title}
        body={item.body}
        description={item.description}
        previous={item.previous}
        next={item.next}
      />
    </div>
  );
};

export default PostTest;
