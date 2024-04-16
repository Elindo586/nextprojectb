import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish47 = ({ db }) => {
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
        .filter((item) => item.id === "47")
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
                    <h4>Understanding the Mechanics of Gear Pumps</h4>
                    <p>
                      &#34;How Does a Gear Pump Work?&#34; – This intriguing
                      question serves as the focal point of a recent YouTube
                      video, offering a comprehensive exploration into the inner
                      workings of gear pumps.
                    </p>
                    <p>
                      At its core, the operation of a gear pump hinges on a
                      simple yet effective principle. The video elucidates that
                      these pumps function by suctioning oil from the inlet,
                      subsequently transferring the fluid through a series of
                      interlocking gears to the outlet.
                    </p>
                    <p>
                      The mechanics behind this process are elegantly
                      straightforward. As the gears rotate, fluid is trapped in
                      the spaces between the gear teeth, creating a continuous
                      flow path from the inlet to the outlet. This seamless
                      transfer of fluid enables gear pumps to efficiently
                      fulfill their intended purpose in various hydraulic
                      systems.
                    </p>
                    <p>
                      Through insightful visualizations and detailed
                      explanations, the video provides viewers with a deeper
                      understanding of the intricate dynamics at play within
                      gear pumps. From the precise alignment of gears to the
                      meticulous engineering behind fluid displacement, every
                      aspect of the pump&#39;s functionality is meticulously
                      dissected.
                    </p>
                    <p>
                      Moreover, the video emphasizes the versatility and
                      reliability of gear pumps, showcasing their widespread
                      application across diverse industries. Whether in
                      automotive systems, industrial machinery, or hydraulic
                      equipment, gear pumps stand as stalwart components,
                      facilitating fluid transfer with precision and efficiency.
                    </p>
                    <h4>Key Insights Explored:</h4>
                    <ul>
                      <li>
                        A gear pump operates by suctioning oil from the inlet
                        and transferring fluid through interlocking gears.
                      </li>
                      <li>
                        Fluid is trapped between gear teeth, creating a
                        continuous flow path from inlet to outlet.
                      </li>
                      <li>
                        The video offers detailed visualizations and
                        explanations of gear pump mechanics.
                      </li>
                      <li>
                        Gear pumps are renowned for their versatility and
                        reliability across various industries.
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

export default PostEnglish47;
