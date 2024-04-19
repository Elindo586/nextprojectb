import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish35 = ({ db }) => {
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
        .filter((item) => item.id === "35")
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
                    <h4>Hydraulic Pump Displacement Calculation</h4>
                    <p>
                      Calculating the displacement of a hydraulic pump is
                      essential for designing and sizing hydraulic systems. In
                      this enlightening YouTube video, viewers are introduced to
                      the process of determining hydraulic pump displacement in
                      cubic inches using a simple formula: displacement = (gpm x
                      231) / rpm.
                    </p>
                    <p>
                      Here&#39;s a breakdown of the key points covered in the
                      video:
                    </p>
                    <ul>
                      <li>
                        An explanation of hydraulic pump displacement and its
                        significance in hydraulic system design.
                      </li>
                      <li>
                        Understanding the variables involved in the displacement
                        calculation: gallons per minute (gpm) and revolutions
                        per minute (rpm).
                      </li>
                      <li>
                        Practical examples demonstrating how to apply the
                        displacement formula to calculate the pump&#39;s
                        displacement for various hydraulic applications.
                      </li>
                      <li>
                        Considerations for selecting the appropriate pump
                        displacement to meet system requirements, including flow
                        rate and operating speed.
                      </li>
                      <li>
                        Tips for optimizing pump selection to achieve desired
                        system performance and efficiency.
                      </li>
                    </ul>
                    <p>
                      By providing clear instructions and examples, the video
                      equips viewers with the knowledge and skills needed to
                      accurately calculate hydraulic pump displacement and make
                      informed decisions when designing hydraulic systems.
                    </p>
                    <p>
                      Whether you&#39;re a hydraulic engineer, technician, or
                      enthusiast seeking to deepen your understanding of
                      hydraulic system design principles, &#34;Hydraulic Pump
                      Displacement Calculation&#34; offers valuable insights and
                      guidance.
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

export default PostEnglish35;
