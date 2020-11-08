import React, { useEffect, useState } from "react";
import styles from "components/arrow/index.module.sass";
import classnames from "classnames/bind";

const Arrow = ({
  dark = false,
  hoverState = false,
  hoverWithContainer = false,
  text = "readmore",
  onClick,
}) => {
  const cx = classnames.bind(styles);
  const [arrowHover, setArrowHover] = useState(hoverState);

  useEffect(() => {
    if (hoverWithContainer) {
      setArrowHover(hoverState);
    }
  }, [hoverState]);

  const containerClass = cx({
    container: true,
    hover: arrowHover,
    hoverWithContainer,
  });
  const arrowClass = cx({
    arrow: true,
    dark: dark,
  });

  return (
    <div className={containerClass} onClick={onClick}>
      <div className={arrowClass}>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Arrow;
