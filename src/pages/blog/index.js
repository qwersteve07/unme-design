import React, { useState } from "react";
import fs from "fs";
import styles from "pages/blog/index.module.sass";
import { useSelector } from "react-redux";
import PageContainer from "components/page-container";
import Link from "next/link";
import Arrow from "components/arrow";
import More from "components/more";
import matter from "gray-matter";
import { BLOG_CONTENT_PATH } from "config/config";

const Posts = ({ data }) => {
  const state = useSelector((state) => state.appReducer);
  const [hoverId, setHoverId] = useState("");

  return data.map(
    (
      { data: { thumbnail, catag, title, description, date, author }, id },
      key
    ) => {
      const setMouseOver = (e) => {
        if (e.currentTarget.id === id) setHoverId(id);
      };
      const setMouseLeave = () => setHoverId("");

      return (
        <div
          className={styles.item}
          key={key}
          onMouseOver={setMouseOver}
          onMouseLeave={setMouseLeave}
          id={id}
        >
          <Link href={`/blog/[id]`} as={`blog/${id}`}>
            <div className={styles.top}>
              <div className={styles.info}>
                <div className={styles.catag}>/ {catag}</div>
                <div className={styles.title}>{title}</div>
              </div>
              <div className={styles.thumbnail}>
                <img src={thumbnail} alt="thumbnail" />
              </div>
            </div>
          </Link>
          <div className={styles.desc}>{description}</div>
          <div className={styles["sub-info"]}>
            <div>
              {date} - by {author}
            </div>
            <div className={styles.readmore}>
              <Link href={`/blog/${id}`}>
                <Arrow
                  dark={state.darkMode}
                  hoverState={hoverId === id}
                  hoverWithContainer={true}
                />
              </Link>
            </div>
          </div>
        </div>
      );
    }
  );
};

const Blog = ({ blogData, moreData }) => {
  return (
    <PageContainer exception={<More data={moreData} />}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <div className={styles.heading}>CATEGORY</div>
          <ul>
            <li>/ Alpha's Talk</li>
          </ul>
        </div>
        <div className={styles.blog}>
          <Posts data={blogData} />
        </div>
      </div>
    </PageContainer>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/${BLOG_CONTENT_PATH}`);
  const blogData = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`${BLOG_CONTENT_PATH}/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    return {
      id: filename.replace(".md", ""),
      data,
    };
  });

  const moreData = [
    {
      id: "service",
      title: "Our Service",
      desc: "深入了解0-4維度的設計規劃，以及專案服務的流程",
      path: "/service",
    },
    {
      id: "contact",
      title: "Contact Us",
      desc:
        "歡迎分享更多關於你的事情，讓我們與你一同探索出企業的獨特性，陪伴品牌一同成長。",
      path: "/contact",
      text: "contact",
    },
  ];

  return {
    props: {
      blogData,
      moreData,
    },
  };
}

export default Blog;
