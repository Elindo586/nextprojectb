import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish39 = ({ db }) => {
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
        .filter((item) => item.id === "39")
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

                  <p>
                    {" "}
                    Join us in this video to learn about our Eaton/Vickers
                    crossovers.{" "}
                  </p>
                  <br />
                  <article>
                    <h4>Eaton Vickers Crossovers</h4>

                    <p>
                      When it comes to hydraulic components and systems,
                      compatibility and interchangeability are vital for
                      maintaining and upgrading equipment. Eaton Vickers, a
                      prominent name in the hydraulic industry, offers a range
                      of hydraulic components that are trusted for their quality
                      and performance. However, in the dynamic world of
                      hydraulics, it&#39;s not uncommon to encounter situations
                      where components need to be replaced or upgraded.
                    </p>

                    <p>
                      Enter the concept of Eaton Vickers crossovers. These
                      crossovers serve as the bridge between old and new
                      hydraulic components, ensuring that your system remains
                      efficient and up to date. In this article, we&#39;ll
                      explore the significance of Eaton Vickers crossovers and
                      how they play a crucial role in hydraulic systems.
                    </p>

                    <h4>Understanding Hydraulic Component Crossovers</h4>
                    <p>
                      Hydraulic component crossovers, including those for Eaton
                      Vickers products, are designed to help users seamlessly
                      transition from one component to another without causing
                      disruptions or compatibility issues. This is particularly
                      important when you have an existing hydraulic system that
                      needs an upgrade, but you want to avoid extensive
                      modifications.
                    </p>

                    <h4>The Role of Eaton Vickers Crossovers</h4>
                    <p>
                      Eaton Vickers crossovers are engineered to match the
                      specifications and performance characteristics of their
                      hydraulic components. This means that when you need to
                      replace a Vickers hydraulic pump, valve, or other part,
                      you can find a crossover component that fits perfectly
                      into your existing system without requiring significant
                      alterations.
                    </p>

                    <p>
                      These crossovers are designed to provide a seamless
                      transition, ensuring that your hydraulic system continues
                      to operate at its best. Whether you are upgrading for
                      improved efficiency, replacing a discontinued component,
                      or maintaining an older system, Eaton Vickers crossovers
                      are an invaluable solution.
                    </p>

                    <h4>Benefits of Eaton Vickers Crossovers</h4>
                    <p>
                      The advantages of using Eaton Vickers crossovers are
                      numerous:
                    </p>
                    <ul>
                      <li>
                        <strong>Cost-Effective:</strong> Crossovers save you the
                        expense and time associated with extensive modifications
                        or system overhauls.
                      </li>
                      <li>
                        <strong>Minimized Downtime:</strong> The quick and easy
                        installation of crossovers reduces downtime, keeping
                        your operations running smoothly.
                      </li>
                      <li>
                        <strong>Compatibility:</strong> Vickers crossovers are
                        engineered to ensure compatibility with your existing
                        hydraulic system.
                      </li>
                      <li>
                        <strong>Efficiency and Performance:</strong> By using
                        Vickers crossovers, you can upgrade your system&#39;s
                        efficiency and performance with minimal effort.
                      </li>
                    </ul>

                    <h4>Conclusion</h4>
                    <p>
                      Eaton Vickers crossovers play a significant role in the
                      hydraulic industry, offering a simple and effective way to
                      upgrade or replace hydraulic components in existing
                      systems. Whether you are looking to enhance the
                      performance of your hydraulic system or maintain an older
                      setup, these crossovers are the key to a seamless
                      transition. As the hydraulic industry continues to evolve,
                      Eaton Vickers crossovers ensure that your equipment
                      remains current, efficient, and reliable.
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

export default PostEnglish39;
