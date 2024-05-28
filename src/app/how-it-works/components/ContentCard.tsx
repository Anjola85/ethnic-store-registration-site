"use client";

import React from "react";
import styles from "../styles/page.module.css";

interface ContentCardProps {
  number: string | number;
  content: {
    header: string;
    body: string;
  };
  style?: React.CSSProperties;
  color?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  number,
  content,
  style,
  color,
}) => {
  return (
    <div className={styles.circle_container} style={style}>
      <div className={styles.circle_content}>
        <div className={styles.circle} style={{ backgroundColor: color }}>
          {number}
        </div>
        <h3>{content.header}</h3>
      </div>
      <p>{content.body}</p>
    </div>
  );
};

export default ContentCard;
