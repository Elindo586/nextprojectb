import React from "react";
import Image from "next/image";
import Head from "next/head";
import ServicesNav from "../components/nav-services";

const Preventive = () => {
  return (
    <div>
      <div>
        <Head>
          <title> Technical Union | Preventive Maintenance Programs</title>

          <meta
            name="description"
            content=" It is important to keep the hydraulic oil clean, cool, and dry. Check out our preventive maintenance programs.  "
          />
          <meta
            name="keywords"
            content=" preventive, maintenance, industrial machine maintenance "
          />
          <meta name="author" content="Edgar Lindo" />

          <meta
            property="og:title"
            content=" Technical Union | Preventive Maintenance Programs"
          />
          <meta
            property="og:description"
            content="Contact TU Technical Union | Services"
          />
          <meta
            property="og:image"
            content="./Images/oppictures/maintenance-programs.png"
          />
          <meta
            property="og:url"
            content="http://www.tu.biz/Services/PreventiveMaintenancePrograms"
          />
        </Head>
      </div>
      <div className="row">
        <div className="col-md-9">
          <div>
            <span className="maintenance-2">
              <Image
                src="/images/maintenance-2.png"
                alt=" Preventive Maintenance Programs"
                width={700}
                height={400}
              />
            </span>
            <p class="preventive-maintenance-text">
              In order to obtain the most productivity out of your machinery, it
              is important to follow proper preventive maintenance practices to
              keep your machinery working in optimum conditions.
              <br /> <br />
              Keeping your hydraulic oil working clean, cool, and dry will
              extend the life and efficiency of your hydraulic components to
              provide a better machine performance at lower maintenance cost.{" "}
              <br /> <br />
              We work with machine builders and End Users on engineering and
              sizing of proper machine components such as oil and air filtration
              units, heat exchangers, water and humidity control solutions to
              maintain complete control of your fluids working conditions and
              obtain higher productivity with a lower maintenance cost.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <ServicesNav />
        </div>
      </div>
    </div>
  );
};

export default Preventive;
