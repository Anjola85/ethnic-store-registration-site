"use client";
import React from "react";
import styles from "../../styles/page.module.css";
import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";
import { useWaitlist } from "src/contexts/WaitlistContext";
import useWindowWidth from "src/app/custom-hooks/useWindowWidth";

const HeroSection = () => {
  const { toggleCustomerWaitlist } = useWaitlist();
  const windowWidth = useWindowWidth();

  const goToWaitlist = () => {
    const tabletWidth = 768; // Tablets and smaller devices

    if (window.innerWidth <= tabletWidth) {
      window.location.href = "/waitlist/sign-up";

      return;
    }
    toggleCustomerWaitlist();
  };

  const MobileHero = (
    <div className={styles.hero_section}>
      <div className={styles.hero_section_container}>
        <h1>Your Ethnic stores are now closer to you</h1>
        <p>
          Explore a diverse marketplace of ethnic stores with Quiikmart,
          bringing authentic and unique products directly to your doorstep.
        </p>
        <Image
          src="/images/hero.png"
          alt="hero"
          width={300}
          height={300}
          loading="eager"
        />
      </div>
    </div>
  );

  if (windowWidth && windowWidth <= 1023) {
    return MobileHero;
  }

  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_section_container}>
        <h1>Your Ethnic stores are now closer to you</h1>
        <p>
          Explore a diverse marketplace of ethnic stores with Quiikmart,
          bringing authentic and unique products directly to your doorstep.
        </p>
        <button id="hero_button" onClick={goToWaitlist}>
          Sign Up
        </button>
        <Image
          src="/images/home_1.jpg"
          alt="hero"
          width={300}
          height={300}
          loading="eager"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default HeroSection;
