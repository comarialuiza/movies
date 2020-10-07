import React, { useState, useEffect, useContext, FormEvent } from 'react';
import api from './../../services/api';
import { MovieContext, MovieInterface } from './../../context/MovieContext'; 
import { Container, ModalContainer } from './styles';

interface Props {
    activeMovie: MovieInterface,
}

const Modal: React.FC<Props> = ({ activeMovie }) => {
    const { setError } = useContext(MovieContext);

    const [ currentMovieFullData, setCurrentMovieFullData ] = useState<MovieInterface>();

    const apiKey = '&apikey=c1a34e61'

    const handleGetActiveMovie = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
        
            const res = await api.get(`/?i=${activeMovie.imdbID}&plot-full${apiKey}`);
            setCurrentMovieFullData(res.data.Search);
        } catch(err) {
            setError('Houve um erro com a sua requisição. Por favor tente novamente.');
        }
    }

    useEffect(() => {
        handleGetActiveMovie();
    }, [activeMovie]);

    return (
        <Container>
            { currentMovieFullData && (
                <ModalContainer>
                    <p>{ currentMovieFullData.Title }</p>
                </ModalContainer>
            )}
        </Container>
    );
}

export default Modal;