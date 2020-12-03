import Link from "next/link";
import React from "react";
import styles from "components/arrowText/index.module.sass";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

const ArrowText = ({ text, onClick, colorReverse }) => {
  const containerClass = cx({
    container: true,
    "color-reverse": colorReverse,
  });
  return (
    <>
      <div className={containerClass} onClick={onClick}>
        <span>{text}</span>
        <div className={styles.arrow} />
      </div>
    </>
  );
};

export default ArrowText;
