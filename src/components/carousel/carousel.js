import React, { useState, useEffect, useCallback } from "react";
import styles from "components/carousel/index.module.sass";
import UseDeviceType from "utils/useDeviceType";
import Arrow from "components/arrow";
import localDataService from "service/local-data-service";

const Carousel = ({ items }) => {
  const deviceType = UseDeviceType();
  const [index, setIndex] = useState(0);
  const [itemCount, setItemCount] = useState(1);
  const [pointStart, setPointStart] = useState([]);
  const [pointMove, setPointMove] = useState(false);
  const [direction, setDirection] = useState("");
  const [isMoving, setIsMoving] = useState(false);
  const [dragImage, setDragImage] = useState(null);
  const [itemWidth, setItemWidth] = useState(0);
  let isDarkMode = localDataService.getTheme() === "dark";

  useEffect(() => {
    const img = new Image();
    setDragImage(img);
  }, []);

  //   init moving listener
  useEffect(() => {
    const preventDefault = (e) => {
      if (isMoving) {
        e.preventDefault();
      }
    };
    window.addEventListener("touchmove", preventDefault, { passive: false });
    return () => {
      window.removeEventListener("touchmove", preventDefault, {
        passive: false,
      });
    };
  }, []);

  useEffect(() => {
    if (isMoving) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "inherit";
    }
  }, [isMoving]);

  //   drag method
  const dragStart = (e) => {
    e.dataTransfer, setDragImage(dragImage, 1, 1);
    setPointStart([e.pageX, e.pageY]);
    setIsMoving(true);
  };
  const dragMove = (e) => {
    e.preventDefault();
    if (e.pageX !== 0 && isMoving) {
      const result = pointStart[0] - e.pageX;
      setPointMove(result);
    }
  };
  const dragEnd = (e) => {
    e.preventDefault();

    if (Math.abs(pointMove) > window.innerWidth / 5) {
      if (pointMove > 0) {
        slideNext();
      } else {
        slidePrev();
      }
    } else {
      setIsMoving(false);
      setPointStart([]);
      setPointMove(0);
    }
  };

  //   touch method
  const touchStart = (e) => {
    console.log(e.touched);
    setPointStart([e.touches[0].clientX, e.touches[0].clientY]);
  };
  const touchMove = (e) => {
    // 移動距離(touch)
    let result = pointStart[0] - e.touches[0].clientX;
    // 計算移動方向，若移動方向為垂直則不執行carousel，若為水平則移動carousel
    // 並且不會隨著移動的斜率改變方向
    if (e.touches && direction === "") {
      const endY = e.touches[0].clientY,
        startY = pointStart[1],
        endX = e.touches[0].clientX,
        startX = pointStart[0];
      const m = (endY - startY) / (endX - startX);
      if (m < 1 && m > -1) {
        setIsMoving(true);
        setPointMove(result);
        setDirection("horizonal");
      } else {
        setDirection("vertical");
      }
    } else if (e.touches && direction === "horizonal") {
      setPointMove(result);
    }
  };

  const touchEnd = () => {
    if (Math.abs(pointMove) > window.innerWidth / 5) {
      if (pointMove > 0) {
        slideNext();
      } else {
        slidePrev();
      }
    } else {
      setIsMoving(false);
      setPointStart([]);
      setPointMove(0);
      setDirection("");
    }
  };

  const slidePrev = () => {
    let result = undefined;
    if (deviceType === "mobile") {
      result = index !== 0 ? index - 1 : 0;
    } else {
      result = index !== 0 ? index - 1 : index;
    }
    setIndex(result);
    setIsMoving(false);
    setPointStart([]);
    setPointMove(0);
    setDirection("");
  };
  const slideNext = () => {
    let result = undefined;
    if (deviceType === "mobile") {
      result = index !== items.length - 1 ? index + 1 : index;
    } else {
      result =
        index !== Math.ceil(items.length / itemCount) - 1 ? index + 1 : index;
    }
    setIndex(result);
    setIsMoving(false);
    setPointStart([]);
    setPointMove(0);
    setDirection("");
  };

  useEffect(() => {
    const resizeItemWidth = () => {
      let width;

      if (deviceType === "mobile") {
        width = window.innerWidth - 50;
      } else {
        width = window.innerWidth / 2.5;
      }
      setItemWidth(width);
    };
    resizeItemWidth();

    window.addEventListener("resize", resizeItemWidth);
    return () => {
      window.removeEventListener("resize", resizeItemWidth);
    };
  }, [deviceType]);

  const ulOffset = useCallback(() => {
    let itemMargin = 110;
    let width = itemWidth + itemMargin;
    let offset = deviceType === "mobile" ? 25 : 200;

    return -(index * width * itemCount + pointMove) + offset;
  }, [itemCount, pointMove, index, itemWidth]);

  return (
    <div className={styles.carousel}>
      <div className={styles.arrows}>
        <Arrow
          dark={isDarkMode}
          hover={true}
          text="prev"
          onClick={slidePrev}
          reverse={true}
        />
        <Arrow dark={isDarkMode} hover={true} text="next" onClick={slideNext} />
      </div>

      <div className={styles.container}>
        <ul
          className={styles.list}
          style={{
            transform: `translateX(${ulOffset()}px)`,
            transition: isMoving ? "" : "all 0.2s ease 0s",
          }}
        >
          {items.map((item, i) => {
            return (
              <li
                key={i}
                className={styles.item}
                style={{ flex: `0 0 ${itemWidth}px` }}
                onTouchStart={touchStart}
                onTouchMove={touchMove}
                onTouchEnd={touchEnd}
                draggable
                onDragStart={dragStart}
                onDrag={dragMove}
                onDragEnd={dragEnd}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
