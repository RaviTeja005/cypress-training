class CheckoutPage
{
getCheckoutbtn()
{
   return cy.get('.btn.btn-success')
}

getTypeCountry()
{
   return cy.get('#country')
}

getCountryName()
{
   return cy.get('.suggestions a')
}

getCheckbox()
{
   return cy.get('#checkbox2')
}

getPurchasebtn()
{
   return cy.get('[type="submit"]')
}

}
export default CheckoutPage