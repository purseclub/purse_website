import { AnimatePresence } from "framer-motion";
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

const ContainerVariantsBottom = {
  initial: {
    opacity: 0.8,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0.8,
    y: "100%",
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};
const ContainerVariantsSide = {
  initial: {
    opacity: 0.8,
    x: "100%",
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0.8,
    x: "100%",
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const Modal = ({ handleSignOut, closeModal, variants }) => {
  return (
    <ModalWrapper>
      <ModalContainer
        key="modalContainer"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
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
  const [width, setWidth] = useState();

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  console.log(width);

  useEffect(() => {
    const notNull = !!location.state;
    let len = 0;
    if (notNull) {
      len = Object.keys(location.state).length;
    } else {
      navigate("/experience/experienceHome");
      return null;
    }

    if (len > 1 && location.state !== null) {
      console.log(location);
      setIsLoggedIn(true);
      setState({ ...location });
    } else if (
      !isLoggedIn &&
      location.pathname !== `/experience/experienceHome`
    ) {
      navigate("/experience/experienceHome");
      console.log(location);
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
        <AnimatePresence>
          {isOpened && (
            <Modal
              handleSignOut={handleSignOut}
              closeModal={closeModal}
              variants={
                width >= 768 ? ContainerVariantsSide : ContainerVariantsBottom
              }
              key="modal"
            />
          )}
          <ExperienceLayout>
            <PrivateRoute
              state={state}
              openModal={openModal}
              handleSignOut={handleSignOut}
            />
          </ExperienceLayout>
        </AnimatePresence>
      )}
    </>
  );
};

export default Dashboard;
