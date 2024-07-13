describe('Check UI Elements Suite', () => {



    it('Checking CheckBox Buttons', () => {

cy.visit("https://www.techlistic.com/p/selenium-practice-form.html")

// Visibility of Element

//cy.get("input#profession-0").should('be.visible')

// Selecting single check box

//cy.get("input#profession-0").check().should('be.checked')

// Unselecting Checkbox 

//cy.get("input#profession-0").uncheck().should('not.be.checked')


// Selectiing all the check boxes

//cy.get("#profession-0").check().should('be.checked')
//cy.get("#profession-1").check().should('be.checked')
//cy.get("#tool-0").check().should('be.checked')
//cy.get("#tool-1").check().should('be.checked')
//cy.get("#tool-2").check().should('be.checked')


// Select First CheckBox
cy.get("#profession-0").first().check().should('be.checked')
cy.get("#tool-2").last().check().should('be.checked')

    })
})