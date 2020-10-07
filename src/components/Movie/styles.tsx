import styled from 'styled-components/macro';

export const Title = styled.h2`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-overlay);
    color: var(--color-white);
    font-size: 16px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
    font-weight: normal;
    line-height: 20px;

    transition: opacity .3s;
    opacity: 0;
`;

export const Container = styled.div`
    position: relative;

    cursor: pointer;

    &:hover > ${ Title } {
        opacity: 1;
    } 
`;

export const Poster = styled.img`
    display: block;
    height: 100%;
    width: 100%;
`;