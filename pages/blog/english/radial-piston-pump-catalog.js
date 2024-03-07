import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish23 = ({ db }) => {
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
        .filter((item) => item.id === "23")
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
                  <br></br>
                  <article>
                    <h4>Hydraulic Radial Piston Pumps Catalog</h4>

                    <h4>Introduction</h4>
                    <p>
                      Welcome to our video call presentation where we will
                      explore our comprehensive Hydraulic Radial Piston Pumps
                      Catalog. Hydraulic radial piston pumps are a vital
                      component in various hydraulic systems, offering
                      efficiency, reliability, and versatility. In this session,
                      we will provide an in-depth look at the catalog,
                      discussing the various pump models, applications, and the
                      advantages they offer in hydraulic machinery and
                      equipment.
                    </p>

                    <h4>Exploring the Catalog</h4>
                    <p>
                      Our catalog is a valuable resource for engineers,
                      technicians, and professionals working with hydraulic
                      systems. During the video call, we will guide you through
                      the catalog's sections, highlighting the key features and
                      specifications of our hydraulic radial piston pumps. From
                      high-pressure applications in industrial machinery to
                      precise control in mobile equipment, our catalog covers a
                      wide range of solutions to meet your hydraulic needs.
                    </p>

                    <h4>Key Features and Benefits</h4>
                    <p>
                      We will delve into the key features and benefits of our
                      hydraulic radial piston pumps, including their high
                      efficiency, long service life, and adaptability to various
                      hydraulic systems. These pumps are known for their
                      exceptional performance, making them an ideal choice for
                      industries such as construction, manufacturing, and
                      agriculture. Our video call will offer insights into how
                      these features can enhance your hydraulic applications.
                    </p>

                    <h4>Applications</h4>
                    <p>
                      Hydraulic radial piston pumps find use in a wide array of
                      applications. Whether you need to lift heavy loads,
                      operate precision machinery, or power hydraulic presses,
                      our catalog includes pumps suitable for your specific
                      requirements. We will showcase real-world examples and
                      discuss how our pumps contribute to the success of various
                      industries, making this video call a valuable resource for
                      understanding the versatility of these products.
                    </p>

                    <h4>Choosing the Right Pump</h4>
                    <p>
                      Selecting the right hydraulic radial piston pump is
                      crucial for the success of your hydraulic system. We will
                      offer guidance on how to make an informed choice based on
                      your specific needs, including flow rate, pressure
                      requirements, and environmental factors. With our catalog
                      as your reference, you can confidently choose the pump
                      that best suits your application.
                    </p>

                    <h4>Conclusion</h4>
                    <p>
                      In conclusion, our video call on the Hydraulic Radial
                      Piston Pumps Catalog is an opportunity to gain a deeper
                      understanding of these essential hydraulic components. By
                      the end of the session, you'll be equipped with the
                      knowledge needed to make informed decisions regarding your
                      hydraulic system requirements. We look forward to your
                      participation and invite you to join us for an informative
                      discussion on this critical aspect of hydraulic
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

export default PostEnglish23;
