describe('Handle Tabs',()=>{

    it.skip('Approach1',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example >a').invoke('removeAttr','target').click();//Parent Tab
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);

        //operations
        cy.go('back');//back to parent tab

    })

    it('Approach2',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example >a').then((e)=>{
            let url=e.prop('href')
            cy.visit(url);
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);

        //operations
        cy.go('back');//back to parent tab

})
})