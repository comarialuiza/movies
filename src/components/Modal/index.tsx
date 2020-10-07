import React, { useContext } from 'react';
import { MovieInterface, MovieContext } from './../../context/MovieContext';
import { Container, ModalContainer } from './styles';

interface Props {
    activeMovie: MovieInterface,
}

const Modal: React.FC<Props> = ({ activeMovie }) => {
    const { setModalActive, setCurrentMovieFullData } = useContext(MovieContext);

    return (
        <Container onClick={ () => { 
            setModalActive(false);
            setCurrentMovieFullData(undefined);
        }}>
            <ModalContainer>
                <p>{ activeMovie.Title }</p>
                <p>{ activeMovie.Plot }</p>
            </ModalContainer>
        </Container>
    );
}

export default Modal;