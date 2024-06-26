import React from "react";
import { useEffect } from "react";
import Image from "next/image";

import pages from "../../../utils/meta-data/english-pages/pages.json";
import PageMetaDataEnglish from "../../../components/meta-data/pages-english";
import ProductNav from "../../../components/nav-products";
import ContactForm from "../../../components/contact-form";

// import ProductNav from "../../components/nav-products";
// import GerolerMotorScript from "../../components/data-structure/products/motor-geroler-script";

export async function getStaticProps() {
  return {
    props: { pages },
  };
}

const BallScrews = ({ pages }) => {
  useEffect(() => {
    function setHeight() {
      const screenWidth = window.innerWidth;
      const divHeight = screenWidth * 0.3;
      const theDiv = document.querySelector(".ball-screws-div");
      if (screenWidth <= 1000) {
        theDiv.style.height = `${divHeight}px`;
      } else {
        theDiv.style.height = `339px`;
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
      <div className="row">
        {pages
          .filter((item) => item.id === "1")
          .map((item) => {
            return (
              <PageMetaDataEnglish
                key={item.id}
                metaTitle={item.metaTitle}
                metaDescription={item.metaDescription}
                metaKeywords={item.metaKeywords}
                ogTitle={item.metaTitle}
                ogDescription={item.metaDescription}
                ogImage={item.ogImage}
                ogURL={item.ogURL}
                twitterTitle={item.metaTitle}
                twitterDescription={item.itemMetaDescription}
                twitterImage={item.twitterImage}
              />
            );
          })}
      </div>

      <div className="row">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12">
            <h6 className="product-title-text"> Ball Screws</h6>
            <div className="ball-screws-div">
              <Image
                fill={true}
                src="/images/mechanical/ball-screws.png"
                id="ball-screws"
                alt="ball screws"
                sizes="100vw"
                // width={586}
                // height={339}
                priority={true}
              />
            </div>

            {/* <Link
              legacyBehavior
              href="/pdf/hi-torque-low-speed-hydraulic-motors.pdf"
            >
              <a
                className="btn btn-info d-flex justify-content-center"
                target="blank"
              >
                Download PDF
              </a>
            </Link> */}
            <br />
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th colSpan="2" className="product-title-table-text">
                    Ball Screws{" "}
                  </th>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    <b>Characteristics</b>
                  </td>
                  <td>
                    <b>Benefits</b>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr className="inside-table-text">
                  <td>Easy to transport</td>
                  <td>
                    Reduced friction to rolling motion by balls and enables
                    accurate fine feed.
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>Long Life</td>
                  <td>
                    Long rolling operation because the ball performs rolling
                    motion.
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>Simple Lubrication</td>
                  <td>
                    Due to constant rolling motion, lubrication is possible in
                    small quantities and can be supplemented with grease or
                    lubricant.
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <div>
              <p>
                We offer a wide range of ball screws for your industrial needs.
                Our ball screws are designed to provide high precision and
                efficiency in your applications.
              </p>
              <br />
              <p>
                Our ball screws can be interchanged with other brands and can
                meet your specific requirements.
              </p>
              <br />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>

          <div className="col-md12">{/* <MotorForm /> */}</div>
        </div>
        <div className="col-md-3">
          <ProductNav />
        </div>
      </div>
    </div>
  );
};

export default BallScrews;
