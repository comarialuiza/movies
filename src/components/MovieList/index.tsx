import React, { useContext } from 'react';
import { MovieContext, MovieInterface } from './../../context/MovieContext';
import Movie from '../Movie';

import { Container, MoviesContainer, Title, Code } from './styles';

const MovieList: React.FC = () => {
    const { code, movies, error, loading } = useContext(MovieContext);

    console.log(movies);

    return (
        <>
            { movies && (
                <Container>
                    <Title>Resultado da pesquisa para: <Code>{ code }</Code></Title>
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