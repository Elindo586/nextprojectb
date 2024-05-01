import Script from "next/script";

const ProductDataStructure = () => (
  <Script
    id="product-metadata"
    strategy="afterInteractive"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `{
      "@context": "https://schema.org/",
      "@type": "Product",
      "sku": "trinket-12345",
      "gtin14": "12345678901234",
      "image": [
        "https://example.com/photos/16x9/trinket.jpg",
        "https://example.com/photos/4x3/trinket.jpg",
        "https://example.com/photos/1x1/trinket.jpg"
      ],
      "name": "Nice trinket",
      "description": "Trinket with clean lines",
      "brand": {
        "@type": "Brand",
        "name": "MyBrand"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.example.com/trinket_offer",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "price": 39.99,
        "priceCurrency": "USD",
        "priceValidUntil": "2024-11-20",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": 3.49,
            "currency": "USD"
          },
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
              "maxValue": 5,
              "unitCode": "DAY"
            }
          }
        }
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
            "name": "Fred Benson"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.4,
          "reviewCount": 89
        }
      }`,
    }}
  />
);

export default ProductDataStructure;
