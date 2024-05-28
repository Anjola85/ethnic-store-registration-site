import React, { CSSProperties } from "react";
import Image from "next/image";
import styles from "../styles/slide.module.css";

interface SlideProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  styling: CSSProperties;
}

const Slide: React.FC<SlideProps> = ({ image, alt, title, description, buttonText, styling }) => {
  return (
    <div className={styles.slide} style={styling}>
      <div className={styles.community_slide_image}>
        <Image src={image} alt={alt} width={100} height={100} />
      </div>
      <div className={styles.slide_text_content}>
        <h5>{title}</h5>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default Slide;
