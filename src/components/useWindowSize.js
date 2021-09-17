import { useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

export default function useWindowSize() {
  if (isBrowser) {
    function getSize() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }
}
