"use client";
import styles from "../app/home/styles/page.module.css";
import HeroSection from "./home/components/sections/HeroSection";
import PlatformSection from "./home/components/sections/PlatformSection";
import AppTourSection from "./home/components/sections/AppTourSection";
import PopularStoreSection from "./home/components/sections/PopularStoreSection";
import GetInTouchSection from "../components/get-in-touch/GetInTouchSection";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import dynamic from "next/dynamic";
import CreateImpactSection from "./home/components/sections/CreateImpactSection";
import useWindowWidth from "./custom-hooks/useWindowWidth";
import useAnalytics from "./custom-hooks/useAnalytics";

export default function Home() {
  const windowWidth = useWindowWidth();

  useAnalytics();

  return (
    <div className={styles.home_page}>
      <Navbar
        buttontext="Sign Up"
        buttonlink="/waitlist/sign-up"
        theme={{ primaryColor: "#004449", secondaryColor: "#fff" }}
      />
      <div className={styles.container}>
        <HeroSection />
        {windowWidth && windowWidth >= 1024 && <PlatformSection />}
        <CreateImpactSection />
        {windowWidth && windowWidth < 1024 && <PlatformSection />}
        <AppTourSection />
        <PopularStoreSection />
        <GetInTouchSection />
      </div>
      <Footer backgroundColor="#004449" color="#FFF" />
    </div>
  );
}
