import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 200,
    y: 200,
  });

  const lerp = (start, end, amt) => {
    return (1 - amt) * start + amt * end;
  };

  useEffect(() => {
    const updatePosition = (event) => {
      // const { pageX: x, pageY: y } = event;
      const x = lerp(mousePosition.x, event.x, 0.1);
      const y = lerp(mousePosition.y, event.y, 0.1);

      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", updatePosition);

    return () => window.removeEventListener("mousemove", updatePosition);
  }, [mousePosition]);

  return mousePosition;
};

export { useMousePosition };
