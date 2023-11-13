class DashboardPage {

    elements = {
        canvasTitle: () => cy.get(".gh-canvas-title"),
    };

    isDashboardLoaded() {
        this.elements.canvasTitle().should('contain', 'Dashboard');
    }
}

export const dashboardPage = new DashboardPage();