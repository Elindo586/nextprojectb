import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish58 = ({ db }) => {
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
        .filter((item) => item.id === "58")
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
                    <h4>The Basics of Hydraulics: Understanding Fluid Power</h4>
                    <p>
                      Welcome to our comprehensive guide on the fundamentals of
                      hydraulics! In this video, we&#39;ll embark on a journey
                      to explore the core principles of fluid power hydraulics,
                      uncovering the magic behind its ubiquitous presence in
                      various industries. Let&#39;s dive in!
                    </p>

                    <h4>1. What is Hydraulics?</h4>

                    <p>
                      At its essence, hydraulics is a branch of engineering that
                      deals with the mechanical properties of fluids,
                      particularly liquids like oil or water. By utilizing the
                      unique characteristics of fluids, hydraulics enables the
                      transmission of force from one point to another, powering
                      a multitude of machinery and systems.
                    </p>

                    <h4>2. Pascal&#39;s Principle: The Foundation</h4>

                    <p>
                      Pascal&#39;s Principle, formulated by the brilliant
                      mathematician Blaise Pascal, serves as the cornerstone of
                      hydraulics. This principle states that when pressure is
                      applied to a confined fluid, it is transmitted uniformly
                      in all directions. This phenomenon allows hydraulic
                      systems to exert force with precision and efficiency.
                    </p>

                    <h4>3. Components of a Hydraulic System</h4>

                    <p>
                      A typical hydraulic system consists of several key
                      components:
                    </p>

                    <ul>
                      <li>
                        Hydraulic Pump: Generates hydraulic pressure by
                        converting mechanical energy into fluid power.
                      </li>
                      <li>
                        Hydraulic Cylinder: Converts hydraulic pressure into
                        linear mechanical motion.
                      </li>
                      <li>
                        Control Valves: Regulate the flow and direction of
                        hydraulic fluid within the system.
                      </li>
                      <li>
                        Hydraulic Fluid: Acts as the medium for transmitting
                        force and lubricating components.
                      </li>
                      <li>
                        Hydraulic Reservoir: Stores hydraulic fluid and helps
                        maintain system integrity.
                      </li>
                    </ul>

                    <h4>4. Working Principles</h4>

                    <p>
                      Hydraulic systems operate based on the principles of
                      pressure, flow, and force. When hydraulic fluid is
                      pressurized by the pump, it exerts force on the walls of
                      the hydraulic cylinder, causing it to move. By controlling
                      the flow of fluid using valves, operators can precisely
                      regulate the speed and direction of motion.
                    </p>

                    <h4>5. Applications of Hydraulics</h4>

                    <p>
                      The versatility of hydraulics extends across a wide range
                      of industries and applications:
                    </p>

                    <ul>
                      <li>
                        Construction: Hydraulic excavators, cranes, and
                        bulldozers.
                      </li>
                      <li>
                        Manufacturing: Hydraulic presses, injection molding
                        machines.
                      </li>
                      <li>
                        Automotive: Hydraulic brake systems, power steering.
                      </li>
                      <li>
                        Aerospace: Aircraft landing gear, flight control
                        systems.
                      </li>
                    </ul>

                    <h4>Conclusion</h4>

                    <p>
                      Understanding the basics of hydraulics provides a solid
                      foundation for exploring its vast potential in engineering
                      and technology. From Pascal&#39;s Principle to the
                      practical applications in various industries, hydraulics
                      continues to shape our world and drive innovation. Stay
                      tuned for more insightful content on fluid power
                      hydraulics!
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

export default PostEnglish58;
