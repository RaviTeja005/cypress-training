///< reference types="cypress"/>
import HomePage from '../pageObjectModel/HomePage'
import ProductPage from '../pageObjectModel/productPage'
import CheckoutPage from '../pageObjectModel/CheckoutPage'
describe('Test suite for fixtures in cypress and POM',() =>{
   before(() =>{
     cy.fixture('example').then((data)=>
     {
globalThis.data=data
     })
   })
   it('test with Page object model pattern',() =>{
    const homePage=new HomePage()
    const productPage=new ProductPage()
    const checkoutPage=new CheckoutPage()
     cy.visit('https://rahulshettyacademy.com/angularpractice/')
     homePage.getNameInput().type(globalThis.data.name)
     homePage.getGender().select(globalThis.data.gender)
     homePage.gettwoWayBinding().should('have.value',globalThis.data.name)
     homePage.getEntrepreneurbtn().should('be.disabled')
     homePage.getShopTab().click()


     globalThis.data.productName

     globalThis.data.productName.forEach(element => {
      cy.selectProduct(element)
     })
     productPage.getcheckout().click()
     checkoutPage.getCheckoutbtn().click()
     checkoutPage.getTypeCountry().type('india')
     checkoutPage.getCountryName().click()
     checkoutPage.getCheckbox().click({force:true})
     checkoutPage.getPurchasebtn().click()
     
   })
})