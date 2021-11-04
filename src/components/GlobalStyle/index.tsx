import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #f9f9f982;
}
button {
  font-family: 'Poppins', sans-serif;
}
* {
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
p,
span {
  margin: 0;
}
`;
