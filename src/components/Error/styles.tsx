import styled from 'styled-components/macro';

export const Container = styled.div`
    background-color: var(--color-error);
    color: var(--color-white);
    font-size: 14px;
    padding: 12px;
    border-radius: 8px;
    text-align: center;

    position: absolute;

    top: 100px;
    left: 50%;
    transform: translateX(-50%);
`;