"use client";
import React, { CSSProperties } from "react";
import styles from "../../styles/page.module.css";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";

interface Props {
  sliderImage: string;
  altSlider: string;
  storeImage: string;
  altStore: string;
  storeName: string;
  storeAddress: string;
  storeRating: number;
  styling: CSSProperties;
}

const Slide: React.FC<Props> = ({
  sliderImage,
  altSlider,
  storeImage,
  altStore,
  storeName,
  storeAddress,
  storeRating,
  styling,
}) => {
  function generateStars() {
    const stars = [];

    const starLength = Math.ceil(storeRating);

    const fullStarCount = Math.floor(storeRating);

    for (let i = 0; i < starLength; i++) {
      stars.push(<AiFillStar key={i} />);

      if (i === fullStarCount) {
        stars.push(<BiSolidStarHalf key={i + 1} />);
      }
    }
    return stars;
  }

  return (
    <div className={styles.slide} style={styling}>
      <div className={styles.slider_image}>
        <Image
          src={sliderImage}
          alt={altSlider}
          width={100}
          height={100}
          layout="responsive"
        />
      </div>

      <div className={styles.store_info}>
        <div className={styles.store_logo_image}>
          <Image src={storeImage} alt={altStore} width={100} height={100} />
        </div>
        <div className={styles.store_info_text}>
          <h3>
            <div className={styles.stars}>{generateStars()}</div>
            {storeName}
          </h3>
          <p>{storeAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
