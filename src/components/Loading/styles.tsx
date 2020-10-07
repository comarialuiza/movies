import styled from 'styled-components/macro';

export const Container = styled.div`
    border: 8px solid var(--color-background); /* Light grey */
    border-top: 8px solid var(--color-primary); /* Blue */
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media (min-width: 601px) {
        top: 100px;
    }

    @media (max-width: 600px) {
        top: 150px;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;