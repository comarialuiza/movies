/// <reference types="cypress" />

describe('The login page', () => {
    it('Logins the user', () => {
        cy.visit('/login');

        cy.get('[data-cy=username]').type('comarialuiza');
        cy.get('[data-cy=password]').type('test1234');
        cy.get('[data-cy=login-submit]').click();
        cy.url().should('include', '/');
    });
});
  
describe('Movie search', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Searches a movie without typing anything in the input', () => {
        cy.get('[data-cy=movie-submit]').click();
        cy.contains('Por favor digite algo para prosseguir.').should('exist');
    });

    it('Searches a movie with an invalid name', () => {
        cy.get('[data-cy=movie-name]').type('star tr');
        cy.get('[data-cy=movie-submit]').click();

        cy.contains('Não encontramos nenhum filme com esse nome. Por favor tente novamente.').should('exist');
    });

    it('Searches a movie with a valid name', () => {
        cy.get('[data-cy=movie-name]').type('star trek');
        cy.get('[data-cy=movie-submit]').click();

        cy.contains('Resultado da pesquisa para: star trek').should('exist');

        cy.get('[data-cy=movie-list]').contains('Star Trek Beyond').click();
        cy.get('[data-cy=modal]').contains('2016');
    });
});