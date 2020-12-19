import React from "react";
import styles from "components/card/index.module.sass";
import classnames from "classnames/bind";

const Card = ({ info, className, lineHeight, reverse, image }) => {
  const cx = classnames.bind(styles);

  const cardClass = cx({
    card: true,
    [className]: true,
    reverse,
  });
  return (
    <div className={cardClass}>
      {image}
      <div className={styles.line} style={{ height: lineHeight }}></div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};

export default Card;
