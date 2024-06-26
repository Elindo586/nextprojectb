import React from "react";
import Image from "next/image";
import ExportadorIndusrial from "../public/carousel-blog-spanish/exportador-industrial.png";
import GuiasHusillos from "../public/carousel-blog-spanish/guias-husillos.png";
import BombasHidraulicas from "../public/carousel-blog-spanish/bombas-hidraulicas.png";
import TodoLoIndustrial from "../public/carousel-blog-spanish/todo-lo-industrial.png";

import { useEffect } from "react";

const CarouselBlogSpanish = () => {
  useEffect(() => {
    function setHeight() {
      const screenWidth = window.innerWidth;
      const divHeight = screenWidth * 0.4;
      const theDiv = document.querySelector(".carousel-spanish-div");

      if (screenWidth <= 767) {
        theDiv.style.height = `${divHeight}px`;
      } else {
        theDiv.style.height = `200px`;
      }
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
    const carouselItems = document.querySelectorAll(
      "#carousel-inner-spanish-blog"
    );

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
    <div className=" carousel-spanish-div ">
      <Image
        fill={true}
        id="carousel-inner-spanish-blog"
        src={ExportadorIndusrial}
        alt="Exportador industrial"
        // width={1600}
        // height={900}
        sizes="90vw"
        priority={true}
      />

      <Image
        fill={true}
        id="carousel-inner-spanish-blog"
        src={BombasHidraulicas}
        alt="Bombas hidráulicas"
        // width={1600}
        // height={900}
        sizes="90vw"
        priority={false}
      />

      <Image
        fill={true}
        id="carousel-inner-spanish-blog"
        src={GuiasHusillos}
        alt="Guías lineales y husillos a bolas"
        // width={1600}
        // height={900}
        sizes="90vw"
        priority={false}
      />

      <Image
        fill={true}
        id="carousel-inner-spanish-blog"
        src={TodoLoIndustrial}
        alt="Compre todo lo industrial aquí"
        // width={1600}
        // height={900}
        sizes="90vw"
        priority={false}
      />
    </div>
  );
};

export default CarouselBlogSpanish;
