describe('Test suite on child window',() =>{
   it('test on child window',() =>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('div #opentab').then((el)=>{
       const url = el.prop('href')
       cy.log(url)
       cy.visit(url)
    })
   })
})