import React, { useState, useEffect, useLayoutEffect } from "react";
import classnames from "classnames/bind";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import styles from "components/nav/index.module.sass";
import logo from "images/logo.svg";
import localDataService from "service/local-data-service";
import { SET_DARK_MODE } from "redux/reducer/app";

const Nav = () => {
  const cx = classnames.bind(styles);
  const [fixed, setFixed] = useState(false);
  const state = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  const setDarkMode = () => {
    dispatch({
      type: SET_DARK_MODE,
      payload: localDataService.getTheme() !== "light",
    });
  };

  useEffect(() => {
    setDarkMode();
  }, []);

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

  const logoClass = cx({
    logo: true,
    "dark-mode": state.darkMode,
  });

  const toggleTheme = () => {
    const bodyClass = document.body.classList;
    const isDarkMode = !bodyClass.contains("light");
    bodyClass.toggle("light");
    localDataService.setTheme(isDarkMode ? "light" : "");
    setDarkMode();
  };

  return (
    <nav className={navClass}>
      <div className={styles.toggler} onClick={toggleTheme}>
        click me
      </div>
      <div className={logoClass}>
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
