
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />


describe('github profiles search erros', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
 
  it('should show a error message if search field is empty', () => {
    cy.get('button').click();
    cy.findByText('O campo deve ser preenchido')
  })

  it('should show a error message if none profile is founded', () => {
    cy.get('input').type('2ad15a6w1d65aw1d65aw156d1aw65d1aw65')
    cy.get('button').click();
    cy.findByText('Usuario não encontrado')
  })
})