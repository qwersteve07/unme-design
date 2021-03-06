import React, { useState } from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Link from "next/link";
import Lottie from "lottie-react-web";
import PageContainer from "components/page-container";
import Tags from "components/tags";
import Card from "components/card";
import dotWhite from "images/about/dot-white.json";
import dotBlack from "images/about/dot-black.json";
import styles from "pages/about/index.module.sass";
import alpha from "images/about/alpha.jpg";
import nina from "images/about/nina.jpg";
import tong from "images/about/tong.jpg";
import kevin from "images/about/kevin.jpg";
import alphaAnimal from "images/about/alpha-animal.jpg";
import ninaAnimal from "images/about/nina-animal.jpg";
import tongAnimal from "images/about/kevin-animal.jpg";
import kevinAnimal from "images/about/tong-animal.jpg";
import dog from "images/about/dog.jpg";
import jellyfish from "images/about/jellyfish.jpg";
import useResize from "utils/useResize";
import classnames from "classnames/bind";

const Carousel = dynamic(() => import("components/carousel"), { ssr: false });

const About = () => {
  const cx = classnames.bind(styles);
  const [lottieWidth, setLottieWidth] = useState("");
  const state = useSelector((state) => state.appReducer);

  useResize(() => {
    setLottieWidth(window.innerWidth > 768 ? "50%" : "70%");
  });

  const memberData = [
    {
      name: "Alpha",
      titles: "Founder",
      image: alpha,
      imageAnimal: alphaAnimal,
      ability: (
        <>
          UI
          <br />
          UX
          <br />
          Brand Design
          <br />
          Interior Design
          <br />
          Analysis
          <br />
          Design Thinking
        </>
      ),
    },

    {
      name: "Nina",
      titles: "Designer",
      image: nina,
      imageAnimal: ninaAnimal,
      ability: (
        <>
          UI
          <br />
          Brand Design
          <br />
          Web Design
          <br />
          Analysis
        </>
      ),
    },
    {
      name: "Tong",
      titles: "Designer",
      image: tong,
      imageAnimal: tongAnimal,
      ability: (
        <>
          UX
          <br />
          Analysis
          <br />
          Design Thinking
        </>
      ),
    },
    {
      name: "Kevin",
      titles: "Designer",
      image: kevin,
      imageAnimal: kevinAnimal,
      ability: (
        <>
          Interior Deisgn
          <br />
          Analysis
          <br />
          Design Thinking
        </>
      ),
    },
    {
      name: "Steve",
      titles: "F2E",
      image: jellyfish,
      ability: (
        <>
          UI
          <br />
          Brand Design
          <br />
          Interior Design
          <br />
          Web Design
        </>
      ),
    },
    {
      name: "Vicky",
      titles: "Marketing",
      image: dog,
      ability: (
        <>
          Analysis
          <br />
          Marketing
        </>
      ),
    },
  ];

  const projectsData = [
    {
      id: "voicetube",
      image: "/projects/voicetube/voicetube08.jpg",
      tags: ["space-branding", "3d"],
      name: "VOICETUBE",
    },
    {
      id: "yogibo-xinyi",
      image: "/projects/yogibo-xinyi/yogibo-xinyi01.jpg",
      tags: ["interior", "3d"],
      name: "YOGIBO 信義店",
    },
    {
      id: "the-misanthrope-society",
      image: "/projects/the-misanthrope-society/the-misanthrope-society15.jpg",
      tags: ["interior", "3d"],
      name: "厭世會社咖啡餐酒館",
    },
    {
      id: "grilled-sendwish",
      image: "/projects/grilled-sendwish/grilled-sendwish01.jpg",
      tags: ["cis", "2d"],
      name: "格里歐三明治",
    },
    {
      id: "up",
      image: "/projects/up-sports/up-sports01.jpg",
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
                    <img data-src={image} alt="project" className="lazyload" />
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

            const imageClass = cx({
              image: true,
              flip: true,
            });
            return (
              <Card
                className={styles.member}
                lineHeight="250px"
                key={data.name}
                info={<Info />}
                image={
                  <div className={styles.image} style={{ paddingTop: "145%" }}>
                    <div className={styles.front}>
                      <img
                        data-src={data.image}
                        alt="photo"
                        className="lazyload"
                      />
                    </div>
                    <div className={styles.back}>
                      <img
                        data-src={data.imageAnimal || data.image}
                        alt="photo"
                        className="lazyload"
                      />
                      <div className={styles.ability}>{data.ability}</div>
                    </div>
                  </div>
                }
              />
            );
          })}
        </div>
      </PageContainer>
    </>
  );
};

export default About;
