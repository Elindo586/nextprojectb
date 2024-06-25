import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Carousel from "../components/carousel";

const Home = () => {
  useEffect(() => {
    function setHeight() {
      const screenWidth = window.innerWidth;
      const divHeight = screenWidth * 0.3;
      const theDiv1 = document.querySelector(".index-img1");
      const theDiv2 = document.querySelector(".index-img2");
      if (screenWidth <= 1000) {
        theDiv1.style.height = `${divHeight}px`;
        theDiv2.style.height = `${divHeight}px`;
      } else {
        theDiv1.style.height = `350px`;
        theDiv2.style.height = `350px`;
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
    <div lang="en">
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
          <title>TU </title>
          <meta
            name="description"
            content="Single source for industrial supplies. Hydraulics, Pneumatics, Electrical, Mechanical."
            id="meta-desc"
          />
          <meta
            name="keywords"
            content="tu, pumps, motors, valves, servo motors, servo valves, filters, accumulators, heat exchangers, industrial supplies."
            id="meta-keywords"
          />
          <meta name="author" content="Edgar Lindo" />

          {/* OG tags */}

          <meta property="og:locale" content="en" />
          <meta property="site_name" content="TU" />

          <meta property="og:title" content=" TU" id="meta-og-title" />
          <meta
            property="og:description"
            content="Industrial Supplies | Exports from USA | Hydraulics, Electrical, Mechanical, and more. Everything you need for your industrial machinery you can find it with us. "
            id="meta-og-desc"
          />
          <meta
            name="image"
            property="og:image"
            content="https://www.tu.biz//oppictures/Tubiz-contact.png"
            id="meta-og-image"
          />
          <meta
            property="og:url"
            content="https://www.tu.biz"
            id="meta-og-url"
          />
          {/* Twitter card */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@MrEdgarLindo" />

          <meta name="twitter:title" content=" TU  " />

          <meta
            name="twitter:description"
            content="Industrial exporter from USA for hydraulics, pneumatics, electrical and mechanical components.  Everything you need to keep your industrial machinery running you can find it for exports from us. "
          />
          <meta
            name="twitter:image"
            content="https://www.tu.biz/oppictures/Tubiz-contact.png"
          />
        </Head>
      </div>

      <Carousel />

      <div className="row">
        <div className="col-md-6 index-padding" lang="en">
          <p className="maintext">
            <strong> TU </strong> is your single source for industrial
            components in the areas of hydraulics, pneumatics, electrical, and
            mechanical products. All around the world, whenever you are working
            on a new project or an existing industrial system, you need proven
            technical solutions to give you a competitive edge for improved
            machine design, better production time, and optimal machine
            maintenance to maximize your company’s capital investment.
          </p>
          <p className="maintext" lang="en">
            <strong>TU </strong> offers cost-effective technical industrial
            solutions that you can trust to help you increase efficient
            productivity, compact system design, and usage control of spare
            components for your industrial machinery.
          </p>
          <h4 className="listtittle">
            <strong>Our Advantages</strong>
          </h4>
          <div className="listitems">
            <ul>
              <li>Engineered systems.</li>
              <li>Hydraulic retrofits.</li>
              <li>Spare parts supply.</li>
              <li>Hydraulic components remanufacture.</li>
              <li>Alternative new components to replace main brand names.</li>
              <li>Competitive market prices.</li>
              <li>Preventive maintenance programs.</li>
              <li>Technical Experience.</li>
              <li>Superior quality.</li>
              <li>Fast responds.</li>
              <li>Large inventory.</li>
              <li>Quick delivery.</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6" lang="en">
          <div className=" index-img1 row ">
            <Image
              fill={true}
              src="/images/maintenance-1.png"
              id="maintenance1"
              alt="maintenance lubrication"
              sizes="100vw"
              // width={700}
              // height={400}
            />
          </div>
          <div className="index-img2 row ">
            <Image
              fill={true}
              src="/images/oil-analysis2.png"
              id="oilanalysis2"
              alt="oil analysis sample"
              sizes="100vw"
              // width={700}
              // height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
