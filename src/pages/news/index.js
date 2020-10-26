import React from "react";
import styles from "pages/news/index.module.sass";
import Nav from "components/nav";
import PageContainer from "components/page-container";

const News = () => {
  const Content = () => {
    return <Nav />;
  };

  return <PageContainer main={<Content />} />;
};

export default News;
