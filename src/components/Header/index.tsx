import React, { useContext } from 'react';
import Form from './../Form';

import { MovieContext } from './../../context/MovieContext';

import { Container, ContainerOverlay, ContainerFlex, Logo } from './styles';

const Header: React.FC = () => {
    const { movieCover } = useContext(MovieContext);

    return(
        <Container>
            <ContainerFlex cover={ movieCover }>
                <Logo>
                    Movie Database
                </Logo>

                <Form />
                <ContainerOverlay />
            </ContainerFlex>
        </Container>
    );
}

export default Header;