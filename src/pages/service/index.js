import React, { useState, useRef, useEffect } from "react";
import styles from "pages/service/index.module.sass";
import classnames from "classnames/bind";
import PageContainer from "components/page-container";
import anime from "animejs";
import More from "components/more";

const Service = () => {
  const cx = classnames.bind(styles);
  const svgRef = useRef();
  const [animation1, setAnimation1] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [animation3, setAnimation3] = useState(false);
  const [animation4, setAnimation4] = useState(false);
  const [animation5, setAnimation5] = useState(false);
  const [currentStepOpen, setCurrentStepOpen] = useState("");

  const moreData = [
    {
      id: "projects",
      title: "Our Projects",
      desc: "仔細瀏覽對於每個作品的堅持，讓你能夠放心地與我們合作",
      path: "/projects",
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

  const arrowScrollClass = cx({
    "arrow-scroll": true,
    hide: animation1,
  });

  useEffect(() => {
    if (animation1) {
      anime({
        targets: "#step1 circle, #step1 path,#step1 line",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: function (el, i) {
          return i * 250;
        },
        loop: 1,
        direction: "normal",
      });
    }
  }, [animation1]);

  useEffect(() => {
    if (animation2) {
      anime({
        targets: "#step2 circle, #step2 path,#step2 line",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: function (el, i) {
          return i * 250;
        },
        direction: "normal",
      });
    }
  }, [animation2]);

  useEffect(() => {
    if (animation3) {
      anime({
        targets: "#step3 circle, #step3 path,#step3 line",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: function (el, i) {
          return i * 250;
        },
        direction: "normal",
      });
    }
  }, [animation3]);

  useEffect(() => {
    if (animation4) {
      anime({
        targets: "#step4 circle, #step4 path,#step4 line",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: function (el, i) {
          return i * 250;
        },
        direction: "normal",
      });
    }
  }, [animation4]);

  useEffect(() => {
    if (animation5) {
      anime({
        targets: "#step5 circle, #step5 path,#step5 line",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: function (el, i) {
          return i * 250;
        },
        direction: "normal",
      });
    }
  }, [animation5]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 767) {
        if (window.scrollY > 50 && !animation1) {
          setAnimation1(true);
        }
        if (window.scrollY > 300 && !animation2) {
          setAnimation2(true);
        }
        if (window.scrollY > 550 && !animation3) {
          setAnimation3(true);
        }
        if (window.scrollY > 800 && !animation4) {
          setAnimation4(true);
        }
        if (window.scrollY > 950 && !animation5) {
          setAnimation5(true);
        }
      } else {
        if (window.scrollY > 30 && !animation1) {
          setAnimation1(true);
        }
        if (window.scrollY > 100 && !animation2) {
          setAnimation2(true);
        }
        if (window.scrollY > 270 && !animation3) {
          setAnimation3(true);
        }
        if (window.scrollY > 370 && !animation4) {
          setAnimation4(true);
        }
        if (window.scrollY > 500 && !animation5) {
          setAnimation5(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stepContent = [
    {
      id: "step1",
      animationClass: animation1,
      title: "Zero Dimension. 拆解 / 品牌健診",
      desc:
        "探討品牌與市場間的關係，透過實際的演練與我們跨領域結合的定位系統重新出發，同步進行品牌的Mi (理念定位) 與 Analysis（分析定位）掌握時程精準性，解決關鍵問題。",
    },
    {
      id: "step2",
      animationClass: animation2,
      title: "First Dimension. 組合 / 品牌定位",
      desc:
        " 根據分析的結果，進行品牌內外部的接觸點規劃。將品牌策略、時間軸方向、預期目標、對象受眾（TA）、觸點表現等等，定義品牌樣貌提高接觸點的設計精準性。",
    },
    {
      id: "step3",
      animationClass: animation3,
      title: "設計執行 / 讓真正的跨領域團隊設計品牌接觸點",
      desc: (
        <>
          UnMe不將任何設計外包，讓品牌面臨斷層風險。每項產物都由我們透過多設計能力的經驗值縮短品牌的建立時間，打造獨特的品牌接觸點。
          <div className={styles["sub-title"]}>品牌設計、網站設計</div>
          透過定位系統在2維設計裡提高品牌形象一致性並與行銷產生連結。我們整合心智圖、使用者經驗分析、情緒值、文字系統、數據分析等，規劃定位品牌手冊與網站設計的設計精準性。
          <div className={styles["sub-title"]}>品牌空間設計</div>
          品牌空間不是說說故事這麼簡單，UnMe透過經驗研發的坪效演算、情緒分析、行為設計、使用者經驗等，串連線上與線下的一致性，創造獨特的空間設計來產收沈浸式體驗的真實價值。
        </>
      ),
    },
    {
      id: "step4",
      animationClass: animation4,
      title:
        "實務落實 / 不只設計落實更提供年約性的服務，協助品牌回收更多定位數據",
      desc: (
        <>
          <div className={styles["sub-title"]}>包裝文宣、官網架站</div>
          設計進行時同步考量營運成本落實的可能性。有效規劃企業識別的文宣產物、網站規劃的建置成本。每位設計師緊盯著印刷廠與Coding的品質，讓產物得以真正落實在需求上。
          <div className={styles["sub-title"]}>空間工程</div>
          我們有著拆解不同需求的空間設計能力。從百貨、餐飲、錄音室、健身房、辦公室等，分別配合不同的工程團隊落實裝潢需求，經由實際的掌握陪同夥伴解決經營問題。
        </>
      ),
    },
    {
      id: "step5",
      animationClass: animation5,
      title: "時間軸服務 / 設計不該只是專案，而是品牌旅程的夥伴",
      desc: (
        <>
          <div className={styles["sub-title"]}>品牌顧問 / 教育訓練</div>
          縮短企業建立品牌的時程並提升接觸點一致性，是UnMe成立的目標。
          <br />
          因此我們在每項服務中都有著後續追蹤、企業內部品牌公關建立、美編教育訓練、設計年約服務、顧問等相關時間軸規劃，讓設計不在停留於專案上，隨著時間的演變調整品牌需求。
        </>
      ),
    },
  ];

  const firstClass = cx({
    first: true,
    in: animation1,
  });

  const dimensionOneClass = cx({
    "dimension-text": true,
    one: true,
    in: animation1,
  });

  const dimensionTwoClass = cx({
    "dimension-text": true,
    two: true,
    in: animation2,
  });

  const dimensionThreeClass = cx({
    "dimension-text": true,
    three: true,
    in: animation3,
  });
  const dimensionFourClass = cx({
    "dimension-text": true,
    four: true,
    in: animation4,
  });
  const dimensionFiveClass = cx({
    "dimension-text": true,
    five: true,
    in: animation5,
  });

  return (
    <>
      <PageContainer exception={<More data={moreData} />}>
        <div className={styles.service}>
          <h1>維度設計</h1>
          <section className={styles.top}>
            <div className={styles.step}>
              <div className={styles.title}>
                Dots make Brand happends / 接觸.理解
              </div>
              <div className={styles.desc}>
                讓我們先從一杯咖啡開始瞭解彼此，不以沈重的會議室開場。
                <br />
                透過使用者經驗的專業背景聊聊品牌接觸點所遇見的問題並釐清規劃的方向，輕鬆的聊聊外也讓你更理解我們。
              </div>
            </div>
            <div className={firstClass} />
          </section>
          <div className={arrowScrollClass} />
          <section className={styles.dimension}>
            <div className={dimensionOneClass}>
              Zero Dimension.
              <br /> 拆解 / 品牌健診
            </div>
            <div className={dimensionTwoClass}>
              First Dimension.
              <br /> 組合 / 品牌定位
            </div>
            <div className={dimensionThreeClass}>
              <div>設計執行</div>
              <div>品牌設計</div>
              <div>網站設計</div>
              <div>品牌空間設計</div>
            </div>
            <div className={dimensionFourClass}>
              <div>實務落實</div>
              <div>空間工程</div>
              <div>
                包裝文宣
                <br />
                官網架站
              </div>
            </div>
            <div className={dimensionFiveClass}>時間軸服務</div>
            <svg
              ref={svgRef}
              style={{ opacity: animation1 ? 1 : 0 }}
              id="step1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 401.2 836.7"
            >
              <circle className={styles.st0} cx="25.1" cy="137.5" r="12.1" />
              <circle className={styles.st0} cx="25.1" cy="137.5" r="23.6" />
              <circle className={styles.st0} cx="25.1" cy="137.5" r="6.6" />
              <line
                className={styles.st0}
                x1="25.1"
                y1="125.4"
                x2="25.1"
                y2="149.6"
              />
            </svg>
            <svg
              style={{ opacity: animation2 ? 1 : 0 }}
              version="1.1"
              id="step2"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 401.2 836.7"
            >
              <circle className={styles.st1} cx="376.1" cy="137.5" r="12.1" />
              <circle className={styles.st1} cx="376.1" cy="137.5" r="23.6" />
              <path
                className={styles.st1}
                d="M200.6,49.6c-110,0-199.1,39.4-199.1,87.9s89.1,87.9,199.1,87.9c82.5,0,153.2-22.1,183.5-53.7"
              />
              <path
                className={styles.st1}
                d="M399.7,137.5c0-48.6-89.1-87.9-199.1-87.9"
              />
              <line
                className={styles.st1}
                x1="200.6"
                y1="1.5"
                x2="200.6"
                y2="167.1"
              />
              <path
                className={styles.st1}
                d="M59.5,152.7c-7-6.7-10.9-14-10.9-21.7c0-32.2,68-58.3,151.9-58.3"
              />
              <path
                className={styles.st1}
                d="M230.1,73.7c69.8,5.3,122.5,28.9,122.5,57.2c0,32.2-68,58.3-151.9,58.3c-40.3,0-76.9-6-104.1-15.8"
              />
              <circle className={styles.st1} cx="376.1" cy="137.5" r="6.6" />
              <line
                className={styles.st1}
                x1="376.1"
                y1="125.4"
                x2="376.1"
                y2="149.6"
              />
            </svg>
            {/*step3 */}

            <svg
              style={{ opacity: animation3 ? 1 : 0 }}
              version="1.1"
              id="step3"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 399.2 833.7"
            >
              <g>
                <line
                  className={styles.st0}
                  x1="13.5"
                  y1="141.8"
                  x2="186.5"
                  y2="426.3"
                />
                <line
                  className={styles.st0}
                  x1="385.5"
                  y1="142.3"
                  x2="225.1"
                  y2="398.3"
                />
                <circle className={styles.st0} cx="199.6" cy="419.1" r="15" />
                <line
                  className={styles.st0}
                  x1="199.6"
                  y1="292.3"
                  x2="199.6"
                  y2="386.3"
                />
                <circle className={styles.st0} cx="199.6" cy="280.2" r="23.6" />
                <circle className={styles.st0} cx="199.6" cy="419.1" r="32.8" />
                <line
                  className={styles.st0}
                  x1="216.7"
                  y1="263.9"
                  x2="340.9"
                  y2="151.1"
                />
                <line
                  className={styles.st0}
                  x1="182.5"
                  y1="263.9"
                  x2="58.4"
                  y2="151.1"
                />
                <line
                  className={styles.st0}
                  x1="199.6"
                  y1="256.6"
                  x2="199.6"
                  y2="187.8"
                />
                <line
                  className={styles.st0}
                  x1="116.1"
                  y1="80.7"
                  x2="179.9"
                  y2="241.3"
                />
                <line
                  className={styles.st0}
                  x1="279.4"
                  y1="94.4"
                  x2="211.7"
                  y2="260"
                />
                <circle className={styles.st0} cx="199.6" cy="280.2" r="12.1" />
                <circle className={styles.st0} cx="199.6" cy="280.2" r="6.6" />
                <line
                  className={styles.st0}
                  x1="187.5"
                  y1="281"
                  x2="211.7"
                  y2="281"
                />
                <circle className={styles.st0} cx="199.6" cy="419.1" r="8.2" />
                <line
                  className={styles.st0}
                  x1="192.2"
                  y1="406.1"
                  x2="207.1"
                  y2="432.1"
                />
              </g>
            </svg>

            {/* step5 */}
            <svg
              style={{ opacity: animation4 ? 1 : 0 }}
              version="1.1"
              id="step4"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 399.2 833.7"
            >
              <circle className={styles.st0} cx="24.1" cy="702.2" r="12.1" />
              <line
                className={styles.st0}
                x1="217"
                y1="568.1"
                x2="342.3"
                y2="675.1"
              />
              <line
                className={styles.st0}
                x1="182.2"
                y1="568.1"
                x2="56.9"
                y2="675.1"
              />
              <line
                className={styles.st0}
                x1="199.6"
                y1="539.5"
                x2="199.6"
                y2="451.9"
              />
              <circle className={styles.st0} cx="375.1" cy="702.2" r="23.6" />
              <circle className={styles.st0} cx="24.1" cy="702.2" r="23.6" />
              <circle className={styles.st0} cx="199.6" cy="551.6" r="23.6" />
              <path
                className={styles.st0}
                d="M270.1,643.3c-21.1-4.3-45-6.7-70.5-6.7c-83.9,0-151.9,26.3-151.9,58.7s68,58.7,151.9,58.7
	s151.9-26.3,151.9-58.7c0-18.2-21.5-34.5-55.3-45.3"
              />
              <circle className={styles.st0} cx="375.1" cy="702.2" r="12.1" />
              <circle className={styles.st0} cx="199.6" cy="551.6" r="12.1" />
              <circle className={styles.st0} cx="199.6" cy="551.6" r="6.6" />
              <line
                className={styles.st0}
                x1="211.7"
                y1="551.6"
                x2="187.5"
                y2="551.6"
              />
              <circle className={styles.st0} cx="24.1" cy="702.2" r="6.6" />
              <line
                className={styles.st0}
                x1="24.1"
                y1="690.1"
                x2="24.1"
                y2="714.3"
              />
              <circle className={styles.st0} cx="375.1" cy="702.2" r="6.6" />
              <line
                className={styles.st0}
                x1="375.1"
                y1="690.1"
                x2="375.1"
                y2="714.3"
              />
            </svg>
            {/* step6 */}
            <svg
              style={{ opacity: animation5 ? 1 : 0 }}
              version="1.1"
              id="step5"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 401.2 836.7"
            >
              <line
                className={styles.st0}
                x1="14"
                y1="698.9"
                x2="175.2"
                y2="441.3"
              />
              <line
                className={styles.st0}
                x1="386.7"
                y1="697.9"
                x2="213.2"
                y2="412.4"
              />
              <path
                className={styles.st0}
                d="M1.5,703.7c0-20.9,16.5-40.1,44-55.2"
              />
              <path
                className={styles.st0}
                d="M165.5,790.2c-93.2-7.3-164-43.3-164-86.6"
              />
              <path
                className={styles.st0}
                d="M68,638.1c35.2-13.9,81.7-22.3,132.6-22.3c110,0,199.1,39.4,199.1,87.9s-89.1,87.9-199.1,87.9"
              />
              <line
                className={styles.st0}
                x1="216.2"
                y1="590.7"
                x2="275.7"
                y2="731.9"
              />
              <line
                className={styles.st0}
                x1="115.2"
                y1="745.3"
                x2="191"
                y2="575.2"
              />
              <line
                className={styles.st0}
                x1="200.6"
                y1="602.9"
                x2="200.6"
                y2="835.2"
              />
            </svg>
          </section>

          <section className={styles.section}>
            <div className={styles.steps}>
              {stepContent.map((step) => {
                const stepClass = cx({
                  step: true,
                  [step.id]: true,
                });
                return (
                  <div
                    className={stepClass}
                    key={step.id}
                    onClick={() => {
                      if (currentStepOpen === step.id) {
                        setCurrentStepOpen("");
                        return;
                      }
                      setCurrentStepOpen(step.id);
                    }}
                  >
                    <div className={styles.title}>{step.title}</div>
                    <div className={styles.desc}>{step.desc}</div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className={styles.section}>
            <h2>Why you need Dimension Design?</h2>
            <h3>品牌面臨的斷層問題 | Create point Solve point</h3>
            <p>
              台灣企業經營品牌時，發包給不同廠商、甚至只是找到一個統包行的顧問公司，這樣的方式無法解決品牌斷層。
            </p>
            <div className={styles.process}>
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 854.2 543"
              >
                <g>
                  <circle
                    className={styles.st0}
                    cx="160.4"
                    cy="87.3"
                    r="28.7"
                  />
                  <circle
                    className={styles.st0}
                    cx="160.4"
                    cy="87.3"
                    r="15.7"
                  />
                  <line
                    className={styles.st0}
                    x1="160.4"
                    y1="58.6"
                    x2="160.4"
                    y2="116.1"
                  />
                  <circle
                    className={styles.st0}
                    cx="328.2"
                    cy="87.3"
                    r="28.7"
                  />
                  <circle
                    className={styles.st0}
                    cx="328.2"
                    cy="87.3"
                    r="15.7"
                  />
                  <line
                    className={styles.st0}
                    x1="328.2"
                    y1="58.6"
                    x2="328.2"
                    y2="116.1"
                  />
                  <circle className={styles.st0} cx="496" cy="87.3" r="28.7" />
                  <circle className={styles.st0} cx="496" cy="87.3" r="15.7" />
                  <line
                    className={styles.st0}
                    x1="496"
                    y1="58.6"
                    x2="496"
                    y2="116.1"
                  />
                  <circle
                    className={styles.st0}
                    cx="663.9"
                    cy="87.3"
                    r="28.7"
                  />
                  <circle
                    className={styles.st0}
                    cx="663.9"
                    cy="87.3"
                    r="15.7"
                  />
                  <line
                    className={styles.st0}
                    x1="663.9"
                    y1="58.6"
                    x2="663.9"
                    y2="116.1"
                  />
                  <text
                    transform="matrix(1 0 0 1 155.8429 144.3981)"
                    className={styles.st3}
                  >
                    MI
                  </text>
                  <text
                    transform="matrix(1 0 0 1 491.0018 144.3981)"
                    className={styles.st3}
                  >
                    VI
                  </text>
                  <text
                    transform="matrix(1 0 0 1 632.3895 144.3981)"
                    className={styles.st3}
                  >
                    INTERIOR
                  </text>
                  <text
                    transform="matrix(1 0 0 1 301.2732 144.3981)"
                    className={styles.st3}
                  >
                    ANALYSIS
                  </text>
                  <line
                    className={styles.st0}
                    x1="200.8"
                    y1="87.3"
                    x2="235.6"
                    y2="87.3"
                  />
                  <line
                    className={styles.st0}
                    x1="253"
                    y1="87.3"
                    x2="287.8"
                    y2="87.3"
                  />
                  <line
                    className={styles.st0}
                    x1="368.4"
                    y1="87.3"
                    x2="403.2"
                    y2="87.3"
                  />
                  <line
                    className={styles.st0}
                    x1="420.5"
                    y1="87.3"
                    x2="455.4"
                    y2="87.3"
                  />
                  <line
                    className={styles.st0}
                    x1="536.1"
                    y1="87.3"
                    x2="570.9"
                    y2="87.3"
                  />
                  <line
                    className={styles.st0}
                    x1="588.3"
                    y1="87.3"
                    x2="623.1"
                    y2="87.3"
                  />
                </g>
                <text transform="matrix(1 0 0 1 220.9338 421.277)">
                  <tspan x="5" y="0" className={styles.st3}>
                    COMPANY
                  </tspan>
                  <tspan x="35.2" y="18.2" className={styles.st3}>
                    A
                  </tspan>
                </text>
                <text transform="matrix(1 0 0 1 546.4103 421.277)">
                  <tspan x="6" y="0" className={styles.st3}>
                    COMPANY
                  </tspan>
                  <tspan x="34.8" y="18.2" className={styles.st3}>
                    B
                  </tspan>
                </text>
                <polygon
                  className={styles.st0}
                  points="346.5,450.8 346.5,384.5 259.8,351.4 173.1,384.5 173.1,450.8 259.8,484 "
                />
                <polygon
                  className={styles.st0}
                  points="670.6,450.8 670.6,384.5 583.8,351.4 497.1,384.5 497.1,450.8 583.8,484 "
                />
                <polyline
                  className={styles.st0}
                  points="172.7,161.8 259.8,351.4 486.1,161.8 "
                />
                <line
                  className={styles.st0}
                  x1="259.8"
                  y1="351.4"
                  x2="318.8"
                  y2="161.8"
                />
                <polyline
                  className={styles.st0}
                  points="340,161.8 583.8,351.4 663.9,161.8 "
                />
                <line
                  className={styles.st0}
                  x1="359.5"
                  y1="421.5"
                  x2="409.4"
                  y2="421.5"
                />
                <line
                  className={styles.st0}
                  x1="434.2"
                  y1="421.5"
                  x2="484.1"
                  y2="421.5"
                />
                <line
                  className={styles.st0}
                  x1="411.9"
                  y1="405.9"
                  x2="417.7"
                  y2="415.3"
                />
                <line
                  className={styles.st0}
                  x1="431.6"
                  y1="405.9"
                  x2="425.7"
                  y2="415.3"
                />
                <line
                  className={styles.st0}
                  x1="411.9"
                  y1="437.1"
                  x2="417.7"
                  y2="427.7"
                />
                <line
                  className={styles.st0}
                  x1="431.6"
                  y1="437.1"
                  x2="425.7"
                  y2="427.7"
                />
                <text
                  transform="matrix(1.7835 0 0 1 238.9145 92.7322)"
                  className={styles.st6}
                >
                  ?
                </text>
                <text
                  transform="matrix(1.7835 0 0 1 406.3662 92.7322)"
                  className={styles.st6}
                >
                  ?
                </text>
                <text
                  transform="matrix(1.7835 0 0 1 573.8179 92.7322)"
                  className={styles.st6}
                >
                  ?
                </text>
              </svg>
            </div>
            <h3>維度設計服務</h3>
            <p>
              UNME
              並不是線狀進行的設計公司，而是可以透過多點執行企業品牌不同時程下的品牌需求（生態系）
            </p>
            <div className={styles.process}>
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 855.2 798.2"
              >
                <path
                  className={styles.st0}
                  d="M589,484.9c-2.2-3.9-4.3-7.7-6.2-11.3"
                />
                <path
                  className={styles.st0}
                  d="M654.6,544.8c-18.4,0-35.9-16.4-50.1-35.7"
                />
                <path
                  className={styles.st0}
                  d="M710.3,509.1c-16.9,27.2-41.1,35.7-55.8,35.7"
                />
                <path
                  className={styles.st0}
                  d="M726.3,473.6c-0.8,1.5-3.2,7-5.9,13.2"
                />
                <path
                  className={styles.st0}
                  d="M570.7,641.9c-69.1,0-131.2-114.9-156.2-168"
                />
                <path
                  className={styles.st0}
                  d="M710.3,509.1c-30.7,56.9-83.4,132.8-139.7,132.8"
                />
                <path
                  className={styles.st0}
                  d="M251.4,484.7c-1.8-3.8-3.4-7.4-5-10.7"
                />
                <path
                  className={styles.st0}
                  d="M486.8,739c-94.9,0-180.9-144.5-223.6-230"
                />
                <path
                  className={styles.st0}
                  d="M710.3,509.1c-42.6,85.5-128.7,230-223.6,230"
                />
                <polyline
                  className={styles.st0}
                  points="658.2,550.6 651,544.4 658.2,538.9 "
                />
                <polyline
                  className={styles.st0}
                  points="574.3,647.7 567.1,641.5 574.3,636.1 "
                />
                <circle className={styles.st0} cx="67.2" cy="447.6" r="28.7" />
                <circle className={styles.st0} cx="67.2" cy="447.6" r="15.7" />
                <line
                  className={styles.st0}
                  x1="67.2"
                  y1="418.9"
                  x2="67.2"
                  y2="476.4"
                />
                <circle className={styles.st3} cx="235" cy="447.6" r="28.7" />
                <circle className={styles.st1} cx="235" cy="447.6" r="15.7" />
                <line
                  className={styles.st1}
                  x1="214.7"
                  y1="427.3"
                  x2="255.3"
                  y2="467.9"
                />
                <circle className={styles.st0} cx="402.8" cy="447.6" r="28.7" />
                <circle className={styles.st0} cx="402.8" cy="447.6" r="15.7" />
                <line
                  className={styles.st0}
                  x1="402.8"
                  y1="418.9"
                  x2="402.8"
                  y2="476.4"
                />
                <circle className={styles.st0} cx="570.7" cy="447.6" r="28.7" />
                <circle className={styles.st0} cx="570.7" cy="447.6" r="15.7" />
                <line
                  className={styles.st0}
                  x1="570.7"
                  y1="418.9"
                  x2="570.7"
                  y2="476.4"
                />
                <circle className={styles.st0} cx="738.5" cy="447.6" r="28.7" />
                <circle className={styles.st2} cx="738.5" cy="447.6" r="15.7" />
                <line
                  className={styles.st0}
                  x1="758.8"
                  y1="427.3"
                  x2="718.2"
                  y2="467.9"
                />
                <g>
                  <line
                    className={styles.st0}
                    x1="38.5"
                    y1="447.6"
                    x2="0.5"
                    y2="447.6"
                  />
                  <line
                    className={styles.st0}
                    x1="206.3"
                    y1="447.6"
                    x2="95.9"
                    y2="447.6"
                  />
                  <line
                    className={styles.st0}
                    x1="374.1"
                    y1="447.6"
                    x2="263.8"
                    y2="447.6"
                  />
                  <line
                    className={styles.st0}
                    x1="541.9"
                    y1="447.6"
                    x2="431.6"
                    y2="447.6"
                  />
                  <line
                    className={styles.st0}
                    x1="709.8"
                    y1="447.6"
                    x2="599.4"
                    y2="447.6"
                  />
                  <line
                    className={styles.st0}
                    x1="854.7"
                    y1="447.6"
                    x2="767.2"
                    y2="447.6"
                  />
                  <line
                    className={styles.st0}
                    x1="825.6"
                    y1="426.6"
                    x2="854.7"
                    y2="447.6"
                  />
                  <line
                    className={styles.st0}
                    x1="825.6"
                    y1="468.6"
                    x2="854.7"
                    y2="447.6"
                  />
                </g>
                <path
                  className={styles.st0}
                  d="M318.9,350.5c-29.7,0-56.7,42.3-71.7,71.1"
                />
                <path
                  className={styles.st0}
                  d="M390.6,421.6c-15-28.8-42.1-71.1-71.7-71.1"
                />
                <path
                  className={styles.st0}
                  d="M151.1,350.5c-29.7,0-56.7,42.3-71.7,71.1"
                />
                <path
                  className={styles.st0}
                  d="M222.8,421.6c-15-28.8-42.1-71.1-71.7-71.1"
                />
                <text
                  transform="matrix(1 0 0 1 58.6392 504.6893)"
                  className={styles.st3}
                >
                  MI
                </text>
                <text
                  transform="matrix(1 0 0 1 397.1681 504.6893)"
                  className={styles.st3}
                >
                  VI
                </text>
                <text
                  transform="matrix(1 0 0 1 537.9667 504.6893)"
                  className={styles.st3}
                >
                  INTERIOR
                </text>
                <text
                  transform="matrix(1 0 0 1 706.2137 504.6893)"
                  className={styles.st3}
                >
                  COMPANY
                </text>
                <text
                  transform="matrix(1 0 0 1 201.8764 504.6893)"
                  className={styles.st3}
                >
                  ANALYSIS
                </text>
                <path
                  className={styles.st0}
                  d="M402.8,253.4c-69.1,0-124.8,100.6-149.8,153.6"
                />
                <path
                  className={styles.st0}
                  d="M559,421.3c-25-53.1-87.1-168-156.2-168"
                />
                <path
                  className={styles.st0}
                  d="M486.8,156.2c-109.7,0-207.7,193.3-240.3,265"
                />
                <path
                  className={styles.st0}
                  d="M727,421.3c-32.6-71.7-130.6-265-240.3-265"
                />
                <path
                  className={styles.st0}
                  d="M402.8,59.1c-151,0-285.4,274.6-324.3,362.1"
                />
                <path
                  className={styles.st0}
                  d="M727.2,421.2C688.2,333.7,553.9,59.1,402.8,59.1"
                />
                <polyline
                  className={styles.st0}
                  points="314.9,344.5 322.1,350.7 314.9,356.1 "
                />
                <polyline
                  className={styles.st0}
                  points="395.6,247.2 402.8,253.4 395.6,258.8 "
                />
                <polyline
                  className={styles.st0}
                  points="479.5,150 486.8,156.2 479.5,161.6 "
                />
                <polyline
                  className={styles.st0}
                  points="486.8,745.2 479.5,739 486.8,733.6 "
                />
              </svg>
            </div>
          </section>
        </div>
      </PageContainer>
    </>
  );
};

export default Service;
