import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish15 = ({ db }) => {
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
        .filter((item) => item.id === "15")
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
                  <h4>
                    Hydraulic Pump Test: Ensuring Efficiency and Reliability
                  </h4>
                  <p>
                    Hydraulic pumps are vital components in various industrial
                    and mobile hydraulic systems, responsible for generating
                    fluid flow to power hydraulic machinery. To ensure optimal
                    performance and prevent costly breakdowns, regular testing
                    of hydraulic pumps is essential.
                  </p>

                  <ul>
                    <li>
                      <strong>Visual Inspection:</strong> Before conducting any
                      tests, perform a visual inspection of the hydraulic pump
                      and its surrounding components. Look for signs of leaks,
                      damage, or excessive wear. Address any issues found before
                      proceeding with testing.
                    </li>

                    <li>
                      <strong>Flow Rate Test:</strong> One of the fundamental
                      tests for hydraulic pumps is the flow rate test. This test
                      measures the volume of fluid delivered by the pump per
                      unit of time. Use a flow meter installed in the hydraulic
                      circuit to accurately measure the flow rate. Compare the
                      measured flow rate with the pump&#39;s specifications to
                      ensure it is within the acceptable range.
                    </li>

                    <li>
                      <strong>Pressure Test:</strong> Another critical aspect of
                      hydraulic pump testing is the pressure test. This test
                      evaluates the pump&#39;s ability to generate and maintain
                      hydraulic pressure within the system. Use a pressure gauge
                      connected to the hydraulic circuit to measure the pressure
                      output during operation. Verify that the pump can achieve
                      the required pressure levels without fluctuations or
                      excessive pressure drops.
                    </li>

                    <li>
                      <strong>Efficiency Test:</strong> Assessing the efficiency
                      of a hydraulic pump is essential for determining its
                      overall performance. Efficiency can be calculated by
                      comparing the input power (measured using an ammeter and
                      voltmeter) to the output power (calculated from the flow
                      rate and pressure measurements). A higher efficiency
                      indicates better energy utilization and reduced operating
                      costs.
                    </li>

                    <li>
                      <strong>Noise and Vibration Analysis:</strong> Excessive
                      noise and vibration can be indicators of underlying issues
                      within the hydraulic pump or system. Conduct a thorough
                      analysis of noise and vibration levels during pump
                      operation. Investigate any unusual sounds or vibrations
                      and take corrective actions as necessary to prevent
                      further damage.
                    </li>

                    <li>
                      <strong>Temperature Monitoring:</strong> Monitor the
                      operating temperature of the hydraulic pump and system
                      components throughout the testing process. Elevated
                      temperatures can indicate problems such as inefficient
                      fluid cooling or internal leakage. Implement proper
                      cooling measures or address any issues contributing to
                      temperature rise to avoid overheating and component
                      failure.
                    </li>
                  </ul>

                  <p>
                    Regular testing and maintenance are crucial for ensuring the
                    reliability and longevity of hydraulic pumps. By following
                    proper testing procedures and promptly addressing any issues
                    identified, operators can minimize downtime, improve
                    efficiency, and extend the service life of hydraulic
                    systems.
                  </p>

                  <p>
                    Remember, always refer to the manufacturer&#39;s guidelines
                    and specifications when testing hydraulic pumps to ensure
                    accurate results and safe operation.
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

export default PostEnglish15;
