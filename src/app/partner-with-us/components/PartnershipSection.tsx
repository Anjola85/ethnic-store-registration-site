"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/page.module.css";

const PartnershipSection = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isMobile = windowWidth && windowWidth <= 425;

  return (
    <div className={styles.partnership_section}>
      <div className={styles.partnership_section_container}>
        {/* split h2 and p into one column then an svg in another */}
        {/* have a separate container below and implement the above */}

        {isMobile ? (
          <div className={styles.mobile_strategic_partnership_section}>
            <div className={styles.mobile_strategic_top_section}>
              <h2>Strategic Partnerships</h2>
              <div className={styles.mobile_strategic_image}>
                <Image
                  src={"/svgs/business-deal.svg"}
                  alt={"business-deal"}
                  width={320}
                  height={417}
                />
              </div>
            </div>
            <p>
              We built Quiikmart to meet local businesses where they are not able to. With our
              partnerships, our teams are able to help and enable you to stand in a fast digital
              world.
            </p>
          </div>
        ) : (
          <div className={styles.strategic_partner_setion}>
            <div className={styles.column1}>
              <h2>Strategic Partnerships</h2>
              <p className={styles.subheading}>
                We built Quiikmart to meet local businesses where they are not able to. With our
                partnerships, our teams are able to help and enable you to stand in a fast digital
                world.
              </p>
            </div>
            <div
              className={styles.column2}
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <Image
                src={"/svgs/business-deal.svg"}
                alt={"business-deal"}
                width={320}
                height={417}
              />
            </div>
          </div>
        )}

        <div className={styles.meet_global}>
          <h3>Where Local Meets Global</h3>
          <p className={styles.local_text}>
            Get closer to your customers, earn more revenue and start understanding your customers
            better with our all integration software
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;
