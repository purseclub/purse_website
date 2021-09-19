import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        overscroll-behavior-y: none;
        /* height: 200vh; */
    }

    :root {
        --camel: #F5E4BC;
        --black: #000000;
        --brown: #292823;
        --white: #F5E4D0;
        --beige: #F5E4D0;
        --green: #5E7361;
        --lightBlue:#466365;
        --desktop-margin: 7.5rem;
        --tablet-margin: 4rem;
        --mobile-margin: 2rem;
        --xxs-screen: 20rem;
        --xs-screen: 23.4375rem;
        --s-screen: 26.5rem;
        --tablet-screen: 48rem;
        --s-laptop: 64rem;
        --l-laptop: 90rem;
        --xl-laptop: 160rem;
        --font-family-main-Regular: 'CaustenRegular', sans-serif;
        --font-family-main-Medium: 'CaustenMedium', sans-serif;
        --font-family-main-SemiBold: 'CaustenSemiBold', sans-serif;
        --font-family-main-Bold: 'CaustenBold', sans-serif;
        --font-family-secondary: 'ThunderExtraBold', Monospace;
        --font-family-secondary-bold: 'ThunderBold', Monospace;
        --font-family-secondary-thin: 'ThunderThin', Monospace;
        background-color: var(--lightBlue);
    }
`;

export default GlobalStyle;
