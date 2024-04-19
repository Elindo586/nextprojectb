import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish16 = ({ db }) => {
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
        .filter((item) => item.id === "16")
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
                    Understanding Fluid Power Hydraulic Vented Relief Valves
                  </h4>
                  <p>
                    Welcome to our instructional video on fluid power hydraulic
                    vented relief valves! In this segment, we&#39;ll explore the
                    functionality and significance of these valves within
                    hydraulic circuits. Understanding how vented relief valves
                    operate is crucial for ensuring the safety and efficiency of
                    hydraulic systems. Let&#39;s delve into the workings of
                    these essential components.
                  </p>

                  <h4>What is a Hydraulic Vented Relief Valve?</h4>
                  <p>
                    A hydraulic vented relief valve is a type of pressure relief
                    valve designed to control and limit the maximum pressure
                    within a hydraulic system. Unlike standard relief valves,
                    which discharge excess fluid to the reservoir, vented relief
                    valves release the discharge flow to an external source,
                    such as a tank or low-pressure line. This design feature
                    prevents pressure buildup in the system while minimizing
                    heat generation and energy loss.
                  </p>

                  <h4>How Does It Work?</h4>
                  <p>
                    The operation of a hydraulic vented relief valve is
                    relatively straightforward:
                  </p>
                  <ul>
                    <li>
                      Normal Operation: During normal operation, the valve
                      remains closed, allowing fluid to flow through the system
                      without obstruction.
                    </li>
                    <li>
                      Pressure Buildup: If pressure within the hydraulic system
                      exceeds the set threshold, the vented relief valve opens,
                      providing a path for excess fluid to escape.
                    </li>
                    <li>
                      Discharge Flow: Unlike standard relief valves, which
                      discharge fluid back to the reservoir, vented relief
                      valves redirect the discharge flow to an external source,
                      preventing pressure buildup and heat generation within the
                      system.
                    </li>
                    <li>
                      Pressure Regulation: Once the pressure returns to within
                      the acceptable range, the vented relief valve closes,
                      maintaining system pressure at the desired level.
                    </li>
                  </ul>

                  <h4>Key Features and Benefits</h4>
                  <p>
                    Vented relief valves offer several advantages in hydraulic
                    systems:
                  </p>
                  <ul>
                    <li>
                      Pressure Regulation: By limiting maximum pressure, vented
                      relief valves protect system components from damage caused
                      by overpressure conditions.
                    </li>
                    <li>
                      Heat Dissipation: Redirecting discharge flow away from the
                      system helps dissipate heat, preventing fluid from
                      reaching high temperatures and maintaining system
                      efficiency.
                    </li>
                    <li>
                      Energy Efficiency: Minimizing pressure buildup and heat
                      generation reduces energy consumption, contributing to
                      overall system efficiency and longevity.
                    </li>
                    <li>
                      Customizable Settings: Vented relief valves are
                      adjustable, allowing operators to set the desired pressure
                      threshold to suit specific application requirements.
                    </li>
                  </ul>

                  <h4>Applications of Hydraulic Vented Relief Valves</h4>
                  <p>
                    Hydraulic vented relief valves find wide-ranging
                    applications across various industries, including:
                  </p>
                  <ul>
                    <li>Mobile equipment</li>
                    <li>Industrial machinery</li>
                    <li>Agricultural machinery</li>
                    <li>Construction equipment</li>
                    <li>Material handling systems</li>
                  </ul>

                  <h4>Conclusion</h4>
                  <p>
                    Fluid power hydraulic vented relief valves play a critical
                    role in maintaining pressure and ensuring the safe and
                    efficient operation of hydraulic systems. By understanding
                    their function and benefits, you can make informed decisions
                    regarding their integration into your hydraulic circuits,
                    enhancing system performance and reliability.
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

export default PostEnglish16;
