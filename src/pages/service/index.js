import React, { useRef, useEffect } from "react";
import styles from "pages/service/index.module.sass";
import Vivus from "vivus";
import PageContainer from "components/page-container";
import service00 from "images/service00.svg";
import service01 from "images/service01.svg";
import service02 from "images/service02.svg";
import service03 from "images/service03.svg";

const Service = () => {
  const serviceRef = useRef();

  useEffect(() => {
    const options00 = {
      duration: 100,
      file: service00,
      type: "sync",
      animTimingFunction: Vivus.EASE_OUT,
    };
    const options01 = {
      duration: 100,
      file: service01,
      type: "sync",
      start: "manual",
      animTimingFunction: Vivus.EASE_OUT,
    };
    const options02 = {
      duration: 100,
      file: service02,
      type: "sync",
      start: "manual",
      animTimingFunction: Vivus.EASE_OUT,
    };
    const options03 = {
      duration: 100,
      file: service03,
      type: "sync",
      start: "manual",
      animTimingFunction: Vivus.EASE_OUT,
    };
    let dimension0 = new Vivus(serviceRef.current, options00, () => {
      dimension1.play();
    });
    let dimension1 = new Vivus(serviceRef.current, options01, () => {
      dimension2.play();
    });
    let dimension2 = new Vivus(serviceRef.current, options02, () => {
      dimension3.play();
    });
    let dimension3 = new Vivus(serviceRef.current, options03);
  }, []);
  return (
    <>
      <PageContainer>
        <div className={styles.service} ref={serviceRef} />
      </PageContainer>
    </>
  );
};

export default Service;
