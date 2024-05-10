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
    <div className=" tu-world justify-content-center">
      <Carousel>
        <Carousel.Item className="carousel-item active">
          <Image
            // fill
            id="carousel-inner"
            src={TuWorld}
            alt="tu world"
            // sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 33vw"
            width={1710}
            height={315}
            priority={true}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <Image
            // fill
            id="carousel-inner"
            src={HydraulicPumps}
            alt="hydraulic pumps"
            // sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 33vw"
            width={1710}
            height={315}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item ">
          <Image
            // fill
            id="carousel-inner"
            src={MobileValves}
            alt="mobile hydraulic valves"
            // sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 33vw"
            width={1710}
            height={315}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <Image
            // fill
            id="carousel-inner"
            src={HydraulicMotors}
            alt="hydraulic motors"
            // sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 33vw"
            width={1710}
            height={315}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <Image
            // fill
            id="carousel-inner"
            src={ValvesManifolds}
            alt="hydraulic manifolds"
            // sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 33vw"
            width={1710}
            height={315}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item ">
          <Image
            // fill
            id="carousel-inner"
            src={Everything}
            alt="everything industrial"
            // sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 33vw"
            width={1710}
            height={315}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselMain;
