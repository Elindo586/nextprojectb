import React from "react";
import Image from "next/image";
import TuWorld from "../public/carousel-main/tu-world.png";
import Everything from "../public/carousel-main/carousel-everything.png";
import HydraulicMotors from "../public/carousel-main/carousel-hydraulic-motors.png";
import HydraulicPumps from "../public/carousel-main/carousel-pumps.png";
import ValvesManifolds from "../public/carousel-main/carousel-valves-manifolds.png";
import MobileValves from "../public/carousel-main/mobile-valves.png";
import { useEffect } from "react";

const Carousel = () => {
  useEffect(() => {
    const carouselItems = document.querySelectorAll(".carousel_item");
    let i = 1;
    setInterval(() => {
      // Accessing All the carousel Items
      Array.from(carouselItems).forEach((item, index) => {
        if (i < carouselItems.length) {
          item.style.transform = `translateX(-${i * 100}%)`;
        }
      });

      if (i < carouselItems.length) {
        i++;
      } else {
        i = 0;
      }
    }, 2000);
  }, []);

  return (
    <div className="row tu-world">
      <div className="carousel-items">
        <span className="carousel-item ">
          <Image
            id="carousel-inner"
            src={TuWorld}
            alt="tu world"
            width={1710}
            height={315}
            priority={true}
          />
        </span>
        <span className="carousel-item ">
          <Image
            id="carousel-inner"
            src={Everything}
            alt="Everything Industrial"
            width={1710}
            height={315}
          />
        </span>
        <span className="carousel-item ">
          <Image
            id="carousel-inner"
            src={HydraulicMotors}
            alt="Hydraulic Motors"
            width={1710}
            height={315}
          />
        </span>
        <span className="carousel-item ">
          <Image
            id="carousel-inner"
            src={HydraulicPumps}
            alt="Hydraulic Pumps"
            width={1710}
            height={315}
          />
        </span>
        <span className="carousel-item item1">
          <Image
            id="carousel-inner"
            src={ValvesManifolds}
            alt="Hydraulic Manifolds"
            width={1710}
            height={315}
            priority={true}
          />
        </span>
        <span className="carousel-item item1">
          <Image
            id="carousel-inner"
            src={MobileValves}
            alt="Hydraulic mobile valves"
            width={1710}
            height={315}
          />
        </span>
      </div>
    </div>
  );
};

export default Carousel;
