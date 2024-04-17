import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish11 = ({ db }) => {
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
        .filter((item) => item.id === "11")
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
                  <h4>
                    Pilot Operated Relief Valve vs. Direct Acting Relief Valve:
                    Understanding the Difference
                  </h4>
                  <p>
                    Relief valves are critical components in hydraulic systems,
                    designed to protect equipment and maintain safe operating
                    pressures by diverting excess fluid flow when pressure
                    exceeds a predetermined threshold. Two common types of
                    relief valves used in hydraulic circuits are pilot operated
                    relief valves and direct acting relief valves. Understanding
                    the differences between these valves is essential for
                    selecting the right option for your application.
                  </p>

                  <ul>
                    <li>
                      <strong>Pilot Operated Relief Valve:</strong> Pilot
                      operated relief valves utilize a pilot valve to control
                      the opening and closing of the main relief valve. When
                      system pressure exceeds the setpoint, the pilot valve
                      senses the pressure difference and directs hydraulic fluid
                      to the main valve, causing it to open and relieve excess
                      pressure. Pilot operated relief valves offer precise
                      pressure control and are suitable for applications with
                      high flow rates and fluctuating pressures.
                    </li>

                    <li>
                      <strong>Direct Acting Relief Valve:</strong> Direct acting
                      relief valves operate without the need for a separate
                      pilot valve. Instead, they rely on the force exerted by
                      system pressure directly on the valve&#39;s poppet or
                      piston to open and relieve excess pressure. Direct acting
                      relief valves are simpler in design and typically more
                      compact than pilot operated valves. They are ideal for
                      applications with lower flow rates and steady pressure
                      conditions.
                    </li>

                    <li>
                      <strong>Response Time:</strong> Pilot operated relief
                      valves generally have a faster response time compared to
                      direct acting relief valves. The pilot valve allows for
                      quick activation of the main relief valve in response to
                      pressure spikes, minimizing the risk of damage to
                      downstream equipment. Direct acting relief valves may have
                      a slightly slower response time due to the absence of a
                      pilot mechanism.
                    </li>

                    <li>
                      <strong>Pressure Control:</strong> Pilot operated relief
                      valves offer precise pressure control and can maintain
                      consistent pressure levels even in dynamic operating
                      conditions. The pilot valve allows for fine adjustment of
                      the setpoint and provides better stability compared to
                      direct acting relief valves, which may experience pressure
                      fluctuations due to variations in system load and flow.
                    </li>

                    <li>
                      <strong>Size and Complexity:</strong> Direct acting relief
                      valves are typically smaller and simpler in design
                      compared to pilot operated relief valves. They have fewer
                      components and require less space, making them suitable
                      for applications with limited installation space or where
                      simplicity is preferred. Pilot operated relief valves, on
                      the other hand, are more complex and may require
                      additional piping and components for the pilot circuit.
                    </li>
                  </ul>

                  <p>
                    When selecting between a pilot operated relief valve and a
                    direct acting relief valve, consider factors such as system
                    flow rate, pressure stability requirements, response time,
                    and space constraints. Consult with hydraulic system
                    engineers or valve specialists to determine the most
                    suitable option for your specific application.
                  </p>

                  <p>
                    Both pilot operated relief valves and direct acting relief
                    valves play important roles in hydraulic systems, providing
                    essential pressure protection and ensuring safe and reliable
                    operation of equipment. By understanding their differences
                    and capabilities, you can make informed decisions to
                    optimize the performance and efficiency of your hydraulic
                    circuit.
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

export default PostEnglish11;
