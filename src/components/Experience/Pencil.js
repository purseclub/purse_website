import React from "react";

const Pencil = ({ handleEdit }) => (
  <svg
    onClick={handleEdit}
    style={{
      cursor: "pointer",
    }}
    width="13"
    height="17"
    viewBox="0 0 13 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="6.87663"
      y1="1.94631"
      x2="11.4954"
      y2="4.61296"
      stroke="#D9896A"
      strokeWidth="0.666662"
    />
    <path
      d="M6.95535 2.47605C7.59968 1.36004 9.02671 0.977669 10.1427 1.622C11.2587 2.26632 11.6411 3.69336 10.9968 4.80936L6.30326 12.9388L2.26184 10.6055L6.95535 2.47605Z"
      stroke="white"
      strokeWidth="0.666662"
    />
    <path
      d="M5.98648 12.9298L2.61654 14.6576L2.42786 10.8752L5.98648 12.9298Z"
      stroke="white"
      strokeWidth="0.666662"
    />
  </svg>
);

export default Pencil;
