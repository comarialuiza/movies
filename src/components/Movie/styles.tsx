import styled from 'styled-components/macro';

export const Like = styled.button`
    border: 0;
    background: transparent;
    position: absolute;
    top: 10px;
    right: 10px;
    outline: 0;
    cursor: pointer;
`;

export const LikeImage = styled.img`
    width: 20px;
    height: 20px;
`;

export const Overlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-overlay);
    padding: 20px;

    transition: opacity .3s;
    opacity: 0;


`;

export const Title = styled.h2`
    color: var(--color-white);
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    line-height: 22px;
`;

export const Container = styled.div`
    position: relative;

    cursor: pointer;

    &:hover > ${ Overlay } {
        opacity: 1;
    } 
`;

export const Poster = styled.img`
    display: block;
    height: 100%;
    width: 100%;
`;