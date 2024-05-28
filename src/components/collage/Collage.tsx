import React from "react";
import Image from "next/image";
import styles from "../collage/collage.module.css";

const Collage = () => {
  return (
    <div className={styles.collage}>
      <div className={styles.collage_image1}>
        <Image
          src="/images/clay-banks-unsplash.jpg"
          alt="woman shopping"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.collage_image2}>

        <Image
          src="/images/couple.jpg"
          alt="woman shopping 2"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.collage_image3}>
        <Image
          src="/images/asian.jpeg"
          alt="man shopping"
          width={100}
          height={100}
        />

      </div>
      <div className={styles.collage_image4}>
        <Image src="/images/tour1.jpg" alt="man shopping" width={100} height={100} />
      </div>
    </div>
  );
};

export default Collage;
