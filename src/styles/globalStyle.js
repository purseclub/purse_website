import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
		cursor: none;
    }

    body {
       
        overscroll-behavior-y: none;
		font-display: swap;
		-webkit-tap-highlight-color: transparent;
    }

    a {
        text-decoration: none;
    }

    :root {
        --black: #292A2B;
        --darkGreen: #001514;
        --blue: rgba(99, 32, 238, 1);
        --gray: #8F8D80;
		--white: #F5F5F5;
        --errorColor: #D75059;
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
        background-color: var(--darkGreen);
    }
`;

export default GlobalStyle;
