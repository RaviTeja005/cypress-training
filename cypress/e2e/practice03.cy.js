describe('my test suite',() =>{
   it('My First test case',() =>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('div #opentab').then((el)=>{
       const url = el.prop('href')
       cy.log(url)
       cy.visit(url)
    })
   })
})