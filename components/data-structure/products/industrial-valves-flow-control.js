import Script from "next/script";

const IndustrialValvesFlowControlScript = () => (
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
    "image": "https://www.tu.biz/images/flow-control-valves.png",
    "name": "Hydraulic Flow Control Valves | Needle Valves",
    "description": "NPT and SAE flow control valves for hydraulic systems",
    "brand": {
      "@type": "Brand",
      "name": "TU valves"
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
    "image": "https://www.tu.biz/images/flow-control-valves.png",
    "name": "Válvulas de control de flujo hidráulico | Válvulas de aguja",
    "description": "Válvulas de control de flujo NPT y SAE para sistemas hidráulicos",
    "brand": {
      "@type": "Brand",
      "name": "TU valves"
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
  },
  {
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    "contentUrl": "https://www.tu.biz/images/flow-control-valves.png",
    "creator": {
      "@type": "Person",
      "name": "Edgar Lindo"
    }
  }
]

      `,
    }}
  />
);

export default IndustrialValvesFlowControlScript;
