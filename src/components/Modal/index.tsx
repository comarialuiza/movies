import React, { useContext } from 'react';
import { MovieInterface, MovieContext } from './../../context/MovieContext';
import { Container, ModalContainer, VisualContainer, ContentContainer, Title, Description, Image, Rating, Director, DirectorName, InfoBlock, Genre, Runtime, ReleaseYear } from './styles';

interface Props {
    activeMovie: MovieInterface,
}

const Modal: React.FC<Props> = ({ activeMovie }) => {
    const { setModalActive, setCurrentMovieFullData } = useContext(MovieContext);

    const standardMoviePoster = 'https://sd.keepcalms.com/i/keep-calm-im-currently-unavailable.png';

    return (
        <Container onClick={ () => { 
            setModalActive(false);
            setCurrentMovieFullData(undefined);
        }}>
            <ModalContainer>
                <VisualContainer>
                    <Image src={ activeMovie.Poster === 'N/A' ? standardMoviePoster : activeMovie.Poster }/>
                    <Rating>{ activeMovie.Rated }</Rating>
                    <Genre>{ activeMovie.Genre }</Genre>
                </VisualContainer>
                <ContentContainer>

                    <InfoBlock>
                        <Title>{ activeMovie.Title }</Title>

                        <Runtime>{ activeMovie.Runtime }</Runtime>
                    </InfoBlock>

                    <InfoBlock>
                        <Director>Directed by <DirectorName>{ activeMovie.Director }</DirectorName></Director>

                        <ReleaseYear>{ activeMovie.Year }</ReleaseYear>
                    </InfoBlock>
                    
                    <Description>{ activeMovie.Plot }</Description>
                </ContentContainer>
                
            </ModalContainer>
        </Container>
    );
}

export default Modal;