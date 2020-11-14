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
    <PageContainer exception={<More data={moreData} />}>
      {/* <Filter /> */}
      {/* <SubFilter /> */}
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
            const itemClass = cx({
              item: true,
              invert: key % 2 !== 0,
            });

            const Title = () => {
              if ((titleEn && !titleCn) || (!titleEn && titleCn))
                return <div className={styles.title}>{titleEn || titleCn}</div>;
              return (
                <div className={styles.title}>
                  {titleEn}
                  <br />
                  <div className={styles.cn}>{titleCn}</div>
                </div>
              );
            };
            return (
              <div className={itemClass} key={id}>
                <div className={styles.info}>
                  <Title />
                  <Tags data={tags} />
                  <button>
                    <Link href={`/projects/[id]`} as={`/projects/${id}`}>
                      <a>VIEW PROJECT</a>
                    </Link>
                  </button>
                </div>
                <div className={styles.image}>
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
