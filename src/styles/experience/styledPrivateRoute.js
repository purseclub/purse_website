import styled, { css } from "styled-components";
import card from "../../images/card.png";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const BlackRoundButtonContainer = styled.button`
  border: none;
  background-color: transparent;
  width: 54px;
  min-width: 54px;
  height: 54px;
  position: relative;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 50%;
  background-image: linear-gradient(
    135deg,
    rgb(42, 43, 43) 0%,
    rgb(25, 29, 31) 100%
  );

  ::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 1;
    filter: blur(0.64px);
    box-shadow: rgb(255 255 255 / 18%) -7px -4px 22px -5px,
      rgb(10 10 10 / 50%) 5px 5px 18px -2px;
  }

  & > * {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  @media all and (min-width: 768px) {
    display: none;
  }
`;

export const FlatButtonWrapper = styled.div`
  display: none;
  @media all and (min-width: 768px) {
    display: block;
  }
`;

export const FlatButtonContainer = styled.div`
  border: none;
  border-radius: 40px;
  width: 137px;
  max-width: 137px;
  padding: 0.6em 2em;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > span {
    display: inline-block;
    font-family: var(--font-family-medium);
    font-weight: 500;
    font-style: normal;
    font-size: 1rem;
    color: var(--white100);
    letter-spacing: -0.01em;
    line-height: 1;
    margin: auto 0;
  }
`;

export const UserDetailContainer = styled.div`
  margin-top: 1.5em;
  position: relative;
  padding: 1.5em 0;
  display: flex;
  gap: 1.25em;
  align-items: center;
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
  }

  ::after {
    content: "";
    position: absolute;
    bottom: 4px;
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
  }
`;

export const ProfileImageContainer = styled.div`
  padding: 5px;
  width: 60px;
  height: 60px;
  position: relative;

  & > div {
    width: 60px;
    height: 60px;
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    inset: 0px;
    background: rgb(27, 29, 30);
    border-radius: 50%;
    opacity: 0.7;
    box-shadow: rgb(176 176 178 / 16%) 0px -5px 6px 0px inset,
      rgb(0 0 0 / 24%) 4px 6px 11px 1px inset, rgb(71 72 74) 1px 1px 2px 0px,
      rgb(39 39 39) -1px -1px 2px 0px;
    filter: blur(1px);

    & > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;

export const DetailContainer = styled.div`
  & > span {
    display: inline-block;
    font-family: var(--font-family-bold);
    font-weight: 600;
    font-style: normal;
    font-size: 1.25rem;
    color: var(--white100);
    letter-spacing: 0.01em;
    line-height: 1.5;
    & > span {
      color: var(--copper600);
    }
  }
`;

export const CardWrapper = styled.div`
  margin-top: 2em;

  & > span {
    display: inline-block;
    font-family: var(--font-family-bold);
    font-weight: 700;
    font-style: normal;
    font-size: 1rem;
    color: var(--white200);
    letter-spacing: 0.005em;
    line-height: 1;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  //padding: 0.2em;
  height: 48vw;
  //max-height: 190px;
  border-radius: 13px;
  width: 97%;
  margin: 0 auto;
  margin-top: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";
    position: absolute;
    //height: 3rem;
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
    //height: 3rem;
    content: "";
    position: absolute;
    inset: 0px 0px 0px 0px;
    //width: calc(100% - 0px);
    //height: calc(100% - 0px);
    z-index: 1;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgb(42, 43, 43) 0%,
      rgb(25, 29, 31) 100%
    );
    filter: blur(1px);
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & > svg {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export const Info = styled.span`
  display: inline-flex;
  flex-direction: column;
  justify-content: ${(props) => (props.second ? "flex-end" : "flex-start")};
  position: absolute;
  top: ${(props) => (props.second ? "0rem" : "1.5rem")};
  left: 2rem;
  bottom: ${(props) => (props.second ? "1.5rem" : "0rem")};
  font-family: var(--font-family-bold);
  font-weight: 700;
  font-style: normal;
  font-size: 0.8125rem;
  color: var(--white100);
  letter-spacing: 0.005em;
  line-height: 1;
  z-index: 10;

  ${(props) =>
    props.second &&
    css`
      text-transform: uppercase;
    `}
`;

export const BlueButtonContainer = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  bottom: 0px;
  padding: 0px 30px 40px 30px;
  background: linear-gradient(rgba(36, 39, 41, 0.4), rgb(36, 39, 41));
`;

export const BlueButton = styled.div`
  white-space: nowrap;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  pointer-events: auto;
  text-align: center;
  display: block;
  padding: 1.125em 1.875em;
  font-size: 1rem;
  font-family: var(--font-family-semibold);
  letter-spacing: 0.01em;
  line-height: 1;
  font-weight: normal;
  border-radius: 28px;
  color: var(--white);

  ::before {
    content: "";
    position: absolute;
    inset: 0px;
    z-index: 0;
    border-radius: inherit;
    box-shadow: rgb(255 255 255 / 20%) -8px -8px 28px -9px,
      rgb(10 10 10 / 25%) 8px 8px 20px -1px;
    background-image: linear-gradient(
      135deg,
      rgb(47, 51, 53) 0%,
      rgb(31, 33, 35) 100%
    );
    filter: blur(1px);
  }

  ::after {
    content: "";
    position: absolute;
    inset: 3px 0px 0px 3px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    z-index: 1;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgb(66, 107, 182) 0%,
      rgb(38, 69, 140) 100%
    );
    box-shadow: rgb(0 0 0 / 30%) 1px 2px 15px 0px,
      rgb(84 115 182) 1px 1px 1px 0px inset,
      rgb(27 59 132) -1px -1px 1px 0px inset;
  }

  & > span {
    position: relative;
    z-index: 10;
  }
`;
