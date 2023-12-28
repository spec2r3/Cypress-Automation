describe('Basic Tests', () =>
 {

    beforeEach(() => {

        cy.visit('https://demoqa.com/')
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        
      })
      
  it('Test Box', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    cy.url().should('eq', 'https://demoqa.com/text-box')

  })

  it('Check Box', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
    cy.url().should('eq', 'https://demoqa.com/checkbox')

  })

  it('Radio Button', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click()
    cy.url().should('eq', 'https://demoqa.com/radio-button')

  })

  it('Web Tables', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
    cy.url().should('eq', 'https://demoqa.com/webtables')

  })

  it('Buttons', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()
    cy.url().should('eq', 'https://demoqa.com/buttons')

  })

  it('Links', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').click()
    cy.url().should('eq', 'https://demoqa.com/links')

  })
  
  it('Broken Links - Images', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-6').click()
    cy.url().should('eq', 'https://demoqa.com/broken')

  })

  it('Upload and Download', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-7').click()
    cy.url().should('eq', 'https://demoqa.com/upload-download')

  })

  it('Dynamic Properties', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-8').click()
    cy.url().should('eq', 'https://demoqa.com/dynamic-properties')

  })

}
)
