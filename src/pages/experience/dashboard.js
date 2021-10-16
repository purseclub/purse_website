import { navigate } from "gatsby-link";
import React, { useEffect, useState } from "react";
import ExperienceLayout from "../../components/Experience/ExperienceLayout";
import FlatButton from "../../components/Experience/FlatButton";
import PrivateRoute from "../../components/Experience/PrivateRoute";
import {
  ButtonContainer,
  Container,
  ModalContainer,
  ModalWrapper,
} from "../../styles/experience/styledPrivateRoute";

import { auth } from "../../utils/firebase";

const Modal = ({ handleSignOut, closeModal }) => {
  return (
    <ModalWrapper>
      <ModalContainer>
        <Container>
          <svg
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
          <span>are you sure you want to logout ?</span>
          <ButtonContainer>
            <FlatButton handle={closeModal} show={true} theme="white" />
            <FlatButton handle={handleSignOut} show={true} theme="black" />
          </ButtonContainer>
        </Container>
      </ModalContainer>
    </ModalWrapper>
  );
};

const Dashboard = ({ location }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [state, setState] = useState({});
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    //const len = Object.keys(location.state).length;
    if (location.state !== null) {
      setIsLoggedIn(true);
      setState({ ...location });
    } else if (
      !isLoggedIn &&
      location.pathname !== `/experience/experienceHome`
    ) {
      navigate("/experience/experienceHome");
      return null;
    }
  }, [isLoggedIn, location]);

  const openModal = () => setIsOpened(true);
  const closeModal = () => setIsOpened(false);

  const handleSignOut = async () => {
    await auth
      .signOut()
      .then(navigate("/experience"))
      .catch((e) => console.log(e));
  };

  return (
    <>
      {isLoggedIn && (
        <>
          {isOpened && (
            <Modal handleSignOut={handleSignOut} closeModal={closeModal} />
          )}
          <ExperienceLayout>
            <PrivateRoute
              state={state}
              openModal={openModal}
              handleSignOut={handleSignOut}
            />
          </ExperienceLayout>
        </>
      )}
    </>
  );
};

export default Dashboard;
