import React from "react";
import Image from "next/image";
import styles from "../../styles/page.module.css";

interface Props {
  cardBgColor: string;
  title: string;
  titleColor: string;
  btnText: string;
  btnAction: () => void;
  svg: string;
  svgAlt: string;
  aspectRatio?: number;
}
const CreateImpactCard: React.FC<Props> = ({
  cardBgColor,
  title,
  titleColor,
  btnText,
  btnAction,
  svg,
  svgAlt,
  aspectRatio = 1,
}) => {
  return (
    <div className={styles.create_impact_card} style={{ backgroundColor: cardBgColor }}>
      <div className={styles.top}>
        <h3 style={{ color: titleColor }}>{title}</h3>
        <button onClick={btnAction}>{btnText}</button>
      </div>

      <div className={styles.card_image} style={{ aspectRatio: aspectRatio }}>
        <Image src={svg} alt={svgAlt} width={100} height={100} loading="eager" />
      </div>
    </div>
  );
};

export default CreateImpactCard;
