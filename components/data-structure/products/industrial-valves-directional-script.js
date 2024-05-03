import Script from "next/script";

const IndustrialValvesDirectionalScript = () => (
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
    "image": "https://www.tu.biz/images/directional-control-valves.png",
    "name": "Hydraulic Directional Control Valves",
    "description": "D03 and D05 directional control valves with solenoid and manual actuation",
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
    "image": "https://www.tu.biz/images/directional-control-valves.png",
    "name": "Válvulas de control direccional hidráulicas",
    "description": "Válvulas de control direccional D03 y D05 con accionamiento solenoide y manual",
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
    "contentUrl": "https://www.tu.biz/images/directional-control-valves.png",
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

export default IndustrialValvesDirectionalScript;
