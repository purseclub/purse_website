import styled from "styled-components";


const OverallStyle = styled.div`
  background-color: #000;
  height: 100vh;
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: 200vh;
  }
`;

const LandingPageStyle = styled.div`
flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-left: 120px;

  @media only screen and (max-width: 768px) {
    justify-content: flex-end;
    padding-bottom: 148px;
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
`;

const LandingImage = styled.div`
flex: 1;
    position: relative;
    height: 100vh;

    @media only screen and (max-width: 768px){
        width: 100vw;
    }
`;

const LandingStyle = {
  LandingPageStyle,
  OverallStyle,
  ParagraphStyle,
  LandingButton,
  LandingImage,
};

export default LandingStyle;
