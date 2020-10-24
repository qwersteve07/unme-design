import styles from "components/footer/index.module.sass";
import logo from "images/logo-only.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <img src={logo} alt />
        <div className={styles.text}>
          <span>unme@unmedesign.co</span>
          <span>台北市中山區華陰街24巷3弄7號3F</span>
        </div>
      </div>
      <div className={styles.link}>
        <span>
          <i className="fab fa-facebook-f" />
        </span>
        <span>
          <i className="fab fa-instagram" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
