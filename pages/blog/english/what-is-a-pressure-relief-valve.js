import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish1 = ({ db }) => {
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
        .filter((item) => item.id === "1")
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
                    Understanding the Function and Benefits of Pressure
                    Compensated Relief Valves
                  </h4>
                  <p>
                    Pressure compensated relief valves are essential components
                    in fluid power hydraulic circuits, designed to protect
                    hydraulic systems from excessive pressure buildup while
                    maintaining consistent pressure levels. By understanding the
                    function and benefits of pressure compensated relief valves,
                    engineers and technicians can optimize system performance,
                    ensure safety, and prolong the life of hydraulic equipment.
                  </p>

                  <ul>
                    <li>
                      <strong>Function:</strong> Pressure compensated relief
                      valves are designed to limit the maximum pressure in a
                      hydraulic system by diverting excess fluid flow when
                      pressure exceeds a predetermined threshold. Unlike
                      standard relief valves, which maintain a constant pressure
                      setting regardless of system load, pressure compensated
                      relief valves adjust their pressure setting based on the
                      load pressure, ensuring consistent pressure levels in the
                      system.
                    </li>

                    <li>
                      <strong>Operation:</strong> Pressure compensated relief
                      valves operate by comparing the load pressure in the
                      hydraulic system to a reference pressure setpoint. When
                      the load pressure exceeds the setpoint, the relief valve
                      opens, allowing excess fluid flow to bypass the system and
                      return to the reservoir. As the load pressure decreases,
                      the relief valve closes, regulating pressure and
                      preventing overpressure conditions.
                    </li>

                    <li>
                      <strong>Benefits:</strong> Pressure compensated relief
                      valves offer several key benefits in hydraulic systems:
                      <ul>
                        <li>
                          Consistent Pressure Control: By adjusting their
                          pressure setting based on system load, pressure
                          compensated relief valves maintain consistent pressure
                          levels regardless of variations in operating
                          conditions.
                        </li>
                        <li>
                          Energy Efficiency: Pressure compensated relief valves
                          optimize system efficiency by reducing energy
                          consumption. By operating only when necessary to
                          maintain pressure, these valves minimize fluid bypass
                          and energy wastage.
                        </li>
                        <li>
                          System Protection: Pressure compensated relief valves
                          protect hydraulic equipment and components from damage
                          due to excessive pressure buildup, prolonging their
                          lifespan and reducing maintenance costs.
                        </li>
                        <li>
                          Enhanced Performance: By ensuring stable pressure
                          levels, pressure compensated relief valves improve
                          system performance, responsiveness, and
                          controllability, leading to smoother operation and
                          more precise control of hydraulic actuators and
                          motors.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>Applications:</strong> Pressure compensated relief
                      valves are commonly used in a wide range of hydraulic
                      systems and applications, including:
                      <ul>
                        <li>Construction Machinery</li>
                        <li>Material Handling Equipment</li>
                        <li>Agricultural Machinery</li>
                        <li>Industrial Automation</li>
                        <li>Mobile Equipment</li>
                        <li>Power Generation</li>
                      </ul>
                    </li>

                    <li>
                      <strong>Installation and Maintenance:</strong> Proper
                      installation and regular maintenance are essential for
                      ensuring the reliable operation of pressure compensated
                      relief valves. Follow manufacturer&#39;s guidelines for
                      installation, calibration, and adjustment to ensure
                      correct operation and performance. Perform routine
                      inspections and testing to verify valve functionality and
                      address any issues promptly.
                    </li>
                  </ul>

                  <p>
                    By incorporating pressure compensated relief valves into
                    hydraulic systems, engineers can enhance safety, efficiency,
                    and reliability, ensuring optimal performance and longevity
                    of hydraulic equipment in various industrial and mobile
                    applications.
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

export default PostEnglish1;
