import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish59 = ({ db }) => {
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
        .filter((item) => item.id === "59")
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
                  <h4>
                    Exploring the Dynamic World of Hydraulic Circuits: An
                    Interactive Animation Experience
                  </h4>
                  <p>
                    Immersive and interactive animations offer a unique
                    opportunity to explore the intricate workings of hydraulic
                    circuits, providing a detailed visualization of fluid flow
                    paths, valve operations, and cylinder movements. In this
                    article, we&#39;ll dive into the captivating world of
                    hydraulic circuit simulation through an interactive
                    animation that brings fluid power principles to life.
                  </p>

                  <ul>
                    <li>
                      <strong>Interactive Experience:</strong> The interactive
                      animation takes viewers on a journey through a hydraulic
                      circuit, allowing them to observe fluid flow paths,
                      directional valve activations, and hydraulic cylinder
                      movements in real time. By clicking and interacting with
                      various components, viewers can gain a deeper
                      understanding of hydraulic system operation and
                      principles.
                    </li>

                    <li>
                      <strong>Fluid Flow Visualization:</strong> Through the
                      animation, viewers can witness how fluid flows through the
                      hydraulic circuit, following designated paths dictated by
                      valve positions and system configuration. By activating
                      directional control valves, viewers can observe changes in
                      fluid flow direction and path, gaining insights into how
                      valve actions affect system behavior.
                    </li>

                    <li>
                      <strong>Directional Valve Activation:</strong> The
                      animation demonstrates how directional control valves
                      control the flow of hydraulic fluid and determine the
                      direction of movement for hydraulic actuators such as
                      cylinders. By activating or deactivating directional
                      valves, viewers can observe how fluid flow patterns change
                      and how cylinder extension and retraction are initiated
                      and controlled.
                    </li>

                    <li>
                      <strong>Hydraulic Cylinder Movements:</strong> Viewers can
                      witness the extension and retraction of hydraulic
                      cylinders as they interact with the animation. By toggling
                      directional control valves, viewers can simulate the
                      movement of cylinders and observe how changes in valve
                      positions correspond to changes in cylinder position and
                      direction.
                    </li>

                    <li>
                      <strong>Realistic Simulation:</strong> The interactive
                      animation provides a realistic simulation of hydraulic
                      circuit operation, incorporating accurate fluid dynamics,
                      valve behaviors, and cylinder movements. This realistic
                      representation enables viewers to grasp complex hydraulic
                      concepts and principles in a dynamic and engaging manner.
                    </li>
                  </ul>

                  <p>
                    Experience the dynamic world of hydraulic circuits through
                    the interactive animation available at{" "}
                    <a href="https://www.tu.biz/interactive">
                      Interactive Hydraulic Circuit Simulation
                    </a>
                    . Dive deep into the intricate workings of fluid power
                    systems, explore fluid flow dynamics, and gain a hands-on
                    understanding of hydraulic principles like never before.
                  </p>

                  <p>
                    Whether you&#39;re a seasoned hydraulic engineer, a curious
                    student, or an enthusiast eager to learn more about fluid
                    power technology, the interactive animation offers an
                    immersive and educational experience that will captivate and
                    inspire.
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

export default PostEnglish59;
