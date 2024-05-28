"use client";

import React from "react";
import styles from "../../styles/page.module.css";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  navigateTo: string;
  onDesktopNavigation?: () => void;
}
const PlatformCard: React.FC<Props> = ({
  image,
  title,
  description,
  buttonText,
  navigateTo,
  onDesktopNavigation,
}) => {
  const handleCLick = () => {
    const tabletWidth = 768; // Tablets and smaller devices

    if (window.innerWidth > tabletWidth && onDesktopNavigation) {
      onDesktopNavigation();
      return;
    }
    window.location.href = navigateTo;
  };

  return (
    <div className={styles.platform_card}>
      <div className={styles.top}>
        <div className={styles.card_image}>
          <Image src={image} alt={title} width={100} height={100} />
        </div>
      </div>
      <div className={styles.card_content}>
        <div className={styles.card_content_heading}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>

        <span onClick={handleCLick}>
          {buttonText} <BsArrowRightShort />
        </span>
      </div>
    </div>
  );
};

export default PlatformCard;
