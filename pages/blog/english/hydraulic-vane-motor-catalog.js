import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish31 = ({ db }) => {
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
        .filter((item) => item.id === "31")
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
                  <h4>Hydraulic Vane Motor Catalog</h4>
                  <br />
                  <p>
                    Welcome to our comprehensive guide on hydraulic vane motors.
                    In this video, we delve into the technical intricacies of
                    hydraulic vane motors, providing essential information for
                    proper sizing and selection to suit various hydraulic
                    applications.
                  </p>
                  <br />
                  <ul>
                    <li>
                      Hydraulic vane motors are widely used in industrial and
                      mobile hydraulic systems due to their efficiency,
                      reliability, and compact design.
                    </li>
                    <li>
                      Understanding the technical specifications of hydraulic
                      vane motors is crucial for ensuring optimal performance
                      and longevity in hydraulic systems.
                    </li>
                    <li>
                      Proper sizing and selection of hydraulic vane motors
                      involve considerations such as torque requirements,
                      operating speeds, pressure ratings, and mounting options.
                    </li>
                    <li>
                      Referencing reliable catalogs and technical documents is
                      essential for obtaining detailed information on various
                      hydraulic vane motor models available in the market.
                    </li>
                  </ul>
                  <br />
                  <p>
                    For a comprehensive catalog of hydraulic vane motors, we
                    recommend consulting{" "}
                    <a
                      href="https://www.tu.biz/pdf/hydraulic-vane-motor-catalog.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      this PDF catalog
                    </a>{" "}
                    provided by a trusted hydraulic equipment supplier.
                  </p>
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

export default PostEnglish31;
