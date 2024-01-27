/// <reference types="Cypress"/>

describe('My Web Application Testing', () => {

    beforeEach(()=> {
        
        cy.visit(Cypress.env("url"));
    })

    it("Login Test", ()=> {

        cy.title().should('eq', 'OrangeHRM');

        cy.get('[name="username"]').type(Cypress.env("username"), {delay: 100}).should('have.value', 'Admin');

        cy.get('[type="password"]').type(Cypress.env("password"), {delay: 100}).should('have.value', 'admin123');

        cy.get('[type="submit"]').click();

        cy.title().should('eq', 'OrangeHRM');
    })

    it("Home Page Test", () => {

        cy.title().should('eq', 'OrangeHRM');
    })

})