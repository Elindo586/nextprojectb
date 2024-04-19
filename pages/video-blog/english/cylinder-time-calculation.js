import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish41 = ({ db }) => {
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
        .filter((item) => item.id === "41")
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
                    <h4>Cylinder Time Calculation</h4>
                    <p>
                      In the realm of hydraulic systems, calculating cylinder
                      time is a crucial aspect that engineers and technicians
                      often encounter. A recent YouTube video breaks down the
                      process of determining cylinder time in seconds using a
                      simple formula: Cylinder time = (area x stroke x 0.26) /
                      gpm.
                    </p>
                    <p>
                      Here&#39;s a brief overview of the key points covered in
                      the video:
                    </p>
                    <ul>
                      <li>
                        Explanation of the cylinder time formula, highlighting
                        the variables involved: area, stroke, and gallons per
                        minute (gpm).
                      </li>
                      <li>
                        Understanding the significance of each variable in the
                        context of hydraulic systems.
                      </li>
                      <li>
                        Practical examples demonstrating the application of the
                        formula in real-world scenarios, such as sizing
                        hydraulic cylinders for specific tasks.
                      </li>
                      <li>
                        Tips and techniques for optimizing cylinder time
                        calculations to enhance system efficiency and
                        performance.
                      </li>
                      <li>
                        Considerations for selecting appropriate cylinder sizes
                        and flow rates to meet operational requirements.
                      </li>
                    </ul>
                    <p>
                      By providing clear explanations and illustrative examples,
                      the video equips viewers with the knowledge and skills
                      needed to calculate cylinder time accurately and
                      efficiently.
                    </p>
                    <p>
                      Whether you&#39;re a hydraulic system designer,
                      maintenance engineer, or enthusiast seeking to deepen your
                      understanding of fluid power, &#34;Cylinder Time
                      Calculation&#34; offers valuable insights into this
                      essential aspect of hydraulic engineering.
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

export default PostEnglish41;
