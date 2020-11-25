import React, { useState } from "react";
import styles from "components/more/index.module.sass";
import Link from "next/link";
import Arrow from "components/arrow";

const More = ({ data }) => {
  const [hoverId, setHoverId] = useState("");

  return (
    <div className={styles.container}>
      {data.map((d, key) => {
        const setMouseOver = (e) => {
          if (e.currentTarget.id === d.id) setHoverId(d.id);
        };
        const setMouseLeave = () => setHoverId("");

        return (
          <Link href={d.path} key={key}>
            <div
              id={d.id}
              className={styles.more}
              onMouseOver={setMouseOver}
              onMouseLeave={setMouseLeave}
            >
              <div className={styles.title}>{d.title}</div>
              <div className={styles.desc}>{d.desc}</div>
              <div className={styles.readmore}>
                <Arrow
                  dark={false}
                  hoverState={hoverId === d.id}
                  hoverWithContainer={true}
                  text={d.text}
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default More;
