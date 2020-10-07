import React, { useContext } from 'react';
import { MovieContext, MovieInterface } from './../../context/MovieContext';

// import { Container } from './styles';

const MovieList: React.FC = () => {
    const { movies, error, loading } = useContext(MovieContext);

    console.log('movies', movies);

    return (
        <div>
            { movies && movies.map((movie: MovieInterface) => (
                <p>{ movie.Title }</p>
            )) }

        </div>
    );
}

export default MovieList;