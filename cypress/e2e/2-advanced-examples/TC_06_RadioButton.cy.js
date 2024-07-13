describe('Check UI Elements Suite', () => {



    it('Checking Radio Buttons', () => {

cy.visit("https://www.techlistic.com/p/selenium-practice-form.html")

//Visibility of Radio Buttons 

 cy.get("#sex-0").should('be.visible')
 cy.get("#sex-1").should('be.visible')



//Selecting Radio Buttons

cy.get("#sex-0").check().should('be.checked')
cy.get("#sex-1").should('not.be.checked')

    })
})