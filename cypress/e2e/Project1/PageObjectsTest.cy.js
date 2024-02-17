import {LoginPage} from "../Pages/login_page";

const loginPage = new LoginPage()

beforeEach(()=> {
    cy.visit(Cypress.env("url"));
})

describe('Login Tests', ()=> {

    it.skip('Login Test 1', ()=> {

        loginPage.enterUsername(Cypress.env('username'));
        loginPage.enterPassword(Cypress.env('password'));
        loginPage.clickLogin();
        cy.get('.oxd-userdropdown-tab').click();
    }) 
    
    it.skip('Login Test 2', ()=> {

        loginPage.enterUsername('Admin1234');
        loginPage.enterPassword(Cypress.env('password'));
        loginPage.clickLogin();
        cy.get('.oxd-userdropdown-tab').click();
    
    })
})

it('Login Test 3', ()=> {

    loginPage.enterUsername(Cypress.env('username'));
    loginPage.enterPassword(Cypress.env('password'));
    loginPage.clickLogin();
    // cy.get('.oxd-userdropdown-tab').click();
    cy.wait(5000);
    cy.contains('Admin').click();
    cy.wait(5000);
    cy.screenshot("Full Page Screenshot", {capture: "fullPage"});
    // cy.go('back');
    cy.go(-1);
})

it('Login Test 4', ()=> {

    loginPage.enterUsername(Cypress.env('username'));
    loginPage.enterPassword(Cypress.env('password'));
    loginPage.clickLogin();
    //cy.get('.oxd-userdropdown-tab').click();
    cy.wait(5000);
    cy.contains('Admin').click();
    cy.wait(5000);
    cy.screenshot("Runner Screenshot", {capture: "runner"});
    //cy.go('back');
    cy.go(-1);
})

it('Login Test 5', ()=> {

    loginPage.enterUsername(Cypress.env('username'));
    loginPage.enterPassword(Cypress.env('password'));
    loginPage.clickLogin();
    //cy.get('.oxd-userdropdown-tab').click();
    cy.wait(5000);
    cy.contains('Admin').click();
    cy.wait(5000);
    cy.screenshot("ViewPort Screenshot", {capture: "viewport"});
    //cy.go('back');
    cy.go(-1);
})