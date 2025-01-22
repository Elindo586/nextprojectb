import React from "react";
import Head from "next/head";

const FilterElements = () => {
  return (
    <div>
      <div>
        <Head>
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
          <title>TU - Technical Union | Filter Elements </title>
          <meta
            name="description"
            content="List of hydraulic filter element interchanges."
          />
          <meta name="keywords" content="filter, elements" />
          <meta name="author" content="Edgar Lindo" />

          {/* Open Graph tags */}

          <meta
            property="og:title"
            content="TU | Filter Element replacements"
            id="meta-og-title"
          />
          <meta
            property="og:description"
            content="List of hydraulic filter element interchanges."
            id="meta-og-desc"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/products/filter-elements"
            id="meta-og-url"
          />
          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />
          <meta
            name="image"
            property="og:image"
            content="https://www.tu.biz//oppictures/filter-elements.png/"
            id="meta-og-image"
          />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta name="twitter:title" content=" TU | Filter Elements " />

          <meta
            name="twitter:description"
            content="List of hydraulic filter element interchanges."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/oppictures/filter-elements.png/"
          />
        </Head>
      </div>
      <div className="container">
        <div className="row">
          <div className=" col filter-elements-first-col">
            We offer interchange elements with other popular hydraulic filter
            brands. Below you will find a list of different manufacturer&#39;s
            names. If you do not find the elements you are looking for you
            always{" "}
            <a href="https://www.tu.biz/contact-us" className="contact-us">
              contact us
            </a>{" "}
            for more details. <br /> <br />
            Some of the filter elements we interchange are: <br />
            <ul>
              <li>
                {" "}
                <a
                  href="https://www.tu.biz/products/filter-elements/pall"
                  className="filter-element"
                >
                  {" "}
                  Pall
                </a>
              </li>
              <li>
                <a
                  href="https://www.tu.biz/products/filter-elements/hydac"
                  className="filter-element"
                >
                  Hydac
                </a>
              </li>
              <li>
                <a
                  href="https://www.tu.biz/products/filter-elements/schroeder"
                  className="filter-element"
                  target="blank"
                >
                  Schroeder
                </a>
              </li>
            </ul>
            <br /> <br /> <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterElements;
