import styled from "styled-components";

const OverallStyle = styled.section`
  background-color: #000;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 200vh;
  }
`;

const LandingPageLeft = styled.div`
  flex: 1;
  height: 100vh;
  box-sizing: border-box;
  padding-left: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 768px) {
    min-height: 100vh;
    justify-content: flex-end;
    padding-bottom: 120px;
  }
  @media only screen and (max-width: 425px) {
    padding-left: 32px;
    justify-content: flex-end;
    padding-bottom: 80px;
  }
`;

const ParagraphStyle = styled.p`
  font-size: 72px;
  line-height: 64px;
  letter-spacing: -2.88px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: #fff;

  @media only screen and (max-width: 425px) {
    font-size: 48px;
    line-height: 40px;
    letter-spacing: -0.24px;
  }
`;

const LandingButton = styled.button`
  margin-top: 36px;
  height: 72px;
  width: 320px;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  line-height: auto;
  letter-spacing: -0.72px;
  font-weight: 700;
  cursor: pointer;

  @media only screen and (max-width: 425px) {
    height: 52px;
    width: 204px;
    font-size: 14px;
    letter-spacing: 0.021px;
  }
`;

const LandingPageRight = styled.div`
  flex: 1;
  height: 100vh;
  background-color: #5c6bc0;

  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const RightSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  & :nth-child(1) {
    width: 320px;
    padding-left: 52px;
    z-index: 1000;
  }
  & :nth-child(2) {
    margin-left: -80px;
    margin-top: -120px;
  }
  @media only screen and (max-width: 768px) {
    & :nth-child(1) {
        padding-left: 120px;
    }
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    & :nth-child(1) {
      width: 240px;
    }
  }
`;

const LandingStyle = {
  LandingPageLeft,
  OverallStyle,
  ParagraphStyle,
  LandingButton,
  LandingPageRight,
  RightSection,
};

export default LandingStyle;
