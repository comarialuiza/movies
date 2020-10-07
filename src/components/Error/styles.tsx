import styled from 'styled-components/macro';

export const Container = styled.div`
    background-color: var(--color-error);
    color: var(--color-white);
    font-size: 14px;
    padding: 12px;
    border-radius: 8px;
    text-align: center;

    position: absolute;
    

    @media (min-width: 601px) {
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        max-width: 500px;
    }

    @media (max-width: 600px) {
        top: 150px;
        left: 20px;
        right: 20px;
    }
`;