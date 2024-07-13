describe("Handling Frames",()=>{
    it('Appraoch1',()=>{
        cy.visit("http://the-internet.herokuapp.com/iframe");

        const iframe=cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
        iframe.clear().type("welcome {cmd+a}");

        cy.get("[aria-label='Bold']").click();


    })
})