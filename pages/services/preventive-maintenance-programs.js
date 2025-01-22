import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import ServicesNav from "../../components/nav-services";

const Preventive = () => {
  useEffect(() => {
    function setHeight() {
      const screenWidth = window.innerWidth;
      const divHeight = screenWidth * 0.4;
      const theDiv = document.querySelector(".maintenance-2-span");
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
          <title>TU - Technical Union | Preventive Maintenance Programs</title>

          <meta
            name="description"
            content=" It is important to keep the hydraulic oil clean, cool, and dry. Check out our preventive maintenance programs.  "
          />
          <meta
            name="keywords"
            content=" TU, preventive, maintenance, industrial, machine, maintenance "
          />
          <meta name="author" content="Edgar Lindo" />

          {/* OG tags */}

          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />

          <meta
            property="og:title"
            content=" TU | Preventive Maintenance Programs"
          />
          <meta
            property="og:description"
            content="Preventive maintenance programs to keep your machinery running in optimal condition. Oil analysis, filtration, proper cooling, among other products and services. "
          />
          <meta
            property="og:image"
            content="https://www.tu.biz//oppictures/maintenance-programs.png"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz/services/preventive-maintenance-programs"
          />
          {/* Twitter tags */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta
            name="twitter:title"
            content=" Technical Union | Preventive maintenance programs"
          />

          <meta
            name="twitter:description"
            content="Find preventive maintenance programs from TU to keep your machine running in optimal condition, less downtime and higher overall productivity."
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/oppictures/maintenance-programs.png"
          />
        </Head>
      </div>
      <div className="row">
        <div className="col-md-9">
          <div className="maintenance-2-span row ">
            <Image
              fill={true}
              id="maintenance-2"
              src="/images/maintenance-2.png"
              alt=" Preventive Maintenance Programs"
              sizes="50vw"
              // width={700}
              // height={400}
            />
          </div>
          <div className="row">
            <p className="preventive-maintenance-text">
              In order to obtain the most productivity out of your machinery, it
              is important to follow proper preventive maintenance practices to
              keep your machinery working in optimum conditions.
              <br /> <br />
              Keeping your hydraulic oil working clean, cool, and dry will
              extend the life and efficiency of your hydraulic components to
              provide a better machine performance at lower maintenance cost.{" "}
              <br /> <br />
              We work with machine builders and End Users on engineering and
              sizing of proper machine components such as oil and air filtration
              units, heat exchangers, water and humidity control solutions to
              maintain complete control of your fluids working conditions and
              obtain higher productivity with a lower maintenance cost.
            </p>
          </div>
          <br /> <br />
        </div>
        <div className="col-md-3">
          <ServicesNav />
        </div>
      </div>
    </div>
  );
};

export default Preventive;
