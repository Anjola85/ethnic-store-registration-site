import React from "react";

const PrivacyPolicySection = ({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: React.ReactNode;
}) => {
  return (
    <section id={id} style={{ marginBottom: 20 }}>
      <h2>{title}</h2>
      {content}
    </section>
  );
};

export default PrivacyPolicySection;
