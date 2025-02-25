import React from "react";
import Link from "next/link";

const Social1 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex" target="">
          <Link
            legacyBehavior
            href="https://www.linkedin.com/in/edgarlindo/"
            prefetch={false}
          >
            <svg
              className="social-icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="40"
              height="40"
              fill="currentColor"
            >
              {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </Link>
          <Link
            legacyBehavior
            href="https://www.youtube.com/c/EdgarLindo"
            prefetch={false}
          >
            <svg
              className="social-icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="45"
              height="45"
              fill="currentColor"
            >
              {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />{" "}
            </svg>
          </Link>
          <Link
            legacyBehavior
            href="https://www.facebook.com/TechnicalUnion "
            prefetch={false}
          >
            <svg
              className="social-icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="45"
              height="45"
              fill="currentColor"
            >
              {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}{" "}
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
          </Link>
          <Link
            legacyBehavior
            href="https://twitter.com/MrEdgarLindo"
            prefetch={false}
          >
            <svg
              className="social-icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="45"
              height="45"
              fill="currentColor"
            >
              {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.  */}
              <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
            </svg>
          </Link>
        </div>
        <div className="col-md-6 d-flex">
          <h2>Acompáñenos en esta video-serie.</h2>
        </div>
      </div>
    </div>
  );
};

export default Social1;
