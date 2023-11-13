class PageListPage {

    elements = {
        canvasTitle: () => cy.get('.gh-canvas-title > a[href*="#/pages"]'),
        newPageBtn: () => cy.get('[data-test-new-page-button=""]')
    };

    isLoaded() {
        this.elements.canvasTitle().should('contain', 'Pages');
    }

    clickNewPageButton() {
        this.elements.newPageBtn().click();
    }
}

export const pageListPage = new PageListPage();