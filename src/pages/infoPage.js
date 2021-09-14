import React from "react";
import Banner from "../components/banner";
import {InfoContainer, InfoWrapper, Timer} from "../styles/infoPageStyle";

const InfoPage = (props) => {
    return (
        <>
            <InfoWrapper ref={props.infoRef}>
                <Banner position={"upwards"}/>
                <InfoContainer>
                    <Timer></Timer>
                </InfoContainer>
            </InfoWrapper>
        </>
    );
}

export default InfoPage;