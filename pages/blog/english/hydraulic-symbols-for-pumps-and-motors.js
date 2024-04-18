import React from "react";
// import { useEffect } from "react";
import VideoBlogger from "../../../components/blog-post-english";

import db from "../../../utils/blogs-front/english/blog-english.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const PostEnglish55 = ({ db }) => {
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
        .filter((item) => item.id === "55")
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
                      Understanding Hydraulic Symbols for Pumps and Motors:
                      Deciphering Hydraulic Schematics
                    </h4>
                    <p>
                      Welcome to our comprehensive guide on hydraulic symbols
                      for pumps and motors! In this video, we&#39;ll demystify
                      the process of drawing hydraulic symbols for these
                      essential components, helping you decipher hydraulic
                      schematics with ease. Let&#39;s delve into the world of
                      hydraulic symbols!
                    </p>

                    <h4>The Importance of Hydraulic Symbols</h4>

                    <p>
                      Hydraulic symbols are graphical representations used in
                      hydraulic schematics to convey information about hydraulic
                      components, their functions, and their interconnections.
                      Understanding hydraulic symbols is crucial for
                      interpreting schematics accurately and troubleshooting
                      hydraulic systems effectively.
                    </p>

                    <h4>Common Hydraulic Symbols for Pumps and Motors</h4>

                    <p>
                      Here are some common hydraulic symbols used to represent
                      pumps and motors in hydraulic schematics:
                    </p>

                    <ul>
                      <li>
                        <strong>Pump:</strong> The symbol for a hydraulic pump
                        typically consists of an arrow indicating the direction
                        of fluid flow, accompanied by additional symbols to
                        denote specific pump types such as gear pumps, vane
                        pumps, or piston pumps.
                      </li>
                      <li>
                        <strong>Motor:</strong> Hydraulic motors are represented
                        by symbols that resemble pumps but with arrows pointing
                        in the opposite direction, indicating the conversion of
                        hydraulic energy into mechanical energy.
                      </li>
                    </ul>

                    <h4>Drawing Hydraulic Symbols</h4>

                    <p>
                      When drawing hydraulic symbols for pumps and motors,
                      it&#39;s essential to adhere to standard conventions to
                      ensure clarity and consistency. Here are some tips for
                      drawing hydraulic symbols effectively:
                    </p>

                    <ul>
                      <li>
                        <strong>Use Standard Shapes:</strong> Follow established
                        conventions for drawing pump and motor symbols to
                        maintain consistency across schematics.
                      </li>
                      <li>
                        <strong>Indicate Direction of Flow:</strong> Arrows are
                        used to indicate the direction of fluid flow through
                        pumps and motors, helping to visualize system operation.
                      </li>
                      <li>
                        <strong>Label Components:</strong> Clearly label pump
                        and motor symbols with text to identify the type and
                        model of each component.
                      </li>
                      <li>
                        <strong>Include Additional Information:</strong> Use
                        supplementary symbols or annotations to convey
                        additional information about pump and motor
                        characteristics, such as flow rate, pressure rating, or
                        displacement.
                      </li>
                    </ul>

                    <h4>Conclusion</h4>

                    <p>
                      Mastering hydraulic symbols for pumps and motors is
                      essential for anyone working with hydraulic systems. By
                      understanding how to draw and interpret these symbols
                      accurately, engineers and technicians can effectively
                      design, troubleshoot, and maintain hydraulic systems with
                      confidence. Stay tuned for more tutorials on hydraulic
                      system design and maintenance!
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

export default PostEnglish55;
