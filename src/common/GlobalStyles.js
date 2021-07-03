import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
      // Color
      --color-primary-landing: #E2C5F4; 
      --color-primary-signUp: #C143FC; 
      --color-input-border: #BCBCBC; 
      --color-footer-text: #4F4F4F; 
      --color-input-text: #8D8D8D; 
      --color-body-text: #6B6B6B; 
      --color-secondary: #FCFBF8; 
      --color-tertiary: #664EFC; 
      --color-black: #000; 
      --color-white: #fff; 
      --color-bg: #FDFCF9; 

      // Font
      --font-body: "DM Sans", sans-serif;
      --font-footer: "Inter", sans-serif;

      // Font size
      --font-size-subtitle: 3.6rem; 
      --font-size-title: 5.6rem; 
      --font-size-footer: 2rem; 
      --font-size-body: 1.8rem; 

      // wrapper
      --wrapper: clamp(2rem, 7.2vw, 15rem);  
}

html {
  box-sizing: border-box;
  font-family: var(--font-body);
  font-size: 62.5%
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-size: var(--font-size-body);
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
hr {
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
  height: auto;
}

p {
  line-height: 27px;
}
`;

export default GlobalStyles;
