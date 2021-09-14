import { createGlobalStyle } from "styled-components";
import CaustenBold from "../fonts/Causten-Bold.otf";
import CaustenMedium from "../fonts/Causten-Medium.otf";
import CaustenRegular from "../fonts/Causten-Regular.otf";
import CaustenSemiBold from "../fonts/Causten-SemiBold.otf";
import CormorantGaramond from "../fonts/CormorantGaramond-Bold.ttf";
import RobotoMonoRegular from "../fonts/RobotoMono-Regular.ttf";
import RobotoMonoBold from "../fonts/RobotoMono-Bold.ttf";

const GlobalFont = createGlobalStyle`
    @font-face {
        font-family: 'CaustenBold';
        src: local('CaustenBold'), url(${CaustenBold}) format(otf),;
        font-weight: 700;
    }
    @font-face {
        font-family: 'CaustenRegular';
        src: local('CaustenRegular'), url(${CaustenRegular}) format(otf),;
        font-weight: 400;
    }
    @font-face {
        font-family: 'CaustenMedium';
        src: local('CaustenBoldMedium'), url(${CaustenMedium}) format(otf),;
        font-weight: 500;
    }
    @font-face {
        font-family: 'CaustenSemiBolc';
        src: local('CaustenSemiBold'), url(${CaustenSemiBold}) format(otf),;
        font-weight: 600;
    }
    @font-face {
        font-family: 'Cormorant Garamond';
        src: url(${CormorantGaramond}) format('ttf'),;
        font-weight: 600;
    }
    @font-face {
        font-family: 'RobotoMonoRegular';
        src: local('RobotoMonoRegular'), url(${RobotoMonoRegular}) format('truetype');
        font-weight: 400;
    }
    @font-face {
        font-family: 'RobotoMonoBold';
        src: local('RobotoMonoBold'), url(${RobotoMonoBold}) format('truetype'),;
        font-weight: 700;
    }
`;

export default GlobalFont;
