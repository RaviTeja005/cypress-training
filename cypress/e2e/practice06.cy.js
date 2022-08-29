///< reference types="types"/>
describe('my test suite',() =>{
   it('mouse hover',() =>{
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('div.mouse-hover-content').invoke('show')
     cy.contains('Top').click()
     cy.url().should('include','top')
   })
})