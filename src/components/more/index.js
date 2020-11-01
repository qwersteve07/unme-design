import React from "react";
import styles from "components/more/index.module.sass";
import Link from "next/link";
import Arrow from "components/arrow";

const More = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((d, key) => {
        return (
          <Link href={d.path} key={key}>
            <div className={styles.more}>
              <div className={styles.title}>{d.title}</div>
              <div className={styles.desc}>{d.desc}</div>
              <div className={styles.readmore}>
                <Arrow dark={true} />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default More;
