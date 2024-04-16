import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish28 = ({ db }) => {
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
        .filter((item) => item.id === "28")
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
                  <h4>ISO 4406 Codes</h4>
                  <br />
                  <p>
                    Welcome to our guide on ISO 4406 codes, which play a crucial
                    role in determining the cleanliness levels of hydraulic
                    components. In this video, we&#39;ll break down the ISO 4406
                    codes and their significance in assessing the cleanliness of
                    hydraulic fluids and systems.
                  </p>
                  <br />
                  <p>
                    ISO 4406 is an internationally recognized standard that
                    provides a method for quantifying the level of particulate
                    contamination in hydraulic fluids. This standard assigns
                    codes based on the number of particles of a certain size per
                    milliliter of fluid.
                  </p>
                  <br />
                  <h4>Understanding ISO 4406 Codes</h4>
                  <ul>
                    <li>
                      ISO 4406 codes consist of three numbers separated by
                      slashes, such as 18/16/13.
                    </li>
                    <li>
                      The first number represents the quantity of particles
                      larger than 4 microns per milliliter of fluid.
                    </li>
                    <li>
                      The second number represents the quantity of particles
                      larger than 6 microns per milliliter of fluid.
                    </li>
                    <li>
                      The third number represents the quantity of particles
                      larger than 14 microns per milliliter of fluid.
                    </li>
                  </ul>
                  <br />
                  <p>
                    For example, in the ISO code 18/16/13, there are 18
                    particles larger than 4 microns, 16 particles larger than 6
                    microns, and 13 particles larger than 14 microns per
                    milliliter of fluid.
                  </p>
                  <br />
                  <p>
                    The cleanliness level indicated by ISO 4406 codes is crucial
                    for maintaining the performance and longevity of hydraulic
                    components. Contaminants such as dirt, debris, and wear
                    particles can cause premature wear and damage to hydraulic
                    pumps, valves, cylinders, and other components.
                  </p>
                  <br />
                  <h4>Significance of Cleanliness Levels</h4>
                  <p>
                    Hydraulic systems operate under high pressure and precision,
                    making cleanliness essential for optimal performance:
                  </p>
                  <ul>
                    <li>
                      <strong>Reduced Wear:</strong> Cleaner fluids reduce the
                      risk of abrasive particles causing wear on hydraulic
                      components, extending their lifespan.
                    </li>
                    <li>
                      <strong>Improved Efficiency:</strong> Clean hydraulic
                      fluids ensure smoother operation and reduce the risk of
                      system inefficiencies caused by contaminants.
                    </li>
                    <li>
                      <strong>Prevention of Failures:</strong> Maintaining
                      cleanliness within specified ISO 4406 codes helps prevent
                      costly breakdowns and downtime due to component failures.
                    </li>
                  </ul>
                  <br />
                  <p>
                    Regular monitoring and maintenance of hydraulic fluid
                    cleanliness are essential to ensure compliance with ISO 4406
                    codes. This may involve filtration, periodic fluid analysis,
                    and adherence to best practices for fluid handling and
                    storage.
                  </p>
                  <br />
                  <h4>Application in Hydraulic Systems</h4>
                  <p>
                    ISO 4406 codes are particularly important in industries
                    where hydraulic systems play a critical role, such as:
                  </p>
                  <ul>
                    <li>Automotive manufacturing</li>
                    <li>Aerospace</li>
                    <li>Construction</li>
                    <li>Oil and gas</li>
                    <li>Marine</li>
                  </ul>
                  <p>
                    In these industries, maintaining precise cleanliness levels
                    in hydraulic fluids is essential for ensuring the
                    reliability and performance of equipment and machinery.
                  </p>
                  <br />
                  <p>
                    By understanding and adhering to ISO 4406 codes, hydraulic
                    system operators can minimize the risk of
                    contamination-related issues, enhance system reliability,
                    and prolong the service life of hydraulic components.
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

export default PostEnglish28;
