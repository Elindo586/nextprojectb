import Script from "next/script";

const GerolerMotorScript = () => (
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
    "image": "https://www.tu.biz/images/geroloer-motors.png",
    "name": "Geroler Motors",
    "description": "High Torque, Low Speed Geroler Motors",
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
    "image": "https://www.tu.biz/images/geroloer-motors.png",
    "name": "Motores Geroler",
    "description": "Motores Geroler de alta torsión y baja velocidad",
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
  },
  {
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    "contentUrl": "https://www.tu.biz/images/geroloer-motors.png",
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

export default GerolerMotorScript;
