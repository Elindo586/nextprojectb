import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish17 = ({ db }) => {
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
        .filter((item) => item.id === "17")
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
                  <h4>A Guide to Interchanging Fluid Power Hydraulic Pumps</h4>
                  <p>
                    Welcome to our instructional video on how to interchange
                    fluid power hydraulic pumps! Whether you&#39;re upgrading
                    your hydraulic system or replacing a faulty pump,
                    understanding the technical details of flow, pressure,
                    mounting, ports, shaft, and RPM is crucial for a successful
                    interchange. In this guide, we&#39;ll walk you through the
                    process step by step, ensuring a seamless transition to a
                    new hydraulic pump.
                  </p>

                  <h4>Assessing Technical Specifications</h4>
                  <p>
                    Before proceeding with the interchange, it&#39;s essential
                    to gather relevant technical information about your existing
                    pump and the replacement pump. Key specifications to
                    consider include:
                  </p>
                  <ul>
                    <li>Flow Rate (GPM or LPM)</li>
                    <li>Operating Pressure (PSI or Bar)</li>
                    <li>Mounting Configuration</li>
                    <li>Port Size and Type</li>
                    <li>Shaft Diameter and Length</li>
                    <li>Rotation Speed (RPM)</li>
                  </ul>

                  <h4>Compatibility Check</h4>
                  <p>
                    Once you have the technical details of both pumps, perform a
                    compatibility check to ensure the replacement pump meets or
                    exceeds the requirements of your hydraulic system. Pay close
                    attention to flow and pressure ratings, as well as mounting
                    and port configurations, to avoid compatibility issues.
                  </p>

                  <h4>Installation Procedure</h4>
                  <p>Follow these steps for a successful pump interchange:</p>
                  <ol>
                    <li>
                      Shut down the hydraulic system and relieve pressure to
                      ensure safety.
                    </li>
                    <li>
                      Disconnect inlet and outlet lines from the existing pump.
                    </li>
                    <li>
                      Remove any mounting brackets or hardware securing the pump
                      to the system.
                    </li>
                    <li>
                      Carefully extract the old pump from its mounting location.
                    </li>
                    <li>
                      Inspect the mounting surface for any damage or debris and
                      clean if necessary.
                    </li>
                    <li>
                      Position the replacement pump in the mounting location,
                      ensuring proper alignment.
                    </li>
                    <li>
                      Secure the pump in place using appropriate mounting
                      hardware.
                    </li>
                    <li>
                      Connect inlet and outlet lines to the new pump, ensuring
                      tight fittings.
                    </li>
                    <li>
                      Double-check all connections and ensure there are no
                      leaks.
                    </li>
                    <li>
                      Restart the hydraulic system and monitor for proper
                      operation.
                    </li>
                  </ol>

                  <h4>Testing and Adjustment</h4>
                  <p>
                    After installing the replacement pump, conduct thorough
                    testing to verify its performance and compatibility with the
                    hydraulic system. Monitor flow, pressure, and temperature
                    levels, and make any necessary adjustments to optimize pump
                    operation.
                  </p>

                  <h4>Conclusion</h4>
                  <p>
                    Interchanging fluid power hydraulic pumps requires careful
                    consideration of technical specifications and proper
                    installation procedures. By following the steps outlined in
                    this guide and paying attention to compatibility and
                    installation details, you can ensure a smooth and successful
                    pump interchange, minimizing downtime and maximizing system
                    efficiency.
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

export default PostEnglish17;
