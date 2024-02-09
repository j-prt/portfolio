import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

:root {
--color-black: #191A19;

--color-main-white: #e9eeea;
--color-main-lightest: #d2dcd4;
--color-main: #1E5128;
--color-main-med: #123118;
--color-main-med-rgb: rgb(18, 49, 24);
--color-main-dark: #09180c;
--color-main-dark-rgb: rgb(9, 24, 12);

/* --color-secondary: #4E9F3D;
--color-secondary-dark: #2f5f25;
--color-secondary-med: #3e7f31;
--color-secondary-light: #83bc77;
--color-secondary-lighter: #b8d9b1; */

--color-secondary: #281E51;
--color-secondary-rgb: 40, 30, 81;
--color-secondary-med: #1c1539;
--color-secondary-med-rgb: 28, 21, 57;

--color-accent: #D8E9A8;
--color-accent-light: #e4f0c2;
--color-accent-lighter: #e8f2cb;
--color-accent-dark: #97a376;
--color-accent-darkest: #161711;

/* --color-blue: #281E51;
--color-blue-rgb: rgb(40, 30, 81);
--color-blue-med: #1c1539;
--color-blue-med-rgb: rgb(28, 21, 57); */


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

@keyframes glow {
      0% {
        color: #000;
      }
      50% {
        color: var(--color-accent);
      }
      100% {
        color: #000;
      }
    }


body {
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 300;
  overscroll-behavior: none;
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

// :root {
//     font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
//     line-height: 1.5;
//     font-weight: 400;

//     color-scheme: light dark;
//     color: rgba(255, 255, 255, 0.87);
//     background-color: #242424;

//     font-synthesis: none;
//     text-rendering: optimizeLegibility;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }

//   a {
//     font-weight: 500;
//     color: #646cff;
//     text-decoration: inherit;
//   }
//   a:hover {
//     color: #535bf2;
//   }

//   body {
//     margin: 0;
//     display: flex;
//     place-items: center;
//     min-width: 320px;
//     min-height: 100vh;
//   }

//   h1 {
//     font-size: 3.2em;
//     line-height: 1.1;
//   }

//   button {
//     border-radius: 8px;
//     border: 1px solid transparent;
//     padding: 0.6em 1.2em;
//     font-size: 1em;
//     font-weight: 500;
//     font-family: inherit;
//     background-color: #1a1a1a;
//     cursor: pointer;
//     transition: border-color 0.25s;
//   }
//   button:hover {
//     border-color: #646cff;
//   }
//   button:focus,
//   button:focus-visible {
//     outline: 4px auto -webkit-focus-ring-color;
//   }

//   @media (prefers-color-scheme: light) {
//     :root {
//       color: #213547;
//       background-color: #ffffff;
//     }
//     a:hover {
//       color: #747bff;
//     }
//     button {
//       background-color: #f9f9f9;
//     }
//   }
