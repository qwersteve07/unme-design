import dynamic from "next/dynamic";
import React, { useState } from "react";
import styles from "pages/about/index.module.sass";
import PageContainer from "components/page-container";
import Lottie from "lottie-react-web";
import dotWhite from "images/about/dot-white.json";
import dotBlack from "images/about/dot-black.json";
import Tags from "components/tags";
import wolf from "images/about/wolf.jpg";
import elephant from "images/about/elephant.jpg";
import dog from "images/about/dog.jpg";
import octopus from "images/about/octopus.jpg";
import lion from "images/about/lion.jpg";
import jellyfish from "images/about/jellyfish.jpg";
import project01 from "images/project01.jpg";
import project02 from "images/project02.jpg";
import Card from "components/card";
import useResize from "utils/useResize";
import { useSelector } from "react-redux";
import Link from "next/link";

const Carousel = dynamic(() => import("components/carousel"), { ssr: false });

const About = () => {
  const [lottieWidth, setLottieWidth] = useState("");
  const state = useSelector((state) => state.appReducer);

  useResize(() => {
    setLottieWidth(window.innerWidth > 767 ? "50%" : "70%");
  });

  const memberData = [
    {
      name: "Alpha",
      titles: "Founder",
      image: wolf,
    },
    {
      name: "Steve",
      titles: "F2E",
      image: jellyfish,
    },
    {
      name: "vicky",
      titles: "Marketing",
      image: dog,
    },
    {
      name: "Nina",
      titles: "Designer",
      image: elephant,
    },
    {
      name: "Tong",
      titles: "Designer",
      image: octopus,
    },
    {
      name: "Kevin",
      titles: "Designer",
      image: lion,
    },
  ];

  const projectsData = [
    {
      id: "voicetube",
      image: "/projects/voicetube/voicetube08.webp",
      tags: ["space-branding", "3d"],
      name: "VOICETUBE",
    },
    {
      id: "yogibo-xinyi",
      image: "/projects/yogibo-xinyi/yogibo-xinyi01.webp",
      tags: ["interior", "3d"],
      name: "YOGIBO 信義店",
    },
    {
      id: "the-misanthrope-society",
      image: "/projects/the-misanthrope-society/the-misanthrope-society13.webp",
      tags: ["interior", "3d"],
      name: "厭世會社咖啡餐酒館",
    },
    {
      id: "grilled-sendwish",
      image: "/projects/grilled-sendwish/grilled-sendwish01.webp",
      tags: ["cis", "2d"],
      name: "格里歐三明治",
    },
    {
      id: "up",
      image: "/projects/up/up01.webp",
      tags: ["cis", "2d"],
      name: "UP SPORTS",
    },
  ];

  const Slider = () => {
    return (
      <div className={styles.slider}>
        <div className={styles["title"]}>Projects</div>
        <Carousel
          items={projectsData.map(({ id, image, tags, name }) => {
            return (
              <Link href={`projects/${id}`} key={id}>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <img src={image} alt="project" />
                  </div>
                  <Tags data={tags} />
                  <div className={styles.name}>{name}</div>
                </div>
              </Link>
            );
          })}
        />
      </div>
    );
  };
  return (
    <>
      <PageContainer exception={<Slider />}>
        <Lottie
          options={{
            animationData: state.darkMode ? dotWhite : dotBlack,
          }}
          width={lottieWidth}
        />
        <div className={styles.intro}>
          <div className={styles.column}>
            <div className={styles.title}>
              UNME 是間跨領域設計公司，運用設計協助企業品牌在不同階段的成長
            </div>
            <div className={styles.desc}>
              2019年成立於台北，主力於品牌空間設計，並提供品牌設計與空間設計服務。
              <br />
              我們針對品牌風格、品牌核心、市場與競業分析後客製設計，探索出企業的獨特性，陪伴品牌一同成長。
            </div>
          </div>
          <div className={styles.column}>
            <div className={`${styles.title} ${styles.quote}`}>
              “ Dots make brand happen. ”
            </div>
            <div className={styles.desc}>
              品牌是由所有細碎的接觸點，形成溝通的線，進而產生品牌的面積版圖。
              <br />
              人的成長是藉由著細小的選擇不斷堆疊出鮮明的個性，在所有關係中成為獨立的個體。品牌也是從眾多的價值中交替，成為獨特的存在。
            </div>
          </div>
        </div>
        <div className={styles.team}>
          {memberData.map((data) => {
            const Info = () => {
              return (
                <>
                  <div className={styles.name}>{data.name}</div>
                  <div className={styles.titles}>{data.titles}</div>
                </>
              );
            };
            return (
              <Card
                className={styles.member}
                imageHeight="120%"
                lineHeight="230px"
                key={data.name}
                data={{
                  image: data.image,
                  info: <Info />,
                }}
              />
            );
          })}
        </div>
      </PageContainer>
    </>
  );
};

export default About;
