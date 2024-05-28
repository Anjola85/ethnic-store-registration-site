import React from "react";
import styles from "../styles/page.module.css";

const PrivacySection = () => {
  return (
    <div className={styles.privacy_section}>
      <div className={styles.privacy_section_container}>
        <p>
          We care about protecting your data.
          {" Here's"} <span>our Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default PrivacySection;
