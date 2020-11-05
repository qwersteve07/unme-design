import React, { useState } from "react";
import styles from "pages/blog/index.module.sass";
import { useSelector } from "react-redux";
import PageContainer from "components/page-container";
import post01 from "images/post/post01.jpg";
import post02 from "images/post/post02.jpg";
import post03 from "images/post/post03.jpg";
import Link from "next/link";
import Arrow from "components/arrow";

const Posts = ({ data }) => {
  const state = useSelector((state) => state.appReducer);
  const [hoverId, setHoverId] = useState("");

  return data.map(
    ({ thumbnail, catag, title, desc, createDate, author, id }, key) => {
      const setMouseOver = (e) => {
        if (e.currentTarget.id === id) setHoverId(id);
      };
      const setMouseLeave = () => setHoverId("");

      return (
        <div
          className={styles.post}
          key={key}
          onMouseOver={setMouseOver}
          onMouseLeave={setMouseLeave}
          id={id}
        >
          <Link href={`/blog/${id}`}>
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
          <div className={styles.desc}>{desc}</div>
          <div className={styles["sub-info"]}>
            <div>
              {createDate} - by {author}
            </div>
            <div className={styles.readmore}>
              <Link href={`/blog/${id}`}>
                <Arrow dark={state.darkMode} hover={hoverId === id} />
              </Link>
            </div>
          </div>
        </div>
      );
    }
  );
};

const Blog = ({ postData }) => {
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
        <div className={styles.blog}>
          <Posts data={postData} />
        </div>
      </div>
    </PageContainer>
  );
};

export async function getStaticProps() {
  const postData = await [
    {
      thumbnail: post01,
      catag: "考試都會考 10 分",
      title: "辦公室租哪靠直覺？先緩緩，先跟老闆談房租坪效！",
      desc:
        "公司的擴展，第一步往往是「辦公人員要放去哪」以及「幾年內會成長到多少人」。因此在對內管理中人數的增加、空間運用時所投入的成本，其中包含租金、裝潢費用、坪效率、流動資金、營業支出攤提，都會是最初步考量的事情。",
      createDate: "OCT 27,2020",
      author: "Alpha",
      id: "a",
    },
    {
      thumbnail: post02,
      catag: "阿發蕭碎碎念",
      title: "追逐真實的自己，而不是普遍的社會價值",
      desc: "呂捷：讀書不是唯一，但請先告訴我，不讀書你要做什麼？",
      createDate: "OCT 25,2020",
      author: "Nina",
      id: "b",
    },
    {
      thumbnail: post03,
      catag: "阿發蕭碎碎念",
      title: "我們都注定做不成唐鳳，但為什麼你不能是你？",
      desc:
        "革命式生活用唐鳳開場，並不是想蹭他集寵愛於一身的討喜程度。而是發現這幾乎是近兩年的社會現象，尤其在會議中，有許多人刻意模仿他的溫文儒雅，跳針與幽默，現學現賣的模樣實在是令人覺得矯情。",
      createDate: "OCT 19,2020",
      author: "Alpha",
      id: "c",
    },
  ];

  return {
    props: {
      postData,
    },
  };
}

export default Blog;
