"use client";

import React from "react";
import PrivacyPolicySection from "./components/PrivacyPolicySection";
import { privacyPolicyData } from "./data";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "informationCollection", title: "Information Collection" },
  { id: "useOfInformation", title: "Use of Information" },
];

const PrivacyPolicy = () => {
  const handleScrollToElement = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#fff", color: "#000", minHeight: "100vh" }}>
      <div style={{ flex: "1", padding: "20px" }}>
        {/* Table of Contents */}
        <div style={{ position: "fixed", width: "200px" }}>
          <h2>Table of Contents</h2>
          <ul>
            {sections.map((section) => (
              <li key={section.id} onClick={() => handleScrollToElement(section.id)}>
                {section.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ flex: "3", padding: "20px" }}>
        {privacyPolicyData.map((section) => (
          <PrivacyPolicySection
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
