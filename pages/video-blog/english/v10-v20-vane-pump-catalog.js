import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish46 = ({ db }) => {
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
        .filter((item) => item.id === "46")
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
                    <h4>
                      Understanding V10 / V20 Vane Pump Catalog: A Technical
                      Guide
                    </h4>
                    <p>
                      Welcome to our comprehensive guide on the V10 / V20 vane
                      pump catalog. In this video, we delve into the technical
                      intricacies of hydraulic vane pumps, specifically focusing
                      on the V10 and V20 series.
                    </p>
                    <p>
                      Hydraulic vane pumps are essential components in various
                      industrial applications, providing reliable fluid power
                      transmission. Proper selection and sizing of these pumps
                      are crucial for optimal performance and efficiency in
                      hydraulic systems.
                    </p>
                    <h4>Key Points Covered:</h4>
                    <ul>
                      <li>Overview of V10 and V20 Vane Pumps</li>
                      <li>Functionalities and Applications</li>
                      <li>Technical Specifications</li>
                      <li>Performance Characteristics</li>
                      <li>Operating Parameters</li>
                      <li>Installation Guidelines</li>
                    </ul>
                    <p>
                      To assist you further in understanding and selecting the
                      right vane pump for your application, we highly recommend
                      referring to our comprehensive catalog. This catalog
                      provides detailed information on the V10 and V20 series,
                      including performance curves, dimensions, and
                      configuration options.
                    </p>
                    <p>
                      You can access the catalog{" "}
                      <a
                        href="https://www.tu.biz/pdf/v10-v20-vane-pump-catalog.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        here
                      </a>
                      .
                    </p>
                    <p>
                      Whether you&#39;re an engineer, technician, or enthusiast
                      in the field of hydraulics, utilizing the catalog will aid
                      in making informed decisions and ensuring optimal
                      performance of your hydraulic systems.
                    </p>
                    <p>
                      Thank you for watching, and don&#39;t hesitate to reach
                      out to us for any further inquiries or assistance
                      regarding V10 and V20 vane pumps.
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

export default PostEnglish46;
