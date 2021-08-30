import styled from "styled-components"; 

const NavigationBarStyle = styled.div`
    background-color: none;
    padding-top: 80px;
    padding-left: 120px;
    position: absolute;
    z-index: 1000;

    @media only screen and (max-width: 425px){
        padding-left: 32px;
    }
`;

const NavigationStyle = {
    NavigationBarStyle
}

export default NavigationStyle;