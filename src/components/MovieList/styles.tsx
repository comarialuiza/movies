import styled from 'styled-components/macro';

export const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 15px;
`;