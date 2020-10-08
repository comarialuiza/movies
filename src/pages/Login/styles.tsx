import styled from 'styled-components/macro';

export const Container = styled.div`
    @media (min-width: 871px) {
        height: 100vh;
        padding: 50px;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
    }

    @media (max-width: 870px) {
        padding: 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        min-height: 100vh;
    }
`;

export const VisualContainer = styled.div<{ image: string }>`
    background-image: url(${({ image }) => image && image});
    background-position: center top;
    background-repeat: no-repeat;
    height: 100%;

    position: relative;

    @media (min-width: 871px) {
        width: 50%;
        border-radius: 50px 0 0 50px;
    }

    @media (max-width: 870px) {
        display: none;
    }

    &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--color-overlay-light);
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 5px solid var(--color-primary);

    @media (min-width: 871px) {
        padding: 40px;
        border-radius: 0 50px 50px 0;
        border-left: 0;
        width: 50%;
    }

    @media (max-width: 870px) {
        padding: 20px;
        border-radius: 20px;
        width: max-content;
        margin: 0 auto;
    }
`;

export const FormContainer = styled.form`
    @media (min-width: 871px) {
        width: 400px;
    }

    @media (max-width: 870px) {
        width: 100%;
    }
`;

export const Label = styled.label`
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
    color: var(--color-primary);
`;

export const Input = styled.input`
    border: 0;
    padding: 8px 12px;
    border-radius: 8px;
    margin-bottom: 12px;
    width: 100%;
    border-bottom: 2px solid var(--color-primary);
    transition: border-bottom .2s;
    font-size: 14px;

    &:focus {
       outline: none;
       border-bottom: 5px solid var(--color-primary); 
    }
`;

export const Button = styled.button`
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 6px;
    background-color: var(--color-primary);
    color: var(--color-white);
    border: 0;
    width: 100%;
    margin-top: 12px;
`;

export const Image = styled.img`
    display: block;
    margin-bottom: 30px;
    border-radius: 8px;

    @media (min-width: 871px) {
        width: 400px;
    }

    @media (max-width: 870px) {
        width: 100%;
    }
`;

export const Description = styled.p`
    text-align: center;
    margin-bottom: 30px;
    font-size: 20px;
    color: var(--color-description);

    @media (min-width: 871px) {
        width: 400px;
    }

    @media (max-width: 870px) {
        width: 100%;
    }
`;