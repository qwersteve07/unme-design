import React from "react";
import styles from "components/page-container/index.module.sass";
import Nav from "components/nav";
import Footer from "components/footer";

const PageContainer = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles["page-container"]}>{children}</div>
      <Footer />
    </>
  );
  return;
};

export default PageContainer;
