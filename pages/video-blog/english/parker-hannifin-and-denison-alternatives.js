import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish52 = ({ db }) => {
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
        .filter((item) => item.id === "52")
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
                      Discover Hydraulic Alternatives: Parker Hannifin / Denison
                      Replacements
                    </h4>
                    <p>
                      Welcome to our overview of hydraulic alternatives for
                      Parker Hannifin / Denison products! In this video,
                      we&#39;ll introduce you to our range of hydraulic vane
                      pumps, vane pump cart kits, hydraulic pumps, and dump
                      pumps, offering competitive pricing and fast delivery as
                      replacements for Parker Hannifin / Denison products.
                      Let&#39;s explore our hydraulic solutions!
                    </p>

                    <h4>Why Choose Our Hydraulic Alternatives?</h4>

                    <p>
                      We understand the importance of reliable hydraulic
                      components in your applications. That&#39;s why we offer
                      high-quality alternatives to Parker Hannifin / Denison
                      products, providing the following benefits:
                    </p>

                    <ul>
                      <li>
                        <strong>Quality Assurance:</strong> Our hydraulic
                        alternatives undergo rigorous testing and quality
                        control measures to ensure performance and reliability
                        that meet or exceed industry standards.
                      </li>
                      <li>
                        <strong>Cost-Effective Solutions:</strong> We offer
                        competitive pricing on our hydraulic replacements,
                        allowing you to achieve cost savings without
                        compromising on quality or performance.
                      </li>
                      <li>
                        <strong>Fast Delivery:</strong> With our efficient
                        supply chain and logistics network, we prioritize prompt
                        delivery to minimize downtime and keep your operations
                        running smoothly.
                      </li>
                      <li>
                        <strong>Wide Product Range:</strong> Our selection
                        includes hydraulic vane pumps, vane pump cart kits,
                        hydraulic pumps, and dump pumps, providing comprehensive
                        solutions for various hydraulic applications.
                      </li>
                    </ul>

                    <h4>
                      Hydraulic Alternatives for Parker Hannifin / Denison
                      Products
                    </h4>

                    <p>
                      Our hydraulic replacements cover a range of products
                      previously offered by Parker Hannifin / Denison,
                      including:
                    </p>

                    <ul>
                      <li>
                        <strong>Vane Pumps:</strong> Our hydraulic vane pumps
                        deliver reliable performance and efficient fluid
                        transfer, suitable for a wide range of hydraulic systems
                        and applications.
                      </li>
                      <li>
                        <strong>Vane Pump Cart Kits:</strong> We offer
                        convenient cart kits for vane pumps, providing all the
                        necessary components for easy installation and
                        operation.
                      </li>
                      <li>
                        <strong>Hydraulic Pumps:</strong> Our hydraulic pumps
                        are designed to meet the demands of high-pressure
                        hydraulic systems, ensuring smooth and consistent fluid
                        flow.
                      </li>
                      <li>
                        <strong>Dump Pumps:</strong> Our dump pumps offer
                        reliable hydraulic power for dump truck applications,
                        with robust construction and efficient operation.
                      </li>
                    </ul>

                    <h4>Conclusion</h4>

                    <p>
                      When it comes to hydraulic replacements for Parker
                      Hannifin / Denison products, we&#39;ve got you covered.
                      With our high-quality alternatives, competitive pricing,
                      and fast delivery, you can trust us to keep your hydraulic
                      systems running smoothly. Explore our range of hydraulic
                      solutions today and experience the difference!
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

export default PostEnglish52;
