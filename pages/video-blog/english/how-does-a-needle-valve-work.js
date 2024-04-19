import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish53 = ({ db }) => {
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
        .filter((item) => item.id === "53")
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
                  <article>
                    <h4>
                      Understanding How a Hydraulic Needle Valve Works:
                      Exploring Flow Control
                    </h4>
                    <p>
                      Welcome to our in-depth guide on how a hydraulic needle
                      valve operates! In this video, we&#39;ll delve into the
                      mechanics of a needle valve, explaining how it opens and
                      closes to regulate flow through the valve body. Let&#39;s
                      unravel the mysteries of hydraulic flow control!
                    </p>

                    <h4>The Role of Needle Valves in Hydraulic Systems</h4>

                    <p>
                      Needle valves are precision instruments used in hydraulic
                      systems to control the flow rate of fluid. They are
                      designed to provide fine adjustments in flow, allowing
                      operators to regulate the rate of fluid flow with
                      precision and accuracy.
                    </p>

                    <h4>Understanding the Design of a Needle Valve</h4>

                    <p>
                      A hydraulic needle valve consists of several key
                      components:
                    </p>

                    <ul>
                      <li>
                        <strong>Valve Body:</strong> The main body of the needle
                        valve, which houses the internal components and provides
                        a pathway for fluid flow.
                      </li>
                      <li>
                        <strong>Needle:</strong> A slender, tapered rod that
                        fits inside the valve body and controls the flow of
                        fluid. The needle&#39;s position relative to the valve
                        seat determines the flow rate through the valve.
                      </li>
                      <li>
                        <strong>Valve Seat:</strong> The seating surface against
                        which the needle makes contact to seal off or open the
                        flow passage. The precision machining of the valve seat
                        is crucial for achieving leak-tight seals.
                      </li>
                      <li>
                        <strong>Handle or Actuator:</strong> A mechanism for
                        manually or automatically adjusting the position of the
                        needle to control flow.
                      </li>
                    </ul>

                    <h4>How a Hydraulic Needle Valve Works</h4>

                    <p>
                      The operation of a hydraulic needle valve is relatively
                      simple:
                    </p>

                    <ul>
                      <li>
                        <strong>Opening:</strong> To allow fluid to flow through
                        the valve, the needle is gradually retracted from the
                        valve seat by turning the handle or actuator
                        counterclockwise. As the gap between the needle and seat
                        increases, fluid can pass through the valve body.
                      </li>
                      <li>
                        <strong>Closing:</strong> Conversely, to restrict or
                        stop the flow of fluid, the needle is pushed back into
                        the valve seat by turning the handle or actuator
                        clockwise. This reduces the gap between the needle and
                        seat, effectively blocking the flow passage and shutting
                        off fluid flow.
                      </li>
                    </ul>

                    <h4>Applications of Hydraulic Needle Valves</h4>

                    <p>
                      Hydraulic needle valves find application in various
                      industries and systems, including:
                    </p>

                    <ul>
                      <li>
                        <strong>Hydraulic Power Units:</strong> Used to control
                        flow to hydraulic cylinders, actuators, and motors.
                      </li>
                      <li>
                        <strong>Instrumentation Systems:</strong> Provide
                        precise flow control in pressure and flow measurement
                        devices.
                      </li>
                      <li>
                        <strong>Process Control:</strong> Regulate flow in
                        industrial processes such as chemical manufacturing, oil
                        and gas, and water treatment.
                      </li>
                    </ul>

                    <h4>Conclusion</h4>

                    <p>
                      Hydraulic needle valves play a crucial role in regulating
                      fluid flow in hydraulic systems, providing precise control
                      and adjustment capabilities. By understanding how needle
                      valves operate, engineers and operators can effectively
                      manage flow rates to optimize system performance and
                      efficiency. Stay tuned for more insights on hydraulic
                      system components and functionality!
                    </p>
                  </article>
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

export default PostEnglish53;
