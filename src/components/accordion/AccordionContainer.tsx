"use client";

import React from "react";
import styles from "./faq.module.css";
import { accordions } from "./data";
import Accordion from "./AccordionItem";

const AccordionContainer = () => {
  return (
    <div className={styles.accordionContainer}>
      {accordions.map((accordion, index) => (
        <Accordion key={index} title={accordion.title} content={accordion.content} />
      ))}
    </div>
  );
};

export default AccordionContainer;
