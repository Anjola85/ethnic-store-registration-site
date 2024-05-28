"use client";
import React from "react";
import styles from "../styles/page.module.css";
import Image from "next/image";
import Button from "src/components/button/button";

const ContactUs = () => {
  return (
    <div className={styles.contact_us}>
      <section className={styles.contact_us_section}>
        <article className={styles.contact_us_text}>
          <h2>Contact Us</h2>
          <p>
            Whether you are a merchant, store owner or an independant business owner, we would love
            to hear from you
          </p>
          <Button className={styles.btn} backgroundColor="#FFF" color="#000">
            Contact Sales
          </Button>
        </article>
        <Image src={"/images/contact-us1.png"} alt="logo" width={500} height={600} />
      </section>
    </div>
  );
};

export default ContactUs;
