describe('Flipkart Homepage', () => {
                  beforeEach(() => {
                                    cy.visit('https://www.flipkart.com/')
                  })
                  it('clicks on login button', () => {
                                    cy.get('img[title]')
                                    cy.get('div>a').contains('Login').click()
                                    cy.get('span').contains('Login').should('be.visible')
                                    cy.get('span').contains('Get access to your Orders, Wishlist and Recommendations').should('be.visible')
                                    cy.get('input[type="text"]').eq(1).type('!@#$%^&*(')
                                    Cypress.on('uncaught:exception', (err, runnable) => {
                                                      // returning false here prevents Cypress from
                                                      // failing the test
                                                      return false
                                    })
                                    cy.get('input[type="password"]').type('Qwerty@123')
                                    cy.get('[type="submit"]').eq(1).click()
                                    cy.get('span').contains('Please enter valid Email ID/Mobile number').should('be.visible')
                  })
                  it('logs into the flipkart account', () => {
                                    cy.get('div>a').contains('Login').click()
                                    cy.get('span').contains('Login').should('be.visible')
                                    cy.get('span').contains('Get access to your Orders, Wishlist and Recommendations').should('be.visible')
                                    cy.get('input[type="text"]').eq(1).type('8008893078')
                                    Cypress.on('uncaught:exception', (err, runnable) => {
                                                      // returning false here prevents Cypress from
                                                      // failing the test
                                                      return false
                                    })
                                    cy.get('input[type="password"]').type('8008893078')
                                    cy.get('[type="submit"]').eq(1).click()
                  })
                  it('finds products', () => {
                                    cy.get('div').contains('Top Offers')
                                    cy.get('div').contains('Grocery')
                                    cy.get('div').contains('Mobiles')
                                    cy.get('div').contains('Electronics')

                  })
})