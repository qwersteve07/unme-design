import React from "react";
import styles from "pages/about/index.module.sass";
import Nav from "components/nav";

const About = ({ memberData }) => {
  console.log(memberData);
  return (
    <>
      <Nav />
      <div className={styles.main}>
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
                <img src={image} alt="photo" />
                <div className={styles.name}>{name}</div>
                <div className={styles.titles}>{titles}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const memberData = await [
    {
      name: "Alpha",
      titles: "Founder",
      image: "",
    },
    {
      name: "Steve",
      titles: "Hentai",
      image: "",
    },
    {
      name: "vicky",
      titles: "Marketing",
      image: "",
    },
    {
      name: "Nina",
      titles: "Designer",
      image: "",
    },
  ];

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      memberData,
    },
  };
}

export default About;