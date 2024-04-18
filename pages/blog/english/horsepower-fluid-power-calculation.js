import React from "react";
// import { useEffect } from "react";
import VideoVideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish3 = ({ db }) => {
  // This is another way to do it if I dont do filter below
  // function post(info) {
  //   return (
  //     info.id === "5",
  //     info.item,
  //     info.metaTitle,
  //     info.metaDescription,
  //     info.metaKeywords,
  //     info.ogTitle,
  //     info.ogDescription,
  //     info.ogURL,
  //     info.ogImage,
  //     info.twitterTitle,
  //     info.twitterDescription,
  //     info.twitterImage,
  //     info.title,
  //     info.body,
  //     info.description,
  //     info.previous,
  //     info.next
  //   );
  // }

  // const item = db.find(post);

  return (
    <div>
      {db
        .filter((item) => item.id === "3")
        .map((item) => {
          return (
            <VideoVideoBlogger
              key={item.id}
              metaTitle={item.metaTitle}
              metaDescription={item.metaDescription}
              metaKeywords={item.metaKeywords}
              ogTitle={item.ogTitle}
              ogDescription={item.ogDescription}
              ogURL={item.ogURL}
              ogImage={item.ogImage}
              twitterTitle={item.twitterTitle}
              twitterDescription={item.twitterDescription}
              twitterImage={item.twitterImage}
              title={item.title}
              body={item.body}
              iTitle={item.iTitle}
              description={
                <div>
                  <br />
                  <h4>
                    Mastering Hydraulic Horsepower Calculation: A Comprehensive
                    Guide
                  </h4>
                  <p>
                    Hydraulic horsepower (HP) is a crucial parameter in fluid
                    power systems, representing the power output of hydraulic
                    pumps and motors. Understanding how to calculate hydraulic
                    horsepower is essential for designing, analyzing, and
                    optimizing hydraulic systems for various industrial
                    applications. In this article, we&#39;ll explore the
                    fundamentals of hydraulic horsepower calculation and the
                    simple formula used to determine horsepower output.
                  </p>

                  <ul>
                    <li>
                      <strong>Hydraulic Horsepower Formula:</strong> The
                      hydraulic horsepower generated by a hydraulic system can
                      be calculated using the formula: Hydraulic HP = (Flow
                      Rate, gpm × Pressure, psi) / 1714. This formula relates
                      the flow rate of hydraulic fluid (measured in gallons per
                      minute, gpm) to the pressure (measured in pounds per
                      square inch, psi) and converts the result to horsepower
                      using a conversion factor of 1714.
                    </li>

                    <li>
                      <strong>Flow Rate:</strong> The flow rate of hydraulic
                      fluid represents the volume of fluid delivered by the
                      hydraulic pump or motor per unit of time. It is typically
                      measured in gallons per minute (gpm) or liters per minute
                      (lpm) and is a key parameter in hydraulic system
                      performance. Flow rate directly influences the amount of
                      work that can be done by hydraulic equipment and plays a
                      crucial role in calculating hydraulic horsepower.
                    </li>

                    <li>
                      <strong>Pressure:</strong> Pressure in a hydraulic system
                      represents the force exerted by the hydraulic fluid on the
                      walls of the system components, such as hoses, pipes,
                      valves, and actuators. It is measured in pounds per square
                      inch (psi) or bar and is a measure of the intensity of
                      force applied to the hydraulic fluid. Pressure is a
                      critical factor in determining the power output of
                      hydraulic pumps and motors and is essential for hydraulic
                      horsepower calculation.
                    </li>

                    <li>
                      <strong>Conversion Factor:</strong> The conversion factor
                      of 1714 is used to convert the product of flow rate and
                      pressure into horsepower units. This conversion factor
                      accounts for the relationship between power (in
                      horsepower) and the units of flow rate (gpm) and pressure
                      (psi) commonly used in hydraulic systems. By dividing the
                      product of flow rate and pressure by 1714, the formula
                      yields the hydraulic horsepower output of the system.
                    </li>

                    <li>
                      <strong>Application Considerations:</strong> Hydraulic
                      horsepower calculation is essential for various
                      applications across industries such as construction,
                      manufacturing, agriculture, and transportation. Engineers,
                      designers, and operators use hydraulic horsepower values
                      to assess system performance, select appropriate hydraulic
                      components, and ensure that hydraulic systems can meet the
                      power requirements of specific tasks efficiently and
                      reliably.
                    </li>
                  </ul>

                  <p>
                    Mastering hydraulic horsepower calculation empowers
                    engineers and technicians to design and optimize hydraulic
                    systems that deliver optimal performance and efficiency. By
                    understanding the fundamentals of hydraulic horsepower and
                    applying the calculation formula effectively, professionals
                    can enhance system design, improve energy efficiency, and
                    maximize productivity in hydraulic applications.
                  </p>
                </div>
              }
              previous={item.previous}
              next={item.next}
            />
          );
        })}
    </div>
  );
};

export default PostEnglish3;
