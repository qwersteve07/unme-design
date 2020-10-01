import React from "react";
import Link from "next/link";
import styles from "components/nav/index.module.sass";
import logo from "images/logo.svg";

const Nav = () => {
  const navs = ["projects", "service", "about", "news", "blog", "contact"];
  const NavList = () => {
    return navs.map((nav) => {
      return (
        <li key={nav}>
          <Link href={`/${nav}`} as={`/${nav}`}>
            <a>{nav}</a>
          </Link>
        </li>
      );
    });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul>
        <NavList />
      </ul>
    </nav>
  );
};

export default Nav;
