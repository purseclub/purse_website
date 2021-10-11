import { createGlobalStyle } from "styled-components";
import CaustenBold from "../fonts/Causten-Bold.otf";
import CaustenMedium from "../fonts/Causten-Medium.otf";
import CaustenRegular from "../fonts/Causten-Regular.otf";
import CaustenSemiBold from "../fonts/Causten-SemiBold.otf";
import CaustenExtraBold from "../fonts/Causten-ExtraBold.otf";
import Basement from "../fonts/Basement.otf";

const GlobalFont = createGlobalStyle`
    @font-face {
        font-family: 'CaustenBold';
        src: local('CaustenBold'), url(${CaustenBold}) format('opentype');
        font-style: normal;
        font-weight: 700;
		font-display: swap;
    }
    @font-face {
        font-family: 'CaustenRegular';
        src: local('CaustenRegular'), url(${CaustenRegular}) format('opentype');
        font-weight: 400;
        font-style: normal;
		font-display: swap;
    }
    @font-face {
        font-family: 'CaustenMedium';
        src: local('CaustenMedium'), url(${CaustenMedium}) format('opentype');
        font-weight: 500;
        font-style: normal;
		font-display: swap;
    }
    @font-face {
        font-family: 'CaustenSemiBold';
        src: local('CaustenSemiBold'), url(${CaustenSemiBold}) format('opentype');
        font-weight: 600;
        font-style: normal;
		font-display: swap;
    }
	@font-face {
        font-family: 'CaustenExtraBold';
        src: local('CaustenExtraBold'), url(${CaustenExtraBold}) format('opentype');
        font-weight: 800;
        font-style: normal;
		font-display: swap;
    }

	@font-face {
        font-family: 'Basement';
        src: local('Basement'), url(${Basement}) format('opentype');
        font-style: normal;
		font-display: swap;
    }
`;

export default GlobalFont;
