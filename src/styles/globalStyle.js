import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        overscroll-behavior-y: none;
        background-color: var(--black);
    }

    :root {
        --camel: #F5E4BC;
        --black: #121212;
        --brown: #292823;
        --white: #FBFBFB;
        --beige: #F5E4D0;
        --green: #5E7361;
        --desktop-margin: 7.5rem;
        --mobile-margin: 2rem;
        --xxs-screen: 20rem;
        --xs-screen: 23.4375rem;
        --s-screen: 26.5rem;
        --tablet-screen: 48rem;
        --s-laptop: 64rem;
        --l-laptop: 90rem;
        --xl-laptop: 160rem;
        --font-family-main: 'Causten', sans-serif;
        --font-family-secondary: 'RobotoMonoRegular', Monospace;
        color: var(--brown);
    }
`;

export default GlobalStyle;
