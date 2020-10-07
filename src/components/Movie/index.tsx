import React, { useState, useEffect, useContext, FormEvent } from 'react';
import api from './../../services/api';
import { MovieContext, MovieInterface } from './../../context/MovieContext';
import { Container, Title, Poster } from './styles';

import Modal from './../Modal';

interface Props {
  movie: MovieInterface
}

const Movie: React.FC<Props> = ({ movie }) => {
  const { currentMovieFullData, setCurrentMovieFullData, modalActive, setModalActive, setError } = useContext(MovieContext);

  const apiKey = '&apikey=c1a34e61'

  const handleGetActiveMovie = async () => {
    try {
      const res = await api.get(`/?i=${movie.imdbID}&plot=full${apiKey}`);
      setCurrentMovieFullData(res.data);
      setModalActive(true);
    } catch(err) {
      setError('Houve um erro com a sua requisição. Por favor tente novamente.');
    }
  }

  return (
    <>
      <Container onClick={ handleGetActiveMovie }>
        <Title>{ movie.Title }</Title>
        <Poster src={ movie.Poster } />
      </Container>
      { modalActive && currentMovieFullData && <Modal activeMovie={ currentMovieFullData }/> }
    </>
  );
}

export default Movie;