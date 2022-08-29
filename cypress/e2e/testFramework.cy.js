///< reference types="cypress"/>
describe('Test suite for fixtures in cypress',() =>{
   before(() =>{
     cy.fixture('example').then((data)=>
     {
globalThis.data=data
     })
   })
   it('test for storing data in fixture folder',() =>{
     cy.visit('https://rahulshettyacademy.com/angularpractice/')
     cy.get('[name="email"]').eq(0).type(globalThis.data.name)
     cy.get('#exampleFormControlSelect1').select(globalThis.data.gender)
   })
})