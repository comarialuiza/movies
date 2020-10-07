import React, { useContext } from 'react';
import { MovieContext, MovieInterface } from './../../context/MovieContext';
import Movie from '../Movie';

import { Container, Title } from './styles';

const MovieList: React.FC = () => {
    const { movies, error, loading } = useContext(MovieContext);

    console.log('movies', movies);

    return (
        <>
            { movies && (
                <>
                    <Title>Resultado da pesquisa</Title>
                    <Container>
                        { movies.map((movie: MovieInterface) => (
                            <Movie key={ movie.imdbId } movie={ movie }/>
                        )) }
                    </Container>
                </>
            )}
            
        </>
    );
}

export default MovieList;