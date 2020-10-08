import React, { useContext } from 'react';
import Form from './../Form';
import Loading from './../Loading';
import Error from './../Error';

import { MovieContext } from './../../context/MovieContext';

import { Container, ContainerBackground, ContainerOverlay, ContainerFlex, Logo } from './styles';

const Header: React.FC = () => {
    const { movieCover, error, movies, loading } = useContext(MovieContext);

    return(
        <Container>
            <ContainerBackground cover={ movieCover }>
                <ContainerFlex>
                    <Logo src='./images/logo.png'/>

                    <Form />
                    <ContainerOverlay />
                </ContainerFlex>

                { error && !movies && <Error>Houve um erro processando sua requisição. Por favor tente novamente.</Error> }
                { loading && <Loading /> }
            </ContainerBackground>

            

        </Container>
    );
}

export default Header;