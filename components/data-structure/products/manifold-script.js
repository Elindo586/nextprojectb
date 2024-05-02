import Script from "next/script";

const ManifoldScript = () => (
  <Script
    id="product-metadata"
    strategy="afterInteractive"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `
      [
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "inLanguage": "en",
    "image": "https://www.tu.biz/images/hydraulic-manifolds.png",
    "name": "Hydraulic Manifolds ",
    "description": "Hydraulic manifolds for D03, D05, D07, D08 valve configurations",
    "brand": {
      "@type": "Brand",
      "name": "TU manifold"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": "Edgar Lindo"
      }
    }
  },

  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "inLanguage": "es",
    "image": "https://www.tu.biz/images/hydraulic-manifolds.png",
    "name": "Manifolds hidráulicos",
    "description": "Manifolds hidráulicos para válvulas D03, D05, D07, D08",
    "brand": {
      "@type": "Brand",
      "name": "TU manifold"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4.5,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": "Edgar Lindo"
      }
    }
  }
]

      `,
    }}
  />
);

export default ManifoldScript;
