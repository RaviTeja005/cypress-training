///< reference types="cypress"/>
describe('my test suite',() =>{
   before(() =>{
     cy.fixture('example').then((data)=>
     {
globalThis.data=data
     })
   })
   it('my first test case',() =>{
     cy.visit('https://rahulshettyacademy.com/angularpractice/')
     cy.get('[name="email"]').eq(0).type(globalThis.data.name)
     cy.get('#exampleFormControlSelect1').select(globalThis.data.gender)
   })
})