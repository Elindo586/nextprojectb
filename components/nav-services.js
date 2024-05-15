import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

function ServicesNav() {
  const [pathName, setPathName] = useState();

  useEffect(() => {
    const url = window.location.pathname;
    setPathName(url);
  }, []);

  return (
    <div className="col-md-3 ">
      <div className="nav2">
        <div>
          <p className="nav2title">
            <b>Services</b>
          </p>
        </div>
        <div>
          <div className=" col link1" href="">
            Oil Analysis
          </div>
        </div>

        <div>
          <Link legacyBehavior href="/services/fluid-analysis" passHref>
            <a
              className={
                pathName === "/services/fluid-analysis"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Laboratory Testing
            </a>
          </Link>
        </div>

        <div>
          <div className="col link1" href="#">
            Preventive Maintenance
          </div>
        </div>
        <div>
          <Link
            legacyBehavior
            href="/services/preventive-maintenance-programs"
            passHref
          >
            <a
              className={
                pathName === "/services/preventive-maintenance-programs"
                  ? "link2 active2"
                  : "link2"
              }
            >
              Programs
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesNav;
