import React, { useState, useRef, useEffect } from "react";
import styles from "pages/service/index.module.sass";
import classnames from "classnames/bind";
import Vivus from "vivus";
import PageContainer from "components/page-container";
import step1 from "images/dimension/step1.svg";
import step2 from "images/dimension/step2.svg";
import step3 from "images/dimension/step3.svg";
import anime from "animejs";

const Service = () => {
  const cx = classnames.bind(styles);
  const svgRef = useRef();
  const [dimensionHeight, setDimensionHeight] = useState();
  const [animation1, setAnimation1] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [animation3, setAnimation3] = useState(false);
  const [animation4, setAnimation4] = useState(false);
  const [animation5, setAnimation5] = useState(false);
  const [animation6, setAnimation6] = useState(false);
  const [animation7, setAnimation7] = useState(false);

  const step0Class = cx({
    step: true,
    step0: true,
    // in:
  });

  const step1Class = cx({
    step: true,
    step1: true,
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
    if (animation6) {
      anime({
        targets: "#step6 circle, #step6 path,#step6 line",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: function (el, i) {
          return i * 250;
        },
        direction: "normal",
      });
    }
  }, [animation6]);

  useEffect(() => {
    if (animation7) {
      anime({
        targets: "#step7 circle, #step7 path,#step7 line",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: function (el, i) {
          return i * 250;
        },
        direction: "normal",
      });
    }
  }, [animation7]);

  useEffect(() => {
    let dHeight = svgRef.current.scrollHeight;
    setDimensionHeight(dHeight);
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 250 && !animation1) {
        setAnimation1(true);
      }
      if (window.scrollY > 400 && !animation2) {
        setAnimation2(true);
      }
      if (window.scrollY > 550 && !animation3) {
        setAnimation3(true);
      }
      if (window.scrollY > 850 && !animation4) {
        setAnimation4(true);
      }
      if (window.scrollY > 1150 && !animation5) {
        setAnimation5(true);
      }
      if (window.scrollY > 1350 && !animation6) {
        setAnimation6(true);
      }
      if (window.scrollY > 1450 && !animation7) {
        setAnimation7(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <PageContainer>
        <div className={styles.service}>
          <div
            className={styles.dimension}
            style={{ height: dimensionHeight + 300 }}
          >
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
              viewBox="0 0 401.2 836.7"
            >
              <circle className={styles.st1} cx="200.6" cy="281.7" r="23.6" />
              <line
                className={styles.st1}
                x1="217.7"
                y1="265.4"
                x2="341.8"
                y2="152.6"
              />
              <line
                className={styles.st1}
                x1="183.5"
                y1="265.4"
                x2="59.4"
                y2="152.6"
              />
              <line
                className={styles.st1}
                x1="200.6"
                y1="258.1"
                x2="200.6"
                y2="189.3"
              />
              <line
                className={styles.st1}
                x1="117.1"
                y1="82.2"
                x2="180.9"
                y2="242.8"
              />
              <line
                className={styles.st1}
                x1="280.4"
                y1="95.9"
                x2="212.7"
                y2="261.5"
              />
              <circle className={styles.st1} cx="200.6" cy="281.7" r="12.1" />
              <circle className={styles.st1} cx="200.6" cy="281.7" r="6.6" />
              <line
                className={styles.st1}
                x1="188.5"
                y1="282.5"
                x2="212.7"
                y2="282.5"
              />
            </svg>
            {/* step4 */}
            <svg
              style={{ opacity: animation4 ? 1 : 0 }}
              version="1.1"
              id="step4"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 401.2 836.7"
            >
              <line
                className={styles.st0}
                x1="14.5"
                y1="143.3"
                x2="187.5"
                y2="427.8"
              />
              <line
                className={styles.st0}
                x1="386.5"
                y1="143.8"
                x2="226"
                y2="399.8"
              />
              <circle className={styles.st0} cx="200.6" cy="420.6" r="15" />
              <line
                className={styles.st0}
                x1="200.6"
                y1="293.8"
                x2="200.6"
                y2="387.8"
              />
              <circle className={styles.st0} cx="200.6" cy="420.6" r="32.8" />
              <circle className={styles.st0} cx="200.6" cy="420.6" r="8.2" />
              <line
                className={styles.st0}
                x1="193.2"
                y1="407.6"
                x2="208"
                y2="433.6"
              />
            </svg>
            {/* step5 */}
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
                x1="200.6"
                y1="541"
                x2="200.6"
                y2="453.4"
              />
              <circle className={styles.st0} cx="200.6" cy="553.1" r="23.6" />
              <circle className={styles.st0} cx="200.6" cy="553.1" r="12.1" />
              <circle className={styles.st0} cx="200.6" cy="553.1" r="6.6" />
              <line
                className={styles.st0}
                x1="212.7"
                y1="553.1"
                x2="188.5"
                y2="553.1"
              />
            </svg>
            {/* step6 */}
            <svg
              style={{ opacity: animation6 ? 1 : 0 }}
              version="1.1"
              id="step6"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 401.2 836.7"
            >
              <circle className={styles.st0} cx="25.1" cy="703.7" r="12.1" />
              <line
                className={styles.st0}
                x1="218"
                y1="569.6"
                x2="343.3"
                y2="676.6"
              />
              <line
                className={styles.st0}
                x1="183.2"
                y1="569.6"
                x2="57.9"
                y2="676.6"
              />
              <circle className={styles.st0} cx="376.1" cy="703.7" r="23.6" />
              <circle className={styles.st0} cx="25.1" cy="703.7" r="23.6" />
              <path
                className={styles.st0}
                d="M271.1,644.8c-21.1-4.3-45-6.7-70.5-6.7c-83.9,0-151.9,26.3-151.9,58.7c0,32.4,68,58.7,151.9,58.7
	s151.9-26.3,151.9-58.7c0-18.2-21.5-34.5-55.3-45.3"
              />
              <circle className={styles.st0} cx="376.1" cy="703.7" r="12.1" />
              <circle className={styles.st0} cx="25.1" cy="703.7" r="6.6" />
              <line
                className={styles.st0}
                x1="25.1"
                y1="691.6"
                x2="25.1"
                y2="715.8"
              />
              <circle className={styles.st0} cx="376.1" cy="703.7" r="6.6" />
              <line
                className={styles.st0}
                x1="376.1"
                y1="691.6"
                x2="376.1"
                y2="715.8"
              />
            </svg>
            {/* step7 */}
            <svg
              style={{ opacity: animation7 ? 1 : 0 }}
              version="1.1"
              id="step7"
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
          </div>
          <div className={step0Class}>
            <div className={styles.title}>Dots make Brand happends</div>
            <div className={styles["sub-title"]}>接觸 | 理解</div>
            <div className={styles.desc}>
              讓我們先從一杯咖啡開始瞭解彼此，不以沈重的會議室開場。
              <br />
              透過使用者經驗的專業背景聊聊品牌接觸點所遇見的問題並釐清規劃的方向，輕鬆的聊聊外也讓你更理解我們。
            </div>
          </div>
          <div className={step1Class}>
            <div className={styles.title}>Zero Dimension. 拆解</div>
            <div className={styles["sub-title"]}>品牌健診</div>
            <div className={styles.desc}>
              探討品牌與市場間的關係，透過實際的演練與我們跨領域結合的定位系統重新出發，同步進行品牌的
              Mi (理念定位) 與
              Analysis（分析定位）掌握時程精準性，解決關鍵問題。
            </div>
          </div>
          {/* <div className={styles.step}>
            <div className={styles.title}>First Dimension. 組合</div>
            <div className={styles["sub-title"]}>品牌定位</div>
            <div className={styles.desc}>
              根據分析的結果，進行品牌內外部的接觸點規劃。將品牌策略、時間軸方向、預期目標、對象受眾（TA）、觸點表現等等，定義品牌樣貌提高接觸點的設計精準性。
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.title}>First Dimension. 組合</div>
            <div className={styles["sub-title"]}>設計執行</div>
            <div className={styles.desc}>
              UnMe不將任何設計外包，讓品牌面臨斷層風險。每項產物都由我們透過多設計能力的經驗值縮短品牌的建立時間，打造獨特的品牌接觸點。
            </div>
          </div> */}
        </div>
      </PageContainer>
    </>
  );
};

export default Service;
