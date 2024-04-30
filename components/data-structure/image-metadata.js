import React, { useState, useEffect } from "react";
import Script from "next/script";
import db from "../../utils/blogs-front/english/blog-english";

const ImageMetadata = (props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex((prevIndex) => (prevIndex + 1) % db.length);
  }, []);

  const contentUrl = db[index].twitterImage;

  return (
    <Script
      id="image-metadata"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `[{
        "@context": "https://schema.org/",
      "@type": "ImageObject",
      "contentUrl": "${contentUrl}",
      "acquireLicensePage": "${props.acquireLicensePage}",
      "creator": {
        "@type": "Person",
        "name": "Edgar Lindo"
       },
      "copyrightNotice": "Edgar Lindo",
      }] `,
      }}
    />
  );
};

export default ImageMetadata;
