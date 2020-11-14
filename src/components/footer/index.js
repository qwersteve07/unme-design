import React from "react";
import styles from "components/footer/index.module.sass";
import logo from "images/logo-only.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <address>
        <div className={styles.info}>
          <img src={logo} alt="logo" />
          <div className={styles.text}>
            <span>unme@unmedesign.co</span>
            <span>台北市中山區華陰街24巷3弄7號3F</span>
          </div>
        </div>
        <div className={styles.link}>
          <a
            href="https://www.facebook.com/UnMe.BrandDomain.Design"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://www.instagram.com/unme_design/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </address>
    </footer>
  );
};

export default Footer;
