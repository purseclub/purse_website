import styled from "styled-components";

export const Wrapper = styled.div`
  //background-color: red;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px; */
  width: 100vw;
  height: 100vh;
  overflow: hidden scroll;
  padding: 30px 30px 40px;

  @media all and (min-width: 768px) {
    padding: 100px 50px;
    margin: 0 auto;
    max-width: 720px;
  }
  @media all and (min-width: 992px) {
    padding: 50px 100px;
    // grid-template-columns: repeat(12, 1fr);
    max-width: 960px;
  }
  @media all and (min-width: 1200px) {
    padding: 50px 0px;
    max-width: 1140px;
  }
`;
