describe('test suite for dropdowns', () =>{
     it('tests for static and dynamic dropdowns', () =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.radioButton').eq(0).click()
        cy.get('label[for="radio1"]').contains('Radio1').should('be.visible')

        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3')


        cy.get('input#autocomplete').type('ind')
        cy.get('.ui-menu-item-wrapper').each(($el,index,$list)=>{
             if($el.text()==='India'){
                  cy.wrap($el).click()
             }
        })
        cy.get('input#autocomplete').should('have.value','India')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')





     })
})