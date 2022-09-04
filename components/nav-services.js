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
    <>
      <div className="col-md-3 ">
        <h2 className="nav2title">SERVICES</h2>
        <dl className="nav2">
          <dt>
            <p className="link1" href="">
              Oil Analysis
            </p>
          </dt>

          <dd>
            <Link href="/services/fluid-analysis" passHref>
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
          </dd>

          <dt>
            <p className="link1" href="#">
              Preventive Maintenance
            </p>
          </dt>
          <dd>
            <Link href="/services/preventive-maintenance-programs" passHref>
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
          </dd>
        </dl>
      </div>
    </>
  );
}

export default ServicesNav;
