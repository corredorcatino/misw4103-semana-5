import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {settingspage} from '../../pages/SettingsPage'
import {loginPage} from '../../pages/LoginPage'

Given("the administrator is logged in", (table) => {
    table.hashes().forEach((row) => {
        cy.visit("/");
        loginPage.typeUsername(row.email);
        loginPage.typePassword(row.password);
        loginPage.clickLogin();
    });
    cy.screenshot({timeout: 1_000});
});

When("the user is on the Settings page", () => {
    settingspage.clickSettings();
    cy.screenshot({timeout: 1_000});
});


When("the user clicks edits the Title", () => {
    settingspage.clickEditTitle();
    cy.screenshot({timeout: 1_000});
});

When("the user edits the Title", (table) => {
    table.hashes().forEach((row) => {
        settingspage.typeTitle(row.title)
    });
    cy.screenshot({timeout: 1_000});
});

When("the user save the title", () => {
    settingspage.clickSaveTittle();
    cy.screenshot({timeout: 1_000});
});

Then("the user returns to the Dashboard", () => {
    settingspage.clickDone();
    cy.screenshot({timeout: 1_000});
});

When("the user should see the updated Title on the Dashboard", (table) => {
    table.hashes().forEach((row) => {
        settingspage.doesTitleChange(row.title);
    });
    cy.screenshot({timeout: 1_000});
});

When("the user selects edite private", () => {
    settingspage.clickPrivateEdit();
    cy.screenshot({timeout: 1_000});
});

When("the user selects the option to make the site private", () => {
    settingspage.clickPriveteSlide();
    cy.screenshot({timeout: 1_000});
});

When("the user enters a password", (table) => {
    table.hashes().forEach((row) => {
        settingspage.typePassword(row.password);
    });
    cy.screenshot({timeout: 1_000});
});

When("the user clicks on the Save button", () => {
    settingspage.clickPrivateSave();
    cy.screenshot({timeout: 1_000});
});

Then("the user should see a label indicating that the site is now secure", () => {
    settingspage.doesPrivateMessageEnable();
    cy.screenshot({timeout: 1_000});
});

When("the user clicks on the Invite People button", () => {
    settingspage.clickInivitePeople();
    cy.screenshot({timeout: 1_000});
});

When("the user enters the email", (table) => {
    table.hashes().forEach((row) => {
        settingspage.typeInivitePeopleEmail(row.email);
    });
    cy.screenshot({timeout: 1_000});
});

When("submits the invite form", () => {
    settingspage.clickSendInvitationNowBtn();
    cy.screenshot({timeout: 1_000});
});

Then("the user should see a confirmation message", () => {
    settingspage.doesinivitePeoplMessageEnable();
    cy.screenshot({timeout: 1_000});
});
