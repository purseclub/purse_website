import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100vh;
    }

    body {
        overscroll-behavior-y: none;
        height: 200vh;
    }

    :root {
        --camel: #F5E4BC;
        --black: #000000;
        --brown: #292823;
        --white: #EBEBEB;
        --beige: #F5E4D0;
        --green: #5E7361;
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
        --font-family-main: 'Causten', sans-serif;
        --font-family-secondary: 'CormorantGaramond', Monospace;
        background-color: var(--black);;
        color: var(--brown);
    }
`;

export default GlobalStyle;
