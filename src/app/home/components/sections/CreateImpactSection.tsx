"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/page.module.css";
import CreateImpactCard from "../cards/CreateImpactCard";
import { useRouter } from "next/navigation";
import useWindowWidth from "src/app/custom-hooks/useWindowWidth";
import useScreenType from "src/app/custom-hooks/useScreenType";
import { LARGE_TABLET, SMALL_PHONE, TABLET } from "src/app/constants/windowConstants";
import { useWaitlist } from "src/contexts/WaitlistContext";

const CreateImpactSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const screenTypeHook = useScreenType();

  const windowWidth = useWindowWidth();

  function getScrollAmount(width: number | undefined) {
    if (width !== undefined) {
      const amount = width / 1.13636363636;
      return amount + (2 * amount) / 100;
    }
    return 330;
  }

  const SCROLL_TIME = 5000;

  useEffect(() => {
    const screenType = screenTypeHook;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const width = windowWidth;

        let newScrollLeft = scrollRef.current.scrollLeft + getScrollAmount(width); // Adjust based on screen size

        const maxScrollLeft = scrollRef.current.scrollWidth;

        if (newScrollLeft >= maxScrollLeft) {
          newScrollLeft = 0; // Reset to start
        } else if (screenType === LARGE_TABLET && maxScrollLeft - newScrollLeft < 100) {
          newScrollLeft = 0; // Reset to start
        }

        scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      }
    }, SCROLL_TIME);

    return () => clearInterval(interval);
  }, [screenTypeHook]); // Add windowWidth as a dependency

  const {toggleCustomerWaitlist, toggleDriverWaitlist} = useWaitlist();

  const tabletWidth = 768; // Tablets and smaller devices

  function handleSignUp() {
    if (windowWidth && windowWidth <= tabletWidth) {
      router.push("/waitlist/sign-up");
      return;
    }
    toggleCustomerWaitlist();
  }

  function handleSignUpStore() {
    router.push("/partner-with-us");
  }

  function handleBecomeQuiikster() {
    if (windowWidth && windowWidth <= tabletWidth) {
      router.push("/waitlist/become-a-quiikster");
      return;
    }
    toggleDriverWaitlist();
  }

  return (
    <div className={styles.create_impact_section}>
      <div className={styles.create_impact_section_container}>
        <h2>Create Impact with Us</h2>

        <div className={styles.create_impact_cards} ref={scrollRef}>
          <CreateImpactCard
            cardBgColor="#FFFEF0"
            title="Start Saving and Shopping"
            titleColor="#004449"
            btnText="Sign Up"
            btnAction={handleSignUp}
            svg="/svgs/save_and_shop.svg"
            svgAlt="Customer shopping"
          />
          <CreateImpactCard
            cardBgColor="#D5F457"
            title="Start Growing your business"
            titleColor="#601124"
            btnText="Sign Up Store"
            btnAction={handleSignUpStore}
            svg="/svgs/grow_store.svg"
            svgAlt="Customer shopping"
          />
          <CreateImpactCard
            cardBgColor="#BA68C8"
            title="Become a Quiikster and Earn"
            titleColor="#fff"
            btnText="Become a Quiikster"
            btnAction={handleBecomeQuiikster}
            svg="/svgs/become_a_quiikster.svg"
            svgAlt="Customer shopping"
            aspectRatio={1.48}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateImpactSection;
