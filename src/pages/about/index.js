import dynamic from "next/dynamic";
import React from "react";
import styles from "pages/about/index.module.sass";
import PageContainer from "components/page-container";
import Lottie from "lottie-react-web";
import circle from "images/circle.json";
import Tags from "components/tags";
import wolf from "images/wolf.jpg";
import elephant from "images/elephant.jpg";
import dog from "images/dog.jpg";
import jellyfish from "images/jellyfish.jpg";
import project01 from "images/project01.jpg";
import project02 from "images/project02.jpg";

const Carousel = dynamic(() => import("components/carousel"), { ssr: false });

const About = ({ memberData, projectsData }) => {
  const Slider = () => {
    return (
      <div className={styles.slider}>
        <div className={styles["title"]}>Projects</div>
        <Carousel
          items={projectsData.map(({ image, tags, name }, key) => {
            return (
              <div className={styles.item} key={key}>
                <div className={styles.image}>
                  <img src={image} alt="project" />
                </div>
                <Tags data={tags} />
                <div className={styles.name}>{name}</div>
              </div>
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
            animationData: circle,
          }}
          width="80%"
        />
        <div className={styles.intro}>
          <div className={styles.column}>
            <div className={styles.title}>
              UNME是間跨領域設計公司，運用設計協助企業在不同階段的成長
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
          {memberData.map(({ name, titles, image }) => {
            return (
              <div className={styles.member} key={name}>
                <div className={styles.image}>
                  <img src={image} alt="photo" />
                </div>
                <div className={styles.info}>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.titles}>{titles}</div>
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </>
  );
};

export async function getStaticProps() {
  const memberData = await [
    {
      name: "Alpha",
      titles: "Founder",
      image: wolf,
    },
    {
      name: "Steve",
      titles: "Hentai",
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
  ];

  const projectsData = await [
    {
      image: project01,
      tags: ["Interior Design", "商空設計"],
      name: "跪著聽音樂有限公司",
    },
    {
      image: project02,
      tags: ["CIS Design", "Logo Design"],
      name: "GLAM IN BREEZE",
    },
    {
      image: project01,
      tags: ["Interior Design", "商空設計"],
      name: "跪著聽音樂有限公司",
    },
    {
      image: project02,
      tags: ["CIS Design", "Logo Design"],
      name: "GLAM IN BREEZE",
    },
    {
      image: project01,
      tags: ["Interior Design", "商空設計"],
      name: "跪著聽音樂有限公司",
    },
    {
      image: project02,
      tags: ["CIS Design", "Logo Design"],
      name: "GLAM IN BREEZE",
    },
  ];

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      memberData,
      projectsData,
    },
  };
}

export default About;
