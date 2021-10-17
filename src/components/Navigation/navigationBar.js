import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import {
  MasternNav,
  NavButton,
  NavContainer,
  LogoName,
  Timer,
  Clock,
  Time,
  Ham,
  Hamburger,
  LogoWrapper,
  LinkWrapper,
} from "../../styles/navigationBarStyle";

const NavigationBar = ({ click, onCursor }) => {
  const [dt, setDt] = useState(Date().toLocaleString("en-US"));
  const time = dt.split(",")[1];

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString("en-US"));
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);
  return (
    <MasternNav
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 3.5,
          duration: 0.8,
          ease: "easeOut",
        },
      }}
    >
      <NavContainer>
        <LogoWrapper>
          <Logo />
          <LogoName>PURSE CLUB </LogoName>
        </LogoWrapper>
        <LinkWrapper>
          <Timer>
            <Clock
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="clock">
                <g id="Time Square">
                  <path
                    id="Fill 3"
                    opacity="0.4"
                    d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92V16.09C2 19.62 4.28 22 7.67 22H16.34C19.73 22 22 19.62 22 16.09V7.92C22 4.38 19.73 2 16.34 2Z"
                    fill="white"
                  />
                  <path
                    id="Fill 1"
                    d="M15.5734 15.8148C15.4424 15.8148 15.3104 15.7808 15.1894 15.7098L11.2634 13.3678C11.0374 13.2318 10.8984 12.9868 10.8984 12.7228V7.67578C10.8984 7.26178 11.2344 6.92578 11.6484 6.92578C12.0624 6.92578 12.3984 7.26178 12.3984 7.67578V12.2968L15.9584 14.4198C16.3134 14.6328 16.4304 15.0928 16.2184 15.4488C16.0774 15.6838 15.8284 15.8148 15.5734 15.8148Z"
                    fill="white"
                  />
                </g>
              </g>
            </Clock>
            <Time>{time}</Time>
          </Timer>
          <NavButton
            onClick={click}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            {" "}
            Download the app
          </NavButton>
        </LinkWrapper>
        <Hamburger onClick={click}>
          <Ham
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="16" y="18" width="24" height="4" fill="white" />
            <rect x="16" y="26" width="24" height="4" fill="white" />
            <rect x="16" y="34" width="24" height="4" fill="white" />
          </Ham>
        </Hamburger>
      </NavContainer>
    </MasternNav>
  );
};

export default NavigationBar;
