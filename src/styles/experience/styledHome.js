import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import CardImage from "../../images/card-frame.png";

export const Wrapper = styled.div`
  height: 100%;
  overflow: visible;
`;

export const Left = styled(motion.div)`
  width: 100%;
  height: ${(props) => (props.forward ? "initial" : "100%;")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media all and (min-width: 768px) {
    max-width: 400px;
    height: initial;
  }
`;

export const ImageContainer = styled.div`
  display: none;

  @media all and (min-width: 768px) {
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    background-image: url(${CardImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center right;
    image-rendering: -webkit-optimize-contrast;
  }
`;

export const Bottom = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  margin-top: ${(props) => (props.forward ? "8px" : "60px")};
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 0;
    margin: 0 -30px;
    width: -webkit-fill-available;
    height: 1px;
    //margin-top: 10.5em;
    background: linear-gradient(
      to right,
      rgb(33, 36, 38),
      rgb(46, 50, 52),
      rgb(33, 36, 38)
    );
    box-shadow: rgb(0 0 0 / 59%) 0px 2px 5px 0px;

    ${(props) =>
      props.forward &&
      css`
        display: none;
      `}

    @media all and (min-width: 768px) {
      display: none;
    }
  }
`;

export const LogoContainer = styled.div`
  margin-top: 2.5em;
  width: 80px;
  //grid-column: 1/2;

  & > svg {
    width: 100%;
  }
`;

export const Title = styled.div`
  //grid-column: 1/4;
  margin-top: 3em;

  & > h1 {
    white-space: pre-line;
    font-family: var(--font-family-bold);
    font-weight: 700;
    font-size: clamp(1.5rem, 3.6vw, 1.75rem);
    line-height: 1.33;
    letter-spacing: -0.015em;
    font-style: normal;
  }
`;

export const SubTitle = styled.div`
  //grid-column: 1/4;
  margin-top: 0.5em;
  //opacity: 0.4;

  & > h2 {
    font-family: var(--font-family-medium);
    font-weight: 500;
    font-size: 1rem;
    line-height: 1;
    letter-spacing: 0.01em;
    font-style: normal;
    color: var(--white200);
    display: inline-flex;
    gap: 0.25em;

    & > span {
      font-family: var(--font-family-bold);
      font-weight: 700;
      color: var(--copper600);
    }
  }
`;

export const Form = styled.form`
  //grid-column: 1/-1;
  margin-top: 2.5em;

  & > input {
    width: 100%;
    //padding: 0.5em 0.5em 0.5em 0;
    background: transparent;
    border: none;
    font-family: var(--font-family-bold);
    font-weight: 700;
    font-size: clamp(1.75rem, 3.7vw, 2rem);
    line-height: 0.86;
    letter-spacing: -0.01em;
    font-style: normal;
    color: var(--white);
    outline: none;

    ::placeholder {
      color: var(--white300);
    }
  }
`;

// export const BlackDivider = styled.div`
//   grid-column: 1/-1;
//   width: 100%;
//   height: 12px;
//   //margin-top: 10.5em;
//   background: linear-gradient(
//     180deg,
//     rgba(16, 17, 18, 0.2) 0%,
//     rgba(33, 36, 38, 0) 100%
//   );
// `;

export const CheckBoxContainer = styled.div`
  margin-bottom: 20px;
  max-height: 30px;
  & > div {
    width: 30px;
    height: 30px;
    background: rgba(243, 177, 170, 0.1);
    border: 1px solid rgb(248, 248, 248);
    border-radius: 8px;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
  }
`;

export const Consent = styled(motion.div)`
  margin-bottom: 3em;
  width: 90%;
  & > span {
    font-family: var(--font-family-medium);
    font-weight: 500;
    font-size: 0.8125rem;
    line-height: 1.23;
    letter-spacing: 0.025em;
    font-style: normal;
    color: ${(props) => (props.error ? "var(--errormsg)" : "var(--white300)")};

    & > a {
      color: var(--white300);
      text-decoration-line: underline;
      text-decoration-style: dashed;
      text-decoration-thickness: 1.2px;
      text-decoration-color: var(--white300);
      font-family: var(--font-family-bold);
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

export const BlackButton = styled.button`
  padding: 1em 2em;
  height: 3rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 34px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  ::before {
    content: "";
    position: absolute;
    height: 3rem;
    inset: 0px;
    z-index: 0;
    border-radius: inherit;
    box-shadow: rgb(255 255 255 / 17%) -8px -8px 28px -9px,
      rgb(10 10 10 / 45%) 8px 8px 20px -1px;
    background-image: linear-gradient(
      315deg,
      rgb(25, 27, 22) 0%,
      rgb(41, 41, 41) 100%
    );
    filter: blur(1px);
  }

  ::after {
    height: 3rem;
    content: "";
    position: absolute;
    inset: 1px 0px 0px 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    z-index: 1;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgb(42, 43, 43) 0%,
      rgb(25, 29, 31) 100%
    );
    filter: blur(1px);
  }

  & > span {
    z-index: 10;
    font-family: var(--font-family-semibold);
    font-weight: 600;
    font-size: clamp(0.9375rem, 1.5vw, 1rem);
    line-height: 1.0666666667;
    letter-spacing: 0.025em;
    //margin-top: -2px;
    font-style: normal;
    color: ${(props) =>
      props.valid ? "var(--copper400)" : "var(--copper40040)"};
  }
`;
