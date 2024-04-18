import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish45 = ({ db }) => {
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
        .filter((item) => item.id === "45")
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
                    <h4>How Does a Hydraulic Winch Work?</h4>
                    <p>
                      A hydraulic winch operates on the principle of utilizing
                      fluid power to generate mechanical force, enabling the
                      pulling or lifting of heavy loads with ease. In a
                      hydraulic winch system, hydraulic fluid is pressurized to
                      create force, which is then transmitted through the system
                      to drive the winch mechanism.
                    </p>
                    <p>
                      <strong>Key Components:</strong>
                      <ul>
                        <li>
                          Hydraulic Pump: Responsible for pressurizing the
                          hydraulic fluid.
                        </li>
                        <li>
                          Hydraulic Motor: Converts the hydraulic energy into
                          rotational motion.
                        </li>
                        <li>
                          Winch Drum: The drum onto which the cable or rope is
                          wound.
                        </li>
                        <li>
                          Control Valves: Regulate the flow of hydraulic fluid
                          to control the winch&#39;s speed and direction.
                        </li>
                      </ul>
                    </p>
                    <p>
                      <strong>Working Principle:</strong>
                      <br />
                      When the hydraulic pump is activated, it pressurizes the
                      hydraulic fluid, which is then directed to the hydraulic
                      motor. The motor converts this fluid energy into
                      rotational motion, which drives the winch drum. As the
                      drum rotates, it winds or unwinds the cable, depending on
                      the direction of the fluid flow controlled by the valves.
                    </p>
                    <p>
                      <strong>Advantages of Hydraulic Winches:</strong>
                      <br />
                      Hydraulic winches offer several advantages over their
                      electric counterparts, including:
                      <ul>
                        <li>
                          Higher pulling power: Hydraulic winches can exert
                          greater force, making them suitable for heavy-duty
                          applications.
                        </li>
                        <li>
                          Constant torque: Hydraulic systems provide consistent
                          torque output, even at low speeds.
                        </li>
                        <li>
                          Heat resistance: Hydraulic systems are less
                          susceptible to overheating, ensuring reliable
                          operation in demanding conditions.
                        </li>
                        <li>
                          Adaptability: Hydraulic winches can be integrated into
                          various hydraulic systems, offering versatility in
                          application.
                        </li>
                      </ul>
                    </p>
                    <p>
                      <strong>Conclusion:</strong>
                      <br />
                      Understanding the mechanics of how a hydraulic winch works
                      is essential for maximizing its performance and
                      efficiency. By harnessing the power of hydraulic fluid,
                      these winches provide robust pulling and lifting
                      capabilities, making them indispensable in numerous
                      industries.
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

export default PostEnglish45;
