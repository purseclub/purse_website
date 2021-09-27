import { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

export const useDeviceSize = () => {
  var width = null;
  var height = null;

  if (isBrowser) {
    width = window.innerWidth;
    height = window.innerHeight;
  }

  const [size, setSize] = useState({
    width: width,
    height: height,
  });

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return size;
};
