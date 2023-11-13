import { faker } from '@faker-js/faker'

class PageEditorPage {

    elements = {
        pageTitle: () => cy.get('[data-test-editor-title-input=""]')
    };

    typeNewPageTitle() {
        this.elements.pageTitle().type(faker.lorem.sentence({min:2, max:4}));
    }
}

export const pageEditorPage = new PageEditorPage();