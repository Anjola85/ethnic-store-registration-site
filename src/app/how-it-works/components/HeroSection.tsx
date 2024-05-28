"use client";
import React from "react";
import styles from "../styles/page.module.css";
import Image from "next/image";
import Navbar from "../../../components/navbar/navbar";
import dynamic from "next/dynamic";

function HeroSection() {
  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_section_container}>
        <h1 id="hero_head">HOW IT WORKS</h1>

        {/* background below */}
        <div className={styles.img_container}>
          <Image
            src="/images/how-it-works.jpg"
            alt="app store"
            width={100}
            height={100}
            // layout="fixed"
            // layout="responsive"
            loading="eager"
          />
          <div className={styles.overlay}></div>
        </div>

        {/* left flags */}
        <div
          className={styles.flag}
          style={{
            backgroundImage: "url(/svgs/emojione_flag-for-india.svg)",
            top: "15.875%",
            left: "24.7083%",
          }}
        ></div>
        <div
          className={styles.flag}
          style={{
            backgroundImage: "url(/svgs/emojione_flag-for-sudan.svg)",
            top: "30.875%",
            left: "22.7083%",
          }}
        ></div>
        <div
          className={styles.flag}
          style={{
            backgroundImage: "url(/svgs/emojione_flag-for-china.svg)",
            top: "22.875%",
            left: "14.7083%",
          }}
        ></div>
        <div
          className={styles.flag}
          style={{
            backgroundImage: "url(/svgs/emojione_flag-for-kenya.svg)",
            top: "32.875%",
            left: "7.7083%",
          }}
        ></div>
        <div
          className={styles.flag}
          style={{
            backgroundImage: "url(/svgs/emojione_flag-for-congo-kinshasa.svg)",
            top: "40.875%",
            left: "14.7083%",
          }}
        ></div>
        {/* right flags */}
        <div
          className={styles.flag}
          style={{
            backgroundImage: "url(/svgs/emojione_flag-for-nigeria.svg)",
            top: "22.875%",
            left: "76.7083%",
          }}
        ></div>
        <div
          className={styles.flag}
          style={{
            backgroundImage: "url(/svgs/emojione_flag-for-south-korea.svg)",
            top: "17.875%",
            left: "67%",
          }}
        ></div>
        <div
          className={styles.flag}
          style={{
            backgroundImage: "url(/svgs/emojione_flag-for-jamaica.svg)",
            top: "30.875%",
            left: "70.7083%",
          }}
        ></div>
        <div
          className={styles.flag}
          style={{
            backgroundImage: "url(/svgs/emojione_flag-for-ghana.svg)",
            top: "32.875%",
            left: "82.7083%",
          }}
        ></div>
        <div
          className={styles.flag}
          style={{
            backgroundImage: "url(/svgs/emojione_flag-for-haiti.svg)",
            top: "40.875%",
            left: "76.7083%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default HeroSection;
