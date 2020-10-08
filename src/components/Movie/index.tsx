import React, { useState, useContext } from 'react';
import api from './../../services/api';
import { MovieContext, MovieInterface } from './../../context/MovieContext';
import { Container, Overlay, Like, LikeImage, Title, Poster } from './styles';

import Modal from './../Modal';

import outlineHeart from './../../assets/images/heart-shape-outline.svg';
import fullHeart from './../../assets/images/heart-shape-silhouette.svg';
import standardMoviePoster from './../../assets/images/standardMoviePoster.png';

interface Props {
  movie: MovieInterface
}

const Movie: React.FC<Props> = ({ movie }) => {
  const [ likeImage, setLikeImage ] = useState(outlineHeart);

  const { currentMovieFullData, setCurrentMovieFullData, modalActive, setModalActive, setError } = useContext(MovieContext);

  const apiKey = '&apikey=c1a34e61';

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
      <Container>
        <Overlay>
          <Title onClick={ handleGetActiveMovie }>{ movie.Title }</Title>
          <Like onClick={ () => likeImage === outlineHeart ? setLikeImage(fullHeart) : setLikeImage(outlineHeart) }>
            <LikeImage src={ likeImage } />
          </Like>
        </Overlay>
        <Poster src={ movie.Poster === 'N/A' ? standardMoviePoster : movie.Poster } />
      </Container>
      { modalActive && currentMovieFullData && <Modal activeMovie={ currentMovieFullData }/> }
    </>
  );
}

export default Movie;