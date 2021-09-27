import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const updatePosition = (event) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);

    return () => window.removeEventListener("mousemove", updatePosition);
  }, [mousePosition]);

  return mousePosition;
};

export { useMousePosition };
