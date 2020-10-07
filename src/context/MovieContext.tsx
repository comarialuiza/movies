import React, { useState, createContext, ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

export interface MovieInterface {
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Plot: string,
    Poster: string,
    imdbId: string
}

interface ContextInterface {
    movies: MovieInterface[] | undefined,
    setMovies: React.Dispatch<React.SetStateAction<MovieInterface[] | undefined>>,
    error: string,
    setError: React.Dispatch<React.SetStateAction<string>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

export const MovieContext = createContext<ContextInterface>({} as ContextInterface);

export const MovieProvider = (props: Props) => {
    const [ movies, setMovies ] = useState<MovieInterface[] | undefined>();
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    return (
        <MovieContext.Provider value={{ movies, setMovies, error, setError, loading, setLoading }} >
            { props.children }
        </MovieContext.Provider>
    )
}
