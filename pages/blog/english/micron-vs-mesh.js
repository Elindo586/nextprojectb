import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish50 = ({ db }) => {
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
        .filter((item) => item.id === "50")
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
                    <h4>Micron vs. Mesh in Hydraulic Fluid Power Filtration</h4>

                    <h4>Introduction</h4>
                    <p>
                      Welcome to our video call presentation where we will
                      explore the crucial topic of "Micron vs. Mesh" in
                      hydraulic fluid power filtration. Effective filtration is
                      essential to maintain the cleanliness and performance of
                      hydraulic systems, and understanding the differences
                      between micron and mesh ratings is key to achieving this.
                      In this session, we will provide an in-depth comparison of
                      these filtration methods, their applications, and their
                      impact on hydraulic machinery.
                    </p>

                    <h4>Micron Filtration</h4>
                    <p>
                      Micron filtration is a method of filtering hydraulic fluid
                      based on particle size, measured in microns. It is a
                      highly precise filtration process, removing particles of a
                      specified size or smaller from the fluid. During our video
                      call, we will explore the benefits and applications of
                      micron filtration, including its role in maintaining the
                      longevity and efficiency of hydraulic components.
                    </p>

                    <h4>Mesh Filtration</h4>
                    <p>
                      Mesh filtration, on the other hand, employs a screen with
                      a defined mesh size to capture particles that are larger
                      than the specified opening size. Mesh filtration is known
                      for its versatility and reliability, making it suitable
                      for various hydraulic systems. We will discuss the
                      advantages of mesh filtration and its effectiveness in
                      different industrial settings during our video call.
                    </p>

                    <h4>Applications and Considerations</h4>
                    <p>
                      Understanding the appropriate use of micron and mesh
                      filtration is critical. We will delve into the specific
                      applications where one method might be more advantageous
                      than the other. Whether you are dealing with heavy
                      machinery, mobile equipment, or precision manufacturing,
                      our video call will provide insights into selecting the
                      right filtration method for your hydraulic system.
                    </p>

                    <h4>Choosing the Right Filtration</h4>
                    <p>
                      Making the right choice between micron and mesh filtration
                      can significantly impact the performance and maintenance
                      of your hydraulic system. We will offer guidance on how to
                      select the most suitable filtration method based on your
                      system's requirements and operational conditions. This
                      knowledge will enable you to make informed decisions that
                      ensure the longevity and efficiency of your hydraulic
                      machinery.
                    </p>

                    <h4>Conclusion</h4>
                    <p>
                      In conclusion, our video call on "Micron vs. Mesh in
                      Hydraulic Fluid Power Filtration" is an opportunity to
                      gain a comprehensive understanding of these critical
                      filtration methods. By the end of the session, you will be
                      well-equipped to choose the appropriate filtration
                      technique for your hydraulic system, ensuring its optimal
                      performance and longevity. We look forward to your
                      participation and invite you to join us for an
                      enlightening discussion on this vital aspect of hydraulic
                      technology.
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

export default PostEnglish50;
