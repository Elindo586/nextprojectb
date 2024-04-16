import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish40 = ({ db }) => {
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
        .filter((item) => item.id === "40")
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
                    <h4>Hydraulic Cylinder Horsepower Calculation</h4>
                    <p>
                      Understanding the horsepower requirements of hydraulic
                      cylinders is essential for designing and optimizing
                      hydraulic systems. In a recent YouTube video, viewers are
                      introduced to the concept of calculating cylinder
                      horsepower using a straightforward formula: Cylinder HP =
                      (Cylinder Speed x Cylinder Force) / 33,000.
                    </p>
                    <p>
                      Here&#39;s a breakdown of the key points covered in the
                      video:
                    </p>
                    <ul>
                      <li>
                        An explanation of the cylinder horsepower formula,
                        highlighting the variables involved: cylinder speed and
                        cylinder force.
                      </li>
                      <li>
                        The significance of horsepower in hydraulic systems and
                        its role in determining system performance.
                      </li>
                      <li>
                        Practical examples demonstrating how to apply the
                        formula to calculate cylinder horsepower for various
                        hydraulic applications.
                      </li>
                      <li>
                        Considerations for optimizing cylinder speed and force
                        to achieve desired performance levels while minimizing
                        energy consumption.
                      </li>
                      <li>
                        Real-world case studies showcasing the importance of
                        accurate horsepower calculations in hydraulic system
                        design and operation.
                      </li>
                    </ul>
                    <p>
                      By providing clear guidance and examples, the video
                      empowers viewers to accurately calculate cylinder
                      horsepower and make informed decisions when designing and
                      operating hydraulic systems.
                    </p>
                    <p>
                      Whether you&#39;re a hydraulic engineer, technician, or
                      enthusiast, &#34;Hydraulic Cylinder Horsepower
                      Calculation&#34; offers valuable insights into this
                      critical aspect of hydraulic engineering.
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

export default PostEnglish40;
