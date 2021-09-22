import { motion } from "framer-motion";
import styled from "styled-components";

export const OutlineButtonContainer = styled(motion.div)`
  width: 100%;
  height: 4.75rem;
  /* margin: 2.5rem 0; */

  @media all and (min-width: 991px) {
    /* margin: 6rem 0; */
    max-width: ${(props) => props.widthPercentage};
    height: 6.25rem;
    margin-left: ${(props) => props.left};
    margin-right: ${(props) => props.right};
  }
`;

export const OButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  display: flex;
  background-color: ${(props) => props.bgColor};
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.lineColor};
  }

  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.lineColor};
  }
`;

export const ButtonText = styled.h3`
  font-family: var(--font-family-main-Bold);
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.5rem;
  letter-spacing: -0.03em;
  color: ${(props) => props.textColor};

  @media all and (min-width: 991px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;

export const ArrowContainer = styled.div`
  margin-top: 1.5rem;
`;

export const OutlineArrow = styled(motion.svg)`
  width: 5.08rem;
  height: 5.17rem;
  /* margin-top: -1.5rem; */

  @media all and (min-width: 991px) {
    width: 6.23rem;
    height: 6.35rem;
  }
`;
