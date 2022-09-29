import React from "react";
import Image from "next/image";
import Head from "next/head";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
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
            content="pumps, motors, valves, servo motors, servo valves, filters, accumulators, heat exchangers, industrial supplies."
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

      <div className="row tu-world">
        <Carousel>
          <Carousel.Item className="carousel-item active">
            <Image
              className="d-block w-100"
              src="/carousel-main/tu-world.png"
              alt="tu world"
              width={1710}
              height={315}
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Image
              className="d-block w-100"
              src="/carousel-main/carousel-pumps.png"
              alt="hydraulic pumps"
              width={1710}
              height={315}
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Image
              className="d-block w-100"
              src="/carousel-main/carousel-hydraulic-motors.png"
              alt="hydraulic pumps"
              width={1710}
              height={315}
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Image
              className="d-block w-100"
              src="/carousel-main/carousel-valves-manifolds.png"
              alt="hydraulic pumps"
              width={1710}
              height={315}
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item ">
            <Image
              className="d-block w-100"
              src="/carousel-main/carousel-everything.png"
              alt="everything industrial"
              width={1710}
              height={315}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="row">
        <div className="row" lang="en"></div>
        <div className="col-md-6" lang="en">
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
          <div id="maintenance1">
            <Image
              src="/images/maintenance-1.png"
              id="maintenance1"
              alt="maintenance lubrication"
              width={700}
              height={400}
            />
          </div>
          <div id="oilanalysis2">
            <Image
              src="/images/oil-analysis2.png"
              alt="oil analysis sample"
              width={700}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
