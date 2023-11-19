class Sidebar {

    elements = {
        pagesNavigation: () => cy.get('[data-test-nav="pages"]'),
    };

    clickPagesNavigation() {
        this.elements.pagesNavigation().click();
    }
}

export const sidebar = new Sidebar();