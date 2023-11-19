import {Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '../../pages/LoginPage'
import {dashboardPage} from '../../pages/DashboardPage'


Given("A web browser is at the login page", () => {
    cy.visit("/");
    cy.screenshot({timeout: 1_000});
});

When("the user enters a valid credentials", (table) => {
    table.hashes().forEach((row) => {
        loginPage.typeUsername(row.email);
        loginPage.typePassword(row.password)
    });
    cy.screenshot({timeout: 1_000});
});

When("the user clicks the login button", () => {
    loginPage.clickLogin();
    cy.screenshot({timeout: 1_000});
});

Then("the user should be redirected to the dashboard", () => {
    loginPage.doesDashboardEnable();
    cy.screenshot({timeout: 1_000});
});

When("the user enters an invalid credentials", (table) => {
    table.hashes().forEach((row) => {
        loginPage.typeUsername(row.email);
        loginPage.typePassword(row.password);
    });
    cy.screenshot({timeout: 1_000});
});

Then("the user should see an error message", () => {
    loginPage.doesErrorMessageExist();
    cy.screenshot({timeout: 1_000});
});

When("the user is redirected to the dashboard", () => {
    dashboardPage.isDashboardLoaded();
    cy.screenshot({timeout: 1_000});
});
