import Script from "next/script";

const PistonPumpVariable = () => (
  <Script
    id="piston-pump-variable-metadata"
    strategy="afterInteractive"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `[
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "inLanguage": "en",
    "image": "https://www.tu.biz/images/rexrothpump-1.png",
    "name": "Variable displacement Piston Pump",
    "description": "A10V series variable displacement piston pump",
    "brand": {
      "@type": "Brand",
      "name": "TU piston pump"
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
    "@type": "Product",
    "inLanguage": "en",
    "image": "https://www.tu.biz//images/radial-piston-pump.png",
    "name": "Radial Piston Pump",
    "description": "High pressure radial piston pumps",
    "brand": {
      "@type": "Brand",
      "name": "TU piston pump"
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
    "@type": "Product",
    "inLanguage": "es",
    "image": "https://www.tu.biz/images/rexrothpump-1.png",
    "name": "Bomba de pistones de desplazamiento variable",
    "description": "Bomba de pistones de desplazamiento variable de la serie A10V",
    "brand": {
      "@type": "Brand",
      "name": "TU piston pump"
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
    "@type": "Product",
    "inLanguage": "es",
    "image": "https://www.tu.biz//images/radial-piston-pump.png",
    "name": "Bomba hidráulica de pistones radiales",
    "description": "Bomba hidráulica de pistones radiales de alta presión",
    "brand": {
      "@type": "Brand",
      "name": "TU piston pump"
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
    "contentUrl": "https://www.tu.biz/images/rexrothpump-1.png",
    "acquireLicensePage": "https://www.tu.biz/products/piston-pumps",
    "creator": {
      "@type": "Person",
      "name": "Edgar Lindo"
    }
  },
  {
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    "contentUrl": "https://www.tu.biz//images/radial-piston-pump.png",
    "acquireLicensePage": "https://www.tu.biz/products/piston-pumps",
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

export default PistonPumpVariable;
