import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish27 = ({ db }) => {
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
        .filter((item) => item.id === "27")
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
                  <h4>Hydraulic Kidney Loop or Off-line Filtration</h4>
                  <br />
                  <p>
                    Explore the benefits of hydraulic kidney loop or off-line
                    filtration systems in maintaining proper cleanliness levels
                    in hydraulic systems. In this video, we&#39;ll discuss how
                    off-line filtration offers advantages such as reduced
                    maintenance, uninterrupted machine operation, and
                    flexibility in filter micron ratings without affecting
                    system pressure.
                  </p>
                  <br />
                  <h4>Advantages of Off-line Filtration</h4>
                  <ul>
                    <li>
                      <strong>Lower Maintenance:</strong> Off-line filtration
                      systems provide continuous filtration of hydraulic fluid,
                      reducing the frequency of maintenance intervals compared
                      to traditional in-line filtration systems.
                    </li>
                    <li>
                      <strong>No Interruption:</strong> With off-line
                      filtration, there&#39;s no need to interrupt machine
                      operation to change filters, minimizing downtime and
                      maximizing productivity.
                    </li>
                    <li>
                      <strong>Flexibility in Micron Ratings:</strong> Off-line
                      filters allow operators to easily adjust the micron rating
                      without impacting the pressure in the hydraulic system.
                      This flexibility ensures efficient removal of contaminants
                      based on specific requirements.
                    </li>
                  </ul>
                  <br />
                  <p>
                    Off-line filtration systems, also known as kidney loop
                    filtration, involve diverting a portion of the hydraulic
                    fluid from the main system through a separate filtration
                    unit. This allows for continuous cleaning of the fluid,
                    independent of the main hydraulic circuit.
                  </p>
                  <br />
                  <p>
                    By removing contaminants such as dirt, debris, and
                    particles, off-line filtration helps maintain the
                    cleanliness levels of hydraulic fluid within optimal ranges.
                    Clean hydraulic fluid is essential for preventing component
                    wear, minimizing downtime, and ensuring the reliability and
                    longevity of hydraulic systems.
                  </p>
                  <br />
                  <p>
                    Off-line filtration systems are particularly beneficial in
                    industries where hydraulic equipment operates in harsh
                    environments or experiences heavy contamination. By keeping
                    the hydraulic fluid clean and free of contaminants, these
                    systems contribute to improved equipment performance and
                    reduced maintenance costs over time.
                  </p>
                  <br />
                  <p>
                    Whether it&#39;s in manufacturing, construction, mining, or
                    other industrial sectors, the use of off-line filtration
                    systems offers significant advantages in maintaining
                    hydraulic system integrity and prolonging the service life
                    of hydraulic components.
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

export default PostEnglish27;
