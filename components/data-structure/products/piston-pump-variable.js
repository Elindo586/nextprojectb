import Script from "next/script";

const PistonPumpVariable = () => (
  <Script
    id="piston-pump-variable-metadata"
    strategy="afterInteractive"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `{
    "@context": "https://schema.org/",
    "@type": "Product",

    "image": "https://www.tu.biz/images/rexrothpump-1.png",
    "name": "Piston Pump",
    "description": "Variable displacement Piston Pump",
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

        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        },
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
      `,
    }}
  />
);

export default PistonPumpVariable;
