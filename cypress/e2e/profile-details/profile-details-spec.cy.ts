import {interceptor} from '../../support/utils'
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('profileDetails e2e tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Should open the profile details modal when click in the icon on profile card', () => {
    cy.get('input').type('diego')
    cy.get('button').click()
    cy.findAllByRole('listitem').first().contains('svg', 'Open Modal Button').click()
    cy.findByText(/repositorios publicados/)
  })

  it('Should show loader while the data is been loaded', () => {
    cy.get('input').type('diego')
    cy.get('button').click()
    const intercepter = interceptor('https://api.github.com/users/diego')
    cy.findAllByRole('listitem').first().contains('svg', 'Open Modal Button').click()
    cy.get('.loader').should('be.visible').then(() => {
      intercepter.sendResponse();
      cy.get('.loader').should('not.exist');
    });
  })

  it('Should close the modal by clicking on x icon', () => {
    cy.get('input').type('diego')
    cy.get('button').click()
    
    cy.findAllByRole('listitem').first().contains('svg', 'Open Modal Button').click()
    cy.get('.userModal').contains('svg', 'close icon').click()
    cy.get('.userModal').should('not.exist')
  })

  it('Should open the github profile on clicking in button to see profile', () => {
    cy.get('input').type('diego')
    cy.get('button').click()
    
    cy.findAllByRole('listitem').first().contains('svg', 'Open Modal Button').click()
    cy.findByText('Ver Perfil').click()
    cy.url().should('be.equal', 'https://github.com/diego')
  })

})