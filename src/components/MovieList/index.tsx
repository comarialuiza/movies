import React, { useContext } from 'react';
import { MovieContext, MovieInterface } from './../../context/MovieContext';
import Movie from './../Movie';
import Error from './../Error';
import Loading from './../Loading';

import { Container, MoviesContainer, Title, Code } from './styles';

const MovieList: React.FC = () => {
    const { code, movies, error, loading } = useContext(MovieContext);

    console.log(movies);

    return (
        <>
            { error && !movies && <Error>Houve um erro processando sua requisição. Por favor tente novamente.</Error> }
            { loading && <Loading /> }
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