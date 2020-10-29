import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import Link from "next/link";
import styles from "components/nav/index.module.sass";
import logo from "images/logo.svg";

const Nav = () => {
  const cx = classnames.bind(styles);
  const [fixed, setFixed] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = cx({
    nav: true,
    fixed,
  });

  const toggleTheme = () => {
    if (window.matchMedia("(prefers-color-scheme)").media === "not all") {
      return "";
    }

    let themeColor = document.querySelector('meta[name="color-scheme"]');
    console.log(themeColor);
    const darkModeOn = themeColor.content === "dark" ? true : false;
    themeColor.content = darkModeOn ? "light" : "dark";

    // const favicons = document.querySelectorAll('link[rel="icon"]');

    // favicon
    // favicons.forEach((link) => {
    //   link.href = darkModeOn ? link.dataset.hrefDark : link.dataset.hrefLight;
    // });
  };

  return (
    <nav className={navClass}>
      <div className={styles.toggler} onClick={toggleTheme}>
        click me
      </div>
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
