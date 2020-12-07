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
import UseDeviceType from "utils/useDeviceType";
const cx = classnames.bind(styles);

const Filter = ({ currentFilter, data, onSelect }) => {
  const deviceType = UseDeviceType();

  if (deviceType === "mobile") {
    return (
      <select
        className={styles["select-filter"]}
        value={currentFilter}
        onChange={(e) => {
          onSelect(e.target.value);
        }}
      >
        {data.map((filter) => {
          return (
            <option value={filter.id} key={filter.id}>
              {filter.nameEn} | {filter.nameCn}
            </option>
          );
        })}
      </select>
    );
  }
  return data.map((filter) => {
    const filterClass = cx({
      filter: true,
      active: currentFilter === filter.id,
    });

    return (
      <div
        className={filterClass}
        key={filter.id}
        onClick={() => onSelect(filter.id)}
      >
        {filter.nameEn}
        <div className={styles.nameCn}>{filter.nameCn}</div>
      </div>
    );
  });
};

const Projects = ({ projectsData, moreData }) => {
  const state = useSelector((state) => state.projectsReducer);
  const dispatch = useDispatch();
  const setFilter = (id) => dispatch({ type: SET_FILTER, payload: id });
  const setSubFilter = (id) => dispatch({ type: SET_SUB_FILTER, payload: id });

  const MainFilter = () => {
    return (
      <div className={styles["filter-container"]}>
        <Filter
          data={state.filters}
          onSelect={setFilter}
          currentFilter={state.currentFilter}
        />
      </div>
    );
  };

  const SubFilter = () => {
    return (
      <div className={`${styles["filter-container"]} ${styles.sub}`}>
        <Filter
          data={state.subFilters}
          onSelect={setSubFilter}
          currentFilter={state.currentSubFilter}
        />
      </div>
    );
  };

  const ProjectMap = () => {
    let filteredProjectData = projectsData.filter((data) => {
      let { tags } = data.frontMatter;
      const isFilteredByMain =
        state.currentFilter === "all" || state.currentFilter === tags[0];
      const isFilteredBySub =
        state.currentSubFilter === "all" || state.currentSubFilter === tags[1];
      return isFilteredByMain && isFilteredBySub;
    });

    if (filteredProjectData.length === 0)
      return <div className={styles.empty}>專案進行中，敬請期待</div>;

    return filteredProjectData.map((data, key) => {
      const {
        frontMatter: { titleEn, titleCn, tags, thumbnail, define, description },
        id,
      } = data;

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
            <div className={styles.tags}>
              <Tags data={tags} />
            </div>
            <button>
              <Link href={`/projects/[id]`} as={`/projects/${id}`}>
                <a>VIEW PROJECT</a>
              </Link>
            </button>
          </div>
          <div className={styles.image}>
            <Link href={`/projects/[id]`} as={`/projects/${id}`}>
              <div className={styles.thumbnail}>
                <img src={thumbnail} alt="thumbnail" />
              </div>
            </Link>
            <div className={styles.intro}>
              <div className={styles.define}>{define}</div>
              <div className={styles.desc}>{description}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <PageContainer exception={<More data={moreData} />}>
      {MainFilter()}
      {SubFilter()}
      <div className={styles.projects}>
        <ProjectMap />
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
