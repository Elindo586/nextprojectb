import Script from "next/script";

const GearPumpScript = () => (
  <Script
    id="product-metadata"
    strategy="afterInteractive"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `[
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "inLanguage": "en",
    "image": "https://www.tu.biz/images/gear-pumps.png",
    "name": "Aluminum gear pumps",
    "description": "Single, Double, and Triple aluminum gear pumps",
    "brand": {
      "@type": "Brand",
      "name": "TU gear pumps"
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
    "image": "https://www.tu.biz/images/dump-pump.png",
    "name": "Dump pumps gear pumps",
    "description": "Series C101/C102 dump pumps gear pumps",
    "brand": {
      "@type": "Brand",
      "name": "TU gear pumps"
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
    "image": "https://www.tu.biz/images/gear-pumps.png",
    "name": "Bombas de engranajes de aluminio",
    "description": "Bombas simples, dobles y triples de engranajes de aluminio",
    "brand": {
      "@type": "Brand",
      "name": "TU gear pumps"
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
    "image": "https://www.tu.biz/images/dump-pump.png",
    "name": "Bomba de volteo | Bombas de engranajes",
    "description": "Bombas series C101/C102 de volteo | Bombas de engranajes",
    "brand": {
      "@type": "Brand",
      "name": "TU gear pumps"
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

export default GearPumpScript;
