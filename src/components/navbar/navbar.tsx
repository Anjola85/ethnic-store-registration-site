"use client";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { IoCloseOutline, IoMenuSharp } from "react-icons/io5";
import styles from "./navbar.module.css";
import { PiCaretRight } from "react-icons/pi";
import Image from "next/image";
import { useWaitlist } from "src/contexts/WaitlistContext";
import QuiikmartLogo from "./QuiikmartLogo";

interface Props {
  buttontext?: string;
  buttonlink: string;
  wantSecondaryColor?: boolean;
  theme?: { primaryColor: string; secondaryColor: string };
}

const Navbar: React.FC<Props> = ({
  buttontext,
  buttonlink,
  wantSecondaryColor,
  theme,
}) => {
  const primaryColor = theme?.primaryColor;
  const secondaryColor = theme?.secondaryColor;

  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCustomerWaitlist } = useWaitlist();

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

  const isDesktopNav = windowWidth && windowWidth >= 1023;

  function hideElements() {
    const heroHead = document.getElementById("hero_head");
    if (heroHead) {
      heroHead.style.display = "none";
    }

    const heroButton = document.getElementById("hero_button");
    if (heroButton) {
      heroButton.style.display = "none";
    }
  }

  function showElements() {
    const heroHead = document.getElementById("hero_head");
    if (heroHead) {
      heroHead.style.display = "inline-block";
    }

    const heroButton = document.getElementById("hero_button");
    if (heroButton) {
      heroButton.style.display = "inline-block";
    }
  }

  const toggleMenu = () => {
    if (!isDesktopNav && isMenuOpen) {
      document.documentElement.style.overflowY = "auto"; // Enable scrolling
      showElements();
    } else if (!isDesktopNav && !isMenuOpen) {
      document.documentElement.style.overflowY = "hidden"; // Disable scrolling
      hideElements();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const MenuButton = !isDesktopNav && !isMenuOpen && (
    <IoMenuSharp
      className={styles.hamburger_menu}
      onClick={toggleMenu}
      style={{ fill: primaryColor }}
    />
  );
  const CloseButton = isMenuOpen && (
    <IoCloseOutline className={styles.close_menu} onClick={toggleMenu} />
  );

  if (isDesktopNav) {
    return (
      <div className={styles.navbar} style={{ backgroundColor: primaryColor }}>
        <Link href="/" className={styles.nav_logo_desktop}>
          <QuiikmartLogo fill={secondaryColor} />
        </Link>
        <nav>
          <Link
            href="/about-us"
            onClick={toggleMenu}
            style={{ color: secondaryColor }}
          >
            Company
          </Link>
          <Link
            href="/partner-with-us"
            onClick={toggleMenu}
            style={{ color: secondaryColor }}
          >
            Partnerships
          </Link>
          <Link
            href="/contact-us"
            onClick={toggleMenu}
            style={{ color: secondaryColor }}
          >
            Help
          </Link>
          <Link
            href="/how-it-works"
            onClick={toggleMenu}
            style={{ color: secondaryColor }}
          >
            How It Works
          </Link>
        </nav>
        <button
          onClick={toggleCustomerWaitlist}
          style={{ backgroundColor: secondaryColor, color: primaryColor }}
        >
          Sign Up
        </button>
      </div>
    );
  }

  return (
    <div className={styles.navbar}>
      {MenuButton}
      <Link href="/">
        <QuiikmartLogo fill={primaryColor} />
      </Link>
      {buttontext && (
        <Link href={buttonlink}>
          <button
            style={{ backgroundColor: primaryColor, color: secondaryColor }}
          >
            {buttontext}
          </button>
        </Link>
      )}

      {isMenuOpen && (
        <div className={styles.fullPageMenu}>
          {CloseButton}
          <Link href="/" className={styles.nav_logo_closed}>
            <QuiikmartLogo fill={primaryColor} />
          </Link>
          <nav>
            <Link
              href="/about-us"
              onClick={toggleMenu}
              className={styles.nav_link}
            >
              Company
              <PiCaretRight />
            </Link>
            <Link
              href="/partner-with-us"
              onClick={toggleMenu}
              className={styles.nav_link}
            >
              Partnerships
              <PiCaretRight />
            </Link>
            <Link
              href="/contact-us"
              onClick={toggleMenu}
              className={styles.nav_link}
            >
              Help
              <PiCaretRight />
            </Link>
            <Link
              href="/how-it-works"
              onClick={toggleMenu}
              className={styles.nav_link}
            >
              How It Works
              <PiCaretRight />
            </Link>
            <Link href={"/waitlist/sign-up"} style={{ alignSelf: "center" }}>
              <button>Join Waitlist</button>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
