import Script from "next/script";
import db from "../../utils/blogs-front/spanish/blog-spanish.json";

const ImageMetadataSpanish = () => {
  const content = db.map((item) => ({
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    contentUrl: item.twitterImage,
    acquireLicensePage: "https://www.tu.biz/video-blog/spanish",
    creator: {
      "@type": "Person",
      name: "Edgar Lindo",
    },
    copyrightNotice: "Edgar Lindo",
  }));

  return (
    <Script
      id="image-metadata"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(content, null, 2),
      }}
    />
  );
};

export default ImageMetadataSpanish;
