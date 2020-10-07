import styled from 'styled-components/macro';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-overlay-light);

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

export const ModalContainer = styled.div`
    background-color: var(--color-background);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 3px 3px 5px 6px var(--color-background); 
    max-width: 600px;

    position: relative;
    
    @media (min-width: 601px) {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    &:after {
        content: 'X';
        height: 30px;
        width: 30px;
        display: block;
        position: absolute;
        top: -30px;
        right: -30px;
        line-height: 30px;
        text-align: center;
        color: var(--color-white);
        font-size: 20px;
    }
`;

export const VisualContainer = styled.div`
    @media (min-width: 601px) {
        max-width: 220px;
        margin-right: 20px;
    }
    
    position: relative;
`;

export const ContentContainer = styled.div`
    @media (min-width: 601px) {
        width: calc(100% - 220px - 20px);
        max-height: 364px;
        overflow: scroll;
    }
`;

export const Title = styled.h3`
    color: var(--color-white);
    font-size: 24px;
`;

export const Description = styled.p`
    color: var(--color-description);
    font-size: 14px;
    line-height: 20px;
    margin-top: 24px;
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 3px;
`;

export const InfoBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &:first-of-type {
        align-items: flex-start;
    }

    &:last-of-type {
        margin-top: 15px;
    }
`;

export const Director = styled.p`
    color: var(--color-description);
    font-size: 12px;
`;

export const DirectorName = styled.span`
    position: relative;
    max-width: max-content;

    &&:after {
        content: '';
        height: 3px;
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--color-primary);
    }
`;

export const Genre = styled.p`
    color: var(--color-description);
    font-size: 12px;
    margin-top: 15px;
    line-height: 18px;
`;

export const Runtime = styled.p`
    color: var(--color-description);
    font-size: 12px;
    margin-left: 20px;
    min-width: 40px;
    text-align: right;
`;

export const ReleaseYear = styled.p`
    color: var(--color-description);
    font-size: 12px;
`;

export const Rating = styled.span`
    color: var(--color-description);
    font-size: 12px;

    background-color: var(--color-background);
    padding: 8px;
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: 3px;
`;