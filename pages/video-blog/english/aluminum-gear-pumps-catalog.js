import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish29 = ({ db }) => {
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
        .filter((item) => item.id === "29")
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
                  <h4>Aluminum Gear Pump Catalog</h4>
                  <br />

                  <p>
                    Welcome to our detailed exploration of aluminum gear pumps,
                    presented through our comprehensive catalog. In this video,
                    we will provide an extensive overview of the technical
                    specifications and operational features of aluminum gear
                    pumps, aiding you in understanding their functionality and
                    suitability for various hydraulic applications.
                  </p>
                  <br />
                  <p>
                    Aluminum gear pumps are indispensable components in
                    hydraulic systems across industries due to their
                    reliability, efficiency, and versatility. Understanding the
                    technical intricacies of these pumps is essential for
                    hydraulic engineers, technicians, and enthusiasts alike.
                  </p>
                  <br />
                  <h4>Technical Specifications</h4>
                  <ul>
                    <li>
                      <strong>Pressure Range:</strong> Aluminum gear pumps are
                      designed to operate within specific pressure ranges,
                      ensuring optimal performance and reliability. Consult our
                      catalog for detailed pressure ratings corresponding to
                      each pump model.
                    </li>
                    <li>
                      <strong>Displacements:</strong> The displacement of a gear
                      pump determines the volume of fluid it can deliver per
                      revolution. Our catalog features a variety of displacement
                      options to accommodate different flow rate requirements.
                    </li>
                    <li>
                      <strong>RPM (Revolutions Per Minute):</strong> RPM
                      specifications indicate the rotational speed at which the
                      pump operates optimally. Matching the pump&#39;s RPM with
                      the system&#39;s requirements is crucial for efficient
                      performance and longevity.
                    </li>
                    <li>
                      <strong>Mounts:</strong> Aluminum gear pumps come with
                      various mounting options, including flange mount, foot
                      mount, and SAE mount. The choice of mount depends on the
                      specific installation requirements of the hydraulic
                      system.
                    </li>
                    <li>
                      <strong>Shafts:</strong> Shaft configurations may vary
                      between pump models, with options such as keyed shafts,
                      splined shafts, and threaded shafts available. Selecting
                      the appropriate shaft type ensures compatibility with
                      drive systems and accessories.
                    </li>
                    <li>
                      <strong>Ports:</strong> Pay attention to port sizes and
                      configurations to ensure seamless integration with the
                      hydraulic circuit. Our catalog provides detailed
                      information on inlet and outlet port specifications for
                      each pump.
                    </li>
                  </ul>
                  <br />
                  <h4>Advantages of Aluminum Gear Pumps</h4>
                  <p>
                    Aluminum gear pumps offer several advantages over other
                    types of hydraulic pumps:
                  </p>
                  <ul>
                    <li>
                      <strong>Lightweight:</strong> Aluminum construction
                      provides strength and durability while keeping the
                      pump&#39;s weight to a minimum, facilitating easier
                      installation and transportation.
                    </li>
                    <li>
                      <strong>Efficiency:</strong> Gear pumps exhibit high
                      volumetric efficiency, delivering consistent fluid flow
                      with minimal pulsation, resulting in smooth system
                      operation.
                    </li>
                    <li>
                      <strong>Reliability:</strong> With fewer moving parts and
                      a simple design, aluminum gear pumps are known for their
                      reliability and long service life, requiring minimal
                      maintenance.
                    </li>
                    <li>
                      <strong>Versatility:</strong> Aluminum gear pumps can
                      handle a wide range of hydraulic fluids and operate
                      effectively in various temperature and pressure
                      conditions, making them suitable for diverse applications.
                    </li>
                  </ul>
                  <br />
                  <h4>Applications</h4>
                  <p>
                    Aluminum gear pumps find application across a spectrum of
                    industries and hydraulic systems, including:
                  </p>
                  <ul>
                    <li>Industrial machinery</li>
                    <li>Construction equipment</li>
                    <li>Agricultural machinery</li>
                    <li>Material handling systems</li>
                    <li>Automotive systems</li>
                    <li>Marine equipment</li>
                  </ul>
                  <p>
                    Whether it&#39;s powering hydraulic cylinders, driving
                    hydraulic motors, or providing fluid transfer in hydraulic
                    circuits, aluminum gear pumps play a crucial role in
                    numerous hydraulic functions.
                  </p>
                  <br />
                  <h4>Considerations for Selection</h4>
                  <p>
                    When selecting an aluminum gear pump for your hydraulic
                    system, consider the following factors:
                  </p>
                  <ul>
                    <li>
                      <strong>Flow Rate:</strong> Determine the required flow
                      rate based on the system&#39;s hydraulic demands and
                      operating conditions.
                    </li>
                    <li>
                      <strong>Pressure Requirements:</strong> Ensure that the
                      pump&#39;s pressure rating aligns with the maximum
                      pressure expected in the hydraulic system.
                    </li>
                    <li>
                      <strong>Space Constraints:</strong> Consider the physical
                      dimensions and mounting options of the pump to ensure
                      compatibility with the available space in the system.
                    </li>
                    <li>
                      <strong>Fluid Compatibility:</strong> Verify that the pump
                      is compatible with the hydraulic fluid used in the system
                      to prevent corrosion or damage.
                    </li>
                    <li>
                      <strong>Environmental Conditions:</strong> Take into
                      account factors such as temperature, humidity, and
                      exposure to contaminants that may affect the pump&#39;s
                      performance.
                    </li>
                  </ul>
                  <br />
                  <p>
                    Our catalog serves as a comprehensive resource for exploring
                    the full range of aluminum gear pumps available, complete
                    with detailed specifications and technical drawings. Whether
                    you&#39;re designing a new hydraulic system or upgrading an
                    existing one, our catalog provides the information you need
                    to make informed decisions.
                  </p>
                  <br />
                  <p>
                    For access to our complete catalog and to learn more about
                    our aluminum gear pumps, please visit{" "}
                    <a
                      href="https://www.tu.biz/pdf/hydraulic-gear-pumps-catalog.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.tu.biz/pdf/hydraulic-gear-pumps-catalog.pdf
                    </a>
                    .
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

export default PostEnglish29;
