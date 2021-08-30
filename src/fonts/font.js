import {createGlobalStyle} from 'styled-components';
import CaustenBold from '../fonts/Causten-Bold.otf'
import CaustenMedium from '../fonts/Causten-Medium.otf'
import CaustenRegular from '../fonts/Causten-Regular.otf'
import CaustenSemiBold from '../fonts/Causten-SemiBold.otf'

const GlobalFont = createGlobalStyle`
    @font-face {
        font-family: 'Causten';
        src: url(${CaustenBold}) format(otf),;
        font-weight: 700;
    }
    @font-face {
        font-family: 'Causten';
        src: url(${CaustenRegular}) format(otf),;
        font-weight: 400;
    }
    @font-face {
        font-family: 'Causten';
        src:  url(${CaustenMedium}) format(otf),;
        font-weight: 500;
    }
    @font-face {
        font-family: 'Causten';
        src: url(${CaustenSemiBold}) format(otf),;
        font-weight: 600;
    }
`;

export default GlobalFont