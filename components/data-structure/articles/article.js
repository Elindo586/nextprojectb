import Script from "next/script";
import db from "../../../utils/blogs-front/english/blog-english.json";

const ArticleEnglish = () => {
  const content = db.map((item) => ({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Title of a News Article",
    image: [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg",
    ],
    datePublished: "2024-01-05T08:00:00+08:00",
    dateModified: "2024-02-05T09:20:00+08:00",
    author: [
      {
        "@type": "Person",
        name: "Edgar Lindo",
        url: "https://www.edgarlindo.com/",
      },
    ],
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

export default ArticleEnglish;
