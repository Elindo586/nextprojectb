import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish37 = ({ db }) => {
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
        .filter((item) => item.id === "37")
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
                    <h4>Hydraulic Directional Control Valves Catalog</h4>
                    <p>
                      Hydraulic directional control valves are essential
                      components in hydraulic systems, enabling precise control
                      over the flow direction of hydraulic fluid. In this
                      informative YouTube video, viewers are introduced to the
                      range, configuration, and proper selection of hydraulic
                      directional control valves.
                    </p>
                    <p>Here&#39;s what you&#39;ll learn in the video:</p>
                    <ul>
                      <li>
                        An overview of the different types and configurations of
                        hydraulic directional control valves available in the
                        market.
                      </li>
                      <li>
                        Explanation of the key features and specifications to
                        consider when selecting directional control valves for
                        specific applications.
                      </li>
                      <li>
                        Guidance on how to navigate through a hydraulic
                        directional control valves catalog to find the most
                        suitable valve for your needs.
                      </li>
                      <li>
                        Case studies illustrating real-world applications and
                        scenarios where proper selection of directional control
                        valves is critical for system performance and
                        efficiency.
                      </li>
                    </ul>
                    <p>
                      If you&#39;re looking to explore a comprehensive catalog
                      of hydraulic directional control valves, be sure to check
                      out{" "}
                      <a
                        href="https://www.tu.biz/products/industrial-valves/directional-control-valves"
                        target="_blank"
                        rel="noreferrer"
                      >
                        this link
                      </a>
                      .
                    </p>
                    <p>
                      By understanding the range and configuration of available
                      hydraulic directional control valves and learning how to
                      properly select them for specific applications, viewers
                      can enhance the functionality and performance of their
                      hydraulic systems.
                    </p>
                    <p>
                      Whether you&#39;re a hydraulic engineer, technician, or
                      enthusiast, &#34;Hydraulic Directional Control Valves
                      Catalog&#34; provides valuable insights and resources to
                      help you make informed decisions when it comes to
                      selecting directional control valves.
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

export default PostEnglish37;
