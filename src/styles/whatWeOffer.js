import styled from "styled-components";

export const WwoWrapper = styled.section`
  width: 100%;
  background-color: var(--orange);
  color: var(--white);
  /* margin-top: 5rem; */

  @media all and (min-width: 991px) {
    /* margin-top: 8rem; */
  }
`;

export const WwoContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 5.33rem 0;

  @media all and (min-width: 991px) {
    padding: 10.5rem 0;
  }
`;

export const WwoHeading = styled.h4`
  font-family: var(--font-family-main-SemiBold);
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: -0.02em;
  line-height: 1rem;
  margin-bottom: 1rem;
  color: var(--offWhite);

  @media all and (min-width: 991px) {
    font-size: 2.25rem;
    line-height: 3.5rem;
    letter-spacing: -0.03em;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.color};

  @media all and (min-width: 991px) {
    max-width: ${(props) => props.width ?? "100%"};
    margin-left: auto;
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  position: relative;
  margin-top: 1.5rem;
  padding-bottom: 3.5rem;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--black);
  }
`;

export const ContentHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ContentHeadTitle = styled.h2`
  max-width: 84%;
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 3rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: var(--offWhite);

  @media all and (min-width: 991px) {
    max-width: 70%;
    font-size: 7.875rem;
    line-height: 7.5rem;
    letter-spacing: -0.03em;
  }
`;

export const ContentBody = styled.div`
  max-width: 80%;
  margin-left: auto;
  padding-top: 2.25rem;

  @media all and (min-width: 991px) {
    padding-top: 3.25rem;
    max-width: 55%;
  }
`;

export const ContentPara = styled.p`
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5rem;
  letter-spacing: -0.01em;
  color: var(--offWhite);

  @media all and (min-width: 991px) {
    font-size: 1.5rem;
  }
`;

export const ContentButtonContainer = styled.div`
  width: 100%;
  height: 3.125rem;
  margin-top: 2.25rem;

  @media all and (min-width: 991px) {
    margin-top: 3.25rem;
    max-width: 40%;
    margin-left: auto;
    height: 4.5rem;
  }
`;

export const ContentButton = styled.button`
  border: none;
  background-color: var(--blue);
  width: 100%;
  height: 100%;
  font-family: var(--font-family-main-SemiBold);
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.375rem;
  letter-spacing: -0.01em;
  color: var(--orange);

  @media all and (min-width: 991px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
