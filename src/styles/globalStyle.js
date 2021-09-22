import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
        width: 100%;
        
    }

    body {
       
        overscroll-behavior-y: none;
    }

    :root {
        
        --black: #292A2B;
        --white: #E0DFDB;
        --orange: #ED5D40;
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
        background-color: var(--black);
    }
`;

export default GlobalStyle;
