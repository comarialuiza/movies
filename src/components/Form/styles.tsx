import styled from 'styled-components/macro';

export const Container = styled.div`
    z-index: 3;

    @media (max-width: 600px) {
        margin-top: 20px;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between; 
`;

export const Input = styled.input`
    padding: 8px 12px;
    margin-right: 15px;
    background-color: var(--color-white);
    border: 0;
    height: 38px;
    line-height: 28px;
    border-radius: 6px;

    width: calc(100% - 90px - 20px);

    border-bottom: 2px solid var(--color-primary);
    transition: border-bottom .2s;

    &:focus {
       outline: none;
       border-bottom: 5px solid var(--color-primary); 
    }
`;

export const Button = styled.button`
    background-color: var(--color-primary);
    color: var(--color-white);
    border-radius: 6px;

    font-size: 14px;
    text-transform: uppercase;
    padding: 8px 12px;
    border: 0;
    height: 38px;
    cursor: pointer;
`;