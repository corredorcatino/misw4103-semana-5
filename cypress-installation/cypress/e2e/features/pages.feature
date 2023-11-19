Feature: Page

  Background:
    Given A web browser is at the login page

  Scenario: user navigates to "pages" page
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


  Scenario: user edits a new page's content
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
    # as some pages are created with faker data, we cannot check their names
    # by feeding them into this data table... hence the difference in no#
    # pages and checked pages. Also, the about page will be there since it's
    # created by default when installing ghost.
    Then these pages must not exist
      | page-title       |
      | Test page 01     |
      | Test page 02     |
      | TPT-Test page 01 |
      | TPT-Test page 02 |
      | TPT-Test page 03 |
