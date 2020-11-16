import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}
 
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap');

    *, *::before, *::after{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
        
    }

`;

export default GlobalStyle;
