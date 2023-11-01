import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish36 = ({ db }) => {
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
        .filter((item) => item.id === "36")
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
                    <h4>Units Compatibility:</h4>
                    <p>
                      The significance of the number 231 lies in its role in
                      ensuring that the units used in hydraulic calculations are
                      compatible. In this formula, pressure (P) is typically
                      measured in pounds per square inch (PSI), while power (P)
                      is measured in horsepower (HP). To make these units
                      compatible, the flow rate (Q) must be measured in gallons
                      per minute (GPM). This is where the magic of 231 comes
                      into play.
                    </p>
                  </article>

                  <article>
                    <h4>Converting Flow Rate:</h4>
                    <p>
                      231 acts as a conversion factor that transforms the flow
                      rate from gallons per minute (GPM) into cubic inches per
                      revolution (CIR). This conversion is essential because it
                      ensures that the units of flow rate match those of
                      pressure and power, allowing engineers and technicians to
                      work with coherent measurements.
                    </p>
                  </article>

                  <article>
                    <h4>Practical Application:</h4>
                    <p>
                      Let's take a practical example to illustrate the
                      significance of 231. Suppose you have a hydraulic system
                      with a flow rate of 10 GPM and an efficiency of 85%. To
                      find the pressure, you can use the formula: P = (10 GPM x
                      231) / 0.85. The result is a pressure of approximately
                      2706 PSI. Without the inclusion of 231 in the formula,
                      such conversions would be significantly more complex and
                      prone to errors.
                    </p>
                  </article>

                  <article>
                    <h4>Engineering Precision:</h4>
                    <p>
                      Understanding the role of 231 in hydraulic formulas is
                      vital for designing, analyzing, and maintaining hydraulic
                      systems across various industries. Precise calculations
                      are the key to ensuring that hydraulic systems function
                      efficiently and safely, whether it's a heavy construction
                      machine, an aircraft's landing gear, or a precision
                      machining tool.
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

export default PostEnglish36;
