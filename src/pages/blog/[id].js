import React, { useState } from "react";
import styles from "pages/blog/index.module.sass";
import PageContainer from "components/page-container"; 
import fs from "fs";
import matter from "gray-matter";

const Post = () => {
  return (
    <PageContainer>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <div className={styles.heading}>CATEGORY</div>
          <ul>
            <li>/ 分類</li>
            <li>/ 分類</li>
            <li>/ 分類</li>
            <li>/ 分類</li>
          </ul>
        </div>
        <div className={styles.blog}>efaefe</div>
      </div>
    </PageContainer>
  );
};

export async function getStaticPaths() {
    return {
      paths: [
        { params: { id: '' } } // See the "paths" section below
      ],
      fallback: true or false // See the "fallback" section below
    };
  }

export async function getStaticProps() {
  console.log(process.cwd());
  const files = fs.readdirSync(`${process.cwd()}`);
}

export default Post;
