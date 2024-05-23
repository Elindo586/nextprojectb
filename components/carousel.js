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
    function setHeight() {
      const screenWidth = window.innerWidth;
      const divHeight = screenWidth * 0.188;
      const theDiv = document.querySelector(".tu-world");
      theDiv.style.height = `${divHeight}px`;
    }

    // Call setHeight initially and add a listener to resize event
    setHeight();
    window.addEventListener("resize", setHeight);

    // Cleanup function to remove the resize event listener
    return () => {
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  useEffect(() => {
    let slideIndex = 0;
    const carouselItems = document.querySelectorAll("#carousel-inner");

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
      setTimeout(showSlides, 5000);
    }
  }, []);

  return (
    <div className=" tu-world ">
      <Image
        fill={true}
        id="carousel-inner"
        src={TuWorld}
        alt="tu world"
        // width={1710}
        // height={315}
        sizes="100vw"
        priority={true}
      />

      <Image
        fill={true}
        id="carousel-inner"
        src={Everything}
        alt="Everything Industrial"
        // width={1710}
        // height={315}
        sizes="100vw"
        priority={false}
      />

      <Image
        fill={true}
        id="carousel-inner"
        src={HydraulicMotors}
        alt="Hydraulic Motors"
        // width={1710}
        // height={315}
        sizes="100vw"
        priority={false}
      />

      <Image
        fill={true}
        id="carousel-inner"
        src={HydraulicPumps}
        alt="Hydraulic Pumps"
        // width={1710}
        // height={315}
        sizes="100vw"
        priority={false}
      />

      <Image
        fill={true}
        id="carousel-inner"
        src={ValvesManifolds}
        alt="Hydraulic Manifolds"
        // width={1710}
        // height={315}
        sizes="100vw"
        priority={false}
      />

      <Image
        fill={true}
        id="carousel-inner"
        src={MobileValves}
        alt="Hydraulic mobile valves"
        // width={1710}
        // height={315}
        sizes="100vw"
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />
    </div>
  );
};

export default Carousel;
