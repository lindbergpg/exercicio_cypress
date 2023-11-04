/// <reference types="cypress" />

describe('Testes para a inclusão, alteração e remoção de contatos', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve inlcuir 1 contato', () => {
      cy.get('input[type="text"]').type('José Carlos')
      cy.get('input[type="email"]').type('josecarlos@exemplo.com.br')
      cy.get('input[type="tel"]').type('11123451234')
      cy.get('.adicionar').click()
      cy.get('.sc-beqWaB').should('have.length', 4)
      cy.screenshot('inclusão')
    })

    it('Deve alterar 1 contato', () => {
      cy.get('.edit').first().click()
      cy.get('input[type="text"]').clear().type('Gian Souza')
      cy.get('input[type="email"]').clear().type('gian@gmail.com')
      cy.get('input[type="tel"]').clear().type('11912349874')
      cy.get('.alterar').click()
      cy.screenshot('alteração')
      cy.get('.sc-beqWaB').should('have.length', 4)
    })

    it('Deve remover 1 contato', () => {
      cy.get('.delete').last().click()
      cy.get('.sc-beqWaB').should('have.length', 3)
      cy.screenshot('remoção')
    })
  })