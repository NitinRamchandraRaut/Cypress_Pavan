


describe('Alerts',()=>{



// 1] Javascript Alert: It will have some Text and an 'OK' button.

it('JS Alert',()=>{

cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
cy.get("button[onclick='jsAlert()']").click();
cy.on('window:alert',(t)=>{
    expect(t).to.contains('I am a JS Alert');
})
// alert window Automatically closed by Cypress

cy.get("#result").should('have.text','You successfully clicked an alert')

})
})
// 2] Javascript Confirm Alert: It will have Some Text With 'OK' and 'Cancel' buttons.
it('JS Confirm alert -ok',()=>{

    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm');
    })
    // Cypress automatically closed alert window by using ok button-default
    
    cy.get("#result").should('have.text','You clicked: Ok')
    
    })
    

    it('JS Confirm alert -cancel',()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })

        cy.on('window:confirm',()=>false);
        // Cypress close alert window  using cancel button
        
        cy.get("#result").should('have.text','You clicked: Cancel')
        
        })
    

// 3] Javascript Prompt Alert: It will have some Text with a Text box for user input along with 'ok'
it('JS Prompt alert',()=>{

    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

     cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('welcome');
     })

    cy.get("button[onclick='jsPrompt()']").click();

    //Cypress will automatically close prompted
    //alert-it will use ok button-by default
    //cy.on('window:prompt',()=>false);
    cy.get('#result').should('have.text','You entered: welcome')
    
    })



// 4] Authenticated Alert

it.only('Authenticated alert',()=>{

    cy.visit("http://the-internet.herokuapp.com/basic_auth",{auth:
                                                             {
                                                                username:"admin",
                                                                password:"admin"
                                                             }
                                                            });
    cy.get("div[class='example'] p").should('have.contain',"Congratulations!");                                                    
    })

     