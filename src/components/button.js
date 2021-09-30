import { motion } from "framer-motion";
import React from "react";
import { Arrow, ArrowContainer, Button } from "../styles/landing";
import { ItemExcerptLink } from "../styles/whatWeOffer";

const arrowMotion = {
  initial: {
    x: 0,
  },
  animate: {
    x: 15,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const MinimalButton = ({ buttonText, path, variants, onCursor, click }) => {
  return (
    <motion.div
      variants={variants}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        whileHover="animate"
        initial="initial"
        animate="initial"
        onMouseEnter={() => {
          onCursor("hovered");
        }}
        onMouseLeave={() => {
          onCursor();
        }}
      >
        <ItemExcerptLink href={path} onClick={click}>
          <span>{buttonText}</span>
        </ItemExcerptLink>
        <ArrowContainer>
          <Arrow
            variants={arrowMotion}
            viewBox="0 0 48 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.22556 8.26847H0.835938V7.48922H37.67C37.3163 7.41989 36.9611 7.34539 36.6055 7.26544C32.3578 6.31061 27.9827 4.56679 25.0993 1.52323L25.665 0.987305C28.3922 3.866 32.5888 5.56384 36.7764 6.50517C39.4503 7.10623 42.0973 7.3937 44.3123 7.48922H47.5906L47.5911 7.50998C47.7317 7.51505 47.8681 7.52101 48.0002 7.52778L47.9802 8.30652H44.702C42.4869 8.40204 39.8399 8.6895 37.166 9.29057C32.9784 10.2319 28.7818 11.9297 26.0546 14.8084L25.4889 14.2725C28.3723 11.2289 32.7474 9.48513 36.9951 8.53029C37.3507 8.45035 37.7059 8.37585 38.0596 8.30652H1.22556V8.26847Z"
              fill="#d8dddd"
            />
          </Arrow>
        </ArrowContainer>
      </Button>
    </motion.div>
  );
};

export default MinimalButton;
