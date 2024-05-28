"use client";
import React, { useState } from "react";
import styles from "../styles/page.module.css";
import Image from "next/image";
import { PiCaretRight, PiCaretLeft } from "react-icons/pi";

function StorePreviewSection() {
  const content = [
    {
      rating: "★★★★☆",
      flag: "/svgs/emojione_flag-for-ghana.svg",
      img: "/images/bluredOut.png",
      title: "New Asafo Market",
      text: "391 Driftwood Avenue, Toronto",
    },
    {
      rating: "★★★★★",
      flag: "/svgs/emojione_flag-for-china.svg",
      img: "/images/new_asafo.png",
      title: "Pacific Fresh Food Market",
      text: "4734 Jane St, North York",
    },
    {
      rating: "★★★☆☆",
      flag: "/svgs/emojione_flag-for-jamaica.svg",
      img: "/images/bluredOut.png",
      title: "Danforth Carribean Market",
      text: "3701 Keele St, North York",
    },
    {
      rating: "★★★★☆",
      flag: "/svgs/emojione_flag-for-nigeria.svg",
      img: "/images/new_asafo.png",
      title: "Tripplee African and Caribbean market",
      text: "45 Four Winds Dr, North York",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(1); // Start with the center image

  const nextSlide = () => {
    if (currentSlide === content.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const centerSlide = currentSlide;
  const leftSlide = (currentSlide + content.length - 1) % content.length;
  const rightSlide = (currentSlide + 1) % content.length;

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(content.length - 1);
    } else {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  return (
    <div className={styles.store_content_body}>
      <h1>
        Start saving & supporting your{" "}
        <span className={styles.highlight}>ethnic stores</span>
      </h1>
      <div className={styles.imageSlider}>
        <PiCaretLeft className={styles.leftCaret} onClick={prevSlide} />

        {[leftSlide, centerSlide, rightSlide].map((slideIndex) => (
          <div
            key={slideIndex}
            className={`${styles.slide} ${
              slideIndex === centerSlide
                ? styles.centerSlide
                : slideIndex === leftSlide
                ? styles.leftSlide
                : styles.rightSlide
            }`}
          >
            <div className={styles.img_container}>
              <Image
                src={content[slideIndex].img}
                alt="Store"
                width={100}
                height={100}
                // layout="responsive"
              />
            </div>

            {slideIndex === centerSlide && (
              <div className={styles.store_info}>
                <div className={styles.content}>
                  {" "}
                  {/* flag here */}
                  <div
                    className={styles.storeFlag}
                    style={{
                      // backgroundImage: {"url(/svgs/emojione_flag-for-ghana.svg)"},
                      backgroundImage: `url(${content[slideIndex].flag})`,
                    }}
                  ></div>
                  {/* Text here */}
                  <div className={styles.storeContent}>
                    <span className={styles.storeRating}>
                      {content[slideIndex].rating}
                    </span>
                    <div className={styles.text}>
                      <h3>{content[slideIndex].title}</h3>
                      <p>{content[slideIndex].text}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        <PiCaretRight className={styles.rightCaret} onClick={nextSlide} />
      </div>
    </div>
  );
}

export default StorePreviewSection;
