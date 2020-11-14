import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import styles from "pages/projects/index.module.sass";
import classnames from "classnames/bind";
import { PROJECT_CONTENT_PATH } from "config/config";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import PageContainer from "components/page-container";
import UseIntersect from "utils/useIntersect";

const Post = ({ content }) => {
  const cx = classnames.bind(styles);
  const [init, setInit] = useState(false);

  const onEnterView = (entries, observer) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.setAttribute("src", img.dataset.src);
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  };
  const [setElement] = UseIntersect(onEnterView);

  // load css effect
  useEffect(() => {
    window.scrollTo(0, 0);
    const exec = () => setInit(true);
    setTimeout(exec, 500);
    return () => {
      clearTimeout(exec);
    };
  }, []);

  // image load
  useEffect(() => {
    const lazyImages = document.querySelectorAll("article img[data-src]");
    setElement(lazyImages);
  }, []);

  const postClass = cx({
    post: true,
    init,
  });

  return (
    <PageContainer>
      <div className={postClass}>
        <ReactMarkdown allowDangerousHtml source={content} />
      </div>
    </PageContainer>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(PROJECT_CONTENT_PATH);
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
    path.join(PROJECT_CONTENT_PATH, id + ".md").toString()
  );
  const { content } = matter(markdownWithMetadata);

  return {
    props: {
      content,
    },
  };
};

export default Post;
