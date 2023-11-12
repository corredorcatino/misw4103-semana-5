import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import {loginPage} from '@pages/LoginPage'
  

  Given("A web browser is at the login page", () => {
    cy.visit("/");
  });

  When("the user enters a valid credencials", (table) => {
    table.hashes().forEach((row) => {
        loginPage.typeUsername(row.email);
        loginPage.typePassword(row.password)
      });
  });

  When("the user clicks the login button", () => {
    loginPage.clickLogin();
   
  });

  Then("the user should be redirected to the dashboard", () => { 
    loginPage.doesDashboardEnable();
  });

  When("the user enters an invalid credencials", (table) => {
    table.hashes().forEach((row) => {
        loginPage.typeUsername(row.email);
        loginPage.typePassword(row.password);
      });
  });

  Then("the user should see an error message", () => { 
    loginPage.doesErrorMessageExist();
  });



  


