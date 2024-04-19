import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish19 = ({ db }) => {
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
        .filter((item) => item.id === "19")
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
                  <h4>Introduction to Hydraulic Flow Control Valve Catalog</h4>
                  <p>
                    Welcome to our comprehensive guide on hydraulic flow control
                    valves! In this video, we delve into the intricacies of
                    selecting the right flow control valve for your hydraulic
                    system&#39;s needs. Whether you&#39;re a seasoned
                    professional or a newcomer to the world of hydraulics, this
                    catalog serves as your go-to resource for understanding and
                    choosing the optimal valve.
                  </p>

                  <h4>Understanding Hydraulic Flow Control Valves</h4>
                  <p>
                    Hydraulic flow control valves play a crucial role in
                    regulating the flow rate of hydraulic fluid within a system.
                    They allow for precise control over the speed and direction
                    of actuators, ensuring smooth and efficient operation. With
                    a wide range of applications across various industries,
                    selecting the appropriate valve is essential for achieving
                    desired performance outcomes.
                  </p>

                  <h4>Exploring the Catalog</h4>
                  <p>
                    Our catalog features a diverse selection of hydraulic flow
                    control valves, each designed to meet specific requirements
                    and operating conditions. From simple check valves to
                    sophisticated proportional control valves, we offer a
                    comprehensive range to cater to various hydraulic systems.
                  </p>

                  <h4>Selecting the Right Valve</h4>
                  <ul>
                    <li>
                      Determine Flow Rate: Assess the flow requirements of your
                      hydraulic system to choose a valve with an appropriate
                      flow capacity.
                    </li>
                    <li>
                      Consider Pressure Rating: Ensure the selected valve can
                      handle the operating pressure of your system without
                      compromising performance or safety.
                    </li>
                    <li>
                      Evaluate Control Options: Depending on the level of
                      control needed, opt for manual, electric, or proportional
                      flow control valves.
                    </li>
                    <li>
                      Account for Environment: Factor in environmental
                      conditions such as temperature, fluid compatibility, and
                      potential exposure to contaminants.
                    </li>
                  </ul>

                  <h4>Accessing the Catalog</h4>
                  <p>
                    To explore our complete range of hydraulic flow control
                    valves and access detailed specifications, visit our catalog
                    page{" "}
                    <a href="https://www.tu.biz/products/industrial-valves/flow-control-valves">
                      here
                    </a>
                    . Whether you&#39;re in need of a specific valve or seeking
                    expert advice on valve selection, our team is here to assist
                    you every step of the way.
                  </p>

                  <h4>Conclusion</h4>
                  <p>
                    Choosing the right hydraulic flow control valve is paramount
                    to the efficiency and performance of your hydraulic system.
                    With our comprehensive catalog and expert guidance, you can
                    confidently select the optimal valve tailored to your
                    application&#39;s needs. Explore our catalog today and
                    unlock the full potential of your hydraulic systems!
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

export default PostEnglish19;
