import React, { useState } from "react";
import styles from "pages/index.module.sass";
import PageContainer from "components/page-container";
import classnames from "classnames/bind";
import Card from "components/card";
import UseInterval from "utils/useInterval";
import UseDeviceType from "utils/useDeviceType";
import d1 from "images/landing/1.png";
import d2 from "images/landing/2.png";
import d3 from "images/landing/3.png";
import d4 from "images/landing/4.png";
import d5 from "images/landing/5.png";
import Tags from "components/tags";
import { useSelector } from "react-redux";
import ArrowText from "components/arrowText";
import Link from "next/link";
import More from "components/more";

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
  }, 2000);

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
    const imageClass = cx({
      image: true,
      invert: !state.darkMode,
    });
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
                  <div className={imageClass}>
                    <img src={content.image} alt="image" />
                  </div>
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
                <div className={imageClass}>
                  <img src={content.image} alt="image" />
                </div>
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
                onMouseOver={() => {
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
      <div className={styles.learn}>
        <Link href="/service">
          <ArrowText text="了解服務流程" />
        </Link>
      </div>
    </section>
  );
};

const Projects = () => {
  const projectsData = [
    {
      id: "the-misanthrope-society",
      image: "/projects/the-misanthrope-society/the-misanthrope-society13.webp",
      name: "厭世會社咖啡餐酒館",
      tags: ["interior", "3d"],
      define: "商業空間設計 | 餐飲空間設計",
      description:
        "設計與社會結構的關係，其實是深根蒂固的。厭世會社，是一間以憂鬱患者為出發的社會企業，老闆本身所經歷的憂鬱病史，促使他建立這個地方，提供病友們喘息的空間，甚至創辦病友的交流圈，協助他們翻轉心態，重新面對人權。",
    },
    {
      id: "yogibo-xinyi",
      image: "/projects/yogibo-xinyi/yogibo-xinyi01.webp",
      name: "YOGIBO 信義店",
      tags: ["interior", "3d"],
      define: "懶骨頭沙發品牌 | 百貨專櫃設計",
      description:
        "我們協助Yogibo進入品牌空間的第二個階段：影響力。過往執行的Yogibo台茂、新竹、桃園、台南、台中的多點專櫃長期規劃後，我們利用在不同點為上的佈局與工程規劃，開始鎖定在消費者行為與多彩產品下的專櫃風格創造，來創造專屬「悠式生活」的品牌空間。",
    },
    {
      id: "up-sports",
      image: "/projects/up/up01.webp",
      name: "UP SPORTS",
      tags: ["cis", "2d"],
      define: "健身沙拉品牌 | 品牌設計",
      description:
        "我們利用在不同點為上的佈局與工程規劃，開始鎖定在消費者行為與多彩產品下的專櫃風格創造，來創造專屬「悠式生活」的品牌空間。",
    },
    {
      id: "grilled-sandwish",
      image: "/projects/grilled-sendwish/grilled-sendwish01.webp",
      name: "格里歐三明治",
      tags: ["cis", "2d"],
      define: "早餐品牌 | 品牌設計",
      description:
        "我們利用在不同點為上的佈局與工程規劃，開始鎖定在消費者行為與多彩產品下的專櫃風格創造，來創造專屬「悠式生活」的品牌空間。",
    },
  ];
  return (
    <div className={styles.project}>
      <div className={styles.title}>PROJECTS</div>
      <div className={styles.top}>
        <div className={styles.image}>
          <img src="/projects/voicetube/voicetube08.webp" />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>VOICETUBE</div>
          <div className={styles.tags}>
            <Tags data={["space-branding", "3d"]} />
          </div>
          <div className={styles.desc}>
            Voicetube透過整理不同語言的資訊，再讓人們透過手機、電腦、平板來學習，創造世界的連結關係。有趣的是，在動畫裡頭的世界與Voicetube的品牌色調，不約而同的都已帶點科技感的紫色為主要空間場景，成為默契般的風格方向，協助我們創造一個專屬於Voicetube的獨特風格。
          </div>
          <div className={styles.more}>
            <Link href="/projects/voicetube">
              <ArrowText text="VIEW MORE" colorReverse={true} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.list}>
          {projectsData.map((data) => {
            const Info = () => {
              return (
                <>
                  <Link href={`/projects/${data.id}`}>
                    <div className={styles.name}>{data.name}</div>
                  </Link>
                  <div className={styles.tags}>
                    <Tags data={data.tags} />
                  </div>
                  <div className={styles.define}>{data.define}</div>
                  <div className={styles.desc}>{data.description}</div>
                  <div className={styles.more}>
                    <Link href={`/projects/${data.id}`}>
                      <ArrowText text="VIEW MORE" colorReverse={true} />
                    </Link>
                  </div>
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
        <div className={styles.learn}>
          <Link href="/projects">
            <ArrowText text="MORE PROJECTS" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Root = () => {
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

  return (
    <PageContainer exception={<More data={moreData} />}>
      <Heading />
      <Intro />
      <Service />
      <Projects />
    </PageContainer>
  );
};

export default Root;
