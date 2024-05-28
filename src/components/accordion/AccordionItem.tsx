"use client";
import React, { useRef, useState } from "react";
import styles from "./faq.module.css";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setIsOpen(!isOpen);
    setMaxHeight(isOpen ? "0px" : `${contentRef?.current?.scrollHeight}px`);
  }

  return (
    <div className={styles.accordionItem}>
      <div className={styles.header_container} onClick={toggleAccordion}>
        <h2 className={styles.accordionHeader}>{title}</h2>
        {isOpen ? <SlArrowUp /> : <SlArrowDown />}
      </div>

      <div
        className={styles.accordionContent}
        ref={contentRef}
        style={{ maxHeight, paddingBottom: isOpen ? "15px" : "0px" }}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
