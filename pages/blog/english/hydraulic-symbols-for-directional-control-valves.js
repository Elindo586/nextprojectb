import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish14 = ({ db }) => {
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
        .filter((item) => item.id === "14")
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
                    Understanding Hydraulic Symbols for Directional Control
                    Valves
                  </h4>
                  <p>
                    Directional control valves are essential components in
                    hydraulic systems, responsible for controlling the flow of
                    fluid and directing it to various actuators. To accurately
                    represent these valves in technical schematics and diagrams,
                    it&#39;s crucial to understand hydraulic symbols.
                  </p>

                  <ul>
                    <li>
                      <strong>Two-Position Valves:</strong> These valves have
                      two distinct positions: open and closed. In hydraulic
                      schematics, they are represented by a rectangle with two
                      ports and an arrow indicating the direction of flow when
                      the valve is activated. The absence of an arrow indicates
                      the default position of the valve.
                    </li>

                    <li>
                      <strong>Three-Position Valves:</strong> Three-position
                      valves offer an additional intermediate position between
                      the fully open and fully closed positions. They are
                      depicted in schematics with three ports and an arrow
                      indicating the flow path for each position. The center
                      position is typically represented by a square with the
                      letter &#39;C&#39; inside.
                    </li>

                    <li>
                      <strong>Spool Valves:</strong> Spool valves are commonly
                      used in directional control valves to control the flow
                      direction. They consist of a cylindrical spool that slides
                      within a valve body to direct fluid flow. In hydraulic
                      schematics, spool valves are represented by various
                      symbols depending on their configuration, including lines,
                      arrows, and shapes indicating the number of positions and
                      flow paths.
                    </li>

                    <li>
                      <strong>Pilot Operated Valves:</strong> Pilot operated
                      valves use a smaller pilot valve to control the operation
                      of the main valve. They are often depicted in schematics
                      with additional symbols representing the pilot valve and
                      its connection to the main valve. Understanding these
                      symbols is essential for accurately depicting the
                      interaction between pilot and main valves in hydraulic
                      systems.
                    </li>

                    <li>
                      <strong>Pressure and Flow Control Valves:</strong>{" "}
                      Directional control valves may also include pressure and
                      flow control features to regulate the flow rate and
                      pressure within the hydraulic system. Symbols for pressure
                      relief valves, flow control valves, and other similar
                      components are standardized and widely used in hydraulic
                      schematics.
                    </li>

                    <li>
                      <strong>Check Valves:</strong> Check valves allow fluid
                      flow in one direction while preventing reverse flow. They
                      are represented in schematics by symbols indicating a
                      one-way flow path, often with an arrow indicating the
                      direction of flow.
                    </li>
                  </ul>

                  <p>
                    Mastering hydraulic symbols for directional control valves
                    is essential for engineers, technicians, and anyone involved
                    in designing, maintaining, or troubleshooting hydraulic
                    systems. Proper representation of valves in schematics
                    ensures clear communication and accurate understanding of
                    system functionality.
                  </p>

                  <p>
                    When creating or interpreting hydraulic schematics, always
                    refer to industry standards and guidelines to ensure
                    consistency and accuracy in symbol usage. With a solid
                    understanding of hydraulic symbols, you can effectively
                    design, analyze, and troubleshoot hydraulic systems with
                    confidence.
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

export default PostEnglish14;
