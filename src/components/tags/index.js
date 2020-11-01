import React from "react";
import styles from "components/tags/index.module.sass";

const Tags = ({ data }) => {
  return (
    <div className={styles.tags}>
      {data.map((tag) => {
        return (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
