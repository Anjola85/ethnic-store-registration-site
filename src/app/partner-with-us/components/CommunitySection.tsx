"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/page.module.css";
import { PiCaretRightBold } from "react-icons/pi";
import Slide from "./Slide";
import { slides } from "../data";

const CommunitySection = () => {
  const totalSlides = 4;

  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  // const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const slidesToShow = windowWidth && windowWidth < 1024 ? 1 : 3;
  const moveFromLeftBy = windowWidth && windowWidth < 1024 ? 100 : 35;

  const slideWrapperStyles = {
    transform: `translateX(-${(100 / slidesToShow) * currentSlide}%)`,
    gridTemplateColumns: `repeat(${totalSlides}, 100%)`,
  };

  function nextSlide() {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }

  const circularSlides = [
    ...slides.slice(-1),
    ...slides,
    ...slides.slice(0, 1),
  ];
  return (
    <div className={styles.community_section}>
      <div className={styles.community_section_container}>
        <h2>Connecting the diverse community together</h2>
        <h4>
          {"We're"} connecting ethnic stores to their consumers safe proofing
          them for the digital age {"we're"} in now
        </h4>
        <div className={styles.slider}>
          <div
            className={styles.slider_wrapper}
            style={slideWrapperStyles}
            onClick={nextSlide}
          >
            {circularSlides.map((slide, index) => (
              <Slide
                key={index}
                image={slide.image}
                alt={slide.alt}
                title={slide.title}
                description={slide.description}
                buttonText={slide.buttonText}
                styling={{ left: `${index * moveFromLeftBy}%` }}
              />
            ))}
          </div>
        </div>
      </div>
      <span onClick={nextSlide} className={styles.slider_arrow}>
        <PiCaretRightBold />
      </span>
    </div>
  );
};

export default CommunitySection;
