import React from "react";
import styles from "../styles/page.module.css";
import Image from "next/image";
import Navbar from "src/components/navbar/navbar";
import HeroForm from "./HeroForm";
import { IoMenuSharp } from "react-icons/io5";
import dynamic from "next/dynamic";

const HeroSection = () => {
  return (
    <div className={styles.hero_section}>
      <Navbar
        buttontext="Contact Us"
        buttonlink="/contact-us"
        theme={{ secondaryColor: "#004449", primaryColor: "#fff" }}
      />
      <div className={styles.hero_section_container}>
        <h1>
          Acquire new <span>customers</span> with Quiikmart
        </h1>

        <div className={styles.hero_images}>
          <div className={styles.hero_image}>
            <Image src="/images/hero.png" alt="man cooking" width={100} height={100} />
          </div>
          <div className={styles.hero_image}>
            <Image src="/images/hero.png" alt="woman cooking" width={100} height={100} />
          </div>
        </div>

        <HeroForm />
      </div>
    </div>
  );
};

export default HeroSection;
