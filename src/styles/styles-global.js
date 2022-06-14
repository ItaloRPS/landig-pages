import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:boder-box;
}

html{
    font-size:62.5%
   
}
body{
    font-size:1.6rem;
    font-family: 'Open Sans', sans-serif;
}
h1,h2,h3,h4,h5{
    font-family: 'Montserrat', sans-serif;
}
`;
