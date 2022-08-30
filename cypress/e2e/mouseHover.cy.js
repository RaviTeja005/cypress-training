///< reference types="types"/>
describe('test suite on visible and invisible elements',() =>{
   it('mouse hover',() =>{
     cy.visit('/')
     cy.get('div.mouse-hover-content').invoke('show')
     cy.contains('Top').click()
     cy.url().should('include','top')
   })
})