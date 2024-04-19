import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish21 = ({ db }) => {
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
        .filter((item) => item.id === "21")
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
                  <h4>Fluid Power Symbols for Hydraulic Pressure Valves</h4>
                  <br />
                  <p>
                    Hydraulic pressure valves are fundamental components in
                    fluid power systems, regulating the flow and pressure of
                    hydraulic fluids to ensure optimal performance and safety.
                    Understanding and accurately depicting the symbols
                    associated with these valves is essential for engineers and
                    technicians working in hydraulic engineering.
                  </p>

                  <p>
                    In this comprehensive guide, we explore the intricate world
                    of fluid power symbols for hydraulic pressure valves,
                    providing invaluable insights into their proper depiction
                    and usage. Whether you&#39;re a seasoned professional or an
                    aspiring enthusiast, this article will enhance your
                    understanding of hydraulic schematics and improve your
                    technical drawing skills.
                  </p>

                  <h4>Basics of Hydraulic Symbols</h4>
                  <ul>
                    <li>
                      Hydraulic symbols are standardized graphical
                      representations used to depict various components within
                      fluid power systems.
                    </li>
                    <li>
                      These symbols serve as a universal language, facilitating
                      clear communication and comprehension among engineers,
                      technicians, and other stakeholders.
                    </li>
                    <li>
                      Understanding the basic elements of hydraulic symbols,
                      such as lines, arrows, and geometric shapes, is essential
                      for interpreting schematics accurately.
                    </li>
                  </ul>

                  <h4>Hydraulic Pressure Valve Symbols</h4>
                  <p>
                    Hydraulic pressure valves come in various types and
                    configurations, each serving a specific function within a
                    fluid power system. Mastering their symbols is crucial for
                    accurately conveying their role and placement within
                    hydraulic schematics.
                  </p>

                  <ul>
                    <li>
                      <strong>Pressure Relief Valve:</strong> Represented by a
                      rectangle with one diagonal line crossing through it,
                      indicating the valve&#39;s ability to relieve excess
                      pressure in the system. An arrow pointing away from the
                      rectangle signifies the direction of fluid flow when the
                      valve is activated.
                    </li>
                    <li>
                      <strong>Pressure Reducing Valve:</strong> Depicted by a
                      rectangle with one diagonal line and a smaller rectangle
                      inside it. The diagonal line indicates pressure reduction,
                      while the smaller rectangle represents the adjustable
                      control element. Arrows indicate fluid flow directions.
                    </li>
                    <li>
                      <strong>Sequence Valve:</strong> Symbolized by a rectangle
                      with two diagonal lines crossing through it. The lines
                      indicate sequential operation, with the upper line
                      representing the primary flow path and the lower line
                      representing the secondary flow path. Arrows denote fluid
                      flow directions.
                    </li>
                  </ul>

                  <h4>Drawing Techniques</h4>
                  <ul>
                    <li>
                      When drawing hydraulic symbols, precision and consistency
                      are essential. Use a straight edge and clear, concise
                      strokes to ensure clarity and readability.
                    </li>
                    <li>
                      Pay attention to the orientation of arrows and geometric
                      elements, as they convey important information about fluid
                      flow direction and valve functionality.
                    </li>
                    <li>
                      Label symbols appropriately to denote their specific
                      function within the hydraulic system, enhancing overall
                      comprehension.
                    </li>
                  </ul>

                  <p>
                    By familiarizing yourself with fluid power symbols for
                    hydraulic pressure valves and practicing their accurate
                    depiction, you&#39;ll enhance your proficiency in hydraulic
                    engineering and contribute to the development of efficient
                    and reliable fluid power systems.
                  </p>

                  <p>
                    For a visual tutorial on drawing technical symbols for fluid
                    power hydraulic pressure valves and further insights into
                    hydraulic engineering, don&#39;t miss our YouTube video
                    titled &#34;Fluid Power Symbols for Hydraulic Pressure
                    Valves.&#34;
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

export default PostEnglish21;
