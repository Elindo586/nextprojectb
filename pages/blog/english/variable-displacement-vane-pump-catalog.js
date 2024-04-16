import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish26 = ({ db }) => {
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
        .filter((item) => item.id === "26")
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

                  <h4>Variable Displacement Vane Pump Catalog</h4>

                  <p>
                    Hydraulic systems rely on precise components to function
                    effectively, and among these, vane pumps play a crucial
                    role. Variable displacement vane pumps offer versatility and
                    efficiency in various hydraulic applications. Understanding
                    their technical characteristics is paramount for sizing and
                    selecting the right pump for specific needs.
                  </p>

                  <p>
                    For those delving into hydraulic systems or seeking to
                    upgrade existing setups, a comprehensive catalog of variable
                    displacement vane pumps serves as a valuable resource. The
                    catalog provides detailed insights into the pump&#39;s
                    specifications, enabling engineers and technicians to make
                    informed decisions.
                  </p>

                  <p>
                    One such catalog that stands out is offered by TU, a
                    renowned provider of hydraulic solutions. The{" "}
                    <a
                      href="https://www.tu.biz/pdf/variable-vane-pump-catalog.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Variable Displacement Vane Pump Catalog
                    </a>{" "}
                    by TU encompasses a wide range of vane pumps, each tailored
                    to meet diverse hydraulic requirements.
                  </p>

                  <h4>Key Technical Characteristics</h4>

                  <ul>
                    <li>
                      Displacement: The catalog outlines the displacement range
                      of each vane pump, indicating the volume of fluid it can
                      deliver per revolution. Understanding this parameter is
                      essential for determining the pump&#39;s capacity to meet
                      flow rate requirements.
                    </li>
                    <li>
                      Pressure Rating: Hydraulic systems operate within specific
                      pressure limits, and the catalog provides detailed
                      information about the maximum pressure each pump can
                      withstand. This aids in selecting a pump that can handle
                      the required pressure without risking system integrity.
                    </li>
                    <li>
                      Rotation Speed (RPM): Variable displacement vane pumps
                      offer flexibility in adjusting flow rates by varying the
                      rotational speed. The catalog specifies the RPM range for
                      each pump, enabling users to fine-tune system performance
                      according to application demands.
                    </li>
                    <li>
                      Operating Temperatures: Hydraulic systems encounter
                      varying temperature conditions, and the catalog highlights
                      the temperature range within which each vane pump operates
                      optimally. This ensures reliable performance across
                      different environmental conditions.
                    </li>
                  </ul>

                  <p>
                    By referring to the Variable Displacement Vane Pump Catalog,
                    engineers and technicians can streamline the process of
                    selecting the most suitable pump for their hydraulic
                    applications. Whether it&#39;s powering industrial machinery
                    or optimizing mobile equipment, having access to
                    comprehensive pump specifications simplifies the
                    decision-making process.
                  </p>

                  <p>
                    Furthermore, the catalog serves as a valuable educational
                    resource, providing insights into the principles of vane
                    pump operation and their role in hydraulic systems. It
                    enables professionals to deepen their understanding of
                    hydraulic technology and make informed choices for system
                    design and optimization.
                  </p>

                  <p>
                    In conclusion, the Variable Displacement Vane Pump Catalog
                    offered by TU is an indispensable tool for anyone involved
                    in hydraulic engineering. Its comprehensive coverage of pump
                    specifications empowers users to make informed decisions,
                    ensuring optimal performance and reliability in hydraulic
                    systems.
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

export default PostEnglish26;
