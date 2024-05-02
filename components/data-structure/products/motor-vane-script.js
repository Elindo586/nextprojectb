import Script from "next/script";

const VaneMotorScript = () => (
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
    "image": "https://www.tu.biz/images/vane-motors.png",
    "name": "Hydraulic Vane Motors",
    "description": "Hydraulic Vane Motors with fixed displacement",
    "brand": {
      "@type": "Brand",
      "name": "TU motors"
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
    "image": "https://www.tu.biz/images/vane-motors.png",
    "name": "Motores hidráulicos de paletas",
    "description": "Motores Hidráulicos de paletas con desplazamiento fijo",
    "brand": {
      "@type": "Brand",
      "name": "TU motores"
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

export default VaneMotorScript;
