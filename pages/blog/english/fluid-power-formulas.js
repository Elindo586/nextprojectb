import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish10 = ({ db }) => {
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
        .filter((item) => item.id === "10")
        .map((item) => {
          return (
            <Blogger2
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
                    Unlocking the Power of Fluid Power Formulas: An Interactive
                    Experience
                  </h4>
                  <p>
                    Fluid power systems harness the energy of pressurized fluids
                    to perform a wide range of tasks in industries ranging from
                    manufacturing to construction. Understanding the fundamental
                    formulas governing fluid power is crucial for designing
                    efficient and reliable hydraulic and pneumatic systems. If
                    you&#39;re looking to delve into the world of fluid power
                    formulas, look no further than an interactive webpage
                    designed to simplify the process.
                  </p>

                  <ul>
                    <li>
                      <strong>Force:</strong> The force exerted by a fluid on a
                      surface is a fundamental concept in fluid power. Whether
                      you&#39;re calculating the force required to move a
                      hydraulic cylinder or the force exerted by a pneumatic
                      actuator, the formula Force = Pressure × Area is
                      indispensable.
                    </li>

                    <li>
                      <strong>Pressure:</strong> Pressure is the driving force
                      behind fluid power systems, and understanding how to
                      calculate it is essential. The formula Pressure = Force /
                      Area allows you to determine the pressure exerted by a
                      fluid on a given surface area, aiding in component
                      selection and system design.
                    </li>

                    <li>
                      <strong>Area:</strong> The surface area in contact with
                      fluid plays a significant role in fluid power
                      calculations. Whether you&#39;re sizing hydraulic
                      cylinders or determining the area of a piston, the formula
                      Area = Force / Pressure provides the necessary insight.
                    </li>

                    <li>
                      <strong>Torque:</strong> Torque is critical for rotational
                      motion in hydraulic systems, and calculating it accurately
                      is essential. Whether you&#39;re sizing a hydraulic motor
                      or determining the torque required to tighten a fitting,
                      the formula Torque = Force × Distance proves invaluable.
                    </li>

                    <li>
                      <strong>Horsepower (HP):</strong> Horsepower is a measure
                      of power output and is crucial for assessing the
                      performance of hydraulic pumps and motors. The formula HP
                      = (Flow × Pressure) / 1714 allows you to quantify power
                      output based on flow rate and pressure, aiding in system
                      optimization.
                    </li>

                    <li>
                      <strong>Speed:</strong> Fluid speed is a key parameter in
                      fluid power systems, impacting performance and efficiency.
                      Whether you&#39;re evaluating the flow rate of a hydraulic
                      pump or the speed of a pneumatic actuator, the formula
                      Speed = Flow / Area provides the necessary insights.
                    </li>
                  </ul>

                  <p>
                    An interactive webpage dedicated to fluid power formulas
                    offers users a convenient platform to input specific values
                    and instantly calculate results for various fluid power
                    calculations. With features such as real-time updates and
                    user-friendly interfaces, these webpages streamline the
                    process of working with fluid power formulas, empowering
                    engineers, technicians, and enthusiasts alike.
                  </p>

                  <p>
                    Ready to explore the power of fluid power formulas? Visit{" "}
                    <a href="https://www.tu.biz/fluid-power-formulas">
                      https://www.tu.biz/fluid-power-formulas
                    </a>{" "}
                    to access the interactive webpage and start mastering fluid
                    power calculations today.
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

export default PostEnglish10;
