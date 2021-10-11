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
	html, body {
		scroll-behavior: smooth;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

    body {
       	position: relative;
        overscroll-behavior-y: none;
		
		-webkit-tap-highlight-color: transparent;
		background-color: var(--black);
    }

    a {
        text-decoration: none;
    }

    :root {
        --black: #000;
		--offBlack: '#101010';
        --darkGreen: #001514;
        --blue: rgba(99, 32, 238, 1);
        --gray: rgba(0, 0, 0, 0.5);
		--white: #FFF;
        --errorColor: #D75059;
		--font-family-main: 'Basement', serif;
		--font-family-secondary: 'Basement', serif;
        --font-family-main-Regular: 'CaustenRegular', sans-serif;
        --font-family-main-Medium: 'CaustenMedium', sans-serif;
        --font-family-main-SemiBold: 'CaustenSemiBold', sans-serif;
        --font-family-main-Bold: 'CaustenBold', sans-serif;
       
    }
`;

export default GlobalStyle;
