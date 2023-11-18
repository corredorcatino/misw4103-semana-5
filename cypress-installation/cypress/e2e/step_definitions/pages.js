import { Given, When, Then, defineStep } from "@badeball/cypress-cucumber-preprocessor";
import { pageListPage } from "../../pages/PageList";
import { pageEditorPage } from "../../pages/PageEditor";
import { faker } from '@faker-js/faker'

defineStep("the pages list is loaded", () => {
    pageListPage.isLoaded();
});

When("the user clicks on the New Page button", () => {
    pageListPage.clickNewPageButton();
});

When("the user types the new page title", () => {
    this.newPageTitle = faker.lorem.sentence({min:2, max:4});
    pageEditorPage.typeNewPageTitle(this.newPageTitle);
})

When("the user types the new page content", () => {
    pageEditorPage.typeNewPageContent();
})

When("the user clicks on the publish button", () => {
    pageEditorPage.clickPublishButton();
})

When("the user clicks on the continue button", () => {
    pageEditorPage.clickContinueButton();
})

When("the user clicks on the confirm publish button", () => {
    pageEditorPage.clickConfirmPublishButton();
})

defineStep("the user navigates to the pages list", () => {
    cy.visit("#/pages");
})

Then("the new page is published", () => {
    pageListPage.newPageExists(this.newPageTitle);
})

defineStep("the user waits for 2 seconds", () => {
    cy.wait(2000);
})

When("the user clicks on a page to edit", () => {
    pageListPage.clickEditPageButton();
})

When("the user right clicks on page", () => {
    pageListPage.rightClickOnPage();
})

When("the user clicks on delete", () => {
    pageListPage.clickOnDelete();
})

When("the user confirms the deletion", () => {
    pageListPage.confirmDeletion();
})