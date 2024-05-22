import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import ServicesNav from "../../components/nav-services";
import Script from "next/script";

const Laboratory = () => {
  useEffect(() => {
    function setHeight() {
      const screenWidth = window.innerWidth;
      const divHeight = screenWidth * 0.4;
      const theDiv = document.querySelector(".oil-analysis-span");
      if (screenWidth <= 1000) {
        theDiv.style.height = `${divHeight}px`;
      } else {
        theDiv.style.height = `400px`;
      }
    }

    // Call setHeight initially
    setHeight();

    // Add a listener to resize event
    window.addEventListener("resize", setHeight);

    // Cleanup function to remove the resize event listener
    return () => {
      window.removeEventListener("resize", setHeight);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      <div>
        <Head>
          <meta charSet="UTF-8" />
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

          <title> TU | Services. </title>

          <meta
            name="description"
            content=" TU services includes oil analysis, preventive maintenance programs, purchasing department, etc.  "
          />
          <meta
            name="keywords"
            content=" TU, industrial services, purchasing, oil, analysis"
          />
          <meta name="author" content="Edgar Lindo" />

          {/* OG tags */}

          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU-Technical Union" />

          <meta
            property="og:title"
            content=" Technical Union | Tribology Services"
          />
          <meta
            property="og:description"
            content="We provide tribology fluid analysis. Quick turn around of analysis samples for your convenience."
          />
          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/tribology.png"
          />
          <meta property="og:url" content="https://www.tu.biz/services" />

          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta name="twitter:title" content=" TU | Fluid Analysis" />

          <meta
            name="twitter:description"
            content="Find industrial fluid analysis from TU. Quick turn around of analysis samples for your convenience."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/oppictures/tribology.png"
          />
        </Head>
      </div>
      <Script
        id="fluid analysis"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Fluid Analysis",
    "description": "TU provides a full range of oil analysis services to monitor your fluids working conditions. As a pro-active maintenance practice, oil analysis is crucial to detect problems within your machinery before a problem becomes bigger and more expensive issue to deal in your plant.",

    "url": "https://www.tu.biz/fluid-analysis",
    "inLanguage": "en",
    "author": {
      "@type": "Person",
      "name": "Edgar Lindo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TU",
      "url": "https://www.tu.biz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tu.biz/images/tu-favicon.png"
      }
    }
  }`,
        }}
      />

      <div className="row">
        <div className="col-md-9">
          <div className=" row oil-analysis-span">
            <Image
              fill={true}
              id="oil-analysis2"
              src="/images/oil-analysis2.png"
              alt="oil-analysis"
              sizes="100vw"
              // width={700}
              // height={400}
            />
          </div>
          <div className="row">
            <p className="oil-analysis-text">
              As a pro-active maintenance practice, oil analysis is crucial to
              detect problems within your machinery before a problem becomes
              bigger and more expensive issue to deal in your plant. <br />{" "}
              <br />
              By knowing and monitoring the type of contamination and / or
              actual working conditions of your fluids, it is possible to pin
              point the source of possible problems and take proper actions to
              correct an unwanted situation before it becomes a costly
              production issue. <br /> <br />
              We provide a full range of oil analysis services to monitor your
              fluids working conditions.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>Analytical Ferrography </li>
                <li>Boiling Point</li>
                <li>Chip Analysis</li>
                <li>Cloud Point</li>
                <li>Color, Odor, Clarity, Precipitate, Foam (Coolant)</li>
                <li>Color, Odor, Clarity, Precipitate, Foam (Oil & Fuel)</li>
                <li>Conductivity of Coolant</li>
                <li>Coolant</li>
                <li>Copper Corrosion</li>
                <li>Crackle Test</li>
                <li>Density (Fuel or Coolant)</li>
                <li>Diesel exhaust fluid</li>
                <li>Direct Reading</li>
                <li>Distillation (Fuel)</li>
                <li>Distillation (Oil)</li>
                <li>Dropping Point of Lubricating Grease</li>
                <li>Fire Point Open Cup</li>
                <li>Flash Point Open Cup</li>
                <li>Flash Point Pensky-Martens Closed Cup</li>
                <li>Fourier Transform Infrared Analysis</li>
                <li>Fourier Transform Infrared Analysis</li>
                <li>Freezing Point </li>
                <li>Fuel Cetane Index</li>
                <li>Fuel Dilution </li>
                <li>Gas Chromatography Analysis (Biofuel)</li>
                <li>Gas Chromatography Analysis (Fuel)</li>
                <li>Gas Chromatography Analysis (Glycol) </li>
                <li>Glycol Percentage (Coolant)</li>
              </ul>
            </div>

            <div className="col-md-6">
              <ul>
                <li>Glycol Test (Oil)</li>
                <li>Gravimetric Analysis </li>
                <li>Grease</li>
                <li>ICP Spectrometric Analysis</li>
                <li>ICP Spectrometric Analysis (Coolant)</li>
                <li>ICP Spectrometric Analysis (Fuel)</li>
                <li>ICP Spectrometric Analysis (Grease)</li>
                <li>ICP Spectrometric Analysis (Turboprops)</li>
                <li>Ion Chromatography</li>
                <li>Karl Fischer Water Test</li>
                <li>Particle Counting </li>
                <li>Particle Counting (Fuel)</li>
                <li>Particle Quantifier Index</li>
                <li>Patch Test</li>
                <li>Pentane Insoluble</li>
                <li>pH Measurement </li>
                <li>Pour Point</li>
                <li>Quantitative Spectrophotometric Analysis</li>
                <li>RULER® </li>
                <li>Seta Flash Point Closed-Cup</li>
                <li>Sulphated Ash</li>
                <li>Total Acid Number</li>
                <li>Total Base Number</li>
                <li>Total Dissolved Solids</li>
                <li>Varnish</li>
                <li>Viscosity 100° C</li>
                <li>Viscosity 40° C</li>
                <li>Viscosity Index</li>
                <li>Water and Sediments</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <ServicesNav />
        </div>
      </div>
    </div>
  );
};

export default Laboratory;
