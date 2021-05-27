import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    #root, body, html {
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        position: relative;
    }

    html {
        font-size: 10px;
    }

    body {
        background-color: #f5f7f9;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #0e0e10;
        min-height: 1000px;
    }

    *:disabled {
        opacity: 0.8;
    }

`;

export default GlobalStyles;