import React, { useEffect, useState } from "react";
import styles from "components/arrow/index.module.sass";
import classnames from "classnames/bind";

const Arrow = ({ dark = false, hover = false }) => {
  const [arrowHover, setArrowHover] = useState(hover);
  const cx = classnames.bind(styles);

  useEffect(() => {
    setArrowHover(hover);
  }, [hover]);

  const containerClass = cx({
    container: true,
    hover: arrowHover,
  });
  const arrowClass = cx({
    arrow: true,
    dark: dark,
  });

  return (
    <div className={containerClass}>
      <div className={arrowClass}>
        <span>readmore</span>
      </div>
    </div>
  );
};

export default Arrow;
