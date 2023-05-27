import { createGlobalStyle } from "styled-components";




const GlobalStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}

@media (max-width: 768px) {
  h1,h2 {
    font-size: 1.5em;
  }
}


body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro',sans-serif;
}

`

export default GlobalStyle;