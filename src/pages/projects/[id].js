import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import styles from "pages/projects/index.module.sass";
import classnames from "classnames/bind";
import { PROJECT_CONTENT_PATH } from "config/config";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import PageContainer from "components/page-container";
// import UseIntersect from "utils/useIntersect";

const Post = ({ data, content }) => {
  const cx = classnames.bind(styles);
  const [init, setInit] = useState(false);

  // const onEnterView = (entries, observer) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       const img = entry.target;
  //       img.setAttribute("src", img.dataset.src);
  //       img.removeAttribute("data-src");
  //       observer.unobserve(img);
  //     }
  //   });
  // };
  // const [setElement] = UseIntersect(onEnterView);

  // load css effect
  useEffect(() => {
    const exec = () => setInit(true);
    setTimeout(exec, 500);
    return () => {
      clearTimeout(exec);
    };
  }, []);

  // image load
  // useEffect(() => {
  //   const lazyImages = document.querySelectorAll("article img[data-src]");
  //   setElement(lazyImages);
  // }, []);

  const postClass = cx({
    post: true,
    init,
  });

  const Title = () => {
    if (!data.titleEn) return data.titleCn;
    if (!data.titleCn) return data.titleEn;
    return `${data.titleEn} | ${data.titleCn}`;
  };

  return (
    <PageContainer>
      <div className={postClass}>
        <article>
          <header>
            <img src={data.thumbnail} alt="first-image" />
            <h1>
              <Title />
            </h1>
            <h2>{data.define}</h2>
            <p>
              <b>{data.contain}</b>
            </p>
            <p>{data.description}</p>
          </header>
          <hr />
          <ReactMarkdown allowDangerousHtml source={content} />
        </article>
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
  const { data, content } = matter(markdownWithMetadata);

  return {
    props: {
      data,
      content,
    },
  };
};

export default Post;
