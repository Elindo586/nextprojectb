import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish8 = ({ db }) => {
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
        .filter((item) => item.id === "8")
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
                  <br></br>
                  <article>
                    <h4>Meter In and Meter Out Hydraulic Circuits</h4>

                    <h4>Introduction</h4>
                    <p>
                      Hydraulic systems are widely used in various industrial
                      applications, and understanding the principles of fluid
                      control is essential. In this video call, we will delve
                      into the concept of &quot;Meter In&quot; and &quot;Meter
                      Out&quot; hydraulic circuits, which play a crucial role in
                      controlling the flow of hydraulic fluids. These circuits
                      are essential for maintaining the desired speed and
                      precision in hydraulic systems, making them a fundamental
                      topic for engineers, technicians, and anyone involved in
                      hydraulics.
                    </p>

                    <h4>Meter In Hydraulic Circuit</h4>
                    <p>
                      The &quot;Meter In&quot; hydraulic circuit, also known as
                      the &quot;Flow Control Valve,&quot; is designed to
                      regulate the flow rate of hydraulic fluid into an
                      actuator, such as a hydraulic cylinder. By adjusting the
                      flow rate, it controls the speed of the actuator. This is
                      particularly important when you need precise control over
                      the actuator&#39;s movement, like in industrial
                      automation, construction machinery, or material handling
                      equipment. During the video call, we will explore the
                      working principles and practical applications of the Meter
                      In circuit in detail.
                    </p>

                    <h4>Meter Out Hydraulic Circuit</h4>
                    <p>
                      On the other hand, the &quot;Meter Out&quot; hydraulic
                      circuit, also known as the &quot;Throttle Valve,&quot;
                      controls the flow of hydraulic fluid as it exits an
                      actuator. This circuit is used to manage the speed of the
                      actuator&#39;s return stroke, allowing for smooth and
                      controlled movements. We will discuss the functionality of
                      the Meter Out circuit and how it contributes to the safety
                      and efficiency of hydraulic systems during our video call
                      session.
                    </p>

                    <h4>Benefits of Understanding These Circuits</h4>
                    <p>
                      Understanding the &quot;Meter In&quot; and &quot;Meter
                      Out&quot; hydraulic circuits is vital for maintaining the
                      performance and safety of hydraulic systems. Proper
                      control of fluid flow ensures that machinery operates
                      efficiently, reducing wear and tear on components and
                      preventing sudden, jarring movements. During our video
                      call, we will highlight the benefits of mastering these
                      circuits and how they can positively impact your hydraulic
                      applications.
                    </p>

                    <h4>Conclusion</h4>
                    <p>
                      In conclusion, the &quot;Meter In&quot; and &quot;Meter
                      Out&quot; hydraulic circuits are indispensable components
                      of hydraulic systems, and a comprehensive understanding of
                      these circuits is essential for anyone working with
                      hydraulics. Our video call session will provide a clear
                      and practical explanation of these circuits, their
                      applications, and the advantages they offer in various
                      industries. We look forward to your participation and
                      invite you to join us for an insightful discussion on this
                      vital topic.
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

export default PostEnglish8;
