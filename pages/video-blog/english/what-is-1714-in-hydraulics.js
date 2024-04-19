import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish51 = ({ db }) => {
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
        .filter((item) => item.id === "51")
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
                    <h4>
                      Unveiling the Mystery of 1714 in Hydraulics: Understanding
                      its Significance
                    </h4>
                    <p>
                      Welcome to our exploration of the constant 1714 in
                      hydraulics! In this video, we&#39;ll unravel the origins
                      of this seemingly magical number in the formula HP = (gpm
                      × psi) / 1714, shedding light on its significance in
                      hydraulic calculations. Let&#39;s dive into the world of
                      hydraulic power!
                    </p>

                    <h4>The Role of 1714 in Hydraulic Formulas</h4>

                    <p>
                      The constant 1714 appears in various hydraulic formulas,
                      particularly in equations relating to the calculation of
                      hydraulic horsepower (HP). In the context of the formula
                      HP = (gpm × psi) / 1714, 1714 serves as a conversion
                      factor to convert units of flow rate (gallons per minute,
                      gpm) and pressure (pounds per square inch, psi) into
                      hydraulic horsepower.
                    </p>

                    <h4>Understanding the Origin of 1714</h4>

                    <p>
                      The origin of the constant 1714 can be traced back to the
                      unit conversions involved in the formula for hydraulic
                      horsepower. Specifically, 1714 is derived from the
                      following unit conversions:
                    </p>

                    <ul>
                      <li>
                        <strong>
                          1 horsepower (HP) = 550 foot-pounds per second
                          (ft-lb/s)
                        </strong>
                      </li>
                      <li>
                        <strong>
                          1 gallon of water weighs approximately 8.34 pounds
                          (lb)
                        </strong>
                      </li>
                      <li>
                        <strong>1 minute (min) = 60 seconds (s)</strong>
                      </li>
                    </ul>

                    <p>
                      By combining these unit conversions, we arrive at the
                      factor of 1714:
                    </p>

                    <p class="formula">HP = (gpm × psi) / 1714</p>

                    <h4>Practical Applications of 1714</h4>

                    <p>
                      The constant 1714 simplifies hydraulic calculations by
                      providing a standardized conversion factor for determining
                      hydraulic horsepower based on flow rate and pressure. This
                      allows engineers and technicians to assess the power
                      output of hydraulic systems and components accurately.
                    </p>

                    <h4>Conclusion</h4>

                    <p>
                      While the constant 1714 may seem like just another number
                      in hydraulic formulas, its significance lies in its role
                      as a conversion factor for calculating hydraulic
                      horsepower. By understanding its origins and applications,
                      hydraulic professionals can utilize this constant
                      effectively in their calculations and analysis. Stay tuned
                      for more insights on hydraulic principles and practices!
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

export default PostEnglish51;
