import Script from "next/script";

const VanePump = () => (
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
    "image": "https://www.tu.biz/images/single-vane-pumps.png",
    "name": "Fixed displacement single vane pump",
    "description": "V10 series fixed displacement single vane pump",
    "brand": {
      "@type": "Brand",
      "name": "TU vane pump"
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
    "image": "https://www.tu.biz/images/vq-vho-vane-pumps.png",
    "name": "Double and Triple Vane Pump",
    "description": "VQ, VHO series double and triple vane pump",
    "brand": {
      "@type": "Brand",
      "name": "TU vane pumps"
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
    "inLanguage": "en",
    "image": "https://www.tu.biz/images/variable-displacement-vane-pump.png",
    "name": "Variable displacement vane pump",
    "description": "Series SV-10, SV-15, variable displacement vane pump",
    "brand": {
      "@type": "Brand",
      "name": "TU vane pumps"
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
    "image": "https://www.tu.biz/images/single-vane-pumps.png",
    "name": "Bomba simple de paletas de desplazamiento fijo",
    "description": "Bomba serie V10 de paletas de desplazamiento fijo",
    "brand": {
      "@type": "Brand",
      "name": "TU vane pumps"
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
    "image": "https://www.tu.biz/images/vq-vho-vane-pumps.png",
    "name": "Bomba de paletas doble y triple",
    "description": "Bomba de paletas doble y triple de las series VQ, VHO",
    "brand": {
      "@type": "Brand",
      "name": "TU vane pumps"
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
    "image": "https://www.tu.biz/images/variable-displacement-vane-pump.png",
    "name": "Bomba de paletas variable",
    "description": "Bomba series SV-10, SV-15 de paletas de desplazamiento variable",
    "brand": {
      "@type": "Brand",
      "name": "TU vane pumps"
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

export default VanePump;
