import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish56 = ({ db }) => {
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
        .filter((item) => item.id === "56")
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
                    <h4>
                      Understanding Hydraulic Heat Removal: Sizing Air Heat
                      Exchangers for Efficient Cooling
                    </h4>
                    <p>
                      Welcome to our comprehensive guide on hydraulic heat
                      removal! In this video, we&#39;ll explore the calculations
                      required to size an air heat exchanger, using temperature
                      in Fahrenheit and flow rate in gallons per minute (gpm) to
                      remove heat in British Thermal Units per hour (BTU/hr)
                      from a hydraulic circuit. Let&#39;s dive into the details
                      of hydraulic cooling!
                    </p>

                    <h4>The Importance of Heat Removal in Hydraulic Systems</h4>

                    <p>
                      Heat generation is inevitable in hydraulic systems due to
                      friction, inefficiencies, and external factors. Excessive
                      heat can degrade fluid quality, reduce system efficiency,
                      and lead to premature component failure. Efficient heat
                      removal is vital for maintaining optimal hydraulic
                      performance and extending the lifespan of hydraulic
                      systems.
                    </p>

                    <h4>Calculating Heat Load</h4>

                    <p>
                      The first step in sizing an air heat exchanger is
                      determining the heat load imposed on the hydraulic system.
                      The heat load can be calculated using the following
                      formula:
                    </p>

                    <p class="formula">
                      Heat Load (BTU/hr) = Flow Rate (gpm) × Temperature Rise
                      (°F) × 500
                    </p>

                    <p>Where:</p>

                    <ul>
                      <li>
                        <strong>Flow Rate:</strong> The volume flow rate of
                        hydraulic fluid in gallons per minute (gpm).
                      </li>
                      <li>
                        <strong>Temperature Rise:</strong> The increase in fluid
                        temperature as it passes through the hydraulic system,
                        measured in degrees Fahrenheit (°F).
                      </li>
                    </ul>

                    <p>
                      The factor 500 is a constant that represents the specific
                      heat of water and converts flow rate and temperature rise
                      into heat load in BTU/hr.
                    </p>

                    <h4>Selecting an Air Heat Exchanger</h4>

                    <p>
                      Once the heat load is calculated, the next step is
                      selecting an air heat exchanger with sufficient capacity
                      to dissipate the calculated heat load. Factors to consider
                      when selecting an air heat exchanger include:
                    </p>

                    <ul>
                      <li>
                        <strong>Heat Transfer Rate:</strong> The ability of the
                        air heat exchanger to transfer heat from the hydraulic
                        fluid to the surrounding air.
                      </li>
                      <li>
                        <strong>Surface Area:</strong> The larger the surface
                        area of the heat exchanger, the greater its heat
                        dissipation capacity.
                      </li>
                      <li>
                        <strong>Airflow:</strong> Sufficient airflow across the
                        heat exchanger is essential for effective heat transfer.
                      </li>
                      <li>
                        <strong>Operating Conditions:</strong> Consider ambient
                        temperature and airflow restrictions to ensure the heat
                        exchanger operates optimally under all conditions.
                      </li>
                    </ul>

                    <h4>Conclusion</h4>

                    <p>
                      Proper heat removal is critical for maintaining the
                      efficiency and longevity of hydraulic systems. By
                      understanding the calculations and considerations involved
                      in sizing an air heat exchanger, engineers and operators
                      can ensure effective cooling and optimal performance of
                      hydraulic circuits. Stay tuned for more insights on
                      hydraulic system maintenance and optimization!
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

export default PostEnglish56;
