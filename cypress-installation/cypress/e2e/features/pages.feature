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


  Scenario: user creates a new page
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


  Scenario: user edits one page's content
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
    And the user clicks on update page button
    And the user waits for 2 seconds
    Then the user navigates to the pages list


  Scenario: user deletes one page
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


  Scenario: user creates two pages one after another
    When the user enters a valid credentials
      | email                            | password       |
      | e2e@thesoftwaredesigncompany.com | Contraseña123# |
    And the user clicks the login button
    And the user is redirected to the dashboard
    And the user clicks on the Pages navigation
    And the pages list is loaded

    And the user clicks on the New Page button
    And the user types the new page title
      | page-title   |
      | Test page 01 |
    And the user types the new page content
    And the user clicks on the publish button
    And the user clicks on the continue button
    And the user clicks on the confirm publish button
    And the user waits for 2 seconds
    And the user navigates to the pages list

    And the user clicks on the New Page button
    And the user types the new page title
      | page-title   |
      | Test page 02 |
    And the user types the new page content
    And the user clicks on the publish button
    And the user clicks on the continue button
    And the user clicks on the confirm publish button
    And the user waits for 2 seconds

    Then the user navigates to the pages list
    And the new pages are published
      | page-title   |
      | Test page 01 |
      | Test page 02 |

  Scenario: user creates three pages one after another, edits the third
    When the user enters a valid credentials
      | email                            | password       |
      | e2e@thesoftwaredesigncompany.com | Contraseña123# |
    And the user clicks the login button
    And the user is redirected to the dashboard
    And the user clicks on the Pages navigation
    And the pages list is loaded

    And the user clicks on the New Page button
    And the user types the new page title
      | page-title       |
      | TPT-Test page 01 |
    And the user types the new page content
    And the user clicks on the publish button
    And the user clicks on the continue button
    And the user clicks on the confirm publish button
    And the user waits for 2 seconds
    And the user navigates to the pages list

    And the user clicks on the New Page button
    And the user types the new page title
      | page-title       |
      | TPT-Test page 02 |
    And the user types the new page content
    And the user clicks on the publish button
    And the user clicks on the continue button
    And the user clicks on the confirm publish button
    And the user waits for 2 seconds

    And the user navigates to the pages list
    And the user clicks on the New Page button
    And the user types the new page title
      | page-title       |
      | TPT-Test page 03 |
    And the user types the new page content
    And the user clicks on the publish button
    And the user clicks on the continue button
    And the user clicks on the confirm publish button
    And the user waits for 2 seconds

    And the user navigates to the pages list
    And the user clicks on a page to edit
    And the user types the new page content
    And the user clicks on update page button
    And the user waits for 2 seconds
    Then the user navigates to the pages list

    And the new pages are published
      | page-title       |
      | TPT-Test page 01 |
      | TPT-Test page 02 |
      | TPT-Test page 03 |

  Scenario: user deletes pages across three different scenarios
    When the user enters a valid credentials
      | email                            | password       |
      | e2e@thesoftwaredesigncompany.com | Contraseña123# |
    And the user clicks the login button
    And the user is redirected to the dashboard
    And the user clicks on the Pages navigation
    And the user navigates to the pages list

    And user deletes all the following amount of pages
      | no-of-pages |
      | 6           |
    Then these pages must not exist
      | page-title       |
      | Test page 01     |
      | Test page 02     |
      | TPT-Test page 01 |
      | TPT-Test page 02 |
      | TPT-Test page 03 |
