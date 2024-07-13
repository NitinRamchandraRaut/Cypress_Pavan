describe('CSSLocators', () => {



    it('Csslocators', () => {

        cy.visit("https://www.flipkart.com/")

        cy.get("input[placeholder='Search for Products, Brands and More']").type("Mobile")

        cy.get("._2iLD__ > svg").click()

        cy.get(".BUOuZu > span ").contains("Mobile")

        })
    })

