import styled from 'styled-components/macro';

export const Container = styled.div`
    max-width: 950px;
    margin: 0 auto;
    padding: 20px 40px;
`;

export const MoviesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
`;

export const Title = styled.p`
    color: var(--color-white);
    margin-bottom: 30px;
`;

export const Code = styled.span`
    text-transform: uppercase;
`;