import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish18 = ({ db }) => {
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
        .filter((item) => item.id === "18")
        .map((item) => {
          return (
            <VideoBlogger
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
                  <p>
                    {" "}
                    Join us in this video as we explore Hydraulic Check valves
                    in hydraulics.{" "}
                  </p>

                  <br />
                  <h4>Understanding Hydraulic Check Valves</h4>
                  <p>
                    Welcome to our educational video on hydraulic check valves!
                    In this segment, we&#39;ll delve into the workings of these
                    essential components and explore their significance in
                    hydraulic systems. Whether you&#39;re a novice or an
                    experienced engineer, understanding how hydraulic check
                    valves operate is fundamental to grasping the intricacies of
                    fluid power systems.
                  </p>

                  <h4>What are Hydraulic Check Valves?</h4>
                  <p>
                    Hydraulic check valves, also known as non-return valves or
                    one-way valves, are mechanical devices that permit fluid
                    flow in one direction while preventing reverse flow. They
                    serve a critical function in hydraulic circuits by
                    maintaining system pressure, preventing fluid backflow, and
                    safeguarding components from damage.
                  </p>

                  <h4>How Do Hydraulic Check Valves Work?</h4>
                  <p>
                    At its core, a hydraulic check valve consists of a valve
                    body, a spring-loaded poppet, and an inlet and outlet port.
                    When fluid pressure at the inlet exceeds that at the outlet,
                    the poppet is pushed against the valve seat, allowing fluid
                    to flow through the valve unimpeded. However, when the
                    pressure at the outlet exceeds that at the inlet, the poppet
                    is forced against the seat, blocking reverse flow and
                    maintaining system integrity.
                  </p>

                  <h4>Key Features and Benefits</h4>
                  <ul>
                    <li>
                      Prevent Fluid Backflow: Hydraulic check valves ensure
                      unidirectional flow, preventing fluid from reversing
                      direction and causing system malfunction.
                    </li>
                    <li>
                      Protect System Components: By maintaining pressure and
                      preventing backflow, check valves protect pumps,
                      actuators, and other components from damage and premature
                      wear.
                    </li>
                    <li>
                      Enhance System Efficiency: Check valves minimize pressure
                      drops and ensure efficient operation of hydraulic systems,
                      optimizing performance and productivity.
                    </li>
                    <li>
                      Simple and Reliable Design: With a straightforward
                      construction and minimal moving parts, hydraulic check
                      valves offer reliability and longevity in demanding
                      applications.
                    </li>
                  </ul>

                  <h4>Applications of Hydraulic Check Valves</h4>
                  <p>
                    Hydraulic check valves find widespread use across various
                    industries and applications, including:
                  </p>
                  <ul>
                    <li>Hydraulic power units</li>
                    <li>Hydraulic presses</li>
                    <li>Mobile equipment</li>
                    <li>Agricultural machinery</li>
                    <li>Industrial automation</li>
                  </ul>

                  <h4>Conclusion</h4>
                  <p>
                    Hydraulic check valves are indispensable components in fluid
                    power systems, ensuring reliable and efficient operation by
                    controlling fluid flow and preventing backflow. By
                    understanding their function and importance, you can better
                    appreciate the critical role they play in maintaining system
                    integrity and performance. Stay tuned for more insights and
                    educational content on hydraulic systems!
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

export default PostEnglish18;
