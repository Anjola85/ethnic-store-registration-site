import React from "react";
import HeroSection from "../components/HeroSection";
import styles from "../styles/page.module.css";
import FeatureSection from "../components/FeatureSection";
import Footer from "../../../components/footer/footer";
import Banner from "../components/Banner";
import StorePreviewSection from "..//components/StorePreviewSection";
import FAQSection from "../../../components/accordion/FAQSection";
import Navbar from "src/components/navbar/navbar";
import Head from "next/head";

function HowItWorks() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quiikmart How It Works</title>
        <meta property="og:title" content="Quiikmart How It Works" />
        <meta property="og:description" content="How It Works At Quiikmart" />
        <meta property="og:url" content="https://www.quiikmart.com/how-it-works" />
      </Head>
      <Navbar
        buttonlink="/waitlist/sign-up"
        buttontext="Sign Up"
        theme={{ primaryColor: "#fff", secondaryColor: "#004449" }}
      />
      <HeroSection />
      <FeatureSection />
      <StorePreviewSection />
      <div className={styles.customFaqStyle}>
        <div className={styles.content}>
          <FAQSection />
        </div>
      </div>
      <Banner />
      <Footer backgroundColor="#fff" color="#000" />
    </div>
  );
}

export default HowItWorks;
