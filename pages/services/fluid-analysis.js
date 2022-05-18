import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ServicesNav from "../components/nav-services";

const Laboratory = () => {
  return (
    <div>
      <div>
        <Head>
          <title> TU - Technical Union | Services </title>

          <meta
            name="description"
            content=" Technical Union services includes oil analysis, preventive maintenance programs, purchasing department, etc.  "
          />
          <meta
            name="keywords"
            content=" industrial services, purchasing, oil, analysis"
          />
          <meta name="author" content="Edgar Lindo" />

          <meta
            property="og:title"
            content=" Technical Union | Tribology Services"
          />
          <meta
            property="og:description"
            content="We provide tribology fluid analysis."
          />
          <meta
            property="og:image"
            content="./Images/oppictures/tribology.png"
          />
          <meta property="og:url" content="http://www.tu.biz/Services" />
        </Head>
      </div>
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12">
              <div>
                <span className="oil-analysis2">
                  <Image
                    src="/images/oil-analysis2.png"
                    alt="oil-analysis"
                    width={700}
                    height={400}
                  />
                </span>
              </div>
              <div>
                <span className="oil-analysis-text">
                  <p>
                    As a pro-active maintenance practice, oil analysis is
                    crucial to detect problems within your machinery before a
                    problem becomes bigger and more expensive issue to deal in
                    your plant. <br /> <br />
                    By knowing and monitoring the type of contamination and / or
                    actual working conditions of your fluids, it is possible to
                    pin point the source of possible problems and take proper
                    actions to correct an unwanted situation before it becomes a
                    costly production issue. <br /> <br />
                    We provide a full range of oil analysis services to monitor
                    your fluids working conditions.
                  </p>
                </span>
              </div>

              <br />
            </div>
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
