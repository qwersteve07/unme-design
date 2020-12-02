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
import logo from "images/logo.svg";
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

  // const navs = ["projects", "service", "about", "news", "blog", "contact"];
  const NavList = () => {
    return navs.map((nav) => {
      const liClass = cx({
        active: router.pathname.replace("/", "") === nav,
      });
      if (nav === "home" && window.innerWidth > 767) return;
      return (
        <li key={nav} className={liClass}>
          <Link href={`/${nav}`} as={`/${nav}`}>
            <a>{nav}</a>
          </Link>
        </li>
      );
    });
  };

  // fixed top style
  useEffect(() => {
    setNavs(() =>
      window.innerWidth > 767
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
      <div className={logoClass}>
        <Link href="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className={menuClass}>
        <NavList />
      </ul>
      <div className={styles.hamburger} onClick={setNav} />
    </nav>
  );
};

export default Nav;
