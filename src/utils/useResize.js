import { useEffect } from "react";

const UseResize = (fn) => {
  useEffect(() => {
    const handleResize = () => {
      fn();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};

export default UseResize;
