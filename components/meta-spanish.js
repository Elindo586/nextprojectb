import React from "react";
import Link from "next/link";

function MetaSpanish(props) {
  return (
    <div>
      {/* Main */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="/images/tu-favicon.png"
      />

      <meta
        name="facebook-domain-verification"
        content="fzctnjbrtlybvytmamk8glkng9af7p"
      />
      <title>TU</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="author" content="Edgar Lindo" />

      {/* Open Graph */}

      <meta property="og:title" content=" " id="meta-og-title" />
      <meta property="og:description" content="" id="meta-og-desc" />
      <meta property="og:url" content="https://www.tu.biz" id="meta-og-url" />
      <meta property="og:locale" content="es" />
      <meta property="site_name" content="TU" />
      <meta
        name="image"
        property="og:image"
        content="https://www.tu.biz//blog-images-spanish"
        id="meta-og-image"
      />

      {/* Twitter card */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@MrEdgarLindo" />

      <meta name="twitter:title" content=" " />

      <meta name="twitter:description" content="" />
      <meta
        name="twitter:image"
        content="https://www.tu.biz/blog-images-spanish/"
      />
    </div>
  );
}

export default MetaSpanish;
