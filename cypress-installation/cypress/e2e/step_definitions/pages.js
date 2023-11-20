import {When, Then} from '@badeball/cypress-cucumber-preprocessor';
import {pageListPage} from '../../pages/PageList';
import {pageEditorPage} from '../../pages/PageEditor';
import {faker} from '@faker-js/faker'

When('the pages list is loaded', () => {
    pageListPage.isLoaded();
    cy.screenshot({timeout: 1_000});
});

When('the user clicks on the New Page button', () => {
    pageListPage.clickNewPageButton();
    cy.screenshot({timeout: 1_000});
});

When('the user types the new page title', (table) => {
    if (table) {
        table.hashes().forEach((row) => {
            pageEditorPage.typeNewPageTitle(row['page-title']);
        });
    } else {
        this.newPageTitle = faker.lorem.sentence({min: 2, max: 4});
        pageEditorPage.typeNewPageTitle(this.newPageTitle);
    }
    cy.screenshot({timeout: 1_000});
});

When('the user types the new page content', () => {
    pageEditorPage.typeNewPageContent();
    cy.screenshot({timeout: 1_000});
});

When('the user clicks on the publish button', () => {
    pageEditorPage.clickPublishButton();
    cy.screenshot({timeout: 1_000});
});

When('the user clicks on the continue button', () => {
    pageEditorPage.clickContinueButton();
    cy.screenshot({timeout: 1_000});
});

When('the user clicks on the confirm publish button', () => {
    pageEditorPage.clickConfirmPublishButton();
    cy.screenshot({timeout: 1_000});
});

When('the user navigates to the pages list', () => {
    cy.visit('#/pages');
    cy.screenshot({timeout: 1_000});
});

Then('the new page(s) is/are published', (table) => {
    if (table) {
        table.hashes().forEach((row) => {
            pageListPage.newPageExists(row['page-title']);
        });
    } else {
        pageListPage.newPageExists(this.newPageTitle);
    }
    cy.screenshot({timeout: 1_000});
});

When('the user waits for 2 seconds', () => {
    cy.wait(2_000);
});

When('the user clicks on a page to edit', () => {
    pageListPage.clickEditPageButton();
    cy.screenshot({timeout: 1_000});
});

When('the user right clicks on page', () => {
    pageListPage.rightClickOnPage();
    cy.screenshot({timeout: 1_000});
});

When('the user clicks on delete', () => {
    pageListPage.clickOnDelete();
    cy.screenshot({timeout: 1_000});
});

When('the user confirms the deletion', () => {
    pageListPage.confirmDeletion();
    cy.screenshot({timeout: 1_000});
});

When(/^the user clicks on update page button$/, () => {
    pageEditorPage.clickUpdatePageButton();
    cy.screenshot({timeout: 1_000});
});

When(/^user deletes all the following amount of pages$/, (table) => {
    table.hashes().forEach((row) => {
        let lim = +row['no-of-pages']

        for (let i = 0; i < lim; i++) {
            pageListPage.rightClickOnPage();
            pageListPage.clickOnDelete();
            pageListPage.confirmDeletion();
            cy.visit('#/pages');
        }
    });
    cy.screenshot({timeout: 1_000});
});

Then(/^these pages must not exist$/, (table) => {
    table.hashes().forEach((row) => {
        cy.get(row['page-title']).should('not.exist');
    });
    cy.screenshot({timeout: 1_000});
});
