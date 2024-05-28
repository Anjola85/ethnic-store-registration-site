"use client";
import React, { useEffect, useRef } from "react";
import styles from "../styles/page.module.css";
import Collage from "src/components/collage/Collage";
import Image from "next/image";
import { useRouter } from "next/router";
import { LARGE_TABLET } from "src/app/constants/windowConstants";
import useScreenType from "src/app/custom-hooks/useScreenType";
import useWindowWidth from "src/app/custom-hooks/useWindowWidth";

const EthnicSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const screenTypeHook = useScreenType();

  const windowWidth = useWindowWidth();

  function getScrollAmount(width: number | undefined) {
    if (width !== undefined) {
      const amount = width / 1.22149837134;
      return amount + (5 * amount) / 100;
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

        if (newScrollLeft >= maxScrollLeft - 50) {
          newScrollLeft = 0; // Reset to start
        } else if (screenType === LARGE_TABLET && maxScrollLeft - newScrollLeft < 100) {
          newScrollLeft = 0; // Reset to start
        }

        scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      }
    }, SCROLL_TIME);

    return () => clearInterval(interval);
  }, [screenTypeHook]); // Add windowWidth as a dependency

  return (
    <div className={styles.ethnic_section}>
      <div className={styles.ethnic_section_container}>
        <h1>
          We are connecting ethnic stores to <span>consumers</span>
        </h1>
        <Collage />

        <h2>Our Promise</h2>
        <div className={styles.promises} ref={scrollRef}>
          <div className={styles.promise} style={{ backgroundColor: "#D5F457" }}>
            <div className="top">
              <h3>On Demand delivery Support</h3>

              <p>
                Collaborate with us on fully customized strategic partnerships to take your grocery
                store to the next level. We'll harness our expertise to design a tailored approach
                that ensures your business thrives.
              </p>
            </div>

            <div className={styles.promise_image}>
              <Image src="/svgs/delivery.svg" alt="truck delivery" width={300} height={300} />
            </div>
          </div>
          <div className={styles.promise} style={{ backgroundColor: "#FFF9E6" }}>
            <div className="top">
              <h3>Seamless Integrations & Softwares</h3>
              <p>
                Our delivery tools and shoppers are ever ready to help cater to your customers with
                our real time tracking tools, route optimization softwares and inventory management
                tools.
              </p>
            </div>
            <div className={styles.promise_image}>
              <Image src="/svgs/bulb.svg" alt="bulb" width={330} height={330} />
            </div>
          </div>
          <div className={styles.promise} style={{ backgroundColor: "#D7FFC2" }}>
            <div className="top">
              <h3>Marketing & Branding Support</h3>
              <p>
                Empower yourself to market your products and promotions effortlessly through our
                user-friendly platform. Easily reach out to your customers with just a few clicks.
              </p>
            </div>
            <div className={styles.promise_image}>
              <Image src="/svgs/shop.svg" alt="kiosk" width={320} height={320} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthnicSection;
