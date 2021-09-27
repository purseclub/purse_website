import React from "react";
import { useMousePosition } from "../../hooks/useMousePosition";
import { Cursor } from "../../styles/customCursor";

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  return (
    <Cursor
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
    />
  );
};

export default CustomCursor;
