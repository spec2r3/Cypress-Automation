describe('Basic Tests', () =>
 {

    beforeEach(() => {

        cy.visit('https://demoqa.com/')
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        
      })
      
  it('Test Box', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    cy.get('#userName').type('Wick')
    cy.get('#userEmail').type('johnwick@gmail.com')
    cy.get('#currentAddress').click().type('The Continental')
    cy.get('#permanentAddress').click().type('The Continental')
    cy.wait(1000)
    cy.get('#submit').click()
    cy.get('#name').should('eq','Name:Wick')
    cy.get('#email').should('eq','Email:johnwick@gmail.com')
    cy.get('.border > #currentAddress').should('eq','Current Address:The Continental')
    cy.get('.border > #permanentAddress').should('eq','Permanent Address:The Continental')

  })

}
)
