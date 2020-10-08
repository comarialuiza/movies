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

    padding: 40px;
`;

export const ModalContainer = styled.div`
    background-color: var(--color-background);
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    overflow: scroll;
    max-height: 100%;
    position: relative;

    border-left: 5px solid var(--color-primary);
    
    @media (min-width: 601px) {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    &:after {
        content: 'X';
        height: 10px;
        width: 10px;
        display: block;
        position: absolute;
        
        line-height: 10px;
        text-align: center;
        color: var(--color-white);
        font-size: 10px;

        @media (min-width: 631px) {
            top: 10px;
            right: 10px;
        }

        @media (max-width: 630px) {
            top: 10px;
            right: 10px;
        }
    }
`;

export const VisualContainer = styled.div`
    position: relative;

    @media (max-width: 360px) {
        max-width: 100%;
    }

    @media (min-width: 361px) {
        max-width: 220px;
    }

    @media (max-width: 600px) {
        margin: 0 auto;
    }

    @media (min-width: 601px) {
        margin-right: 20px;
    }
`;

export const ContentContainer = styled.div`
    @media (min-width: 601px) {
        width: calc(100% - 220px - 20px);
    }

    @media (max-width: 600px) {
        margin-top: 30px;
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
    text-align: justify;

    max-height: 242px;
    overflow: scroll;
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