import {interceptor} from '../../support/utils'
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />




describe('github profiles search e2e tets', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  
 
  it('type in my input', () => {
    cy.get('input').type('diego')
  })

  it('should look for this name in the form', () => {
    cy.get('input').type('diego')
    cy.get('button').click();
    cy.findByText('Página 1')
  })

  it('should submit as well if enter is pressed with the input on focus', () => {
    cy.get('input').type('diego').type('{enter}')
    cy.findByText('Página 1')
  })

  it('should change page', () => {
    cy.get('input').type('diego')
    cy.get('button').click();
    cy.findByText('Página 1')
    cy.findByText("Próxima").click()
    cy.findByText('Página 2')
  })

  it('Back back sould be disabled if page equal to one', () => {
    cy.get('input').type('diego')
    cy.get('button').click();
    cy.findByText('Página 1')
    cy.findByText('Anterior').should('be.disabled')
  })

  it('Should show 10 cards after searching', () => {
    cy.get('input').type('diego')
    cy.get('button').click();
    cy.findAllByRole('listitem').should('have.length', 10)
  })

  
  it('Sould reload the correct amount of cards if change the amount per page', () => {
    cy.get('input').type('diego')
    cy.get('button').click();
    cy.findAllByRole('listitem').should('have.length', 10)
    cy.get('select').select('20')
    cy.findAllByRole('listitem').should('have.length', 20)
  })

  it('should look for another person after changed page, and the page should be one again', () => {
    cy.get('input').type('diego')
    cy.get('button').click();
    cy.findByText('Página 1')
    cy.findByText("Próxima").click()
    cy.findByText('Página 2')
    cy.get('input').clear().type('diego')
    cy.get('button').first().click();
    cy.findByText('Página 1')
  })

  it('should show a loader spinning while the search is going', () => {
    const intercepter = interceptor('https://api.github.com/search/users?q=diego&page=1&per_page=10')

    cy.get('input').type('diego')
    cy.get('button').click();

    cy.get('.loader').should('be.visible').then(() => {
      intercepter.sendResponse();
      cy.get('.loader').should('not.exist');
    });
  })

  

})