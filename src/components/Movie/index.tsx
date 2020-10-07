import React, { useState } from 'react';
import { MovieInterface } from './../../context/MovieContext';
import { Container, Title, Poster } from './styles';

import Modal from './../Modal';

interface Props {
  movie: MovieInterface
}

const Movie: React.FC<Props> = ({ movie }) => {
  const [ activeMovie, setActiveMovie ] = useState<MovieInterface>();

  return (
    <>
      <Container onClick={ () => setActiveMovie(movie)}>
        <Title>{ movie.Title }</Title>
        <Poster src={ movie.Poster } />
      </Container>
      { activeMovie && <Modal activeMovie={ activeMovie }/> }
    </>
  );
}

export default Movie;