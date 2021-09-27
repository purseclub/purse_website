import React from "react";
import { useGlobalStateContext } from "../../context/globalContext";
import { useMousePosition } from "../../hooks/useMousePosition";
import { Cursor } from "../../styles/customCursor";

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const { cursorType } = useGlobalStateContext();

  return (
    <Cursor
      className={`${!!cursorType ? "hovered" : ""} ${cursorType}`}
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
    />
  );
};

export default CustomCursor;
