class LoginPage{

    elements = {
        usernameInput: () => cy.get("#identification"),
        passwordInput: () => cy.get("#password"),
        loginBtn: () => cy.get("span[data-test-task-button-state='idle']"),
        errorMessage: () => cy.get('.main-error'),
        dashboardMessage: () => cy.get('h2[class="gh-canvas-title"]'),
      };

      typeUsername(username) {
        this.elements.usernameInput().type(username);
      } 

      typePassword(password) {
        this.elements.passwordInput().type(password);
      }

      clickLogin() {
        this.elements.loginBtn().click();
      }

      doesErrorMessageExist = () => {
        this.elements.errorMessage().should('exist');
      };

      doesDashboardEnable() {
        this.elements.dashboardMessage().should('exist');
      }


}

export const loginPage = new LoginPage();