import {When, Then} from '@badeball/cypress-cucumber-preprocessor';
import {pageListPage} from '../../pages/PageList';
import {pageEditorPage} from '../../pages/PageEditor';
import {faker} from '@faker-js/faker'

When('the pages list is loaded', () => {
    pageListPage.isLoaded();
});

When('the user clicks on the New Page button', () => {
    pageListPage.clickNewPageButton();
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
});

When('the user types the new page content', () => {
    pageEditorPage.typeNewPageContent();
});

When('the user clicks on the publish button', () => {
    pageEditorPage.clickPublishButton();
});

When('the user clicks on the continue button', () => {
    pageEditorPage.clickContinueButton();
});

When('the user clicks on the confirm publish button', () => {
    pageEditorPage.clickConfirmPublishButton();
});

When('the user navigates to the pages list', () => {
    cy.visit('#/pages');
});

Then('the new page(s) is/are published', (table) => {
    if (table) {
        table.hashes().forEach((row) => {
            pageListPage.newPageExists(row['page-title']);
        });
    } else {
        pageListPage.newPageExists(this.newPageTitle);
    }
});

When('the user waits for 2 seconds', () => {
    cy.wait(2000);
});

When('the user clicks on a page to edit', () => {
    pageListPage.clickEditPageButton();
});

When('the user right clicks on page', () => {
    pageListPage.rightClickOnPage();
});

When('the user clicks on delete', () => {
    pageListPage.clickOnDelete();
});

When('the user confirms the deletion', () => {
    pageListPage.confirmDeletion();
});

When(/^the user clicks on update page button$/, () => {
    pageEditorPage.clickUpdatePageButton();
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
});

Then(/^these pages must not exist$/, (table) => {
    table.hashes().forEach((row) => {
        cy.get(row['page-title']).should('not.exist');
    });
});
