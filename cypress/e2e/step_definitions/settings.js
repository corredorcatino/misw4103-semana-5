import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import {settingspage} from '@pages/SettingsPage'
  import {loginPage} from '@pages/LoginPage'

  Given("the administrator is logged in", (table) => {
    table.hashes().forEach((row) => {
        cy.visit("/");
        loginPage.typeUsername(row.email);
        loginPage.typePassword(row.password);
        loginPage.clickLogin();
      });
  });
  
  When("the user is on the Settings page", () => {
    settingspage.clickSettings();
  });


  When("the user clicks edits the Title", () => {
    settingspage.clickEditTitle();
  });

  When("the user edits the Title", (table) => {
    table.hashes().forEach((row) => {
        settingspage.typeTitle(row.title)
      });
  });

  When("the user save the title", () => {
    settingspage.clickSaveTittle();
  });

  Then("the user returns to the Dashboard", () => {
    settingspage.clickDone();
  });

  When("the user should see the updated Title on the Dashboard", (table) => {
    table.hashes().forEach((row) => {
    settingspage.doesTitleChange(row.title);
    });
  });

  When("the user selects edite private", () => {
    settingspage.clickPrivateEdit();
  });

  When("the user selects the option to make the site private", () => {
    settingspage.clickPriveteSlide();
  });

  When("the user enters a password", (table) => {
    table.hashes().forEach((row) => {
    settingspage.typePassword(row.password);
    });
  });

  When("the user clicks on the Save button", () => {
    settingspage.clickPrivateSave();
  });

  Then("the user should see a label indicating that the site is now secure", () => {
    settingspage.doesPrivateMessageEnable();
  });

  When("the user clicks on the Invite People button", () => {
    settingspage.clickInivitePeople();
  });

  When("the user enters the email", (table) => {
    table.hashes().forEach((row) => {
    settingspage.typeInivitePeopleEmail(row.email);
    });
  });

  When("submits the invite form", () => {
    settingspage.clickSendInvitationNowBtn();
  });

  Then("the user should see a confirmation message", () => {
    settingspage.doesinivitePeoplMessageEnable();
  });









 
  



