import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish43 = ({ db }) => {
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
        .filter((item) => item.id === "43")
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
                    <h4>How Does Fluid Power Work?</h4>
                    <p>
                      Fluid power is a fundamental principle underlying many
                      engineering systems, particularly in hydraulic
                      applications. Understanding how fluid power works is
                      crucial for engineers and technicians working in various
                      industries, from construction to manufacturing. In a
                      recent YouTube video, we delve into the intricacies of
                      fluid power and its real-life applications.
                    </p>
                    <p>Here are some key points covered in the video:</p>
                    <ul>
                      <li>The basic principles of hydraulic fluid power.</li>
                      <li>
                        How hydraulic systems utilize fluids to transmit power.
                      </li>
                      <li>
                        The components of a typical hydraulic system, such as
                        pumps, valves, actuators, and reservoirs.
                      </li>
                      <li>
                        Real-life examples demonstrating the effectiveness of
                        fluid power in various applications, including heavy
                        machinery, automotive systems, and aircraft.
                      </li>
                      <li>
                        The advantages of using fluid power systems, including
                        high power density, precise control, and ability to
                        operate in harsh environments.
                      </li>
                      <li>
                        Challenges and considerations in designing and
                        maintaining hydraulic systems.
                      </li>
                    </ul>
                    <p>
                      By illustrating these concepts and examples, the video
                      offers viewers a comprehensive understanding of fluid
                      power and its practical significance in modern
                      engineering.
                    </p>
                    <p>
                      Whether you&#39;re a seasoned engineer or a curious
                      enthusiast, &#34;How Does Fluid Power Work?&#34; provides
                      valuable insights into this essential aspect of mechanical
                      engineering.
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

export default PostEnglish43;
