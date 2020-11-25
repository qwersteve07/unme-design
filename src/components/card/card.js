import React from "react";
import styles from "components/card/index.module.sass";
import classnames from "classnames/bind";

const Card = ({ data, className, imageHeight, lineHeight, reverse }) => {
  const cx = classnames.bind(styles);
  const { image, info } = data;

  const cardClass = cx({
    card: true,
    [className]: true,
    reverse,
  });

  return (
    <div className={cardClass}>
      <div className={styles.image} style={{ paddingTop: imageHeight }}>
        <img src={image} alt="photo" />
      </div>
      <div className={styles.line} style={{ height: lineHeight }}></div>
      <div className={styles.info}>{data.info}</div>
    </div>
  );
};

export default Card;
