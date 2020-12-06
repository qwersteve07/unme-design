import React from "react";
import styles from "components/tags/index.module.sass";

const Tags = ({ data }) => {
  const mainTag = () => {
    switch (data[0]) {
      case "cis":
        return "CIS Design 品牌設計";
      case "interior":
        return "Interior Design 室內設計";
      case "literature":
        return "Product Literature Design 文宣設計";
      case "space-branding":
        return "Space Branding Design 品牌空間設計";
    }
  };

  const subTag = () => {
    switch (data[1]) {
      case "0d":
        return "0 Dimension | 品牌理念定位";
      case "1d":
        return "1st Dimension | 環境定位分析";
      case "2d":
        return "2nd Dimension | 2維設計";
      case "3d":
        return "3rd Dimension | 3維設計";
      case "4d":
        return "4th Dimension | 維度設計";
    }
  };

  return (
    <div className={styles.tags}>
      <span>#{mainTag()}</span>
      <span>#{subTag()}</span>
    </div>
  );
};

export default Tags;
