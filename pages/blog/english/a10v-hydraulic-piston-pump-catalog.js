import React from "react";
// import { useEffect } from "react";
import VideoBlogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish24 = ({ db }) => {
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
        .filter((item) => item.id === "24")
        .map((item) => {
          return (
            <VideoBlogger2
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
                  <br></br>
                  <article>
                    <h4>A-10V Hydraulic Piston Pumps Catalog</h4>

                    <h4>Introduction</h4>
                    <p>
                      We are excited to welcome you to our video call
                      presentation where we will explore the extensive A-10V
                      Hydraulic Piston Pumps Catalog. These hydraulic piston
                      pumps represent a pinnacle in hydraulic engineering,
                      delivering exceptional performance and reliability. In
                      this session, we will provide a comprehensive overview of
                      our catalog, highlighting the diverse range of pump
                      models, their applications, and the advantages they offer
                      in various hydraulic systems.
                    </p>

                    <h4>Discovering the Catalog</h4>
                    <p>
                      Our catalog is a valuable resource for professionals and
                      experts in the field of hydraulics. During the video call,
                      we will navigate through the catalog&#39;s sections,
                      offering insights into the specifications, features, and
                      options available with our A-10V hydraulic piston pumps.
                      Whether you are involved in industrial machinery, mobile
                      applications, or other hydraulic systems, our catalog
                      covers a spectrum of solutions tailored to your specific
                      needs.
                    </p>

                    <h4>Key Features and Benefits</h4>
                    <p>
                      Our A-10V hydraulic piston pumps are celebrated for their
                      high efficiency, robust design, and adaptability to
                      diverse applications. These pumps are engineered to
                      deliver peak performance and durability, making them the
                      preferred choice for industries such as construction,
                      manufacturing, and agriculture. Our video call will
                      provide a detailed exploration of the features and
                      benefits, shedding light on how these pumps can elevate
                      your hydraulic systems.
                    </p>

                    <h4>Applications</h4>
                    <p>
                      A-10V hydraulic piston pumps find application in a wide
                      array of scenarios. From powering heavy-duty machinery to
                      enabling precision control in various equipment, our pumps
                      play a pivotal role in enhancing productivity across
                      industries. We will showcase real-world applications,
                      demonstrating how our pumps contribute to the success of
                      different sectors, and how they can meet your specific
                      needs.
                    </p>

                    <h4>Choosing the Right Pump</h4>
                    <p>
                      Selecting the most suitable A-10V hydraulic piston pump is
                      a critical aspect of optimizing your hydraulic systems.
                      Our video call will offer guidance on making informed
                      decisions based on factors such as flow rate, pressure
                      requirements, and environmental conditions. With our
                      catalog as your reference, you can confidently choose the
                      pump that aligns with your application&#39;s unique
                      demands.
                    </p>

                    <h4>Conclusion</h4>
                    <p>
                      In conclusion, our video call focusing on the A-10V
                      Hydraulic Piston Pumps Catalog is an opportunity to deepen
                      your understanding of these essential hydraulic
                      components. By the end of this session, you will be
                      well-equipped to make informed choices regarding your
                      hydraulic system requirements. We look forward to your
                      participation and invite you to join us for an
                      enlightening discussion on this cornerstone of hydraulic
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

export default PostEnglish24;
