import styled from 'styled-components/macro';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-overlay);

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

export const ModalContainer = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;

    max-width: 600px;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;