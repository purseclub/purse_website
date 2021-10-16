import React, { useEffect, useState } from "react";
import {
  BlackRoundButtonContainer,
  NavBar,
  UserDetailContainer,
  ProfileImageContainer,
  DetailContainer,
  CardWrapper,
  CardContainer,
  Info,
  Card,
  BlueButtonContainer,
  BlueButton,
  InformationContainer,
  LeftInformationContainer,
  RightInformationContainer,
  CodeContainer,
  QrCodeContainer,
  Line,
} from "../../styles/experience/styledPrivateRoute";
import Logo from "./Logo";

import texture from "../../images/texture.png";
import { getUserDetails } from "../../utils/database";

import code from "../../images/qr_code.png";
import FlatButton from "./FlatButton";

const BlackRoundButton = ({ handle }) => {
  return (
    <BlackRoundButtonContainer onClick={handle}>
      <svg
        width="35"
        height="39"
        viewBox="0 0 35 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="17.3036"
          cy="21.1964"
          r="9.42857"
          stroke="#8C8E8F"
          strokeWidth="0.785714"
        />
        <rect
          x="14.7336"
          y="6.84"
          width="5.14143"
          height="16.1414"
          rx="2.57071"
          fill="#C4C4C4"
          stroke="#2F2F2F"
          strokeWidth="3.57"
        />
        <circle cx="17.3036" cy="21.1964" r="3.92857" fill="#FFA46E" />
      </svg>
    </BlackRoundButtonContainer>
  );
};

const PrivateRoute = ({ state, openModal, handleSignOut }) => {
  const [detailsFromDatabase, setDetailsFromDatabase] = useState({});

  useEffect(() => {
    const len = Object.keys(state).length;
    if (len !== 0) {
      const userId = state.state.uid;
      getUserDetails(userId)
        .then((val) => setDetailsFromDatabase({ ...val }))
        .catch((e) => console.log(e));
    }
  }, [state]);

  return (
    <>
      <NavBar>
        <Logo />
        <BlackRoundButton handle={openModal} />
        <FlatButton handle={openModal} show={false} theme="black" />
      </NavBar>
      <InformationContainer>
        <LeftInformationContainer>
          <UserDetailContainer>
            <ProfileImageContainer>
              <div>
                <img src={texture} alt="texture" />
              </div>
            </ProfileImageContainer>
            <DetailContainer>
              <span>
                <span>Aloha,</span> <br /> {detailsFromDatabase.firstName}{" "}
                {detailsFromDatabase.lastName}
              </span>
            </DetailContainer>
          </UserDetailContainer>
          <CardWrapper>
            <span>cards</span>
            <CardContainer>
              <Card>
                <svg
                  viewBox="0 0 321 187"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.99707"
                    y="0.997559"
                    width="319.804"
                    height="185.487"
                    rx="12.7922"
                    fill="#444E97"
                  />
                  <mask
                    id="mask0"
                    style={{
                      maskType: "alpha",
                    }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="321"
                    height="187"
                  >
                    <rect
                      x="0.99707"
                      y="0.997559"
                      width="319.804"
                      height="185.487"
                      rx="12.7922"
                      fill="#444E97"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <circle
                      cx="204.473"
                      cy="144.51"
                      r="183.088"
                      stroke="#F8F8F8"
                      strokeWidth="0.799511"
                    />
                    <circle
                      cx="167.296"
                      cy="67.357"
                      r="76.3533"
                      stroke="#F8F8F8"
                      strokeWidth="0.799511"
                    />
                  </g>
                  <rect
                    x="125.722"
                    y="54.5648"
                    width="83.1491"
                    height="76.7531"
                    fill="#261C15"
                  />
                  <circle
                    cx="119.325"
                    cy="54.5648"
                    r="39.9756"
                    fill="#4B7673"
                  />
                  <circle
                    cx="200.875"
                    cy="54.5648"
                    r="39.9756"
                    fill="#E55D49"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M160.9 54.5648L202.475 54.5648V94.5089C201.945 94.5298 201.411 94.5403 200.876 94.5403C178.798 94.5403 160.9 76.6427 160.9 54.5648Z"
                    fill="#F0BF61"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M119.325 95.3398L119.325 53.7653L159.269 53.7653C159.29 54.2957 159.301 54.8288 159.301 55.3643C159.301 77.4422 141.403 95.3398 119.325 95.3398C119.325 95.3398 119.325 95.3398 119.325 95.3398Z"
                    fill="#444E97"
                  />
                  <circle
                    cx="200.875"
                    cy="135.315"
                    r="39.9756"
                    fill="#F0BF61"
                  />
                  <circle
                    cx="119.325"
                    cy="135.315"
                    r="39.9756"
                    fill="#261C15"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M200.876 95.3398L200.876 136.914L160.932 136.914C160.911 136.384 160.9 135.851 160.9 135.315C160.9 113.238 178.798 95.3398 200.876 95.3398Z"
                    fill="#4B7673"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M159.301 135.315L117.726 135.315L117.726 95.3713C118.257 95.3504 118.79 95.3399 119.325 95.3399C141.403 95.3399 159.301 113.238 159.301 135.315Z"
                    fill="#E55D49"
                  />
                  <circle cx="276.03" cy="24.1834" r="9.59413" fill="#F8F8F8" />
                  <circle cx="241.65" cy="46.5697" r="6.39609" fill="#F8F8F8" />
                  <circle cx="79.3494" cy="144.91" r="3.19804" fill="#F8F8F8" />
                  <circle
                    cx="284.025"
                    cy="24.1834"
                    r="9.19438"
                    stroke="#F8F8F8"
                    strokeWidth="0.799511"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M82.5479 138.513H87.3449H92.142C90.543 137.914 87.3449 136.115 87.3449 133.716C86.7453 135.315 84.9464 138.513 82.5479 138.513ZM82.5481 138.514L87.3451 138.514H92.1422C89.7437 138.514 87.9448 141.712 87.3451 143.311C87.3451 143.31 87.3451 143.31 87.3451 143.309C87.3437 140.911 84.1467 139.113 82.5481 138.514Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </Card>
              <Info>conni</Info>
              <Info second>
                {detailsFromDatabase.firstName} {detailsFromDatabase.lastName}
              </Info>
            </CardContainer>
          </CardWrapper>
        </LeftInformationContainer>
        <Line />
        <RightInformationContainer>
          <CodeContainer>
            <span>scan QR code to download PURSE CLUB</span>
            <QrCodeContainer src={code} alt="qr-code" />
          </CodeContainer>
        </RightInformationContainer>
      </InformationContainer>
      <BlueButtonContainer>
        <BlueButton>
          <span>Download the app</span>
        </BlueButton>
      </BlueButtonContainer>
    </>
  );
};

export default PrivateRoute;
