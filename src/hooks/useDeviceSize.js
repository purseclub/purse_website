import { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

export const useDeviceSize = () => {
  var width = null;
  var height = null;

  const [size, setSize] = useState({
    width: width,
    height: height,
  });

  if (isBrowser) {
    setSize({
		...size,
		width = window.innerWidth,
    height = window.innerHeight,
	})
  }

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
