import { useState, useEffect } from "react";

const UseDeviceType = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setDeviceType("desktop");
      } else if (window.innerWidth > 768) {
        setDeviceType("pad");
      } else {
        setDeviceType("mobile");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};

export default UseDeviceType;
