import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish22 = ({ db }) => {
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
        .filter((item) => item.id === "22")
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
                  <h4>Hydraulic Fluid Power Symbols for Hydraulic Pumps</h4>
                  <br />
                  <p>
                    In the realm of hydraulic engineering, understanding and
                    accurately depicting fluid power symbols is paramount for
                    effective communication and design. Hydraulic pumps, in
                    particular, play a pivotal role in numerous industrial
                    applications, and mastering their symbols is essential for
                    engineers and technicians alike.
                  </p>

                  <p>
                    Here, we delve into the intricate world of hydraulic fluid
                    power symbols, focusing specifically on those associated
                    with hydraulic pumps. Whether you&#39;re a seasoned
                    professional or an aspiring enthusiast, this guide will
                    provide invaluable insights into drawing these symbols with
                    precision and clarity.
                  </p>

                  <h4>Understanding the Basics</h4>
                  <ul>
                    <li>
                      Before delving into specific symbols, it&#39;s crucial to
                      grasp the fundamentals of hydraulic schematics.
                    </li>
                    <li>
                      Hydraulic symbols are standardized graphical
                      representations used to depict various components, such as
                      pumps, valves, actuators, and more.
                    </li>
                    <li>
                      These symbols serve as a universal language in the field
                      of fluid power, facilitating clear communication and
                      comprehension.
                    </li>
                  </ul>

                  <h4>Hydraulic Pump Symbols</h4>
                  <p>
                    Hydraulic pumps are devices that generate fluid flow within
                    a hydraulic system, providing the necessary power to drive
                    actuators, motors, and other components. Understanding their
                    symbols is essential for accurately portraying their
                    function and placement within schematics.
                  </p>

                  <ul>
                    <li>
                      <strong>Fixed Displacement Pump:</strong> Represented by a
                      circle with a triangle pointing outwards, indicating the
                      direction of fluid flow.
                    </li>
                    <li>
                      <strong>Variable Displacement Pump:</strong> Represented
                      by a circle with a triangle pointing outwards, and an
                      arrow across the circle representing the variable flow
                      rate of the pump.
                    </li>
                  </ul>

                  <h4>Drawing Techniques</h4>
                  <ul>
                    <li>
                      When drawing hydraulic symbols, precision is key. Use a
                      straight edge and consistent strokes to ensure clarity and
                      accuracy.
                    </li>
                    <li>
                      Pay attention to the orientation of arrows, as they
                      indicate the direction of fluid flow and rotational
                      motion.
                    </li>
                    <li>
                      Label symbols appropriately to convey their specific
                      function within the hydraulic system.
                    </li>
                  </ul>

                  <p>
                    Mastering hydraulic fluid power symbols for hydraulic pumps
                    requires practice and attention to detail. By familiarizing
                    yourself with these symbols and practicing their depiction,
                    you&#39;ll enhance your ability to communicate effectively
                    within the realm of hydraulic engineering.
                  </p>

                  <p>
                    For a visual demonstration of drawing hydraulic pump symbols
                    and further insights into fluid power engineering, be sure
                    to check out our YouTube video titled &#34;Hydraulic Fluid
                    Power Symbols for Hydraulic Pumps.&#34;
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

export default PostEnglish22;
