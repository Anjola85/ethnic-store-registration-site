"use client";

import React, { useState } from "react";
import styles from "../../styles/page.module.css";

import Slide from "./Slide";
import { PiCaretCircleLeftFill, PiCaretCircleRightFill } from "react-icons/pi";

interface Props {
  slides: any[];
  slideWrapperStyles: any;
  prev: () => void;
  next: () => void;
}
const Slider: React.FC<Props> = ({ slides, slideWrapperStyles, prev, next }) => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider_wrapper} style={slideWrapperStyles}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            sliderImage={slide.sliderImage}
            altSlider={slide.altSlider}
            storeImage={slide.storeImage}
            altStore={slide.altStore}
            storeName={slide.storeName}
            storeAddress={slide.storeAddress}
            storeRating={slide.storeRating}
            styling={{ left: `${index * 100}%` }}
          />
        ))}
      </div>
      <PiCaretCircleLeftFill className={styles.left_arrow} onClick={prev} />
      <PiCaretCircleRightFill className={styles.right_arrow} onClick={next} />
    </div>
  );
};

export default Slider;
