import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish34 = ({ db }) => {
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
        .filter((item) => item.id === "34")
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
                    <h4>Hydraulic Dump Pump Catalog</h4>
                    <p>
                      Welcome to our comprehensive guide on hydraulic gear
                      pumps, specifically focusing on dump pumps for series C101
                      and C102. These pumps play a crucial role in various
                      hydraulic systems, offering efficient fluid transfer and
                      control.
                    </p>
                    <p>
                      If you&#39;re seeking detailed technical information,
                      range, and selection criteria for dump pumps, you&#39;re
                      in the right place.
                    </p>
                    <p>In this video, we delve into:</p>
                    <ul>
                      <li>
                        Technical specifications for dump pumps in series C101
                        and C102.
                      </li>
                      <li>Range of applications where these pumps excel.</li>
                      <li>
                        Key selection considerations for matching the right pump
                        to your hydraulic system.
                      </li>
                    </ul>
                    <p>
                      To further aid your exploration and decision-making
                      process, we&#39;ve provided a catalog for the C101 and
                      C102 gear pumps. You can access it{" "}
                      <a href="https://www.tu.biz/pdf/dump-pumps.pdf">here</a>.
                    </p>
                    <p>
                      Whether you&#39;re a hydraulic system enthusiast, a
                      professional engineer, or a technician looking to enhance
                      system performance, this video and catalog combination
                      offer valuable insights and resources.
                    </p>
                    <p>
                      Stay tuned, and let&#39;s dive deep into the world of
                      hydraulic dump pumps!
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

export default PostEnglish34;
