import { faker } from '@faker-js/faker'

class PageEditorPage {

    elements = {
        pageTitle: () => cy.get('[data-test-editor-title-input=""]'),
        pageContent: () => cy.get('.kg-prose'),
        publishBtn: () => cy.get('[data-test-button="publish-flow"]'),
        continueBtn: () => cy.get('[data-test-button="continue"]'),
        confirmPublishBtn: () => cy.get('[data-test-button="confirm-publish"]'),
        updateButton: () => cy.get('[data-test-button="publish-save"]'),
    };

    typeNewPageTitle(newPageTitle) {
        this.elements.pageTitle().type(newPageTitle);
    }

    typeNewPageContent() {
        this.elements.pageContent().type(faker.lorem.paragraphs({min:1, max:3}));
    }

    clickPublishButton() {
        this.elements.publishBtn().click();
    }

    clickContinueButton() {
        this.elements.continueBtn().click();
    }

    clickConfirmPublishButton() {
        this.elements.confirmPublishBtn().click();
    }

    clickUpdatePageButton() {
        this.elements.updateButton().click();
    }
}

export const pageEditorPage = new PageEditorPage();