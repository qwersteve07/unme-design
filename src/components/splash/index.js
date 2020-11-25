import React, { useEffect, useState } from "react";
import styles from "components/splash/index.module.sass";
import classnames from "classnames/bind";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import logo from "images/logo.svg";

const Splash = ({ active }) => {
  const [direction, setDirection] = useState("top");
  const cx = classnames.bind(styles);
  const way = ["top", "bottom", "left", "right"];
  const state = useSelector((state) => state.appReducer);
  const DURATION = 600;

  useEffect(() => {
    if (active) return;
    setDirection(way[Math.floor(Math.random() * 4)]);
  }, [active]);

  const splashClass = cx({
    splash: true,
    [direction]: true,
    "dark-mode": state.darkMode,
  });

  return (
    <CSSTransition
      in={active}
      timeout={DURATION}
      classNames={direction}
      unmountOnExit
      mountOnEnter
    >
      <div className={splashClass}>
        <img src={logo} alt="logo" />
      </div>
    </CSSTransition>
  );
};

export default Splash;
