import React from "react";
// import { useEffect } from "react";
import Blogger2 from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish32 = ({ db }) => {
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
        .filter((item) => item.id === "32")
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
                    <h4>Hydraulic Motor Torque Calculation</h4>
                    <p>
                      Welcome to our educational video on hydraulic motor torque
                      calculation. Understanding the torque requirements for a
                      hydraulic motor is crucial for ensuring optimal
                      performance and efficiency in hydraulic circuits.
                    </p>
                    <p>
                      In this video, we provide a step-by-step guide on how to
                      calculate the torque requirements for your hydraulic
                      motor, tailored for proper application in hydraulic
                      circuits.
                    </p>
                    <p>We cover the following key points:</p>
                    <ul>
                      <li>
                        The significance of accurate torque calculation in
                        hydraulic systems.
                      </li>
                      <li>
                        Factors influencing torque requirements, including load,
                        pressure, and speed.
                      </li>
                      <li>
                        Detailed instructions and formulas for calculating
                        torque based on specific application parameters.
                      </li>
                    </ul>
                    <p>
                      By mastering hydraulic motor torque calculation,
                      you&#39;ll be equipped to:
                    </p>
                    <ul>
                      <li>
                        Select the appropriate hydraulic motor size for your
                        application needs.
                      </li>
                      <li>
                        Ensure efficient and reliable operation of your
                        hydraulic system.
                      </li>
                      <li>
                        Prevent issues such as overloading or underutilization
                        of your hydraulic motor.
                      </li>
                    </ul>
                    <p>
                      At TU, we understand the importance of accurate torque
                      calculation for hydraulic motors. That&#39;s why we&#39;re
                      committed to providing educational resources and support
                      to help you make informed decisions and optimize your
                      hydraulic systems.
                    </p>
                    <p>
                      Watch our video to learn how to calculate hydraulic motor
                      torque effectively, and feel free to reach out to our
                      expert team for further assistance or guidance.
                    </p>
                    <p>
                      Empower yourself with the knowledge of hydraulic motor
                      torque calculation for enhanced performance and
                      reliability in your hydraulic applications!
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

export default PostEnglish32;
