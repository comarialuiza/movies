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
    imdbID: string
}

interface ContextInterface {
    currentMovieFullData: MovieInterface | undefined,
    setCurrentMovieFullData: React.Dispatch<React.SetStateAction<MovieInterface | undefined>>,
    modalActive: boolean,
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>,
    code: string,
    setCode: React.Dispatch<React.SetStateAction<string>>,
    movies: MovieInterface[] | undefined,
    setMovies: React.Dispatch<React.SetStateAction<MovieInterface[] | undefined>>,
    movieCover: number,
    setMovieCover: React.Dispatch<React.SetStateAction<number>>,
    error: string,
    setError: React.Dispatch<React.SetStateAction<string>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

export const MovieContext = createContext<ContextInterface>({} as ContextInterface);

export const MovieProvider = (props: Props) => {
    const [ currentMovieFullData, setCurrentMovieFullData ] = useState<MovieInterface | undefined>();
    const [ modalActive, setModalActive ] = useState(false);
    const [ code, setCode ] = useState('');
    const [ movies, setMovies ] = useState<MovieInterface[] | undefined>();
    const [ movieCover, setMovieCover ] = useState(Math.floor(Math.random() * 7) + 1 );
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    return (
        <MovieContext.Provider value={{ currentMovieFullData, setCurrentMovieFullData, modalActive, setModalActive, code, setCode, movies, setMovies, movieCover, setMovieCover, error, setError, loading, setLoading }} >
            { props.children }
        </MovieContext.Provider>
    )
}
