import Script from "next/script";
import db from "../../utils/blogs-front/english/blog-english";

const ImageMetadataEnglish = () => {
  const content = db.map((item) => ({
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    contentUrl: item.twitterImage,
    acquireLicensePage: "https://www.tu.biz/video-blog/english",
    creator: {
      "@type": "Person",
      name: "Edgar Lindo",
    },
    copyrightNotice: "Edgar Lindo",
  }));

  return (
    <Script
      id="image-metadata"
      strategy="afterInteractive"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(content, null, 2),
      }}
    />
  );
};

export default ImageMetadataEnglish;
