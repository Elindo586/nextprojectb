import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
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
          <Image
            className="d-block w-100"
            src={TuWorld}
            alt="tu world"
            width={1710}
            height={315}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <Image
            className="d-block w-100"
            src={HydraulicPumps}
            alt="hydraulic pumps"
            width={1710}
            height={315}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item ">
          <Image
            className="d-block w-100"
            src={MobileValves}
            alt="mobile hydraulic valves"
            width={1710}
            height={315}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <Image
            className="d-block w-100"
            src={HydraulicMotors}
            alt="hydraulic motors"
            width={1710}
            height={315}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <Image
            className="d-block w-100"
            src={ValvesManifolds}
            alt="hydraulic manifolds"
            width={1710}
            height={315}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item ">
          <Image
            className="d-block w-100"
            src={Everything}
            alt="everything industrial"
            width={1710}
            height={315}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselMain;
