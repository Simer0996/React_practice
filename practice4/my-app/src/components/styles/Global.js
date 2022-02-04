import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
margin:0;
padding:0;
}

body {
    height: 1200vh;
    background-color: ${({theme}) => theme.colors.body};
}
`

export default GlobalStyles