import styled from 'styled-components/macro';

export const Container = styled.div`
    border: 8px solid var(--color-background);
    border-top: 8px solid var(--color-primary);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;