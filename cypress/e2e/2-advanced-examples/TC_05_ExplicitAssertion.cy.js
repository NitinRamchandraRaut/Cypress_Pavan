describe('Explicit Assertions Suite', () => {



    it('Emplicit Assertions', () => {

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


cy.get("input[placeholder='Username']").type("Admin")

cy.get("input[placeholder='Password']").type("admin123")
cy.get("button[type='submit']").click()


//let expName="Khushboo Kamble";

//cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").then(  (x)=>{

    //let actName=x.text()

    //BDD Style
   // expect(actName).to.equal(expName)
   // expect(actName).to.not.equal(expName)

    // TDD Style
   // assert.equal(actName,expName)
   // assert.notequal(actName,expName)
   // })
})
})