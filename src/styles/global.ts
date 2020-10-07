import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-background: #f7f6f1;

        --color-primary: #728DC2;
        --color-secondary: #002650;
        --color-text-title: #1f1f1d;
        --color-text-complement: #DDDDDD;
        --color-button-text: #FFFFFF;
        --color-white: #FFFFFF;

        --color-success: #52c41a;
        --color-danger: #faad14;
        --color-error: #ff4d4f;

        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, #root {
        min-height: 100vh;
    }

    body, input, button, textarea {
        font: 300 1.6rem 'Source Sans Pro', sans-serif;
        color: var(--color-text-base);
    }

    .dark-theme {
        filter: hue-rotate(180deg) invert(100%);
    }
`;