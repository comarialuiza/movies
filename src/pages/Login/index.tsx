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
            <VisualContainer image='./images/login_background.jpg' />

            <ContentContainer>
                <Image src='./images/logo.png'/>
                <Description>Onde você pode unir filmes e um momento de qualidade com a sua família.</Description>

                <FormContainer>
                    <Label>Nome de usuário</Label>
                    <Input data-cy='username'/>

                    <Label>Senha</Label>
                    <Input data-cy='password' type="password"/>

                    <Button data-cy='login-submit' onClick={ handleLogin }>Entrar</Button>
                </FormContainer>
            </ContentContainer>
        </Container>
    );
}

export default Login;