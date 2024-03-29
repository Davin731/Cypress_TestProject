/// <reference types='Cypress'/>

describe("Assertions Demo", ()=>{

    it("Testing Assertions", ()=> {
        cy.visit(Cypress.env("url2"));

        cy.contains('get').click();

        cy.get('#query-btn').should('contain', 'Button')
                            .and('have.class', 'query-btn');

        cy.get('#inputName').type('Davinder')
                            .should('contain.value', 'Davinder');

        cy.get('#inputEmail').type('31davinderpal@gmail.com')
                             .should('have.value', '31davinderpal@gmail.com');
        
        cy.screenshot("MyScreenshot", {capture: "fullPage"});

        expect(true).to.be.true;

        assert.equal(4, '4', 'Not Equal');
    })
})