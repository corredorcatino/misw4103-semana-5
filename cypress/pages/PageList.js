class PageListPage {

    elements = {
        canvasTitle: () => cy.get('.gh-canvas-title > a[href*="#/pages"]'),
        newPageBtn: () => cy.get('[data-test-new-page-button=""]'),
        editBtn: () => cy.get('a[href*="editor/page/"]:last'),
        itemGroup: () => cy.get('.gh-posts-list-item-group:first')
    };

    isLoaded() {
        this.elements.canvasTitle().should('contain', 'Pages');
    }

    clickNewPageButton() {
        this.elements.newPageBtn().click();
    }

    newPageExists(newPageTitle) {
        cy.contains(newPageTitle);
    }

    clickEditPageButton() {
        this.elements.editBtn().click();
    }

    rightClickOnPage() {
        this.elements.itemGroup().rightclick();
    }

    clickOnDelete() {
        cy.get('.gh-context-menu li:last button').click();
    }

    confirmDeletion() {
        cy.get('.modal-footer button[data-test-button="confirm"]').click();
    }
}

export const pageListPage = new PageListPage();