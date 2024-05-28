"use client";

import React from "react";
import styles from "../../styles/page.module.css";
import Image from "next/image";
import { useWaitlist } from "src/contexts/WaitlistContext";
import { useRouter } from "next/navigation";
import useWindowWidth from "src/app/custom-hooks/useWindowWidth";

const PlatformSection = () => {
  const { toggleCustomerWaitlist } = useWaitlist();

  const router = useRouter();

  const windowWidth = useWindowWidth();

  const tabletWidth = 768; // Tablets and smaller devices

  function handleSignUp() {
    if (windowWidth && windowWidth <= tabletWidth) {
      router.push("/waitlist/sign-up");
      return;
    }
    toggleCustomerWaitlist();
  }

  return (
    <div className={styles.platform_section}>
      <div className={styles.platform_section_container}>
        <div className={styles.text_content}>
          <h1>A Marketplace for your ethnic stores</h1>
          <p> 
            Find all your favorite ethnic stores close by. Discover and shop
            from all your favs and have them delivered to you instantly.
          </p>
          <button onClick={handleSignUp}>Start browsing</button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div className={styles.platform_image}>
            <Image
              src="/images/tour1.jpg"
              alt="platform image"
              width={100}
              height={100}
              loading="eager"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSection;
