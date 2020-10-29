import React from "react";
import styles from "components/page-container/index.module.sass";

const PageContainer = ({ children }) => {
  return <div className={styles["page-container"]}>{children}</div>;
};

export default PageContainer;
