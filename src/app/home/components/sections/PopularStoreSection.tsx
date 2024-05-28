"use client";

import React, { useState } from "react";
import styles from "../../styles/page.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import Collage from "../../../../components/collage/Collage";
import { slides } from "../../data";
import Slider from "../cards/Slider";
import { PiCaretCircleLeftFill, PiCaretCircleRightFill } from "react-icons/pi";
import Image from "next/image";

const PopularStoreSection = () => {
  const totalSlides = 3;
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideWrapperStyles = {
    transform: `translateX(-${100 * currentSlide}%) translateX(-${
      3 * currentSlide
    }em)`,
    gridTemplateColumns: `repeat(${totalSlides + 2}, 100%)`,
    alignItems: "center",
  };

  function prevSlide() {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function nextSlide() {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }

  return (
    <div className={styles.popularstore_section}>
      <div className={styles.popularstore_section_container}>
        <h2>Popular Stores Close to You</h2>
        <Slider
          slides={slides}
          slideWrapperStyles={slideWrapperStyles}
          prev={prevSlide}
          next={nextSlide}
        />

        <div className={styles.mission_section}>
          <div className={styles.mission_text_content}>
            <h3 className={styles.mission_heading}>
              Discover, Explore & Start Shopping
            </h3>
            <p>
              <u>With a shared love for diverse cuisines</u> and a deep
              appreciation for cultural traditions, we embarked on a mission to
              connect these hidden gems with eager taste buds. Our journey has
              taken us on a global adventure, from bustling markets to{" "}
              <u>family-owned shops tucked away in corners of the world.</u>{" "}
              <br />
              <br />
              <Link href={"/about-us"}>
                Read our story <AiOutlineArrowRight />
              </Link>
            </p>
          </div>

          <div className={styles.mission_section_image}>
            <Image
              src="/images/asian.jpeg"
              alt="mission section image"
              width={100}
              height={100}
              layout="responsive"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularStoreSection;
