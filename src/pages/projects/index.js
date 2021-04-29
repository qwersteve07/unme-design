import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import fs from "fs";
import matter from "gray-matter";
import styles from "pages/projects/index.module.sass";
import Tags from "components/tags";
import More from "components/more";
import PageContainer from "components/page-container";
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
    const active = () => {
      if (filter.id === "all") {
        return currentFilter === filter.id || currentFilter === "";
      }
      return currentFilter === filter.id;
    };
    const filterClass = cx({
      filter: true,
      active: active(),
    });

    return (
      <div
        className={filterClass}
        key={filter.id}
        onClick={() => onSelect(filter.id)}
      >
        <div className={styles.nameEn}>{filter.nameEn}</div>
        <div className={styles.nameCn}>{filter.nameCn}</div>
      </div>
    );
  });
};

const Projects = ({ projectsData }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("");

  useEffect(() => {
    let { catag } = router.query;
    if (catag) setCurrentFilter(catag);
  }, [router.query.catag]);

  useEffect(() => {
    if (!currentFilter) return;
    setLoading(true);
    let loaded = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(loaded);
    };
  }, [currentFilter]);

  const filters = [
    {
      id: "all",
      nameEn: "All Projects",
      nameCn: "全部",
    },
    {
      id: "cis",
      nameEn: "CIS Design",
      nameCn: "品牌設計",
    },
    {
      id: "interior",
      nameEn: "Interior Deisgn",
      nameCn: "室內設計",
    },
    {
      id: "literature",
      nameEn: "Product Literature Design",
      nameCn: "文宣設計",
    },
    {
      id: "space-branding",
      nameEn: "Space Branding Design",
      nameCn: "品牌空間設計",
    },
  ];

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

  const MainFilter = () => {
    return (
      <div className={styles["filter-container"]}>
        <Filter
          data={filters}
          onSelect={(id) => {
            router.push(
              {
                pathname: "/projects",
                query: { catag: id },
              },
              undefined,
              { shallow: true }
            );
            setCurrentFilter(id);
          }}
          currentFilter={currentFilter}
        />
      </div>
    );
  };

  const Loading = () => {
    const loadingClass = cx({
      loadingWrapper: true,
      show: loading,
    });
    return (
      <div className={loadingClass}>
        <div className={styles.loading}>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  };

  const ProjectMap = () => {
    let sortData = projectsData.sort((a, b) => {
      return b.frontMatter.priority - a.frontMatter.priority;
    });
    let filteredProjectData = sortData.filter((data) => {
      let { tags } = data.frontMatter;
      const isFilteredByMain =
        currentFilter === "" ||
        currentFilter === "all" ||
        currentFilter === tags[0];
      return isFilteredByMain;
    });

    if (loading) return <Loading />;

    if (filteredProjectData.length === 0)
      return <div className={styles.empty}>專案進行中，敬請期待</div>;

    return filteredProjectData.map((data, key) => {
      if (data.id === "soundshine-feature") return <></>;

      const {
        frontMatter: { titleEn, titleCn, tags, thumbnail, define, description },
        id,
      } = data;

      const Title = () => {
        if (titleEn && !titleCn) {
          return titleEn;
        }
        if (!titleEn && titleCn) {
          return titleCn;
        }
        return (
          <>
            {titleEn}｜{titleCn}
          </>
        );
      };

      return (
        <div className={styles.item} key={id}>
          <div className={styles.image}>
            <Link href={`/projects/[id]`} as={`/projects/${id}`}>
              <div className={styles.thumbnail}>
                <img
                  data-src={thumbnail}
                  className="lazyload"
                  alt="thumbnailimage"
                />
              </div>
            </Link>
            <div className={styles.intro}>
              <div className={styles.desc}>{description}</div>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.title}>
              <Title />
            </div>

            <div className={styles.define}>{define}</div>
            <div className={styles.tags}>
              <Tags data={tags} />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <PageContainer exception={<More data={moreData} />}>
      {MainFilter()}
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

    let { data } = matter(markdownWithMetadata);

    return {
      id: filename.replace(".md", ""),
      frontMatter: data,
    };
  });

  return {
    props: {
      projectsData,
    },
  };
}

export default Projects;
