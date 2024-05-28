import React from "react";
import styles from "../styles/page.module.css";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

interface Props {
  image: string;
  title: string;
  stars: number;
  distance: string;
}
const StoreCard: React.FC<Props> = ({ image, title, stars, distance }) => {
  function generateStars() {
    let starsArray = [];
    for (let i = 0; i < stars; i++) {
      starsArray.push(<AiFillStar key={i} color="#FB9D6E" />);
    }
    return starsArray;
  }
  return (
    <div className={styles.store_card}>
      <div className={styles.card_image}>
        <Image src={image} alt="beauty" width={100} height={100} />
      </div>

      <div className={styles.card_content}>
        <div className={styles.card_content_heading}>
          <h4>{title}</h4>
          <p>{generateStars()}</p>
        </div>

        <p className={styles.distance}>{distance}</p>
      </div>
    </div>
  );
};

export default StoreCard;
