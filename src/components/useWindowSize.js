import { useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

export default function useWindowSize() {
  if (isBrowser) {
    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    function getSize() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    return windowSize;
  }
}
