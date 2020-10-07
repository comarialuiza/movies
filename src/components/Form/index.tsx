import React, { useState, useContext, FormEvent } from 'react';

import api from './../../services/api';
import { MovieContext } from './../../context/MovieContext'; 

import { Container, FormContainer, Input, Button } from './styles';

const Form: React.FC = () => {
    const { code, setCode, setMovies, setError, setLoading } = useContext(MovieContext);

    const apiKey = '&apikey=c1a34e61'

    const handleGetData = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            setError('');
            setLoading(true);

            if (!code) {
                setLoading(false);
                return setError('Por favor digite algo para prosseguir.');
            }
        
            const res = await api.get(`/?s=${code}${apiKey}`);
            setMovies(res.data.Search);
            setLoading(false);
        } catch(err) {
            setError('Houve um erro com a sua requisição. Por favor tente novamente.');
            setLoading(false);
        }
    }

    return (
        <Container>
            <FormContainer onSubmit={ handleGetData }>
                <Input 
                    placeholder='Nome do filme'
                    onChange={({ target }) => setCode(target.value)}
                    data-testid='input'
                />

                <Button type='submit' data-testid='button'>Pesquisar</Button>
            </FormContainer>
        </Container>
    );
}

export default Form;