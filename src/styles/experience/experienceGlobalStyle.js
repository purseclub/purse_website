import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
		//colorcursor: none;
    }
	html, body {
		scroll-behavior: smooth;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	body {
		width: 100vw;
		height: 100vh;
		position: relative;
		background-color: var(--black);
		color: var(--white100);
        overscroll-behavior-y: none;
		-webkit-tap-highlight-color: transparent;
	}

	:root {
		--black: rgba(36,39,41,1);
		--white100: rgba(248,248,248,0.8);
		--white200: rgba(248,248,248,0.4);
		--white300:rgba(248,248,248,0.3);
		--copper400:rgba(249,211,180,1);
		--copper40040:rgba(249,211,180,0.4);
		--copper600: rgba(217,137,106,1);
		--errorColor: #D75059;
		--font-family-regular: 'CaustenRegular';
		--font-family-medium: 'CaustenMedium';
		--font-family-bold: 'CaustenBold';
		--font-family-semibold: 'CaustenSemiBold';

		//backups
		--font-family-main-Regular: 'CaustenRegular', sans-serif;
        --font-family-main-Medium: 'CaustenMedium', sans-serif;
        --font-family-main-SemiBold: 'CaustenSemiBold', sans-serif;
        --font-family-main-Bold: 'CaustenBold', sans-serif;
	}
`;

export default GlobalStyle;
