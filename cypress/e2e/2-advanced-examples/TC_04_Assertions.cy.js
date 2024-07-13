describe('Assertions Suite', () => {



    it('Implicit Assertions', () => {

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

// Should and

//cy.url().should('include','orangehrmlive.com')
//cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//cy.url().should('contain','orangehrm')

/*cy.url().should('include','orangehrmlive.com')
.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
.should('contain','orangehrm')*/

cy.url().should('include','orangehrmlive.com')
.and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
.and('not.contain','greenhrm')

cy.title().should('include','Orange')
.and('eq',"OrangeHRM")
.and('contain',"HRM")

cy.get('.orangehrm-login-branding > img').should('be.visible')
.and('exist')

cy.xpath("//a").should('have.length','5')


cy.get("input[placeholder='Username']").type("Admin")

cy.get("input[placeholder='Username']").should('have.value','Admin')


    })
})