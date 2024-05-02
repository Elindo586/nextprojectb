import Script from "next/script";

const ProductDataStructure = () => (
  <Script
    id="product-metadata"
    strategy="afterInteractive"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: ``,
    }}
  />
);

export default ProductDataStructure;
