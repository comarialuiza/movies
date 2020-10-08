import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, VisualContainer, ContentContainer, FormContainer, Label, Input, Button, Image, Description } from './styles';

const Login: React.FC = () => {
    const history = useHistory();

    function handleLogin() {
        history.push('/');
    }


    return (
        <Container>
            <VisualContainer image='https://pmcvariety.files.wordpress.com/2013/08/abouttime.jpg' />

            <ContentContainer>
                <Image src='./images/logo.png'/>
                <Description>Onde você pode unir filmes e um momento de qualidade com a sua família.</Description>

                <FormContainer>
                    <Label>Nome de usuário</Label>
                    <Input />

                    <Label>Senha</Label>
                    <Input type="password"/>

                    <Button onClick={ handleLogin }>Entrar</Button>
                </FormContainer>
            </ContentContainer>
        </Container>
    );
}

export default Login;