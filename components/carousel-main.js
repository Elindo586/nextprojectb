import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/legacy/image";
import TuWorld from "../public/carousel-main/tu-world.png";
import Everything from "../public/carousel-main/carousel-everything.png";
import HydraulicMotors from "../public/carousel-main/carousel-hydraulic-motors.png";
import HydraulicPumps from "../public/carousel-main/carousel-pumps.png";
import ValvesManifolds from "../public/carousel-main/carousel-valves-manifolds.png";
import MobileValves from "../public/carousel-main/mobile-valves.png";

const CarouselMain = () => {
  return (
    <div className=" tu-world">
      <Carousel>
        <Carousel.Item className="carousel-item active">
          <span className="d-flex justify-content-center">
            <Image
              id="carousel-inner"
              src={TuWorld}
              alt="tu world"
              width={1710}
              height={315}
              priority={true}
            />
          </span>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <span className="d-flex justify-content-center">
            <Image
              src={HydraulicPumps}
              alt="hydraulic pumps"
              width={1710}
              height={315}
            />
          </span>
        </Carousel.Item>
        <Carousel.Item className="carousel-item ">
          <span className="d-flex justify-content-center">
            <Image
              id="carousel-inner"
              src={MobileValves}
              alt="mobile hydraulic valves"
              width={1710}
              height={315}
            />
          </span>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <span className="d-flex justify-content-center">
            <Image
              id="carousel-inner"
              src={HydraulicMotors}
              alt="hydraulic motors"
              width={1710}
              height={315}
            />
          </span>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <span className="d-flex justify-content-center">
            <Image
              id="carousel-inner"
              src={ValvesManifolds}
              alt="hydraulic manifolds"
              width={1710}
              height={315}
            />
          </span>
        </Carousel.Item>
        <Carousel.Item className="carousel-item ">
          <span className="d-flex justify-content-center">
            <Image
              id="carousel-inner"
              src={Everything}
              alt="everything industrial"
              width={1710}
              height={315}
            />
          </span>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselMain;
