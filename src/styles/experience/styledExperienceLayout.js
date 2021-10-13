import styled from "styled-components";

export const Wrapper = styled.div`
  //background-color: red;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  margin: 0 24px;

  @media all and (min-width: 576px) {
    grid-template-columns: repeat(8, 1fr);
    margin: 0 auto;
    max-width: 540px;
  }
  @media all and (min-width: 768px) {
    max-width: 720px;
  }
  @media all and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    max-width: 960px;
  }
  @media all and (min-width: 1200px) {
    max-width: 1140px;
  }
`;