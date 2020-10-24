import styles from "components/page-container/index.module.sass";

const PageContainer = ({ main, sub }) => {
  return (
    <div className={styles["page-container"]}>
      <div className={styles.main}>{main}</div>
      <div className={styles.sub}>{sub}</div>
    </div>
  );
};

export default PageContainer;
