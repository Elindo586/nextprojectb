import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish38 = ({ db }) => {
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
        .filter((item) => item.id === "38")
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
                  <article>
                    <h4>Hydraulic Directional Control Valves Replacements</h4>
                    <p>
                      Hydraulic directional control valves play a crucial role
                      in controlling the flow direction of fluid in hydraulic
                      circuits. In this informative YouTube video, viewers are
                      guided through the process of replacing standard
                      directional control valves in hydraulic systems.
                    </p>
                    <p>Here are the key points covered in the video:</p>
                    <ul>
                      <li>
                        Explanation of the function and importance of
                        directional control valves in hydraulic systems.
                      </li>
                      <li>
                        Identification of common signs indicating the need for
                        valve replacement, such as leakage, erratic operation,
                        or decreased performance.
                      </li>
                      <li>
                        Step-by-step instructions on how to safely remove the
                        old directional control valve from the hydraulic
                        circuit.
                      </li>
                      <li>
                        Guidance on selecting a suitable replacement valve based
                        on system requirements, including flow rate, pressure
                        rating, and valve type.
                      </li>
                      <li>
                        Demonstration of proper installation techniques to
                        ensure the new valve is securely fitted into the
                        hydraulic system.
                      </li>
                      <li>
                        Testing procedures to verify the functionality and
                        performance of the replaced directional control valve.
                      </li>
                      <li>
                        Tips for troubleshooting common issues that may arise
                        during or after the replacement process.
                      </li>
                    </ul>
                    <p>
                      By providing detailed instructions and practical advice,
                      the video empowers viewers to effectively replace standard
                      directional control valves and maintain the integrity and
                      efficiency of their hydraulic systems.
                    </p>
                    <p>
                      Whether you&#39;re a hydraulic technician, maintenance
                      personnel, or enthusiast looking to enhance your hydraulic
                      system maintenance skills, &#34;Hydraulic Directional
                      Control Valves Replacements&#34; offers valuable insights
                      and guidance.
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

export default PostEnglish38;
