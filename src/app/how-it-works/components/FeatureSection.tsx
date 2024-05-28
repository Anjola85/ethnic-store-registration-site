"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/page.module.css";
import Button from "src/components/button/button";
import Link from "next/link";
import ContentCard from "./ContentCard";
import Image from "next/image";
import { PiCaretRight, PiCaretLeft } from "react-icons/pi";
import { useWaitlist } from "src/contexts/WaitlistContext";
import { useRouter } from "next/navigation";

function FeatureSection() {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [currentCard, setCurrentCard] = useState(0);

  const { toggleCustomerWaitlist } = useWaitlist();
  const router = useRouter();
  const tabletWidth = 768;

  function handleSignUp() {
    if (windowWidth && windowWidth <= tabletWidth) {
      router.push("/waitlist/sign-up");
      return;
    }
    toggleCustomerWaitlist();
  }

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

  const isMobile = windowWidth && windowWidth < 768;

  const cards = [
    {
      number: "1",
      content: {
        header: "Search & Discover stores",
        body: "Search for your favorite stores or discover new ones with our live maps that gives access to over 2,000 stores in your area",
      },
      backgroundColor: "#FF725E",
    },
    {
      number: "2",
      content: {
        header: "Browse over 50,000 products",
        body: "Search for your favorite stores or discover new ones with our live maps that gives access to over 2,000 stores in your area",
      },
      backgroundColor: "#0044497A",
    },
    {
      number: "3",
      content: {
        header: "Shop from them and have it delivered to you",
        body: "Search for your favorite stores or discover new ones with our live maps that gives access to over 2,000 stores in your area",
      },
      backgroundColor: "#D7FFC2",
    },
  ];

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentCard((prevCard) => {
      if (prevCard === 0) {
        return cards.length - 1;
      } else {
        return (prevCard - 1) % cards.length;
      }
    });
  };

  return (
    <div className={styles.feature_section}>
      <div className={styles.content}>
        <h1>
          Bring Home closer with a&nbsp;
          <span className={styles.highlighted}>single click</span>
        </h1>

        {isMobile ? (
          <div className={styles.card_container}>
            <PiCaretLeft className={styles.leftCaret} onClick={handlePrev} />
            <ContentCard
              number={cards[currentCard].number}
              content={cards[currentCard].content}
              color={cards[currentCard].backgroundColor}
            />
            <PiCaretRight className={styles.rightCaret} onClick={handleNext} />
          </div>
        ) : (
          <div className={styles.grid}>
            <div className={styles.col1}>
              <ContentCard number={cards[0].number} content={cards[0].content} />
            </div>
            <div className={styles.col2}>
              <div className={styles.img_container}>
                <Image
                  src="/svgs/character_on_scooter.svg"
                  alt="character_on_scooter"
                  width={173}
                  height={98}
                  // layout="responsive"
                />
              </div>
              <ContentCard number={cards[1].number} content={cards[1].content} />
            </div>
            <div className={styles.col3}>
              <ContentCard number={cards[2].number} content={cards[2].content} />
            </div>
          </div>
        )}

          <button
            className={styles.btn}
            // backgroundColor="#004449"
            // color="#FFF"
            style={{
              backgroundColor: "#004449",
              // width: "20em",
              // borderRadius: "4em",
              // display: "inline-flex",
              // height: "6rem",
              // fontSize: "2rem",
              // alignItems: "center",
              // justifyContent: "center",
              // marginBottom: "4rem",
            }}
            onClick={handleSignUp}
          >
            START BROWSING STORES
          </button>
      </div>
    </div>
  );
}

export default FeatureSection;
