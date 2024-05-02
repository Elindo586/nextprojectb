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
      "@type": "TU",
      "name": "TU piston pump"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.tu.biz/products/piston-pumps",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",

      "shippingDetails": {
        "@type": "OfferShippingDetails",

        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 3,
            "unitCode": "DAY"
          }
        }
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
      "@type": "TU",
      "name": "TU piston pump"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.tu.biz/products/piston-pumps",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",

      "shippingDetails": {
        "@type": "OfferShippingDetails",

        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 3,
            "unitCode": "DAY"
          }
        }
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
      "@type": "TU",
      "name": "TU piston pump"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.tu.biz/products/piston-pumps",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",

      "shippingDetails": {
        "@type": "OfferShippingDetails",

        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 3,
            "unitCode": "DAY"
          }
        }
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
      "@type": "TU",
      "name": "TU piston pump"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.tu.biz/products/piston-pumps",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",

      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 3,
            "unitCode": "DAY"
          }
        }
      }
    }
  }
]

`,
    }}
  />
);

export default PistonPumpVariable;
