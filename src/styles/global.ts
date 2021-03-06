import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-background: #14181c;

        --color-primary: #00b020;
        --color-secondary: #2c3440;
        --color-text-title: #1f1f1d;
        --color-description: #9ab;
        --color-text-complement: #DDDDDD;
        --color-button-text: #FFFFFF;
        --color-white: #FFFFFF;

        --color-success: #52c41a;
        --color-danger: #faad14;
        --color-error: #ff4d4f;

        --color-overlay: rgba(23, 23, 23, 0.8);

        --color-overlay-light: rgba(23, 23, 23, 0.2);

        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body, #root {
        min-height: 100vh;
        background-color: var(--color-background);
    }

    body, input, button, textarea {
        font: 300 1.6rem 'Source Sans Pro', sans-serif;
        color: var(--color-text-base);
    }
`;