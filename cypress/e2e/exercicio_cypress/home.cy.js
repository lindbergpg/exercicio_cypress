/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
  it('Deve renderizar 3 contatos', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    cy.get('.sc-beqWaB').should('have.length', 3)
  })
})