import React from "react";
import Script from "next/script";

const ImageMetadata = (props) => {
  <Script
    id="image-metadata"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `type="application/ld+json" [{
        "@context": "https://schema.org/",
      "@type": "ImageObject",
      "contentUrl": "${props.twitterImage}",
      "acquireLicensePage": "${props.link}",
      "creator": {
        "@type": "Person",
        "name": "Edgar Lindo"
       },
      "copyrightNotice": "Edgar Lindo",
      }] `,
    }}
  />;
};

export default ImageMetadata;
