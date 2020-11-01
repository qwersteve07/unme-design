import React from "react";
import styles from "components/arrow/index.module.sass";
import classnames from "classnames/bind";

const Arrow = ({ dark = false }) => {
  const cx = classnames.bind(styles);
  const arrowClass = cx({
    arrow: true,
    dark: dark,
  });
  return <div className={arrowClass} />;
};

export default Arrow;
