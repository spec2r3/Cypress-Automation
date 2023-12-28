describe('Basic Tests', () =>
 {

    beforeEach(() => {
        cy.visit('https://demoqa.com/')
      })
      
  it('Elements button', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
    cy.url().should('eq', 'https://demoqa.com/elements')

  })

  it('Forms button', () => {
    cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
    cy.url().should('eq', 'https://demoqa.com/forms')

  })

  it('Alerts, Frame and Windows button', () => {
    cy.get(':nth-child(3) > :nth-child(1) > .card-up').click()
    cy.url().should('eq', 'https://demoqa.com/alertsWindows')

  })

  it('Widgets button', () => {
    cy.get(':nth-child(4) > :nth-child(1) > .card-up').click()
    cy.url().should('eq', 'https://demoqa.com/widgets')

  })

  it('Interations button', () => {
    cy.get(':nth-child(5) > :nth-child(1) > .card-up').click()
    cy.url().should('eq', 'https://demoqa.com/interaction')

  })

  it('Book store application button', () => {
    cy.get(':nth-child(6) > :nth-child(1) > .card-up').click()
    cy.url().should('eq', 'https://demoqa.com/books')

  })

}
)
