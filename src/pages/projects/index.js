import Link from "next/link";
import React from "react";
import fs from "fs";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames/bind";
import styles from "pages/projects/index.module.sass";
import Tags from "components/tags";
import More from "components/more";
import PageContainer from "components/page-container";
import { SET_FILTER, SET_SUB_FILTER } from "redux/reducer/projects";
import matter from "gray-matter";
import { PROJECT_CONTENT_PATH } from "config/config";

const Projects = ({ projectsData, moreData }) => {
  const cx = classnames.bind(styles);
  const state = useSelector((state) => state.projectsReducer);
  const dispatch = useDispatch();
  const setFilter = (id) => dispatch({ type: SET_FILTER, payload: id });
  const setSubFilter = (id) => dispatch({ type: SET_SUB_FILTER, payload: id });

  const Filter = () => {
    return (
      <div className={styles["filter-container"]}>
        {state.filters.map((filter) => {
          const filterClass = cx({
            filter: true,
            active: state.currentFilter === filter.id,
          });

          return (
            <div
              className={filterClass}
              key={filter.id}
              onClick={() => setFilter(filter.id)}
            >
              {filter.name}
            </div>
          );
        })}
      </div>
    );
  };

  const SubFilter = () => {
    return (
      <ul className={styles["sub-filter-container"]}>
        {state.subFilters.map((filter) => {
          const subFilterClass = cx({
            "sub-filter": true,
            active: state.currentSubFilter === filter.id,
          });
          return (
            <div
              className={subFilterClass}
              key={filter.id}
              onClick={() => setSubFilter(filter.id)}
            >
              {filter.name}
            </div>
          );
        })}
      </ul>
    );
  };

  return (
    <PageContainer>
      <Filter />
      <SubFilter />
      <div className={styles.projects}>
        {projectsData.map(
          (
            {
              frontMatter: {
                titleEn,
                titleCn,
                tags,
                thumbnail,
                define,
                description,
              },
              id,
            },
            key
          ) => {
            const projectClass = cx({
              project: true,
              invert: key % 2 !== 0,
            });
            return (
              <div className={projectClass} key={id}>
                <div className={styles.major}>
                  <div className={styles.title}>
                    {titleEn && <div className={styles.en}>{titleEn}</div>}
                    {titleCn && <div className={styles.cn}>{titleCn}</div>}
                  </div>
                  <Tags data={tags} />
                  <button>
                    <Link href={`/projects/[id]`} as={`/projects/${id}`}>
                      <a>VIEW PROJECT</a>
                    </Link>
                  </button>
                </div>
                <div className={styles.minor}>
                  <div className={styles.thumbnail}>
                    <img src={thumbnail} alt="thumbnail" />
                  </div>
                  <div className={styles.intro}>
                    <div className={styles.define}>{define}</div>
                    <div className={styles.desc}>{description}</div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <More data={moreData} />
    </PageContainer>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/${PROJECT_CONTENT_PATH}`);
  const projectsData = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`${PROJECT_CONTENT_PATH}/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    return {
      id: filename.replace(".md", ""),
      frontMatter: data,
    };
  });

  // const projectsData = await [
  //   {
  //     titleEn: "YOGIBO",
  //     titleCn: "信義店",
  //     tags: ["Interior Design", "商空設計"],
  //     thumbnail: yogibo,
  //     intro: {
  //       title: "懶骨頭沙發品牌｜百貨專櫃設計",
  //       desc: [
  //         "今年的信義專櫃，我們協助Yogibo進入品牌空間的第二個階段：影響力。",
  //         "過往執行的Yogibo台茂、新竹、桃園、台南、台中的多點專櫃長期規劃後，我們利用在不同點為上的佈局與工程規劃，開始鎖定在消費者行為與多彩產品下的專櫃風格創造，來創造專屬「悠式生活」的品牌空間。",
  //       ],
  //     },
  //     pathname: "soundshine",
  //   },
  //   {
  //     titleCn: "東燁數位行銷",
  //     tags: ["CIS Design", "Logo Design"],
  //     thumbnail: dongyei,
  //     intro: {
  //       title: "行銷公司企業形象設計｜ Identity design",
  //       desc: [
  //         "讓每個人都能發出光芒，匯聚成更大的力量。",
  //         "東燁的理念，是希望藉由行銷讓企業變得更好，用良幣驅逐劣幣的方式改變台灣的社會環境。就像恆星的匯聚過程一樣，將舊時代不必要的元素自然的演化淘汰，用溫柔的進化方式，慢慢形塑傳統產業的新生命。",
  //       ],
  //     },
  //     pathname: "soundshine",
  //   },
  //   {
  //     titleEn: "SOUNDSHINE",
  //     titleCn: "軒言文創",
  //     tags: ["Brand Domain Design", "辦公室設計"],
  //     thumbnail: soundShine,
  //     intro: {
  //       title: "企業形象整體規劃｜品牌空間設計",
  //       desc: [
  //         "從尋找辦公室地點，並同步討論Logo本身所代表的涵意，都由 UnMe Design 一手包辦。讓企業的形象不在以分包的方式進行後，產生斷層。",
  //         "讓企業對外的形象產生高度的一致性，讓形象語言能夠清晰地傳達，甚至回頭找到具有共鳴的夥伴。",
  //       ],
  //     },
  //     pathname: "soundshine",
  //   },
  //   {
  //     titleEn: "VOICETUBE",
  //     tags: ["Interior Design", "辦公室設計"],
  //     thumbnail: voicetube,
  //     intro: {
  //       title: "商空設計 ｜ 辦公室設計",
  //       desc: [
  //         "Voicetube透過整理不同語言的資訊，再讓人們透過手機、電腦、平板來學習，創造世界的連結關係。有趣的是，在動畫裡頭的世界與Voicetube的品牌色調，不約而同的都已帶點科技感的紫色為主要空間場景，成為默契般的風格方向，協助我們創造一個專屬於Voicetube的獨特風格。",
  //       ],
  //     },
  //     pathname: "soundshine",
  //   },
  // ];

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
      projectsData,
      moreData,
    },
  };
}

export default Projects;
