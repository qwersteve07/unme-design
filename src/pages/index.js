import React, { useState } from "react";
import styles from "pages/index.module.sass";
import PageContainer from "components/page-container";
import classnames from "classnames/bind";
import Card from "components/card";
import UseInterval from "utils/useInterval";
import UseDeviceType from "utils/useDeviceType";
import d1 from 'images/landing/1.png'
import d2 from 'images/landing/2.png'
import d3 from 'images/landing/3.png'
import d4 from 'images/landing/4.png'
import d5 from 'images/landing/5.png'
import { useSelector } from "react-redux";

const cx = classnames.bind(styles);

const Heading = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(false);
  const text = [
    "Zero Dimension",
    "First Dimension",
    "Second Dimension",
    "Third Dimension",
    "Fourth Dimension",
  ];

  UseInterval(() => {
    setActive(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex) => {
        let newIndex = currentIndex + 1;
        if (newIndex % 5 === 0) return 0;
        return newIndex;
      });
      setActive(false);
    }, 1000);
  }, 3000);

  let inComingIndex = currentIndex + 1 > 4 ? 0 : currentIndex + 1;

  const currentWordClass = cx({
    word: true,
    out: active,
  });

  const incomingWordClass = cx({
    word: true,
    incoming: true,
    in: active,
  });

  return (
    <header className={styles.heading}>
      <div className={currentWordClass}>{text[currentIndex]}</div>
      <div className={incomingWordClass}>{text[inComingIndex]}</div>
    </header>
  );
};

const Intro = () => {
  return (
    <section className={styles.intro}>
      <h1>Dots make brand happen</h1>
      <h2>歡迎來到四維世界</h2>
      <p>
        非我品牌空間設計將企業形象的對外接觸一致化。創造出維度設計方式，打造一站式企業形象規劃。
        <br />
        UnMe Design主力於品牌空間設計，提供品牌識別與空間設計服務。
        <br />
        我們針對企業品牌一致性來做設計深化，
        藉由分析與使用者經驗導入，持續以維度的方式陪伴企業成長。
      </p>
    </section>
  );
};

const Service = () => {
  const deviceType = UseDeviceType();
  const [currentService, setCurrentService] = useState("zero");
  const state = useSelector((state) => state.appReducer);

  const dimensionContent = [
    {
      id: "zero",
      image: d1,
      title: "零維度 | 理解",
      desc:
        "透過使用者經驗的專業背景聊聊品牌接觸點所遇見的問題並釐清規劃的方向，輕鬆的聊聊外也讓你更理解我們。",
    },
    {
      id: "one",
      image: d2,
      title: "一維度 | 拆解",
      desc:
        "探討品牌與市場間的關係，透過實際的演練與我們跨領域結合的定位系統重新出發，同步進行品牌的Mi(理念定位)與Analysis（分析定位）掌握時程精準性，解決關鍵問題。",
    },
    {
      id: "two",
      image: d3,
      title: "二維度 | 組合",
      desc:
        "根據分析的結果，進行品牌內外部的接觸點規劃。將品牌策略、時間軸方向、預期目標、對象受眾（TA）、觸點表現等等，定義品牌樣貌提高接觸點的設計精準性。",
    },
    {
      id: "three",
      image: d4,
      title: "三維度 | 執行",
      desc:
        "品牌空間不是說說故事這麼簡單，UnMe透過經驗研發的坪效演算、情緒分析、行為設計、使用者經驗等，串連線上與線下的一致性，創造獨特的空間設計來產收沈浸式體驗的真實價值。",
    },
    {
      id: "four",
      image: d5,
      title: "四維度 | 落實",
      desc:
        "我們有著拆解不同需求的空間設計能力。從百貨、餐飲、錄音室、健身房、辦公室等，分別配合不同的工程團隊落實裝潢需求，經由實際的掌握陪同夥伴解決經營問題。",
    },
  ];
  const dimensionItem = [
    {
      id: "zero",
      value: (
        <>
          <span>0</span>Dimension
        </>
      ),
    },
    {
      id: "one",
      value: (
        <>
          <span>
            1<pre>st</pre>
          </span>
          Dimension
        </>
      ),
    },
    {
      id: "two",
      value: (
        <>
          <span>
            2<pre>nd</pre>
          </span>
          Dimension
        </>
      ),
    },
    {
      id: "three",
      value: (
        <>
          <span>
            3<pre>rd</pre>
          </span>
          Dimension
        </>
      ),
    },
    {
      id: "four",
      value: (
        <>
          <span>
            4<pre>th</pre>
          </span>
          Dimension
        </>
      ),
    },
  ];

  const ServiceContainer = () => {
    console.log(state)
    const imageClass = cx({
      image: true,
      invert: !state.darkMode
    })
    if (deviceType === "mobile") {
      return (
        <>
          {dimensionItem.map((item) => {
            const content = dimensionContent.find((x) => x.id === item.id);
            const itemClass = cx({
              item: true,
              active: currentService === item.id,
            });
            const stepClass = cx({
              step: true,
              active: content.id === currentService,
            });

          
            return (
              <div className={styles["step-block"]} key={item.id}>
                <div
                  className={itemClass}
                  onClick={() => {
                    setCurrentService(item.id);
                  }}
                >
                  {item.value}
                </div>
                <div className={stepClass}>
                <div className={imageClass}><img src={content.image} alt="image"/></div>
                  <div className={styles.text}>
                    <div className={styles.title}>{content.title}</div>
                    <div className={styles.desc}>{content.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      );
    }
    return (
      <>
        <div className={styles.step}>
          {dimensionContent.map((content) => {
            const contentClass = cx({
              content: true,
              active: content.id === currentService,
            });
            return (
              <div className={contentClass} key={content.id}>
                <div className={imageClass}><img src={content.image} alt="image"/></div>
                <div className={styles.text}>
                  <div className={styles.title}>{content.title}</div>
                  <div className={styles.desc}>{content.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
        <ul className={styles.list}>
          {dimensionItem.map((item) => {
            const itemClass = cx({
              item: true,
              active: currentService === item.id,
            });
            return (
              <li
                key={item.id}
                onClick={() => {
                  setCurrentService(item.id);
                }}
                className={itemClass}
              >
                {item.value}
              </li>
            );
          })}
        </ul>
      </>
    );
  };
  return (
    <section className={styles.service}>
      <div className={styles.container}>{ServiceContainer()}</div>
      <div className={styles.learn}>了解服務流程</div>
    </section>
  );
};

const Projects = () => {
  const projectsData = [
    {
      image: "/projects/the-misanthrope-society/the-misanthrope-society13.jpg",
      name: "厭世會社",
      tags: "#Interior Design  #商空設計",
      define: "懶骨頭沙發品牌｜百貨專櫃設計",
      description:
        "我們利用在不同點為上的佈局與工程規劃，開始鎖定在消費者行為與多彩產品下的專櫃風格創造，來創造專屬「悠式生活」的品牌空間。",
    },
    {
      image: "/projects/the-misanthrope-society/the-misanthrope-society13.jpg",
      name: "厭世會社",
      tags: "#Interior Design  #商空設計",
      define: "懶骨頭沙發品牌｜百貨專櫃設計",
      description:
        "我們利用在不同點為上的佈局與工程規劃，開始鎖定在消費者行為與多彩產品下的專櫃風格創造，來創造專屬「悠式生活」的品牌空間。",
    },
    {
      image: "/projects/the-misanthrope-society/the-misanthrope-society13.jpg",
      name: "厭世會社",
      tags: "#Interior Design  #商空設計",
      define: "懶骨頭沙發品牌｜百貨專櫃設計",
      description:
        "我們利用在不同點為上的佈局與工程規劃，開始鎖定在消費者行為與多彩產品下的專櫃風格創造，來創造專屬「悠式生活」的品牌空間。",
    },
    {
      image: "/projects/the-misanthrope-society/the-misanthrope-society13.jpg",
      name: "厭世會社",
      tags: "#Interior Design  #商空設計",
      define: "懶骨頭沙發品牌｜百貨專櫃設計",
      description:
        "我們利用在不同點為上的佈局與工程規劃，開始鎖定在消費者行為與多彩產品下的專櫃風格創造，來創造專屬「悠式生活」的品牌空間。",
    },
  ];
  return (
    <div className={styles.project}>
      <div className={styles.title}>PROJECTS</div>
      <div className={styles.top}>
        <div className={styles.image}>
          <img src="/projects/voicetube/voicetube08.jpg" />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>放品牌空間案例VOICETUBE</div>
          <div className={styles.tags}>#Interior Design #辦公室設計</div>
          <div className={styles.desc}>
            Voicetube是整理不同語言的資訊，再讓人們透過手機、電腦、平板來學習，創造世界的連結關係。這樣的模式，讓我們想到著名的皮克斯動畫「腦筋急轉彎」裡的大腦世界，協助我們創造一個專屬於Voicetube的獨特風格。
          </div>
          <div className={styles.more}>VIEW MORE</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.list}>
          {projectsData.map((data) => {
            const Info = () => {
              return (
                <>
                  <div className={styles.name}>{data.name}</div>
                  <div className={styles.tags}>{data.tags}</div>
                  <div className={styles.define}>{data.define}</div>
                  <div className={styles.desc}>{data.description}</div>
                  {/* <More/> */}
                </>
              );
            };
            return (
              <Card
                className={styles.item}
                reverse={true}
                imageHeight="65%"
                lineHeight="250px"
                key={data.name}
                data={{
                  image: data.image,
                  info: <Info />,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Root = () => {
  return (
    <PageContainer>
      <Heading />
      <Intro />
      <Service />
      <Projects />
    </PageContainer>
  );
};

export default Root;
