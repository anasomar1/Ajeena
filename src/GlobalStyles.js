import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    }
    html{
        font-size:10px;
    }
    body{
        font-family: 'Tajawal', sans-serif;
        overflow-x:hidden;
    }

    h1{
        font-size:2.6rem;
        font-weight:bold;
    }
    h2{
        font-size: 2rem;
        margin-bottom:1rem;
    }
    h3{
        font-size:1.6rem;
    }
    p{
        font-size:1.4rem;

        @media (min-width:700px){
            font-size:1.8rem;
        }
    }
    small{
        font-size:1.2rem
        @media (min-width:700px){
            font-size:1.4rem;
        }
    }
    input,textarea,button{
        font-family:inherit;
        font-size:100%;
    }

`;

export default GlobalStyle;
