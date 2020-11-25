import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import styles from "pages/blog/index.module.sass";
import classnames from "classnames/bind";
import { BLOG_CONTENT_PATH } from "config/config";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import PageContainer from "components/page-container";
import More from "components/more";

const Post = ({ data, content, moreData }) => {
  const cx = classnames.bind(styles);
  const [init, setInit] = useState(false);
  const [sticky, setSticky] = useState(false);

  // load css effect
  useEffect(() => {
    const exec = () => setInit(true);
    setTimeout(exec, 500);
    return () => {
      clearTimeout(exec);
    };
  }, []);

  const postClass = cx({
    post: true,
    init,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let catagList = [...content.matchAll(/## .*\s/g)];

  const sidebarClass = cx({
    sidebar: true,
    sticky,
    "in-post": true,
  });

  return (
    <PageContainer exception={<More data={moreData} />}>
      <div className={styles.wrapper}>
        <div className={sidebarClass}>
          <div className={styles.heading}>目錄</div>
          <ul>
            <li onClick={() => window.scrollTo(0, 0)}>{data.title}</li>
            {catagList.map((catag, key) => {
              let original = catag[0].replace("## ", "").split("</a>");
              let tag = original[0].split('"')[1];
              return (
                <li key={key}>
                  <a href={`#${tag}`}>{original[1]}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={postClass}>
          <article>
            <header>
              <img src={data.thumbnail} alt="first-image" />
              <h1>{data.title}</h1>
              <p>
                {data.catag}・{data.date}・{data.author}
              </p>
            </header>
            <ReactMarkdown allowDangerousHtml source={content} />
          </article>
        </div>
      </div>
    </PageContainer>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(BLOG_CONTENT_PATH);
  const paths = files.map((filename) => ({
    params: {
      id: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const markdownWithMetadata = fs.readFileSync(
    path.join(BLOG_CONTENT_PATH, id + ".md").toString()
  );
  const { data, content } = matter(markdownWithMetadata);

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
      data,
      content,
      moreData,
    },
  };
};

export default Post;
