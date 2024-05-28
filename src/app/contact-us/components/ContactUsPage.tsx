"use client";

import styles from "../styles/page.module.css";
import Image from "next/image";
import FAQSection from "../../../components/accordion/FAQSection";
import Link from "next/link";
import Footer from "src/components/footer/footer";
import Navbar from "src/components/navbar/navbar";
import { useState, useEffect } from "react";
import Head from "next/head";
import useAnalytics from "../../custom-hooks/useAnalytics";

const ContactUsPage = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useAnalytics();

  useEffect(() => {
    const handleWindowResize = () => {
      // if (typeof window === "undefined") return;
      setWindowWidth(window.innerWidth);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isTabletMobile = windowWidth && windowWidth <= 768;

  return (
    <div className={styles.contactus_page}>
      <Head>
        <title>Quiikmart Contact Us</title>
        <meta property="og:title" content="Quiikmart Contact Us" />
        <meta property="og:description" content="Contact Us At Quiikmart" />
        <meta property="og:url" content="https://www.quiikmart.com/contact-us" />
      </Head>
      <div className={styles.container}>
        {/* {!isTabletMobile ? (
          <Link href="/">
            <div className={styles.image_logo}>
              <Image src={"/svgs/quiikmart_logo.svg"} alt="quiikmart logo" width={100} height={100} />
            </div>
          </Link>
        ) : (
          <Navbar buttonlink={"/waitlist/sign-up"} wantSecondaryColor/>
        )} */}
        <Navbar buttonlink={"/waitlist/sign-up"} wantSecondaryColor />

        <h1 className={styles.header}>Get in touch with us</h1>

        <div className={styles.cover_us}>
          <h2>Cover us in the Media</h2>
          <p>
            You can reach us for possible collaborations, media inquiries or pr related questions{" "}
            <u>here</u>
          </p>
        </div>

        <div className={styles.aspects}>
          <h2>For help with other aspects...</h2>

          <div className={styles.aspect}>
            <div className={styles.persona}>
              <div className={styles.image_container}>
                <Image src={"/svgs/merchant.svg"} alt="shop" width={100} height={100} />
              </div>

              <h3>Merchant</h3>
            </div>
            <p>Support for new business owners</p>
          </div>
          <div className={styles.aspect}>
            <div className={styles.persona}>
              <div className={styles.image_container}>
                <Image src={"/svgs/driver.svg"} alt="man" width={100} height={100} />
              </div>

              <h3>Driver</h3>
            </div>
            <p>Want to join the Quickmart Ecosystem and start making money?</p>
          </div>

          <Link
            href="mailto:support@quiikmart.com?Subject=Help%20Me"
            target="_top"
            style={{ display: "inline-block", alignSelf: "center" }}
          >
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
      <FAQSection />
      <Footer backgroundColor="#004449" color="#fff" />
    </div>
  );
};

export default ContactUsPage;
