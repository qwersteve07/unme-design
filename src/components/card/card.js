import React from "react";
import Link from "next/link";
import styles from "components/card/index.module.sass";
import classnames from "classnames/bind";

const Card = ({
  data,
  className,
  imageHeight,
  lineHeight,
  reverse,
  linkOnImage = "",
}) => {
  const cx = classnames.bind(styles);
  const { image, info } = data;

  const cardClass = cx({
    card: true,
    [className]: true,
    reverse,
  });

  return (
    <div className={cardClass}>
      {linkOnImage ? (
        <Link href={linkOnImage}>
          <a className={styles.image} style={{ paddingTop: imageHeight }}>
            <img src={image} alt="photo" />
          </a>
        </Link>
      ) : (
        <div className={styles.image} style={{ paddingTop: imageHeight }}>
          <img src={image} alt="photo" />
        </div>
      )}
      <div className={styles.line} style={{ height: lineHeight }}></div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};

export default Card;
