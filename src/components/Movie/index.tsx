import React from 'react';
import { MovieInterface } from './../../context/MovieContext';
import { Container, Title, Poster } from './styles';

interface Props {
  movie: MovieInterface
}

const Movie: React.FC<Props> = ({ movie }) => {
    return (
      <Container>
        <Title>{ movie.Title }</Title>
        <Poster src={ movie.Poster } />
      </Container>
    );
}

export default Movie;