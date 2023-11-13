import { Given, When, Then, defineStep } from "@badeball/cypress-cucumber-preprocessor";
import { pageListPage } from "@pages/PageList";
import { pageEditorPage } from "@pages/PageEditor";

defineStep("the pages list is loaded", () => {
    pageListPage.isLoaded();
});

When("the user clicks on the New Page button", () => {
    pageListPage.clickNewPageButton();
});

When("the user types the new page title", () => {
    pageEditorPage.typeNewPageTitle();
})