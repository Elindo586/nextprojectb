import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish33 = ({ db }) => {
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
        .filter((item) => item.id === "33")
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
                    <h4>Coiled Electrical Cable</h4>
                    <p>
                      Welcome to our latest video showcasing the versatility and
                      convenience of coiled electrical cables. If you&#39;re in
                      need of reliable electrical cables that offer flexibility
                      and ease of use, you&#39;re in the right place!
                    </p>
                    <p>In this video, we highlight:</p>
                    <ul>
                      <li>
                        The benefits of coiled electrical cables in various
                        applications.
                      </li>
                      <li>
                        How these cables provide flexibility and reduce
                        tangling.
                      </li>
                      <li>
                        Examples of industries and scenarios where coiled cables
                        excel.
                      </li>
                    </ul>
                    <p>
                      At TU.BIZ, we specialize in providing high-quality coiled
                      electrical cables tailored to meet your specific needs.
                      Whether you require custom lengths, different gauge sizes,
                      or specialized connectors, we&#39;ve got you covered.
                    </p>
                    <p>
                      Don&#39;t hesitate to contact us today to discuss your
                      requirements and to purchase coiled electrical cables that
                      perfectly suit your application. Our team of experts is
                      ready to assist you every step of the way.
                    </p>
                    <p>
                      Experience the convenience and reliability of coiled
                      electrical cables with TU.BIZ . Contact us now!
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

export default PostEnglish33;
