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

const LinearGuides = ({ pages }) => {
  useEffect(() => {
    function setHeight() {
      const screenWidth = window.innerWidth;
      const divHeight = screenWidth * 0.3;
      const theDiv = document.querySelector(".linear-guides-div");
      if (screenWidth <= 1000) {
        theDiv.style.height = `${divHeight}px`;
      } else {
        theDiv.style.height = `300px`;
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
          .filter((item) => item.id === "2")
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
                twitterDescription={item.metaDescription}
                twitterImage={item.twitterImage}
              />
            );
          })}
      </div>

      <div className="row">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12">
            <h6 className="product-title-text"> Linear Guides</h6>
            <div className="linear-guides-div">
              <Image
                fill={true}
                src="/images/mechanical/linear-guides.png"
                id="linear-guides"
                alt="Linear Guides"
                sizes="100vw"
                // width={551}
                // height={346}
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
                    Linear Bearings{" "}
                  </th>
                </tr>

                <tr className="inside-table-text">
                  <td>
                    {" "}
                    <b>Style</b>
                  </td>
                  <td>
                    {" "}
                    <b>Characteristics</b>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr className="inside-table-text">
                  <td>Linear Motion Bearing</td>
                  <td>
                    <ul>
                      <li>World Standard ball linear bearing.</li>
                      <li>4 direction equal load with 45° contact angel.</li>
                      <li>Error-absorb ability.</li>
                      <li>High rigidity and precision.</li>
                    </ul>
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>Wider Linear Motion</td>
                  <td>
                    <ul>
                      <li>4 direction equal load with 45° contact angel.</li>
                      <li>Low centered structure with wide short tail.</li>
                      <li>
                        Usable as one-axis where high rigidity is required.
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>Spacer Chain Bearing</td>
                  <td>
                    <ul>
                      <li>World Standard ball linear bearing.</li>
                      <li> 4 direction equal load with 45° contact angel.</li>
                      <li>Error-absorb ability.</li>
                      <li>Spacer ball based retainer type.</li>
                      <li>Low noise and low dust.</li>
                    </ul>
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>Miniature Bearing</td>
                  <td>
                    <ul>
                      <li>Miniature with high rigidity.</li>
                      <li>Wide range of shape and sizes.</li>
                      <li>Compact design.</li>
                      <li>High durability and reliability.</li>
                    </ul>
                  </td>
                </tr>

                <tr className="inside-table-text">
                  <td>Roller Linear Bearing</td>
                  <td>
                    <ul>
                      <li>Roller enable with rigid guide.</li>
                      <li>4 direction equal load with 45° contact angel.</li>
                      <li>Wide contact surface.</li>
                      <li>High loads.</li>
                      <li>High rigidity and precision.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />{" "}
            <div>
              <p>
                * We are able to interchange and provide replacements for most
                linear bearing brands available in the market.{" "}
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>

          <br />

          <div className="col-md12">{/* <MotorForm /> */}</div>
        </div>
        <div className="col-md-3">
          <ProductNav />
        </div>
      </div>
    </div>
  );
};

export default LinearGuides;
