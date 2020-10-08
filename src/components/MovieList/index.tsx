import React, { useContext } from 'react';
import { MovieContext, MovieInterface } from './../../context/MovieContext';
import Movie from './../Movie';

import { Container, MoviesContainer, Title, Code } from './styles';

const MovieList: React.FC = () => {
    const { movies } = useContext(MovieContext);

    console.log(movies);

    return (
        <>
            { movies && (
                <Container data-cy='movie-list'>
                    <MoviesContainer>
                        { movies.map((movie: MovieInterface) => (
                            <Movie key={ movie.imdbID } movie={ movie }/>
                        )) }
                    </MoviesContainer>
                </Container>
            )}
        </>
    );
}

export default MovieList;