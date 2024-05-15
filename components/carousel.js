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
    let slideIndex = 0;
    const carouselItems = document.querySelectorAll("#carousel-inner");
    console.log(carouselItems);
    showSlides();
    function showSlides() {
      for (let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > carouselItems.length) {
        slideIndex = 1;
      }
      carouselItems[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 4000);
    }
  }, []);

  return (
    <div className="row tu-world">
      <div className="ncarousel-items">
        <span className="ncarousel-item">
          <Image
            id="carousel-inner"
            src={TuWorld}
            alt="tu world"
            width={1710}
            height={315}
            priority={true}
          />
        </span>
        <span className="ncarousel-item ">
          <Image
            id="carousel-inner"
            src={Everything}
            alt="Everything Industrial"
            width={1710}
            height={315}
            priority={false}
          />
        </span>
        <span className="ncarousel-item ">
          <Image
            id="carousel-inner"
            src={HydraulicMotors}
            alt="Hydraulic Motors"
            width={1710}
            height={315}
            priority={false}
          />
        </span>
        <span className="ncarousel-item ">
          <Image
            id="carousel-inner"
            src={HydraulicPumps}
            alt="Hydraulic Pumps"
            width={1710}
            height={315}
            priority={false}
          />
        </span>
        <span className="ncarousel-item ">
          <Image
            id="carousel-inner"
            src={ValvesManifolds}
            alt="Hydraulic Manifolds"
            width={1710}
            height={315}
            priority={false}
          />
        </span>
        <span className="ncarousel-item">
          <Image
            id="carousel-inner"
            src={MobileValves}
            alt="Hydraulic mobile valves"
            width={1710}
            height={315}
            priority={false}
          />
        </span>
      </div>
    </div>
  );
};

export default Carousel;
