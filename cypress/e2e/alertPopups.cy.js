///< reference types ='cypress'/>
describe('Test suite for window alerts pop-ups',() =>{
   it('tests for window alert and window confirm',() =>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()
    cy.on('window:alert',(str)=>{
       expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm',(str)=>{
       expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

    cy.get('div #opentab').invoke('removeAttr','target').click()
    cy.url().should('include','rahulshettyacademy.com')
    cy.go('back')
    cy.go('forward')
               
   })
})