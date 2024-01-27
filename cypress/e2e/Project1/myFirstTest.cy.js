/// <reference types="Cypress"/>

describe('My First Test', () => {
    // it('Does nothing much', () => {
    //     expect(true).to.equal(true);
    // })

    it('Navigate to a web page and click the link "Type" ', ()=>{
        cy.visit('https://example.cypress.io');

        cy.contains('type').click();

        cy.url().should('include' , '/commands/actions');

        cy.get('#email1').type('31davinderpal@gmail.com').should('have.value', '31davinderpal@gmail.com')
            .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
            .type('{del}{selectall}{backspace}')

            .type('slow.typing@gmail.com', {delay: 100})
            .type('{selectall}{backspace}')
        
        cy.get(':nth-child(2) > .form-control')
            .type('disable error checking', {force: true})
            .should('have.value', 'disable error checking')

    })
})