"use client";
import React from "react";
import styles from "../get-in-touch/get-in-touch.module.css";
import Link from "next/link";

const GetInTouchSection = () => {
  return (
    <div className={styles.getintouch_section}>
      <div className={styles.getintouch_section_container}>
        <h2>Get In touch</h2>
        <p>
          {"We'd"} love to hear from you. Feel free to reach out to us with any questions or
          comments you may have about QuiikMart platform.
        </p>
        <Link href="/contact-us" style={{ display: "inline-block", alignSelf: "center" }}>
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default GetInTouchSection;
