///<reference types="cypress"/>
describe('my test suite',()=>{
  it('web tables',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('[name="courses"] td:nth-child(2)').each(($e1,index,$list)=>{
         const text=$e1.text()
         if(text.includes('REST API Testing')){
           cy.get('[name="courses"] td:nth-child(2)').eq(index).next().then((price)=>{
                  const priceText=price.text()
                  expect(priceText).to.eq('35')
           })
         }
       
    })
  })
})