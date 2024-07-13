describe('XpathLocators Suite', () => {



    it('find No of Product', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.xpath("//body/div[@id='root']/div[@class='container']/div[@class='products-wrapper']/div[@class='products']/div").should('have.length',30)
    })

    it('Chained Xpath', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.xpath("//body/div[@id='root']/div[@class='container']/div[@class='products-wrapper']/div[@class='products']").xpath("./div").should('have.length',30)
    })


})