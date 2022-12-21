import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const CarouselMain = () => {
  return (
    <div className=" tu-world">
      <Carousel>
        <Carousel.Item className="carousel-item active">
          <Image
            className="d-block w-100"
            src="/carousel-main/tu-world.png"
            alt="tu world"
            width={1710}
            height={315}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <Image
            className="d-block w-100"
            src="/carousel-main/carousel-pumps.png"
            alt="hydraulic pumps"
            width={1710}
            height={315}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <Image
            className="d-block w-100"
            src="/carousel-main/carousel-hydraulic-motors.png"
            alt="hydraulic pumps"
            width={1710}
            height={315}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <Image
            className="d-block w-100"
            src="/carousel-main/carousel-valves-manifolds.png"
            alt="hydraulic pumps"
            width={1710}
            height={315}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item ">
          <Image
            className="d-block w-100"
            src="/carousel-main/carousel-everything.png"
            alt="everything industrial"
            width={1710}
            height={315}
          />
        </Carousel.Item>

        <Carousel.Item className="carousel-item ">
          <Image
            className="d-block w-100"
            src="/carousel-main/mobile-valves.png"
            alt="mobile hydraulic valves"
            width={1710}
            height={315}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselMain;
