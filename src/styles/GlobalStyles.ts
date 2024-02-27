import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

:root {
--color-main-white: #e9eeea;
--color-main-lightest: #d2dcd4;
--color-main: #1E5128;
--color-main-med: #123118;
--color-main-med-rgb: 18, 49, 24;
--color-main-dark: #09180c;
--color-main-dark-rgb: 9, 24, 12;

--color-secondary: #281E51;
--color-secondary-rgb: 40, 30, 81;
--color-secondary-med: #1c1539;
--color-secondary-med-rgb: 28, 21, 57;

--color-accent: #D8E9A8;
--color-accent-rgb: 216, 233, 168;
--color-accent-light: #e4f0c2;
--color-accent-lighter: #e8f2cb;
--color-accent-dark: #97a376;
--color-accent-darkest: #161711;

--color-link: #69aae6;


--border-radius-md: 8px;
--border-radius-sm: 4px;
--border-radius-xs: 2px;


// Paddings, margins, predefined widths
--home-max-width: 80rem;
--home-padding: 2rem 4rem;

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

*:link,
*:visited {
    text-decoration: none;
    color: inherit;
}

body {
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 300;
  overscroll-behavior: none;
  background-color: var(--color-accent);
}

button {
  font-family: 'Chakra Petch', sans-serif;
}

input,
textarea {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 1rem;
  padding: 2px;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  transition: outline 0s;
}

a:focus {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  transition: outline 0s;
  border-radius: var(--border-radius-sm);
}

:focus:not(:focus-visible) {
  outline: 0;
  box-shadow: none;
}
`
