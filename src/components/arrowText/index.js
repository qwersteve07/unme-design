import Link from "next/link";
import React from "react";
import styles from "components/arrowText/index.module.sass";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

const ArrowText = React.forwardRef(
  ({ text, onClick, colorReverse, href }, ref) => {
    const containerClass = cx({
      container: true,
      "color-reverse": colorReverse,
    });
    return (
      <a className={containerClass} href={href} onClick={onClick} ref={ref}>
        <span>{text}</span>
        <div className={styles.arrow} />
      </a>
    );
  }
);

export default ArrowText;
