import { useRef, useEffect, useState } from "react";

const UseIntersect = (fn) => {
  const [element, setElement] = useState([]);
  const watcher = useRef(null);

  useEffect(() => {
    if (watcher.current) watcher.current.disconnect();

    watcher.current = new IntersectionObserver(fn, {
      threshold: window.innerWidth > 767 ? 0.8 : 0.3,
    });
    element.forEach((ele) => {
      watcher.current.observe(ele);
    });

    return () => {
      watcher.current.disconnect();
    };
  }, [element]);

  return [setElement];
};

export default UseIntersect;
