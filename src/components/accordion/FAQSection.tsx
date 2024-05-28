"use client";
import React, { useState } from "react";
import styles from "./faq.module.css";
import Accordion from "./AccordionItem";
import AccordionContainer from "src/components/accordion/AccordionContainer";

function FAQSection() {
  return (
    <div className={styles.faqSection}>
      <div className={styles.faqContainer} id="cont">
        <h2 className={styles.title}>Have Questions? We've Answers.</h2>
        <AccordionContainer />
      </div>
    </div>
  );
}

export default FAQSection;
