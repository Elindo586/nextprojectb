import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish30 = ({ db }) => {
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
        .filter((item) => item.id === "30")
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
                  <h4>Pilot Crossover Check Valves</h4>
                  <br />
                  <p>
                    Join us in this video as we explore the operation of
                    pilot-operated crossover check valves in hydraulic circuits.
                  </p>
                  <br />
                  <ul>
                    <li>
                      Pilot crossover check valves play a critical role in
                      hydraulic systems by allowing flow in one direction while
                      preventing reverse flow.
                    </li>
                    <li>
                      These valves consist of a main check valve and a
                      pilot-operated control valve, providing reliable fluid
                      control and directionality.
                    </li>
                    <li>
                      Understanding the principles of operation of pilot
                      crossover check valves is essential for optimizing
                      hydraulic system performance and efficiency.
                    </li>
                    <li>
                      We&#39;ll discuss the functionality of pilot crossover
                      check valves, including how they maintain fluid pressure
                      and prevent system instability.
                    </li>
                  </ul>
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

export default PostEnglish30;
