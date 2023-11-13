Feature: Page

  Background: 
    Given A web browser is at the login page

  Scenario: List Pages
    When the user enters a valid credentials
      | email                     | password   |
      | e2e@thesoftwaredesigncompany.com | Contraseña123# |
    And the user clicks the login button
    And the user is redirected to the dashboard
    And the user clicks on the Pages navigation
    Then the pages list is loaded

  Scenario: Create Page
    When the user enters a valid credentials
      | email                     | password   |
      | e2e@thesoftwaredesigncompany.com | Contraseña123# |
    And the user clicks the login button
    And the user is redirected to the dashboard
    And the user clicks on the Pages navigation
    And the pages list is loaded
    And the user clicks on the New Page button
    And the user types the new page title
    # And the user types the new page content
