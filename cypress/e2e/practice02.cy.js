///< reference types ='cypress'/>
describe('My Test Suite',() =>{
   it('first test case',() =>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option1','option2','option3'])


    cy.get('[value="radio1"]').check().should('be.checked')
    cy.get('[name="radioButton"]').check(['radio2','radio3'])

   })
})