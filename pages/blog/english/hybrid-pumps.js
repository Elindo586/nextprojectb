import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish48 = ({ db }) => {
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
        .filter((item) => item.id === "48")
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
                    <h4>Exploring Hydraulic Hybrid Pumps</h4>
                    <p>
                      In the realm of hydraulic systems, the concept of
                      hybridity has often led to innovative designs. One such
                      intriguing innovation is the Hydraulic Hybrid Pump, a
                      fascinating amalgamation of technology that has reshaped
                      the landscape of hydraulic engineering.
                    </p>
                    <p>
                      Titled &#34;Hydraulic Hybrid Pumps,&#34; a recent YouTube
                      video delves into the intricacies of these pumps, shedding
                      light on their composition and functionality.
                    </p>
                    <p>
                      At its core, a hydraulic hybrid pump comprises a single
                      inlet pump with two distinct outlets. This unique
                      configuration allows for versatile operation, catering to
                      diverse hydraulic system requirements.
                    </p>
                    <p>
                      The video elucidates that one of the outlets originates
                      from a hydraulic variable piston pump, offering dynamic
                      flow control and adaptability to varying operational
                      demands. Conversely, the other outlet stems from a fixed
                      displacement vane pump, providing consistent flow rates
                      essential for certain applications.
                    </p>
                    <p>
                      Despite their ingenuity and utility, the video underscores
                      a somber reality – hydraulic hybrid pumps are no longer in
                      production. This revelation hints at shifting trends in
                      hydraulic technology, perhaps indicating a pivot towards
                      more advanced and specialized solutions.
                    </p>
                    <p>
                      Nevertheless, the legacy of hydraulic hybrid pumps
                      persists as a testament to human ingenuity and the
                      relentless pursuit of efficiency in hydraulic systems.
                    </p>
                    <h4>Key Points Highlighted:</h4>
                    <ul>
                      <li>
                        Hydraulic hybrid pumps combine a single inlet pump with
                        two outlets.
                      </li>
                      <li>
                        One outlet is sourced from a hydraulic variable piston
                        pump, offering dynamic flow control.
                      </li>
                      <li>
                        The other outlet originates from a fixed displacement
                        vane pump, ensuring consistent flow rates.
                      </li>
                      <li>
                        These pumps are no longer in production, signaling a
                        shift in hydraulic technology trends.
                      </li>
                      <li>
                        Hydraulic hybrid pumps exemplify human ingenuity and the
                        pursuit of efficiency in hydraulic systems.
                      </li>
                    </ul>
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

export default PostEnglish48;
