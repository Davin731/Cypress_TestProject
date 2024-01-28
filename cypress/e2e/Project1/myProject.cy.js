/// <reference types="Cypress"/>

describe('My Web Application Testing', () => {

    beforeEach(()=> {
        
        cy.visit(Cypress.env("url"));
        cy.get('[name="username"]').type(Cypress.env("username"), {delay: 100}).should('have.value', 'Admin');

        cy.get('[type="password"]').type(Cypress.env("password"), {delay: 100}).should('have.value', 'admin123');

        cy.get('[type="submit"]').click();
    })

    // it("Login Test", ()=> {

    //     cy.title().should('eq', 'OrangeHRM');

    //     cy.get('[name="username"]').type(Cypress.env("username"), {delay: 100}).should('have.value', 'Admin');

    //     cy.get('[type="password"]').type(Cypress.env("password"), {delay: 100}).should('have.value', 'admin123');

    //     cy.get('[type="submit"]').click();

    //     cy.title().should('eq', 'OrangeHRM');

    //     cy.get('.oxd-userdropdown-name').should('exist').click();

    //     cy.contains('Logout').should('exist');

    // })

    it("Employee Entry Test", () => {

        cy.contains('PIM').click();

        cy.contains('Add Employee').click();

        cy.get('input[type="file"]')
        .selectFile('cypress/images/myphoto.png', {force: true})

        cy.get('[name="firstName"]').type('Davin');

        cy.get('[name="middleName"]').type('John');

        cy.get('[name="lastName"]').type('Singh');

        cy.get('[type="submit"]').click();

        cy.contains('Davin Singh').should('exist');
    })

})