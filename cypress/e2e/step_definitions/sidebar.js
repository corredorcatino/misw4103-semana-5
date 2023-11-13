import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import { sidebar } from '@pages/Sidebar'

When("the user clicks on the Pages navigation", () => {
    sidebar.clickPagesNavigation();
});