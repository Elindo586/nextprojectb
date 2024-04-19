import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish9 = ({ db }) => {
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
        .filter((item) => item.id === "9")
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
                    Choosing Between Fixed Displacement and Variable
                    Displacement Hydraulic Pumps
                  </h4>
                  <p>
                    Hydraulic pumps are the heart of fluid power systems,
                    providing the necessary flow and pressure to drive hydraulic
                    actuators and motors. When designing a hydraulic circuit,
                    selecting the right type of pump is crucial for achieving
                    optimal performance and efficiency. In this article,
                    we&#39;ll explore the differences between fixed displacement
                    and variable displacement hydraulic pumps to help you make
                    an informed decision for your application.
                  </p>

                  <ul>
                    <li>
                      <strong>Fixed Displacement Hydraulic Pumps:</strong> Fixed
                      displacement pumps deliver a constant volume of fluid per
                      revolution, regardless of system pressure or demand. They
                      are simple in design and well-suited for applications with
                      consistent flow requirements. Fixed displacement pumps are
                      typically less expensive and easier to maintain compared
                      to variable displacement pumps.
                    </li>

                    <li>
                      <strong>Variable Displacement Hydraulic Pumps:</strong>{" "}
                      Variable displacement pumps, on the other hand, allow for
                      the adjustment of flow output to match system demand. By
                      varying the displacement of the pump&#39;s internal
                      mechanisms, variable displacement pumps can deliver the
                      precise flow required for different operating conditions.
                      This flexibility makes them ideal for applications with
                      fluctuating flow requirements or where precise control is
                      essential.
                    </li>

                    <li>
                      <strong>Flow Control:</strong> Fixed displacement pumps
                      provide a constant flow rate, making them suitable for
                      applications with steady flow requirements. However, they
                      may not be efficient in systems with varying flow demands,
                      leading to energy wastage and potential overheating.
                      Variable displacement pumps offer superior flow control,
                      allowing operators to adjust flow rates to match system
                      demand, resulting in improved efficiency and energy
                      savings.
                    </li>

                    <li>
                      <strong>Pressure Control:</strong> Fixed displacement
                      pumps maintain a constant pressure regardless of system
                      demand, which may lead to pressure spikes or
                      inefficiencies in systems with fluctuating loads. Variable
                      displacement pumps can adjust output pressure in response
                      to changes in system demand, ensuring consistent pressure
                      levels and better overall system performance.
                    </li>

                    <li>
                      <strong>System Flexibility:</strong> Variable displacement
                      pumps offer greater system flexibility and versatility
                      compared to fixed displacement pumps. They can adapt to
                      changing operating conditions and accommodate a wider
                      range of applications, making them suitable for complex
                      hydraulic systems with diverse requirements.
                    </li>

                    <li>
                      <strong>Efficiency:</strong> Variable displacement pumps
                      can improve system efficiency by matching flow output to
                      actual demand, reducing energy consumption and minimizing
                      heat generation. While fixed displacement pumps may be
                      more straightforward and cost-effective, they may not
                      offer the same level of efficiency and precision as
                      variable displacement pumps.
                    </li>
                  </ul>

                  <p>
                    When choosing between fixed displacement and variable
                    displacement hydraulic pumps, consider factors such as
                    system requirements, operating conditions, energy
                    efficiency, and budget constraints. Consulting with
                    hydraulic system engineers or pump specialists can help you
                    assess your specific needs and select the most suitable pump
                    for your application.
                  </p>

                  <p>
                    Whether you opt for the simplicity of a fixed displacement
                    pump or the versatility of a variable displacement pump,
                    understanding the differences between these two types of
                    pumps is essential for designing reliable and efficient
                    fluid power hydraulic circuits.
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

export default PostEnglish9;
