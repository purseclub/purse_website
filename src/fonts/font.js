import { createGlobalStyle } from "styled-components";
import CaustenBold from "../fonts/Causten-Bold.otf";
import CaustenMedium from "../fonts/Causten-Medium.otf";
import CaustenRegular from "../fonts/Causten-Regular.otf";
import CaustenSemiBold from "../fonts/Causten-SemiBold.otf";
import CormorantGaramond from "../fonts/CormorantGaramond-Bold.ttf";
import ThunderExtraBoldItalic from "../fonts/Thunder-ExtraBoldLCItalic.ttf";
import ThunderExtraBold from "../fonts/Thunder-ExtraBoldLC.ttf";
import ThunderThin from "../fonts/Thunder-ThinLC.ttf";
import ThunderBold from "../fonts/Thunder-BoldLC.ttf";

const GlobalFont = createGlobalStyle`
    @font-face {
        font-family: 'CaustenBold';
        src: local('CaustenBold'), url(${CaustenBold}) format('opentype');
        font-style: normal;
        font-weight: 700;
    }
    @font-face {
        font-family: 'CaustenRegular';
        src: local('CaustenRegular'), url(${CaustenRegular}) format('opentype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'CaustenMedium';
        src: local('CaustenMedium'), url(${CaustenMedium}) format('opentype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'CaustenSemiBold';
        src: local('CaustenSemiBold'), url(${CaustenSemiBold}) format('opentype');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'CormorantGaramond';
        src: local('CormorantGaramond'), url(${CormorantGaramond}) format('truetype');
        font-weight: 600;
    }
    @font-face {
        font-family: 'ThunderExtraBoldItalic';
        src: local('ThunderExtraBoldItalic'), url(${ThunderExtraBoldItalic}) format('truetype');
    }
    @font-face {
        font-family: 'ThunderExtraBold';
        src: local('ThunderExtraBold'), url(${ThunderExtraBold}) format('truetype');
        
    }
    @font-face {
        font-family: 'ThunderThin';
        src: local('ThunderThin'), url(${ThunderThin}) format('truetype');
        
    }
    @font-face {
        font-family: 'ThunderBold';
        src: local('ThunderBold'), url(${ThunderBold}) format('truetype');
        
    }
`;

export default GlobalFont;
