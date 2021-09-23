import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: none; */
`;

export const ModalContainer = styled.div`
  background-color: var(--black);
  width: 60%;
  height: 60%;
  padding: 3.75rem;
  color: var(--white);
  position: relative;
  display: flex;
`;

export const CrossContainer = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 101;
`;

export const Left = styled.div`
  flex: 1 1 70%;
`;
export const Right = styled.div`
  flex: 1 1 30%;
`;

export const ModalTitle = styled.h3`
  font-family: var(--font-family-main-SemiBold);
  font-weight: 600;
  font-size: 3rem;
  letter-spacing: -0.04em;
  line-height: 3rem;
`;

export const ModalSubtitle = styled.h6`
  margin-top: 0.75rem;
  display: inline-block;
  font-family: var(--font-family-main-Regular);
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: -0.01em;
  line-height: 1.0625rem;
`;

export const ModalSubtitleStrong = styled.a`
  cursor: pointer;
  font-family: var(--font-family-main-Bold);
  font-weight: 700;
`;

export const MobileInputContainer = styled.div`
  display: block;
  margin: 3.5rem 0;
  height: 5rem;
  width: 80%;
  border: 2px solid var(--white);
  border-radius: 50px;
  outline: none;
  padding: 12px 0;
  padding-left: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PreNum = styled.h3`
  font-family: var(--font-family-main-Bold);
  font-weight: 700;
  font-size: 2.25rem;
  letter-spacing: 0.001em;
  line-height: 3.375;
  color: var(--gray);
`;

export const MobileInput = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  font-family: var(--font-family-main-Bold);
  font-weight: 700;
  font-size: 2.25rem;
  letter-spacing: 0.001em;
  line-height: 3.375;
  color: var(--white);
  padding-left: 0.5rem;
`;
