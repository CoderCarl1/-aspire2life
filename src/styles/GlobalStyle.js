import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*{
    margin-top: 0;
    box-sizing: border-box;
}

body{
    background: #ffffff;
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    
}

/* button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    margin: 1rem;
    padding: 1rem 2rem;
    border: 3px solid #D6EEA0;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #23d997
    }
} */

h2{
    font-weight: lighter;
    font-size: 4rem;
    }
h3{
    /* color: white; */
}
h4{
    font-weight: bold;
    font-size: 1.68rem;
}
/* span{
    font-weight: bold;
    color: #23d997
} */
a{
    font-size: 1.4rem;
}
p{
    padding: 3rem 0rem;
    color: #000;
    font-size: 1.4rem;
    line-height: 150%;
}
`

export default GlobalStyle
