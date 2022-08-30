class HomePage
{
 getNameInput()
 {
    return cy.get('input[name="name"]:nth-child(2)')
 }

 gettwoWayBinding()
 {
    return cy.get('input[type="text"]:nth-child(1)')
 }

 getGender()
 {
    return cy.get('#exampleFormControlSelect1')
 }

 getEntrepreneurbtn()
 {
    return cy.get('#inlineRadio3')
 }

 getShopTab()
 {
   return cy.get('ul li:nth-child(2)')
 }


}
export default HomePage;