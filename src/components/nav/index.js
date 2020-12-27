import React, { useState, useEffect } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { useRouter } from "next/router";
import classnames from "classnames/bind";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import styles from "components/nav/index.module.sass";
import logoWithText from "images/logo.svg";
import logo from "images/logo-only.svg";
import localDataService from "service/local-data-service";
import { SET_DARK_MODE } from "redux/reducer/app";

const Nav = () => {
  const router = useRouter();
  const cx = classnames.bind(styles);
  const [navs, setNavs] = useState([]);
  const [fixed, setFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  // body scroll lock when open menu
  useEffect(() => {
    let body = document.body;
    if (menuOpen) {
      disableBodyScroll(body);
    } else {
      enableBodyScroll(body);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [menuOpen]);

  const NavList = () => {
    return navs.map((nav) => {
      let navText = nav === "home" ? "" : nav;
      const liClass = cx({
        active: router.pathname.replace("/", "") === navText,
      });
      if (nav === "home" && window.innerWidth > 768) return;

      return (
        <li
          key={nav}
          className={liClass}
          onClick={() => {
            if (router.pathname.replace("/", "") === navText)
              setMenuOpen(false);
          }}
        >
          <Link href={`/${navText}`} as={`/${navText}`}>
            <a>{nav}</a>
          </Link>
        </li>
      );
    });
  };

  // fixed top style
  useEffect(() => {
    setNavs(() =>
      window.innerWidth > 768
        ? ["projects", "service", "about", "contact"]
        : ["home", "projects", "service", "about", "contact"]
    );

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

  const togglerClass = cx({
    toggler: true,
    "dark-mode": state.darkMode,
  });

  const menuClass = cx({
    menu: true,
    open: menuOpen,
  });

  const setNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={navClass}>
      <div className={togglerClass} onClick={toggleTheme}>
        <div className={styles.icon} />
      </div>
      <Link href="/">
        <div className={logoClass}>
          <img src={logoWithText} alt="logo" />
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <ul className={menuClass} onClick={() => setMenuOpen(false)}>
        <NavList />
      </ul>
      <div className={styles.hamburger} onClick={setNav}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
};

export default Nav;
