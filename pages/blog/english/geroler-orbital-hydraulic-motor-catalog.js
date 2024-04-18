import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish44 = ({ db }) => {
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
        .filter((item) => item.id === "44")
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
                    <h4>Hydraulic Geroler / Orbital motor catalog</h4>
                    <p>
                      Are you in search of a comprehensive technical catalog to
                      assist in the proper selection of geroler/orbital
                      hydraulic motors? Look no further! We present to you a
                      detailed guide to aid in your decision-making process.
                    </p>
                    <p>
                      Our catalog provides extensive information on various
                      geroler and orbital hydraulic motors, including
                      specifications, performance data, and application
                      guidelines. Whether you&#39;re an engineer designing
                      hydraulic systems or a maintenance technician in need of
                      replacement parts, our catalog is designed to meet your
                      needs.
                    </p>
                    <p>
                      You can access the catalog{" "}
                      <a href="https://www.tu.biz/products/geroler-motors">
                        here
                      </a>
                      . Feel free to browse through our wide selection of
                      hydraulic motors to find the perfect fit for your
                      application.
                    </p>
                    <h4>How to Use the Catalog</h4>
                    <ul>
                      <li>
                        Refer to the product specifications to ensure
                        compatibility with your system requirements.
                      </li>
                      <li>
                        Utilize the performance data to assess the motor&#39;s
                        capabilities under various operating conditions.
                      </li>
                      <li>
                        Consult the application guidelines for recommendations
                        on motor selection and installation.
                      </li>
                    </ul>
                    <h4>Contact Us for Technical Assistance</h4>
                    <p>
                      Do you have specific questions about our hydraulic motors
                      or need assistance in selecting the right model for your
                      application? Our team of experts is here to help! Simply
                      fill out the contact form on our website with your
                      technical details, and we&#39;ll get back to you promptly.
                    </p>
                    <p>
                      We understand the importance of choosing the right
                      hydraulic motor for your needs, and we&#39;re committed to
                      providing you with the support and guidance you require.
                    </p>
                    <p>
                      Don&#39;t hesitate to reach out to us with any inquiries
                      or concerns. Your satisfaction is our top priority!
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

export default PostEnglish44;
