Feature: Page

  Background: 
    Given A web browser is at the login page

  Scenario: List Pages
    When the user enters a valid credentials
      | email                            | password       |
      | e2e@thesoftwaredesigncompany.com | Contraseña123# |
    And the user clicks the login button
    And the user is redirected to the dashboard
    And the user clicks on the Pages navigation
    Then the pages list is loaded

  Scenario: Create Page
    When the user enters a valid credentials
      | email                            | password       |
      | e2e@thesoftwaredesigncompany.com | Contraseña123# |
    And the user clicks the login button
    And the user is redirected to the dashboard
    And the user clicks on the Pages navigation
    And the pages list is loaded
    And the user clicks on the New Page button
    And the user types the new page title
    And the user types the new page content
    And the user clicks on the publish button
    And the user clicks on the continue button
    And the user clicks on the confirm publish button
    And the user waits for 2 seconds
    Then the user navigates to the pages list
    And the new page is published

  Scenario: Edit Page Content
    When the user enters a valid credentials
      | email                            | password       |
      | e2e@thesoftwaredesigncompany.com | Contraseña123# |
    And the user clicks the login button
    And the user is redirected to the dashboard
    And the user clicks on the Pages navigation
    And the pages list is loaded
    And the user clicks on the New Page button
    And the user types the new page title
    And the user types the new page content
    And the user clicks on the publish button
    And the user clicks on the continue button
    And the user clicks on the confirm publish button
    And the user waits for 2 seconds
    And the user navigates to the pages list
    And the user clicks on a page to edit
    And the user types the new page content
    And the user waits for 2 seconds
    Then the user navigates to the pages list

  Scenario: Delete Page
    When the user enters a valid credentials
      | email                            | password       |
      | e2e@thesoftwaredesigncompany.com | Contraseña123# |
    And the user clicks the login button
    And the user is redirected to the dashboard
    And the user clicks on the Pages navigation
    And the user navigates to the pages list
    And the user right clicks on page
    And the user clicks on delete
    And the user confirms the deletion
    Then the user navigates to the pages list
